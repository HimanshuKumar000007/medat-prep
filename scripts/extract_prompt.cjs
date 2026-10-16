const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("C:/Users/human/.gemini/antigravity/brain/f83817bd-f9e3-4489-a36e-37066d14349d/.system_generated/logs/transcript_full.jsonl"),
  crlfDelay: Infinity
});

let lastUserInput = "";
rl.on("line", (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.type === "USER_INPUT") {
      lastUserInput = obj.content;
    }
  } catch(e) {}
});

rl.on("close", () => {
  fs.writeFileSync("user_prompt.txt", lastUserInput, "utf8");
  console.log("Saved length:", lastUserInput.length);
});
