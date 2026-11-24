/**
 * scripts/generate-route-html.cjs
 *
 * Post-build static route HTML generator for MedAT Prep.
 * Solves Google Search Console "Alternate page with proper canonical tag" indexing error.
 *
 * For every public route, generates dist/<route>/index.html with:
 * - Matching self-referencing <link rel="canonical" href="..." />
 * - Route-specific <title>
 * - Route-specific <meta name="description" content="..." />
 * - Route-specific Open Graph and Twitter tags
 *
 * This ensures that when Googlebot or other crawlers request https://medatprep.at/<route>,
 * the server returns the EXACT canonical tag matching that specific URL in the initial HTTP response,
 * eliminating canonical conflicts with sitemap.xml.
 */

const fs = require("fs");
const path = require("path");

const DIST_DIR = path.join(__dirname, "../dist");
const BASE_INDEX_PATH = path.join(DIST_DIR, "index.html");

if (!fs.existsSync(BASE_INDEX_PATH)) {
  console.error("❌ Error: dist/index.html not found. Run 'vite build' first.");
  process.exit(1);
}

// Helper to escape HTML attributes
function escapeAttr(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Parse ROUTE_SEO_MAP directly from src/lib/seo.ts
const seoTsContent = fs.readFileSync(path.join(__dirname, "../src/lib/seo.ts"), "utf8");

// Extract route blocks using regex
const routeBlockRegex = /"(\/[a-z0-9\-_]*)":\s*\{([\s\S]*?)\},/g;
const routes = {};

let match;
while ((match = routeBlockRegex.exec(seoTsContent)) !== null) {
  const routeKey = match[1];
  const block = match[2];

  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const descMatch = block.match(/description:\s*"([^"]+)"/);
  const canMatch = block.match(/canonical:\s*"([^"]+)"/);
  const kwMatch = block.match(/keywords:\s*"([^"]+)"/);
  const ogMatch = block.match(/ogType:\s*"([^"]+)"/);

  if (titleMatch && descMatch && canMatch) {
    routes[routeKey] = {
      title: titleMatch[1],
      description: descMatch[1],
      canonical: canMatch[1],
      keywords: kwMatch ? kwMatch[1] : "",
      ogType: ogMatch ? ogMatch[1] : "website",
    };
  }
}

// Helper to generate route-specific Schema.org JSON-LD structured data
function getRouteStructuredData(route, meta) {
  const org = {
    "@type": "EducationalOrganization",
    "@id": "https://medatprep.at/#org",
    "name": "MedAT Prep",
    "url": "https://medatprep.at/",
    "logo": "https://medatprep.at/logo.png",
    "description": "Österreichs interaktive Vorbereitungsplattform für den MedAT 2027.",
    "sameAs": ["https://t.me/medat_prep"]
  };

  const breadcrumbs = {
    "@type": "BreadcrumbList",
    "@id": `${meta.canonical}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://medatprep.at/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": meta.title.split("—")[0].split(":")[0].trim(),
        "item": meta.canonical
      }
    ]
  };

  const graph = [org, breadcrumbs];

  if (route.includes("kurs-vergleich")) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${meta.canonical}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Lohnt sich ein 1.500 € MedAT Präsenzkurs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Über 70 % der erfolgreichen Erstsemestrigen an den Medizinischen Universitäten Wien, Graz, Innsbruck und Linz haben keinen kommerziellen 1.500 € Präsenzkurs besucht. Smarte Lernsoftware wie MedAT Prep deckt den gesamten VMC-Stichwortkatalog mit 5.000+ Fragen, KFF-Drilltools und Probetests zu einem Bruchteil der Kosten ab."
          }
        },
        {
          "@type": "Question",
          "name": "Wie bereite ich mich am besten auf den MedAT 2027 vor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die effektivste Vorbereitung kombiniert systematisches Lernen des offiziellen VMC-BMS-Katalogs mit täglichem KFF-Drill (Zahlenfolgen, Figuren, Gedächtnis) und 4 bis 5 realistischen Probetests unter Prüfungszeit."
          }
        },
        {
          "@type": "Question",
          "name": "Was unterscheidet MedAT Prep von Büchern?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MedAT Prep bietet unbegrenzte, neu generierte KFF-Aufgaben, automatische Stärken-Schwächen-Analysen, detaillierte Lösungswege und österreichweite Perzentil-Rankings — Fähigkeiten, die statische Bücher nicht bieten können."
          }
        }
      ]
    });
  } else if (route.includes("termine")) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${meta.canonical}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Wann ist die Anmeldung für den MedAT 2027?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die offizielle Internet-Anmeldung für den MedAT 2027 läuft voraussichtlich vom 1. bis 31. März 2027 auf medizinstudieren.at."
          }
        },
        {
          "@type": "Question",
          "name": "Wie hoch ist die MedAT-Kostenbeitragsgebühr?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Kostenbeitrag der Medizinischen Universitäten beträgt 110 Euro und muss fristgerecht im März eingezahlt werden."
          }
        },
        {
          "@type": "Question",
          "name": "Wann findet der MedAT 2027 Testtag statt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der MedAT 2027 Testtag findet voraussichtlich am ersten Freitag im Juli (9. Juli 2027) zeitgleich an der Messe Wien, Messe Graz, Messe Innsbruck und in Linz statt."
          }
        }
      ]
    });
  } else if (route.includes("quoten")) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${meta.canonical}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Wie ist die MedAT Quotenregelung aufgebaut?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "75 % der Humanmedizin-Studienplätze sind für Bewerber mit österreichischem Reifezeugnis reserviert (Österreich-Quote), 20 % für EU-Bürger (EU-Quote) und 5 % für Nicht-EU-Bürger."
          }
        },
        {
          "@type": "Question",
          "name": "Welcher Grenzrang ist nötig, um den MedAT zu bestehen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An der MedUni Wien reichte in den Vorjahren ca. Grenzrang 550–580 in der Österreich-Quote und ca. 130–140 in der EU-Quote. In Graz, Innsbruck und Linz liegen die Grenzwerte je nach Bewerberzahl in ähnlichen Bereichen."
          }
        }
      ]
    });
  } else if (route === "/einstufungstest") {
    graph.push({
      "@type": "Course",
      "@id": `${meta.canonical}#course`,
      "name": "Kostenloser MedAT Einstufungstest 2027",
      "description": "24 Orientierungsfragen zur Bestimmung des Ausgangsniveaus für BMS, KFF, Textverständnis und SEK.",
      "provider": { "@id": "https://medatprep.at/#org" },
      "isAccessibleForFree": true,
      "inLanguage": "de-AT"
    });
  } else if (route.includes("bms")) {
    graph.push({
      "@type": "Course",
      "@id": `${meta.canonical}#course`,
      "name": "BMS Masterplan Vorbereitung MedAT 2027",
      "description": "Lernplan und Fragensammlung für Biologie, Chemie, Physik und Mathematik nach dem offiziellen VMC-Stichwortkatalog.",
      "provider": { "@id": "https://medatprep.at/#org" },
      "isAccessibleForFree": true,
      "inLanguage": "de-AT"
    });
  } else {
    graph.push({
      "@type": "Article",
      "@id": `${meta.canonical}#article`,
      "headline": meta.title,
      "description": meta.description,
      "url": meta.canonical,
      "publisher": { "@id": "https://medatprep.at/#org" },
      "inLanguage": "de-AT"
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

const baseHtml = fs.readFileSync(BASE_INDEX_PATH, "utf8");
let generatedCount = 0;

for (const [route, meta] of Object.entries(routes)) {
  let customHtml = baseHtml;

  // Replace Title
  customHtml = customHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // Replace Description
  customHtml = customHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`
  );

  // Replace Keywords if present
  if (meta.keywords) {
    customHtml = customHtml.replace(
      /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
      `<meta name="keywords" content="${escapeAttr(meta.keywords)}" />`
    );
  }

  // Replace Canonical Link
  customHtml = customHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Replace Open Graph Title & Description
  customHtml = customHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
  );
  customHtml = customHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
  );

  // Replace or inject og:url
  if (customHtml.includes('property="og:url"')) {
    customHtml = customHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${meta.canonical}" />`
    );
  } else {
    customHtml = customHtml.replace(
      /(<meta\s+property="og:description"[^>]*>)/i,
      `$1\n    <meta property="og:url" content="${meta.canonical}" />`
    );
  }

  // Replace Twitter Title & Description
  customHtml = customHtml.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`
  );
  customHtml = customHtml.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`
  );

  // Inject or replace route-specific Schema.org JSON-LD Structured Data
  if (route !== "/") {
    const routeSchema = getRouteStructuredData(route, meta);
    const jsonLdTag = `<script type="application/ld+json">\n${JSON.stringify(routeSchema, null, 2)}\n    </script>`;
    if (/<script type="application\/ld\+json">[\s\S]*?<\/script>/i.test(customHtml)) {
      customHtml = customHtml.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
        jsonLdTag
      );
    } else {
      customHtml = customHtml.replace("</head>", `    ${jsonLdTag}\n  </head>`);
    }
  }

  if (route === "/") {
    // Write back to root index.html to ensure og:url is present
    fs.writeFileSync(BASE_INDEX_PATH, customHtml, "utf8");
    generatedCount++;
    console.log(`✓ [Root] / -> canonical: ${meta.canonical}`);
  } else {
    const routeFolder = path.join(DIST_DIR, route.replace(/^\//, ""));
    if (!fs.existsSync(routeFolder)) {
      fs.mkdirSync(routeFolder, { recursive: true });
    }
    const routeIndexPath = path.join(routeFolder, "index.html");
    fs.writeFileSync(routeIndexPath, customHtml, "utf8");
    generatedCount++;
    console.log(`✓ [Route] ${route} -> ${path.relative(DIST_DIR, routeIndexPath)} (canonical: ${meta.canonical})`);
  }
}

console.log(`\n🎉 Successfully generated ${generatedCount} static route HTML files in dist/!`);
