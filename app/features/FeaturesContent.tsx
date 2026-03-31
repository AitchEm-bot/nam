"use client";

import Link from "next/link";
import {
  BrainCircuit,
  Zap,
  Globe2,
  ShieldCheck,
  Blocks,
  Activity,
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

// ============================================================
// Flip this to `true` when features page is ready to display.
// ============================================================
const FEATURES_LIVE = false;

export default function FeaturesContent() {
  const { dict } = useI18n();

  if (!FEATURES_LIVE) {
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
                <span className="text-xs text-nam-sand/90 tracking-widest uppercase font-medium">{dict.features.comingSoonBadge}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-nam-white mb-4 tracking-tight">{dict.features.comingSoonHeading}</h1>
              <p className="text-base text-nam-sand/70 font-light leading-relaxed mb-8">{dict.features.comingSoonDesc}</p>
              <div className="h-px w-full bg-nam-sand/10 mb-8" />
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="w-full flex items-center justify-center bg-nam-white text-nam-black px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_30px_rgba(232,227,217,0.2)]">{dict.features.comingSoonCta}</Link>
                <Link href="/" className="w-full flex items-center justify-center border border-nam-sand/20 text-nam-sand px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-white/5 hover:border-nam-sand/40 transition-all duration-300">{dict.features.returnHome}</Link>
              </div>
            </div>
          </div>
        </main>
        <div className="relative z-40 mt-auto"><Footer /></div>
      </div>
    );
  }

  const features = [
    { icon: BrainCircuit, title: dict.features.feature1Title, description: dict.features.feature1Desc, delay: "delay-300" },
    { icon: Zap, title: dict.features.feature2Title, description: dict.features.feature2Desc, delay: "delay-400" },
    { icon: Globe2, title: dict.features.feature3Title, description: dict.features.feature3Desc, delay: "delay-500" },
    { icon: ShieldCheck, title: dict.features.feature4Title, description: dict.features.feature4Desc, delay: "delay-600" },
    { icon: Blocks, title: dict.features.feature5Title, description: dict.features.feature5Desc, delay: "delay-700" },
    { icon: Activity, title: dict.features.feature6Title, description: dict.features.feature6Desc, delay: "delay-800" },
  ];

  const techFeatures = [
    { title: dict.features.tech1Title, description: dict.features.tech1Desc },
    { title: dict.features.tech2Title, description: dict.features.tech2Desc },
    { title: dict.features.tech3Title, description: dict.features.tech3Desc },
  ];

  const pipelineMetrics = [
    { label: dict.features.metric1, time: dict.features.metric1Time, color: "text-nam-sand" },
    { label: dict.features.metric2, time: dict.features.metric2Time, color: "text-nam-sand" },
    { label: dict.features.metric3, time: dict.features.metric3Time, color: "text-amber-400" },
    { label: dict.features.metric4, time: dict.features.metric4Time, color: "text-nam-sand" },
  ];

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/beautiful-view-tranquil-desert-clear-sky-captured-morocco.jpg`}
          alt="Saudi Desert Dunes"
          className="w-full h-full object-cover object-center animate-slow-zoom origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,12,0.85)] via-[rgba(11,11,12,0.6)] to-[rgba(11,11,12,0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,11,12,0.1)_0%,rgba(11,11,12,0.7)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full pt-32 md:pt-40 pb-24">
        {/* Hero Section */}
        <section className="px-4 md:px-6 max-w-7xl mx-auto text-center mb-24 md:mb-32">
          <div className="opacity-0 animate-fade-up delay-100 mb-6">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-nam-sand/15 bg-nam-black/30 backdrop-blur-md">
              <span className="text-xs md:text-sm text-nam-sand/90 tracking-[0.1em] uppercase font-medium">
                {dict.features.badge}
              </span>
            </div>
          </div>

          <h1
            className="opacity-0 animate-fade-up delay-200 font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-nam-white mb-6 tracking-tight drop-shadow-sm max-w-4xl mx-auto"
            style={{ lineHeight: 1.1 }}
          >
            {dict.features.headline} <br className="hidden md:block" />
            <span className="text-nam-sand">{dict.features.headlineHighlight}</span>
          </h1>

          <p className="opacity-0 animate-fade-up delay-300 text-lg md:text-xl text-nam-sand/80 font-light max-w-2xl mx-auto leading-relaxed">
            {dict.features.subheadline}
          </p>
        </section>

        {/* Core Features Grid */}
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`opacity-0 animate-fade-up ${feature.delay} group relative p-8 rounded-3xl bg-nam-black/40 border border-nam-sand/10 backdrop-blur-md overflow-hidden hover:bg-nam-black/60 hover:border-nam-sand/20 transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-nam-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-nam-sand/10 border border-nam-sand/20 flex items-center justify-center text-nam-sand mb-8 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-nam-white mb-4 group-hover:text-nam-sand transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-nam-sand/70 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-32">
          <div className="bg-nam-black/60 border border-nam-sand/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(232,227,217,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left: Content */}
              <div className="opacity-0 animate-fade-up delay-400">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nam-sand/20 bg-nam-sand/5 text-xs text-nam-sand mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                  {dict.features.techBadge}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-nam-white mb-6">
                  {dict.features.techHeadline} <br />
                  {dict.features.techHeadlineLine2}
                </h2>
                <p className="text-nam-sand/80 font-light leading-relaxed mb-8 text-lg">
                  {dict.features.techDesc}
                </p>

                <ul className="space-y-5">
                  {techFeatures.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-nam-sand/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-nam-sand" />
                      </div>
                      <div>
                        <h4 className="text-nam-white font-medium mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-nam-sand/60 font-light">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Terminal Mockup */}
              <div className="opacity-0 animate-fade-up delay-600">
                <div className="bg-[#0F1115] border border-nam-sand/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  {/* Terminal Header */}
                  <div className="flex items-center px-4 py-3 bg-[#16191F] border-b border-nam-sand/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="mx-auto text-xs text-nam-sand/40 font-mono">
                      {dict.features.terminalTitle}
                    </div>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-sm overflow-x-auto tech-scrollbar">
                    <div className="flex justify-between mb-4">
                      <span className="text-nam-sand/50">
                        {dict.features.terminalInit}
                      </span>
                      <span className="text-emerald-400">{dict.features.terminalOk}</span>
                    </div>
                    <div className="space-y-3">
                      {pipelineMetrics.map((metric, i) => (
                        <div
                          key={metric.label}
                          className={`flex justify-between items-center ${i < pipelineMetrics.length - 1 ? "border-b border-nam-sand/5" : ""} pb-2`}
                        >
                          <span className="text-nam-white/80">
                            {metric.label}
                          </span>
                          <span className={`${metric.color} font-medium`}>
                            {metric.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-nam-sand/10 flex justify-between items-center">
                      <span className="text-nam-sand/50">
                        {dict.features.totalLatency}
                      </span>
                      <span className="text-emerald-400 font-bold tracking-wider">
                        {dict.features.totalLatencyValue}
                      </span>
                    </div>
                    <div className="mt-4 w-full bg-nam-sand/5 rounded-full h-1 overflow-hidden">
                      <div className="bg-emerald-500/50 h-full rounded-full w-[15%] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="opacity-0 animate-fade-up delay-800 px-4 text-center mt-20 md:mt-32">
          <h2 className="font-serif text-3xl md:text-4xl text-nam-white mb-6">
            {dict.features.ctaHeading}
          </h2>
          <p className="text-nam-sand/80 font-light max-w-xl mx-auto mb-10">
            {dict.features.ctaDesc}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 md:px-10 md:py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_30px_rgba(247,245,242,0.15)] hover:shadow-[0_0_40px_rgba(232,227,217,0.25)]"
          >
            {dict.features.ctaButton}
          </Link>
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-40">
        <Footer />
      </div>
    </div>
  );
}
