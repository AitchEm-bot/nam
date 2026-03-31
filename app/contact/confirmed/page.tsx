import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Submission Confirmed | NAM Voice Intelligence",
};

const steps = [
  {
    number: "01",
    title: "Requirements Review",
    description:
      "Our technical team analyzes your specific use case and enterprise environment.",
  },
  {
    number: "02",
    title: "Expert Consultation",
    description:
      "A domain expert reaches out to discuss integration strategies and capabilities.",
  },
  {
    number: "03",
    title: "Custom Demo",
    description:
      "Experience a tailored demonstration using your industry's specific terminology.",
  },
];

export default function ConfirmedPage() {
  return (
    <div className="relative min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/vertical-shot-peaceful-desert-clear-blue-sky-captured-morocco.jpg"
          alt="Saudi Desert Dunes"
          className="w-full h-full object-cover object-center animate-slow-zoom origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,12,0.3)] to-[rgba(11,11,12,0.7)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,11,12,0.1)_0%,rgba(11,11,12,0.5)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-40">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-24 w-full max-w-3xl mx-auto text-center">
        {/* Success Icon */}
        <div className="opacity-0 animate-fade-up delay-200 mb-8 md:mb-10">
          <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-nam-sand/20 bg-nam-black/40 backdrop-blur-md shadow-[0_0_40px_rgba(232,227,217,0.05)]">
            <div className="absolute inset-0 rounded-full border border-nam-sand/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-nam-sand/5 scale-125" />
            <Check className="w-10 h-10 md:w-12 md:h-12 text-nam-sand drop-shadow-[0_0_10px_rgba(232,227,217,0.3)]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="opacity-0 animate-fade-up delay-300 font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-nam-white mb-6 tracking-tight">
          Inquiry Received.
        </h1>

        {/* Subtext */}
        <p className="opacity-0 animate-fade-up delay-400 text-base md:text-lg text-nam-sand/80 font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Thank you for your interest in NAM. Our specialists are reviewing your
          requirements and will contact you within{" "}
          <span className="text-nam-white font-medium">24-48 hours</span> to
          schedule a dedicated consultation.
        </p>

        {/* Next Steps Panel */}
        <div className="opacity-0 animate-fade-up delay-500 w-full p-6 md:p-8 rounded-2xl border border-nam-sand/10 bg-nam-black/40 backdrop-blur-sm mb-12">
          <h2 className="text-xs tracking-[0.15em] uppercase text-nam-sand/50 mb-6 font-medium">
            What happens next
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-between text-left">
            {steps.map((step, i) => (
              <div key={step.number} className="flex-1 flex gap-4">
                {i > 0 && (
                  <div className="hidden md:block w-px bg-nam-sand/10 -ml-2 mr-2" />
                )}
                <span className="font-serif text-nam-sand/40 text-xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-nam-white text-sm font-medium mb-1">
                    {step.title}
                  </h3>
                  <p className="text-nam-sand/60 text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="opacity-0 animate-fade-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
          >
            Return to Home
          </Link>
          <Link
            href="/use-cases"
            className="inline-flex items-center justify-center bg-transparent text-nam-sand px-8 py-3.5 rounded-full text-sm font-medium border border-nam-sand/20 hover:border-nam-sand/50 hover:bg-nam-sand/5 transition-all duration-300"
          >
            Explore Use Cases
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
