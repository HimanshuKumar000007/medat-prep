import { RAW_GENERALPROBE_1_GM_CARDS } from "../src/data/generalprobe/generalprobe1GmQuestions";
import { RAW_GENERALPROBE_2_GM_CARDS } from "../src/data/generalprobe/generalprobe2GmQuestions";
import { RAW_GENERALPROBE_3_GM_CARDS } from "../src/data/generalprobe/generalprobe3GmQuestions";

console.log("=== GP1 CARDS ===");
RAW_GENERALPROBE_1_GM_CARDS.forEach(c =>
  console.log(`${c.cardNumber} | ${c.id} | ${c.name} | ${c.birthDate} | Med: ${c.medication ? "Ja" : "Nein"} | BG: ${c.bloodGroup} | ID: ${c.idNumber} | Land: ${c.country} | Photo: ${c.photo} | Allergies: ${c.allergies.join(", ")}`)
);

console.log("\n=== GP2 CARDS ===");
RAW_GENERALPROBE_2_GM_CARDS.forEach(c =>
  console.log(`${c.cardNumber} | ${c.id} | ${c.name} | ${c.birthDate} | Med: ${c.medication ? "Ja" : "Nein"} | BG: ${c.bloodGroup} | ID: ${c.idNumber} | Land: ${c.country} | Photo: ${c.photo} | Allergies: ${c.allergies.join(", ")}`)
);

console.log("\n=== GP3 CARDS ===");
RAW_GENERALPROBE_3_GM_CARDS.forEach(c =>
  console.log(`${c.cardNumber} | ${c.id} | ${c.name} | ${c.birthDate} | Med: ${c.medication ? "Ja" : "Nein"} | BG: ${c.bloodGroup} | ID: ${c.idNumber} | Land: ${c.country} | Photo: ${c.photo} | Allergies: ${c.allergies.join(", ")}`)
);
