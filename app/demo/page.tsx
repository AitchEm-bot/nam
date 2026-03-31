"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default function DemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white">
      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/demo-video.mp4"
        bgImageSrc="/beautiful-scenery-sand-dunes-desert-area-sunny-day.jpg"
        title="Experience Voice Intelligence"
        scrollToExpand="Scroll to expand"
        textBlend
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-nam-sand/30 text-nam-white px-8 py-4 rounded-full text-base font-medium hover:bg-nam-white/5 transition-all duration-300 group"
            >
              View Pricing
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]"
            >
              Talk to Us
            </Link>
          </div>

          <a
            href="https://www.youtube.com/watch?v=EMmKs8vMKhU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-nam-sand/70 hover:text-nam-white transition-colors group"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Watch on YouTube
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
