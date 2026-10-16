import * as fs from 'fs';
import * as readline from 'readline';

async function printPrompt() {
  const filePath = 'C:\\Users\\human\\.gemini\\antigravity\\brain\\f83817bd-f9e3-4489-a36e-37066d14349d\\.system_generated\\logs\\transcript.jsonl';
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  let lastUser = '';
  for await (const line of rl) {
    if (line.includes('"source":"USER_EXPLICIT"')) {
      lastUser = line;
    }
  }
  
  if (lastUser) {
    const parsed = JSON.parse(lastUser);
    fs.writeFileSync('scripts/last_prompt.md', parsed.content, 'utf-8');
    console.log("Wrote last prompt to scripts/last_prompt.md");
  }
}

printPrompt();
