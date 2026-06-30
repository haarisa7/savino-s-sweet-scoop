import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiry-schema-BmC8LSgX.js
var GUEST_LABELS = {
	"1-25": "1 – 25 guests",
	"26-50": "26 – 50 guests",
	"51-100": "51 – 100 guests",
	"100+": "100+ guests"
};
var enquirySchema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100),
	phone: stringType().trim().regex(/^[0-9+\-\s()]*$/, "Phone number can only contain digits").max(30).default(""),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	eventDate: stringType().trim().max(20).default(""),
	guests: stringType().trim().max(20).default(""),
	location: stringType().trim().max(200).default(""),
	message: stringType().trim().min(1, "Please enter a message").max(1e3)
});
//#endregion
export { enquirySchema as n, GUEST_LABELS as t };
