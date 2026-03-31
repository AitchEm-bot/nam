import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-nam-black overflow-hidden font-sans text-nam-white">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/desert-sunset-golden-sand-dunes-clear-sky.jpg"
          alt="Saudi Desert Dunes"
          className="w-full h-full object-cover object-center animate-slow-zoom origin-center"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(11,11,12,0.3)] to-[rgba(11,11,12,0.7)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(11,11,12,0.1)_0%,rgba(11,11,12,0.5)_100%)] mix-blend-multiply" />
      <div className="absolute inset-0 z-0 noise-overlay" />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center max-w-5xl mx-auto pt-20 pb-10">
        {/* Small Label */}
        <div className="opacity-0 animate-fade-up delay-300 mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-nam-sand/15 bg-nam-black/10 backdrop-blur-[2px]">
            <span className="text-xs md:text-sm text-nam-sand/80 tracking-[0.1em] font-medium">
              NAM Voice Intelligence Platform
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className="opacity-0 animate-fade-up delay-400 font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-nam-white mb-6 md:mb-8 tracking-tight drop-shadow-sm"
          style={{ lineHeight: 1.05 }}
        >
          AI that speaks with human intent.
          <br className="hidden md:block" />
          <span className="block mt-1 md:mt-2">
            Powered by intelligence. Rooted in heritage.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-up delay-500 text-lg md:text-xl text-nam-sand/90 font-light max-w-2xl mx-auto mb-10 md:mb-12 drop-shadow-sm">
          Voice agents designed for the future of Saudi enterprise.
        </p>

        {/* Primary CTA */}
        <div className="opacity-0 animate-fade-up delay-600">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 md:px-10 md:py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_30px_rgba(247,245,242,0.15)] hover:shadow-[0_0_40px_rgba(232,227,217,0.25)]"
          >
            Talk to us
          </Link>
        </div>

        {/* Optional Secondary Line */}
        <div className="opacity-0 animate-fade-up delay-700 mt-14 md:mt-16">
          <p className="text-sm text-nam-sand/70 tracking-[0.05em] font-light">
            Built in Saudi Arabia. Designed for the world.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <Link
              href="/use-cases"
              className="text-sm text-nam-sand/60 hover:text-nam-white transition-colors underline underline-offset-4 decoration-nam-sand/20 hover:decoration-nam-white/50"
            >
              Explore Use Cases
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
