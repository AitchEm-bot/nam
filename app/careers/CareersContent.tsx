"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function CareersContent() {
  const { dict } = useI18n();

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/vertical-shot-patterns-beautiful-sand-dunes-desert.jpg`}
          alt="Saudi Desert Dunes"
          className="w-full h-full object-cover object-center animate-slow-zoom origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,12,0.4)] to-[rgba(11,11,12,0.8)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,11,12,0.1)_0%,rgba(11,11,12,0.6)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-40">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[110vh] px-4 md:px-6 py-24 w-full max-w-3xl mx-auto text-center">
        {/* Label */}
        <div className="opacity-0 animate-fade-up delay-200 mb-8">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-nam-sand/15 bg-nam-black/30 backdrop-blur-[2px]">
            <span className="text-xs md:text-sm text-nam-sand/80 tracking-[0.1em] font-medium uppercase">
              {dict.careers.badge}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="opacity-0 animate-fade-up delay-300 font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-nam-white mb-6 tracking-tight ink-diffusion">
          {dict.careers.headline}
        </h1>

        {/* Subtext */}
        <p className="opacity-0 animate-fade-up delay-400 text-base md:text-lg text-nam-sand/80 font-light max-w-xl mx-auto mb-6 leading-relaxed">
          {dict.careers.desc1}
        </p>

        <p className="opacity-0 animate-fade-up delay-500 text-base md:text-lg text-nam-sand/60 font-light max-w-md mx-auto mb-12 leading-relaxed">
          {dict.careers.desc2}
        </p>

        {/* CTA */}
        <div className="opacity-0 animate-fade-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
          >
            {dict.careers.getInTouch}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-transparent text-nam-sand px-8 py-3.5 rounded-full text-sm font-medium border border-nam-sand/20 hover:border-nam-sand/50 hover:bg-nam-sand/5 transition-all duration-300"
          >
            {dict.careers.returnHome}
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
