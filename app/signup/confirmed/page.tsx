import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Request Received | NAM Voice Intelligence",
};

export default function SignUpConfirmedPage() {
  return (
    <div className="relative min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,58,90,0.15)_0%,rgba(11,11,12,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,227,217,0.03)_0%,rgba(11,11,12,0)_50%)]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-40">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-24 w-full max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="opacity-0 animate-fade-up delay-200 mb-8 md:mb-10">
          <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-nam-sand/20 bg-nam-black/40 backdrop-blur-md shadow-[0_0_40px_rgba(232,227,217,0.05)]">
            <div className="absolute inset-0 rounded-full border border-nam-sand/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-nam-sand/5 scale-125" />
            <Check className="w-10 h-10 md:w-12 md:h-12 text-nam-sand drop-shadow-[0_0_10px_rgba(232,227,217,0.3)]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="opacity-0 animate-fade-up delay-300 font-serif text-4xl md:text-5xl font-normal text-nam-white mb-6 tracking-tight ink-diffusion">
          Request Acknowledged.
        </h1>

        {/* Subtext */}
        <p className="opacity-0 animate-fade-up delay-400 text-base md:text-lg text-nam-sand/80 font-light max-w-xl mx-auto mb-6 leading-relaxed">
          Thank you for your interest in NAM. We&apos;ve received your access
          request and our team will reach out within{" "}
          <span className="text-nam-white font-medium">48 hours</span> to begin
          the onboarding process.
        </p>

        <p className="opacity-0 animate-fade-up delay-500 text-sm text-nam-sand/50 font-light max-w-md mx-auto mb-12 leading-relaxed">
          We&apos;ll walk you through platform capabilities, discuss your
          specific requirements, and tailor a deployment plan for your
          organization.
        </p>

        {/* Actions */}
        <div className="opacity-0 animate-fade-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
          >
            Return to Home
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center bg-transparent text-nam-sand px-8 py-3.5 rounded-full text-sm font-medium border border-nam-sand/20 hover:border-nam-sand/50 hover:bg-nam-sand/5 transition-all duration-300"
          >
            Explore Features
          </Link>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-40 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
