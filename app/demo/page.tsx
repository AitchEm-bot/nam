"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { useI18n } from "@/lib/i18n";

// ============================================================
// Flip this to `true` when demo page is ready to display.
// ============================================================
const DEMO_LIVE = false;

export default function DemoPage() {
  const { dict, locale } = useI18n();
  const [videoExpanded, setVideoExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!DEMO_LIVE) {
    return (
      <div className="relative min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white flex flex-col">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(28,34,48,0.25)_0%,rgba(11,11,12,0)_60%)] pointer-events-none" />
        <div className="fixed inset-0 z-0 noise-overlay" />
        <div className="relative z-50"><Header /></div>
        <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-6 max-w-xl mx-auto flex flex-col items-center text-center flex-1">
          <div className="opacity-0 animate-fade-up w-full bg-[#111113]/80 backdrop-blur-xl border border-nam-sand/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-nam-indigo/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nam-sand/15 bg-nam-sand/5 mb-8">
                <span className="block w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-xs text-nam-sand/90 tracking-widest uppercase font-medium">{dict.demo.comingSoonBadge}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-nam-white mb-4 tracking-tight">{dict.demo.comingSoonHeading}</h1>
              <p className="text-base text-nam-sand/70 font-light leading-relaxed mb-8">{dict.demo.comingSoonDesc}</p>
              <div className="h-px w-full bg-nam-sand/10 mb-8" />
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="w-full flex items-center justify-center bg-nam-white text-nam-black px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]">{dict.demo.comingSoonCta}</Link>
                <Link href="/" className="w-full flex items-center justify-center border border-nam-sand/20 text-nam-sand px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-white/5 hover:border-nam-sand/40 transition-all duration-300">{dict.demo.returnHome}</Link>
              </div>
            </div>
          </div>
        </main>
        <div className="relative z-40 mt-auto"><Footer /></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white">
      {/* Header */}
      <div className={`relative z-50 transition-opacity duration-500 ${videoExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Header />
      </div>

      <ScrollExpandMedia
        onExpandChange={setVideoExpanded}
        mediaType="video"
        mediaSrc={locale === "ar" ? `${process.env.NEXT_PUBLIC_BASE_PATH}/demo-video-ar.mp4` : `${process.env.NEXT_PUBLIC_BASE_PATH}/demo-video.mp4`}
        bgImageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH}/beautiful-scenery-sand-dunes-desert-area-sunny-day.jpg`}
        title={dict.demo.title}
        scrollToExpand={dict.demo.scrollToExpand}
        textBlend
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-nam-sand/30 text-nam-white px-8 py-4 rounded-full text-base font-medium hover:bg-nam-white/5 transition-all duration-300 group"
            >
              {dict.demo.viewPricing}
              <ArrowRight className="ms-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
            >
              {dict.demo.talkToUs}
            </Link>
          </div>

          <a
            href={dict.demo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-nam-sand/70 hover:text-nam-white transition-colors group"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {dict.demo.watchOnYouTube}
          </a>
        </div>
      </ScrollExpandMedia>

      {/* Footer */}
      <div className="relative z-40">
        <Footer />
      </div>
    </div>
  );
}
