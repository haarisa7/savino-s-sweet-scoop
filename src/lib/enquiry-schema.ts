import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]*$/, "Phone number can only contain digits")
    .max(30)
    .default(""),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  eventDate: z.string().trim().max(20).default(""),
  guests: z.string().trim().max(20).default(""),
  location: z.string().trim().max(200).default(""),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

export type EnquiryFields = z.infer<typeof enquirySchema>;
