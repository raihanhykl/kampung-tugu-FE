import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .trim(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^08\d+$/, "Please enter a valid phone number (starts with '08')"),

  category: z.string().min(1, "Please select a topic"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// export const FORM_TOPICS = [
//   "productInfo",
//   "serviceMaintenance",
//   "testRide",
//   "paymentOptions",
//   "warrantyClaim",
//   "feedback",
//   "technicalIssue",
//   "partnership",
//   "other",
// ] as const;

// export type FormTopic = (typeof FORM_TOPICS)[number];
