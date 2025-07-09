import { ContactFormData } from "@/lib/contact-schema";
import emailjs from "@emailjs/browser";

// Email service configuration
// const EMAIL_CONFIG = {
//   serviceId: "service_35o1hsl",
//   templateId: "template_1hpwz9j",
//   publicKey: "9jljMROO6YYwm1088",
// } as const;

export interface EmailServiceResult {
  success: boolean;
  message: string;
}

export class EmailService {
  private static prepareEmailData(
    formData: ContactFormData
  ): Record<string, string> {
    const emailData: Record<string, string> = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      category: formData.category,
    };

    return emailData;
  }

  static async sendContactEmail(
    formData: ContactFormData
  ): Promise<EmailServiceResult> {
    try {
      const emailData = this.prepareEmailData(formData);
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_CONFIG_SERVICEID || "",
        process.env.NEXT_PUBLIC_EMAIL_CONFIG_TEMPLATEID || "",
        emailData,
        process.env.NEXT_PUBLIC_EMAIL_CONFIG_PUBLICKEY || ""
      );

      console.log("Email sent successfully:", result.text);

      return {
        success: true,
        message: "Email sent successfully",
      };
    } catch (error) {
      console.error("Email service error:", error);

      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to send email",
      };
    }
  }
}
