"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { useI18n } from "@/lib/i18n";

export default function DemoPage() {
  const { dict, locale } = useI18n();
  const [videoExpanded, setVideoExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white">
      {/* Header */}
      <div className={`relative z-50 transition-opacity duration-500 ${videoExpanded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Header />
      </div>

      <ScrollExpandMedia
        onExpandChange={setVideoExpanded}
        mediaType="video"
        mediaSrc={locale === "ar" ? "/demo-video-ar.mp4" : "/demo-video.mp4"}
        bgImageSrc="/beautiful-scenery-sand-dunes-desert-area-sunny-day.jpg"
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
