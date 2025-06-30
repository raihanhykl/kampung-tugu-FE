"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(3, { message: "Nama harus minimal 3 karakter" }),
  phone: z
    .string()
    .min(10, { message: "Nomor telepon harus minimal 10 digit" })
    .max(15, { message: "Nomor telepon maksimal 15 digit" })
    .regex(/^[0-9+]+$/, {
      message: "Nomor telepon hanya boleh berisi angka dan +",
    }),
  category: z.string({ required_error: "Silakan pilih kategori pengaduan" }),
  message: z
    .string()
    .min(10, { message: "Pesan pengaduan harus minimal 10 karakter" }),
});

type FormValues = z.infer<typeof formSchema>;

const complaintCategories = [
  "Infrastruktur dan Fasilitas",
  "Pelayanan Publik",
  "Keamanan dan Ketertiban",
  "Lingkungan dan Kebersihan",
  "Lainnya",
];

export default function ComplaintFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      category: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log the form data (in real app, this would be sent to an API)
      console.log("Form submitted:", data);

      // Show success message
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary-foreground/10 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Form Pengaduan
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Sampaikan pengaduan, kritik, atau saran Anda untuk membantu kami
              meningkatkan pelayanan dan fasilitas di Kampung Tugu.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-accent rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
            {/* Status Alerts */}
            {submitStatus === "success" && (
              <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Berhasil!</AlertTitle>
                <AlertDescription>
                  Pengaduan Anda telah berhasil dikirim. Kami akan segera
                  menindaklanjuti dan menghubungi Anda jika diperlukan.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Gagal!</AlertTitle>
                <AlertDescription>
                  Terjadi kesalahan saat mengirim pengaduan Anda. Silakan coba
                  lagi atau hubungi kami melalui WhatsApp.
                </AlertDescription>
              </Alert>
            )}

            {/* Complaint Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-accent-foreground">
                          Nama Lengkap
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Masukkan nama lengkap Anda"
                            {...field}
                            className="bg-accent-foreground border-accent-foreground/20 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-accent-foreground">
                          Nomor Telepon/WhatsApp
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Contoh: 08123456789"
                            {...field}
                            className="bg-accent-foreground border-accent-foreground/20 focus:border-primary"
                          />
                        </FormControl>
                        {/* <FormDescription className="text-accent-foreground/60 text-xs">
                          Nomor yang dapat dihubungi untuk tindak lanjut
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Category Field */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent-foreground">
                        Kategori Pengaduan
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-accent-foreground border-accent-foreground/20 focus:border-primary">
                            <SelectValue placeholder="Pilih kategori pengaduan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {complaintCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent-foreground">
                        Isi Pengaduan
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tuliskan pengaduan, kritik, atau saran Anda secara detail"
                          className="min-h-32 bg-accent-foreground border-accent-foreground/20 focus:border-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    "Kirim Pengaduan"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
