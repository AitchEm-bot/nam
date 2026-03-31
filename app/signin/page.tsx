"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

// ============================================================
// Flip this to `true` when the platform is ready for sign-in.
// ============================================================
const SERVICE_LIVE = false;

export default function SignInPage() {
  const { dict, locale } = useI18n();

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,58,90,0.2)_0%,rgba(11,11,12,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(232,227,217,0.04)_0%,rgba(11,11,12,0)_50%)]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-40">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-24 w-full max-w-lg mx-auto text-center">
        {/* Logo */}
        <div className="opacity-0 animate-fade-up delay-100 mb-12">
          <span className={`font-serif text-4xl text-nam-white ink-diffusion ${locale === "ar" ? "tracking-normal" : "tracking-[0.25em] uppercase"}`}>
            {locale === "ar" ? "نَم" : "NAM"}
          </span>
        </div>

        {/* Card */}
        <div className="opacity-0 animate-fade-up delay-200 w-full bg-[#111113]/80 backdrop-blur-xl border border-nam-sand/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-nam-indigo/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {SERVICE_LIVE ? (
              /* ===== LIVE SIGN-IN FORM ===== */
              <>
                <h1 className="font-serif text-3xl md:text-4xl text-nam-white mb-2 tracking-tight">
                  {dict.signin.welcomeBack}
                </h1>
                <p className="text-sm text-nam-sand/60 font-light mb-8">
                  {dict.signin.signInDashboard}
                </p>

                <form className="space-y-6 text-left">
                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                    >
                      {dict.signin.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={dict.signin.emailPlaceholder}
                      className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-base font-light rounded-none"
                    />
                  </div>

                  <div className="relative group">
                    <label
                      htmlFor="password"
                      className="block text-xs text-nam-sand/50 uppercase tracking-widest mb-2 font-medium transition-colors group-focus-within:text-nam-sand"
                    >
                      {dict.signin.password}
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder={dict.signin.passwordPlaceholder}
                      className="form-input w-full bg-transparent border-b border-nam-sand/20 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand focus:ring-0 transition-colors text-base font-light rounded-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group/btn w-full inline-flex items-center justify-center bg-nam-white text-nam-black px-6 py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
                    >
                      <span>{dict.signin.signInButton}</span>
                      <ArrowRight className="ms-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>

                <p className="text-center text-xs text-nam-sand/40 mt-6">
                  {dict.signin.noAccount}{" "}
                  <Link
                    href="/signup"
                    className="text-nam-sand/70 hover:text-nam-white underline underline-offset-2 decoration-nam-sand/30 transition-colors"
                  >
                    {dict.signin.requestAccess}
                  </Link>
                </p>
              </>
            ) : (
              /* ===== COMING SOON (pre-launch) ===== */
              <>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nam-sand/15 bg-nam-sand/5 mb-8">
                  <span className="block w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-xs text-nam-sand/90 tracking-widest uppercase font-medium">
                    {dict.signin.comingSoonBadge}
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl text-nam-white mb-4 tracking-tight">
                  {dict.signin.comingSoonHeading}
                </h1>

                <p className="text-base text-nam-sand/70 font-light leading-relaxed mb-8">
                  {dict.signin.comingSoonDesc}
                </p>

                <div className="h-px w-full bg-nam-sand/10 mb-8" />

                <p className="text-sm text-nam-sand/50 font-light mb-8">
                  {dict.signin.earlyAccess}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/signup"
                    className="w-full flex items-center justify-center bg-nam-white text-nam-black px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
                  >
                    {dict.signin.requestAccessCta}
                  </Link>
                  <Link
                    href="/"
                    className="w-full flex items-center justify-center border border-nam-sand/20 text-nam-sand px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-white/5 hover:border-nam-sand/40 transition-all duration-300"
                  >
                    {dict.signin.returnHome}
                  </Link>
                </div>
              </>
            )}
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
