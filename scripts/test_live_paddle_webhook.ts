import crypto from "crypto";

async function main() {
  const secret = process.env.PADDLE_WEBHOOK_SECRET || "pdl_ntfset_01m57gaksqn578c2a8010svsxk_/67r7Uwr8vNkLeTOYfVliPbXj+SGf1oB";
  const ts = Math.floor(Date.now() / 1000);
  const body = JSON.stringify({
    event_id: "evt_ping_test_" + Date.now(),
    event_type: "ping",
    data: { test: true },
  });

  const h1 = crypto.createHmac("sha256", secret).update(`${ts}:${body}`).digest("hex");
  const sig = `ts=${ts};h1=${h1}`;

  console.log("Sending HMAC-signed request to https://medatprep.at/api/paddle-webhook ...");
  const response = await fetch("https://medatprep.at/api/paddle-webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Paddle-Signature": sig,
    },
    body,
  });

  console.log("HTTP Status:", response.status);
  const text = await response.text();
  console.log("Response Body:", text);
}

main().catch(console.error);
