import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as enquirySchema, t as GUEST_LABELS } from "./enquiry-schema-BmC8LSgX.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/send-enquiry-DWGUclpT.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function escapeHtml(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function renderEmailHtml(data) {
	return `
  <div style="background:#f4ede1;padding:32px 16px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e7ddc9;">
      <div style="background:#005BB5;padding:28px 32px;">
        <p style="margin:0;font-family:monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#FFD23F;">Savino&rsquo;s Soft Ice Cream</p>
        <h1 style="margin:6px 0 0;font-size:24px;color:#ffffff;">New Booking Enquiry</h1>
      </div>
      <div style="padding:28px 32px;">
        <table style="width:100%;border-collapse:collapse;">${[
		["Name", data.name],
		["Phone", data.phone || "—"],
		["Email", data.email],
		["Event Date", data.eventDate || "Not specified"],
		["Number of Guests", data.guests && GUEST_LABELS[data.guests] || "Not specified"],
		["Location", data.location || "Not specified"]
	].map(([label, value]) => `
        <tr>
          <td style="padding:10px 0;font-family:monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#6b6f76;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 0;font-size:15px;color:#1a2433;font-weight:600;">${escapeHtml(value)}</td>
        </tr>`).join("")}</table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #eee2cf;">
          <p style="margin:0 0 8px;font-family:monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#6b6f76;">Message</p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#1a2433;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
        </div>
      </div>
      <div style="padding:16px 32px;background:#faf6ec;">
        <p style="margin:0;font-size:12px;color:#9a9488;">Sent from the booking form on savinosicecream.co.uk</p>
      </div>
    </div>
  </div>`;
}
var sendEnquiry_createServerFn_handler = createServerRpc({
	id: "d7c58d83ea5d9fb6ea14bbee48208b480c0f3465375db0b0b9290487c4b7f00a",
	name: "sendEnquiry",
	filename: "src/lib/send-enquiry.ts"
}, (opts) => sendEnquiry.__executeServer(opts));
var sendEnquiry = createServerFn({ method: "POST" }).validator((data) => enquirySchema.parse(data)).handler(sendEnquiry_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) throw new Error("Email service is not configured (missing RESEND_API_KEY).");
	const { error } = await new Resend(apiKey).emails.send({
		from: process.env.RESEND_FROM_EMAIL || "Savino's Website <onboarding@resend.dev>",
		to: [process.env.CONTACT_TO_EMAIL || "savinosofticecream@gmail.com"],
		replyTo: data.email,
		subject: `New booking enquiry from ${data.name}`,
		html: renderEmailHtml(data)
	});
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { sendEnquiry_createServerFn_handler };
