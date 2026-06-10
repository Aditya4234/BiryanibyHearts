import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Biryani ByHearts.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-12">We&apos;d love to hear from you.</p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {[
            { icon: Mail, label: "Email", value: SITE_CONFIG.email },
            { icon: Phone, label: "Phone", value: SITE_CONFIG.phone },
            { icon: MapPin, label: "Address", value: SITE_CONFIG.address },
            { icon: Clock, label: "Hours", value: "11:00 AM - 11:00 PM" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-semibold text-slate-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </main>
    </>
  );
}
