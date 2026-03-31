"use client";

import Link from "next/link";
import { Languages, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function AboutContent() {
  const { dict } = useI18n();

  const stats = [
    { value: dict.about.stat1Value, label: dict.about.stat1Label },
    { value: dict.about.stat2Value, label: dict.about.stat2Label },
    { value: dict.about.stat3Value, label: dict.about.stat3Label },
    { value: dict.about.stat4Value, label: dict.about.stat4Label },
  ];

  const values = [
    {
      icon: Languages,
      title: dict.about.value1Title,
      description: dict.about.value1Desc,
    },
    {
      icon: ShieldCheck,
      title: dict.about.value2Title,
      description: dict.about.value2Desc,
    },
    {
      icon: Sparkles,
      title: dict.about.value3Title,
      description: dict.about.value3Desc,
    },
  ];

  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-nam-indigo/5 via-nam-black to-nam-black pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[500px] z-0 bg-[radial-gradient(ellipse_at_top,rgba(232,227,217,0.03)_0%,rgba(11,11,12,0)_70%)] pointer-events-none" />
      <div className="fixed inset-0 z-0 noise-overlay" />

      {/* Header */}
      <header className="relative z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-32 md:mb-48">
          <div className="opacity-0 animate-fade-up delay-200 mb-8">
            <div className="inline-flex items-center space-x-3">
              <span className="h-px w-8 bg-nam-sand/40" />
              <span className="text-xs md:text-sm text-nam-sand/80 tracking-[0.15em] font-medium uppercase">
                {dict.about.badge}
              </span>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-up delay-300 font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-nam-white mb-8 tracking-tight max-w-5xl leading-[1.05] ink-diffusion">
            {dict.about.headline}
          </h1>

          <p className="opacity-0 animate-fade-up delay-400 text-lg md:text-xl text-nam-sand/80 font-light max-w-3xl leading-relaxed">
            {dict.about.intro}
          </p>
        </section>

        {/* Image Break */}
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 mb-32 md:mb-48 opacity-0 animate-fade-up delay-500">
          <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[4/3] xl:aspect-[21/9] w-full overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-nam-blue/20 border border-nam-sand/5">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/beautiful-scenery-sand-dunes-desert-area-sunny-day.jpg`}
              alt={dict.about.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity hover:scale-105 hover:opacity-50 transition-all duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nam-black via-nam-black/20 to-transparent" />

            {/* Stats: small screens -- bottom row */}
            <div className="absolute bottom-8 left-6 right-6 grid grid-cols-2 gap-6 divide-x divide-nam-sand/10 md:hidden">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i === 0 ? "pl-0" : "pl-4"} ${i >= 2 ? "mt-4" : ""}`}
                >
                  <p className="font-serif text-2xl text-nam-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-nam-sand/60 tracking-wider uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats: md -- 2x2 quadrant grid, centered in each cell */}
            <div className="absolute inset-0 hidden md:grid grid-cols-2 grid-rows-2 xl:hidden">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <p className="font-serif text-5xl text-nam-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-nam-sand/60 tracking-wider uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats: lg+ -- bottom single row */}
            <div className="absolute bottom-16 left-16 right-16 hidden xl:grid grid-cols-4 gap-8 divide-x divide-nam-sand/10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i === 0 ? "pl-0" : "pl-10"}`}
                >
                  <p className="font-serif text-5xl text-nam-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-nam-sand/60 tracking-wider uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Origin & Philosophy */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-32 md:mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 opacity-0 animate-fade-up delay-600">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nam-white mb-6 leading-tight">
                {dict.about.originHeading}
              </h2>
              <div className="h-px w-24 bg-nam-sand/30 mb-8" />
            </div>

            <div className="lg:col-span-7 space-y-8 text-lg text-nam-sand/80 font-light opacity-0 animate-fade-up delay-700">
              <p className="leading-relaxed">
                {dict.about.originP1}
              </p>
              <p className="leading-relaxed">
                {dict.about.originP2}
              </p>
              <p className="leading-relaxed">
                {dict.about.originP3}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-32 md:mb-48">
          <div className="text-center mb-16 md:mb-24 opacity-0 animate-fade-up delay-800">
            <h2 className="font-serif text-3xl md:text-4xl text-nam-white mb-4">
              {dict.about.valuesHeading}
            </h2>
            <p className="text-nam-sand/60 max-w-2xl mx-auto">
              {dict.about.valuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 opacity-0 animate-fade-up delay-900">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 md:p-10 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.01] backdrop-blur-sm hover:bg-nam-white/[0.03] transition-colors duration-500 group"
              >
                <div className="w-12 h-12 rounded-full border border-nam-sand/20 flex items-center justify-center mb-8 text-nam-sand group-hover:scale-110 group-hover:bg-nam-white/5 transition-all duration-300">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-nam-white mb-4">
                  {value.title}
                </h3>
                <p className="text-nam-sand/70 font-light text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-32 md:mb-48">
          <div className="text-center mb-16 md:mb-24 opacity-0 animate-fade-up delay-800">
            <h2 className="font-serif text-3xl md:text-4xl text-nam-white mb-4">
              {dict.about.foundersHeading}
            </h2>
            <p className="text-nam-sand/60 max-w-2xl mx-auto">
              {dict.about.foundersDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto opacity-0 animate-fade-up delay-900">
            {/* Hani Moustafa */}
            <div className="flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.01] backdrop-blur-sm hover:bg-nam-white/[0.03] transition-colors duration-500 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-nam-sand/20 mb-6 group-hover:border-nam-sand/40 transition-colors duration-300">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hani-photo.jpeg`}
                  alt={dict.about.founder1Name}
                  className="w-full h-50 object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl text-nam-white mb-2">
                {dict.about.founder1Name}
              </h3>
              <p className="text-sm text-nam-sand/50 uppercase tracking-wider font-medium mb-4">
                {dict.about.founder1Role}
              </p>
              <p className="text-nam-sand/70 font-light text-base leading-relaxed italic">
                &ldquo;{dict.about.founder1Quote}&rdquo;
              </p>
            </div>

            {/* Ahmed Almisrea */}
            <div className="flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.01] backdrop-blur-sm hover:bg-nam-white/[0.03] transition-colors duration-500 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-nam-sand/20 mb-6 group-hover:border-nam-sand/40 transition-colors duration-300">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ahmed-photo.jpeg`}
                  alt={dict.about.founder2Name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl text-nam-white mb-2">
                {dict.about.founder2Name}
              </h3>
              <p className="text-sm text-nam-sand/50 uppercase tracking-wider font-medium mb-4">
                {dict.about.founder2Role}
              </p>
              <p className="text-nam-sand/70 font-light text-base leading-relaxed italic">
                &ldquo;{dict.about.founder2Quote}&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto w-full text-center opacity-0 animate-fade-up delay-1000">
          <div className="py-16 md:py-24 border-t border-nam-sand/10">
            <h2 className="font-serif text-4xl md:text-5xl text-nam-white mb-6 ink-diffusion">
              {dict.about.ctaHeading}
            </h2>
            <p className="text-lg text-nam-sand/70 font-light mb-10 max-w-xl mx-auto">
              {dict.about.ctaDesc}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 md:px-10 md:py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_30px_rgba(247,245,242,0.15)] hover:shadow-[0_0_40px_rgba(232,227,217,0.25)]"
            >
              {dict.about.ctaButton}
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-40 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
