import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMagicLink(to: string, planUrl: string): Promise<void> {
  await resend.emails.send({
    from: "Financios <noreply@financios.nl>",
    to,
    subject: "Jouw persoonlijk spaarplan staat klaar",
    html: `
<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0B0F14;font-family:Inter,system-ui,sans-serif;color:#F9FAFB;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0B0F14;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:480px;background:#111827;border-radius:16px;border:1px solid #1F2937;overflow:hidden;">
        <!-- Header -->
        <tr><td style="background:#6366F1;padding:24px 32px;">
          <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#E0E7FF;">Financios</p>
          <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#fff;line-height:1.3;">Jouw spaarplan staat klaar</h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;font-size:15px;color:#D1D5DB;line-height:1.6;">
            Bedankt voor je aankoop! Je persoonlijk spaarfix plan is aangemaakt op basis van jouw ingevoerde gegevens.
          </p>
          <p style="margin:0 0 28px;font-size:15px;color:#D1D5DB;line-height:1.6;">
            Klik op de knop hieronder om je plan te openen. Deze link werkt altijd — sla hem op in je bookmarks.
          </p>
          <!-- CTA -->
          <table cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
            <tr><td style="background:#6366F1;border-radius:12px;">
              <a href="${planUrl}" style="display:block;padding:14px 32px;font-size:15px;font-weight:700;color:#fff;text-decoration:none;letter-spacing:0.02em;">
                Bekijk mijn spaarplan →
              </a>
            </td></tr>
          </table>
          <!-- Fallback URL -->
          <p style="margin:0 0 8px;font-size:12px;color:#6B7280;">Of kopieer deze link in je browser:</p>
          <p style="margin:0;font-size:11px;color:#4B5563;word-break:break-all;">${planUrl}</p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 32px;border-top:1px solid #1F2937;">
          <p style="margin:0;font-size:12px;color:#4B5563;line-height:1.5;">
            Eenmalige aankoop · Geen abonnement · <a href="https://financios.nl/disclaimer" style="color:#6B7280;">Disclaimer</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
    `.trim(),
  });
}
