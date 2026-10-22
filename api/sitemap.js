/**
 * api/sitemap.js
 *
 * Dedicated serverless fallback for /sitemap.xml ensuring valid XML Content-Type
 * and fast response for Google Search Console and web crawlers.
 */

import fs from "fs";
import path from "path";

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Core Landing & Educational Platform -->
  <url>
    <loc>https://medatprep.at/</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Community & Telegram Hub -->
  <url>
    <loc>https://medatprep.at/medat-telegram-gruppe</loc>
    <lastmod>2026-10-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- Knowledge Hub & Strategy Blog -->
  <url>
    <loc>https://medatprep.at/blog</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- High-Intent SEO Articles (MedAT 2027) -->
  <url>
    <loc>https://medatprep.at/medat-2027-termine-fristen</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://medatprep.at/kff-strategie-schnellste-punkte</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://medatprep.at/quoten-bewerberzahlen-analyse</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://medatprep.at/bms-masterplan-vorbereitung</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://medatprep.at/tv-sek-emotionen-textverstaendnis</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://medatprep.at/testtag-protokoll-mentale-staerke</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Trust, Compliance & Legal Pages (§ 5 ECG, DSGVO) -->
  <url>
    <loc>https://medatprep.at/ueber-uns</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://medatprep.at/kontakt</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://medatprep.at/datenschutz</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>https://medatprep.at/agb</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>https://medatprep.at/impressum</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>https://medatprep.at/haftungsausschluss</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>

</urlset>
`;

export default function handler(req, res) {
  if (res && res.setHeader) {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.statusCode = 200;
    res.end(SITEMAP_XML);
    return;
  }

  return new Response(SITEMAP_XML, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
