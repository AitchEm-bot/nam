"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/contact/confirmed");
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,58,90,0.15)_0%,rgba(11,11,12,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(232,227,217,0.05)_0%,rgba(11,11,12,0)_50%)]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="col-span-1 lg:col-span-5 flex flex-col pt-8 lg:sticky lg:top-40">
            <div className="opacity-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nam-sand/15 bg-nam-sand/5 backdrop-blur-sm mb-6">
                <span className="block w-1.5 h-1.5 rounded-full bg-nam-sand" />
                <span className="text-xs text-nam-sand/90 tracking-widest uppercase font-medium">
                  Sales & Partnerships
                </span>
              </div>
            </div>

            <h1 className="opacity-0 animate-fade-up delay-100 font-serif text-4xl md:text-5xl lg:text-6xl text-nam-white leading-[1.1] mb-6">
              Let&apos;s build the <br className="hidden lg:block" />
              <span className="text-nam-sand">future of voice.</span>
            </h1>

            <p className="opacity-0 animate-fade-up delay-200 text-lg text-nam-sand/70 font-light leading-relaxed mb-8 max-w-md">
              Whether you&apos;re looking to deploy enterprise voice agents or
              explore strategic partnerships, our team is ready to assist.
            </p>

            <div className="opacity-0 animate-fade-up delay-300 mb-12">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm text-nam-sand/80 hover:text-nam-white transition-colors group"
              >
                View pricing plans
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="opacity-0 animate-fade-up delay-300 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm text-nam-sand/50 tracking-wider uppercase font-medium mb-3">
                  Riyadh HQ
                </h3>
                <p className="text-nam-white font-light text-base leading-relaxed">
                  KAFD, Tower 4
                  <br />
                  King Fahd Road
                  <br />
                  Riyadh, Saudi Arabia
                </p>
              </div>
              <div>
                <h3 className="text-sm text-nam-sand/50 tracking-wider uppercase font-medium mb-3">
                  Direct Inquiries
                </h3>
                <a
                  href="mailto:enterprise@nam.ai"
                  className="text-nam-white hover:text-nam-sand transition-colors font-light text-base block mb-2"
                >
                  enterprise@nam.ai
                </a>
                <a
                  href="tel:+966110000000"
                  className="text-nam-white hover:text-nam-sand transition-colors font-light text-base"
                >
                  +966 11 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-span-1 lg:col-span-7 opacity-0 animate-fade-up delay-200">
            <div className="bg-[#111113]/80 backdrop-blur-xl border border-nam-sand/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-nam-indigo/10 blur-[80px] rounded-full pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label
                      htmlFor="fullName"
                      className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Abdulrahman Al-Saud"
                      className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-lg font-light rounded-none"
                    />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-lg font-light rounded-none"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="inquiryType"
                    className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                  >
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      defaultValue=""
                      className="w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white appearance-none focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-lg font-light cursor-pointer rounded-none"
                    >
                      <option value="" disabled className="text-nam-sand/20">
                        Select an option...
                      </option>
                      <option value="enterprise">Enterprise Sales</option>
                      <option value="partnership">Strategic Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-nam-sand/50">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your use case or requirements..."
                    className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-lg font-light resize-none rounded-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between flex-wrap gap-6">
                  <p className="text-xs text-nam-sand/40 max-w-[280px] leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="/legal"
                      className="text-nam-sand/70 hover:text-nam-white underline decoration-nam-sand/30 underline-offset-2 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    className="group/btn inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="ml-2 w-4.5 h-4.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-40">
        <Footer />
      </div>
    </div>
  );
}
