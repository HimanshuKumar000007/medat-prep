/**
 * api/robots.js
 *
 * Dedicated serverless fallback for /robots.txt
 */

const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /app
Disallow: /reset-password

# Sitemaps
Sitemap: https://medatprep.at/sitemap.xml
`;

export default function handler(req, res) {
  if (res && res.setHeader) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.statusCode = 200;
    res.end(ROBOTS_TXT);
    return;
  }

  return new Response(ROBOTS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
