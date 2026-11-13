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
