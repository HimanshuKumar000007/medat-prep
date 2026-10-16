const fs = require("fs");
const path = require("path");

const files = [
  "src/data/questions/biology.ts",
  "src/data/questions/chemistry.ts",
  "src/data/questions/physics.ts",
  "src/data/questions/mathematics.ts",
  "src/data/questions/text_comprehension.ts",
  "src/data/questions/kff.ts",
  "src/data/questions/manual_skills.ts"
];

files.forEach(f => {
  const p = path.resolve(f);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, "utf8");
    const chs = new Set();
    const sec = new Set();
    const sub = new Set();
    for (const m of content.matchAll(/chapterId:\s*["']([^"']+)["']/g)) chs.add(m[1]);
    for (const m of content.matchAll(/section:\s*["']([^"']+)["']/g)) sec.add(m[1]);
    for (const m of content.matchAll(/subjectId:\s*["']([^"']+)["']/g)) sub.add(m[1]);
    console.log(f);
    console.log("  sections:", Array.from(sec));
    console.log("  subjects:", Array.from(sub));
    console.log("  chapterIds:", Array.from(chs).slice(0, 8));
  }
});

['ee', 'er', 'se', 'fz', 'zf', 'wf', 'gm', 'ie'].forEach(dir => {
  const p = path.resolve('src/data/questions', dir);
  if (fs.existsSync(p)) {
    const subfiles = fs.readdirSync(p).filter(x => x.endsWith('.ts') || x.endsWith('.json'));
    if (subfiles.length > 0) {
      const first = fs.readFileSync(path.join(p, subfiles[0]), 'utf8');
      const secMatch = first.match(/section["']?\s*:\s*["']([^"']+)["']/);
      const chMatch = first.match(/chapterId["']?\s*:\s*["']([^"']+)["']/);
      console.log('Dir:', dir, 'count:', subfiles.length, 'section:', secMatch ? secMatch[1] : null, 'chapterId:', chMatch ? chMatch[1] : null);
    }
  }
});
