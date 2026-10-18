// api/contact.js - Serverless function to handle contact & support form submissions via Resend
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, category, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const apiKey = process.env.RESEND_API_KEY;

    // 1. Send notification email to MedAT Prep support team (medatprep@gmail.com)
    const categoryLabels = {
      didaktik: "Didaktik & Medizinische Fachfragen",
      lernplan: "Lernplan & Vorbereitungsstrategie",
      technik: "Technischer Support & Benutzerkonto",
      tarife: "Abo, Rechnungen & Widerruf",
      feedback: "Feedback & Fragenvorschlag",
    };

    const catLabel = categoryLabels[category] || category || "Allgemeine Anfrage";
    const emailSubject = `[MedAT Prep Support] ${subject ? subject : catLabel} (${name})`;

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #dc2626; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 20px;">Neue Support-Anfrage über medatprep.at</h2>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: bold;">Absender:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">E-Mail:</td>
            <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Kategorie:</td>
            <td style="padding: 8px 0; color: #0f172a;">${catLabel}</td>
          </tr>
          ${subject ? `<tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Betreff:</td><td style="padding: 8px 0; color: #0f172a;">${subject}</td></tr>` : ""}
        </table>

        <div style="background-color: #f8fafc; border-left: 4px solid #dc2626; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="font-size: 12px; color: #94a3b8; margin: 0;">
          💡 <em>Hinweis: Wenn du auf diese E-Mail antwortest, geht die Antwort direkt an <strong>${email}</strong>.</em>
        </p>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MedAT Prep Support <noreply@medatprep.at>",
        to: ["medatprep@gmail.com"],
        reply_to: email,
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API error:", resendData);
      return res.status(500).json({ error: "Failed to dispatch email", details: resendData });
    }

    // 2. Also send an automated confirmation to the student
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "MedAT Prep Team <noreply@medatprep.at>",
          to: [email],
          reply_to: "medatprep@gmail.com",
          subject: "Wir haben deine Anfrage erhalten — MedAT Prep Support",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
              <h2 style="color: #0f172a; margin-top: 0;">Hallo ${name},</h2>
              <p style="font-size: 15px; color: #334155; line-height: 1.6;">
                Vielen Dank für deine Nachricht an MedAT Prep. Wir haben dein Anliegen zum Thema <strong>${catLabel}</strong> erfolgreich erhalten.
              </p>
              <p style="font-size: 15px; color: #334155; line-height: 1.6;">
                Unser Team in Wien meldet sich in der Regel innerhalb weniger Stunden bei dir.
              </p>
              <div style="background-color: #f1f5f9; padding: 12px 16px; border-radius: 8px; margin: 20px 0; font-size: 14px; color: #475569;">
                <strong>Deine Nachricht:</strong><br />
                <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="font-size: 14px; color: #64748b; margin-bottom: 0;">
                Beste Grüße aus Wien,<br />
                <strong>Dein MedAT Prep Team</strong><br />
                <a href="https://medatprep.at" style="color: #dc2626;">medatprep.at</a>
              </p>
            </div>
          `,
        }),
      });
    } catch (confErr) {
      console.warn("Confirmation receipt skipped:", confErr);
    }

    return res.status(200).json({ success: true, id: resendData.id });
  } catch (err) {
    console.error("Support API exception:", err);
    return res.status(500).json({ error: err.message });
  }
}
