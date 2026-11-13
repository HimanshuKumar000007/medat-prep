const fs = require("fs");
const path = require("path");

const seoContent = fs.readFileSync(path.join(__dirname, "../src/lib/seo.ts"), "utf8");
const sitemapContent = fs.readFileSync(path.join(__dirname, "../public/sitemap.xml"), "utf8");

const sitemapLocs = [...sitemapContent.matchAll(/<loc>https:\/\/medatprep\.at(.*?)<\/loc>/g)].map(m => m[1] || "/");
const routeKeys = [...seoContent.matchAll(/"(\/[a-z0-9\-_]*)":\s*\{/g)].map(m => m[1]);

console.log("Sitemap locations count:", sitemapLocs.length);
console.log("SEO route keys count:", routeKeys.length);

const missingInSeo = sitemapLocs.filter(loc => !routeKeys.includes(loc));
console.log("In sitemap but missing in ROUTE_SEO_MAP:", missingInSeo);

const inSeoNotSitemap = routeKeys.filter(r => !sitemapLocs.includes(r));
console.log("In ROUTE_SEO_MAP but not in sitemap:", inSeoNotSitemap);
