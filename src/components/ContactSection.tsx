import React from "react";
import { Send, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "../lib/supabase";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  id?: string;
  className?: string;
}

const ContactSection = ({
  id = "contact",
  className = "",
}: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // Split the name into first and last name
      const nameParts = data.name.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Insert the lead into Supabase
      const { data: insertData, error } = await supabase.from("leads").insert({
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        company: "Website Lead", // Default value
        status: "New", // Default status
      });

      if (error) {
        throw error;
      }

      setSubmitSuccess(true);
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error.message || "Failed to submit form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className={`py-16 bg-slate-900 text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white border-b-2 border-green-500 pb-1">
              Let's Fix Your Ops Chaos Today!
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Ready to transform your sales operations? Let's talk.
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="https://calendly.com/morgan-t12/salesopssurgeintro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-md group transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
            >
              Book a 15 Min Intro Call
              <Calendar className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Or, Send Me a Message</h3>

            {submitSuccess && (
              <div className="bg-green-500/20 border border-green-500 text-white p-4 rounded-md mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-md mb-6">
                {submitError}
              </div>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(123) 456-7890"
                          type="tel"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Tell me about your Ops Challenges!
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What's your ops nightmare?"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-slate-400">morgan.t12@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-slate-400">(707) 357-4541</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-slate-400">Irvine, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
