"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function SignUpPage() {
  const router = useRouter();
  const { dict, locale } = useI18n();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/signup/confirmed");
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,58,90,0.2)_0%,rgba(11,11,12,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,227,217,0.04)_0%,rgba(11,11,12,0)_50%)]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center pt-32 pb-24">
        <div className="w-full max-w-xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-10 opacity-0 animate-fade-up delay-100">
            <span className={`font-serif text-3xl text-nam-white ink-diffusion ${locale === "ar" ? "tracking-normal" : "tracking-[0.25em] uppercase"}`}>
              {locale === "ar" ? "نَم" : "NAM"}
            </span>
          </div>

          {/* Form Card */}
          <div className="opacity-0 animate-fade-up delay-200 bg-[#111113]/80 backdrop-blur-xl border border-nam-sand/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-nam-indigo/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h1 className="font-serif text-2xl md:text-3xl text-nam-white mb-2 tracking-tight">
                {dict.signup.requestAccess}
              </h1>
              <p className="text-sm text-nam-sand/60 font-light mb-8">
                {dict.signup.desc}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label
                      htmlFor="firstName"
                      className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                    >
                      {dict.signup.firstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder={dict.signup.firstNamePlaceholder}
                      className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-base font-light rounded-none"
                    />
                  </div>
                  <div className="relative group">
                    <label
                      htmlFor="lastName"
                      className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                    >
                      {dict.signup.lastName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder={dict.signup.lastNamePlaceholder}
                      className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-base font-light rounded-none"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                  >
                    {dict.signup.workEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={dict.signup.workEmailPlaceholder}
                    className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-base font-light rounded-none"
                  />
                </div>

                <div className="relative group">
                  <label
                    htmlFor="company"
                    className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                  >
                    {dict.signup.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder={dict.signup.companyPlaceholder}
                    className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-base font-light rounded-none"
                  />
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  <button
                    type="submit"
                    className="group/btn w-full inline-flex items-center justify-center bg-nam-white text-nam-black px-6 py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
                  >
                    <span>{dict.signup.submitRequest}</span>
                    <ArrowRight className="ms-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-nam-sand/40">
                    {dict.signup.alreadyHaveAccess}{" "}
                    <Link
                      href="/signin"
                      className="text-nam-sand/70 hover:text-nam-white underline underline-offset-2 decoration-nam-sand/30 transition-colors"
                    >
                      {dict.signup.signIn}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-40 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
