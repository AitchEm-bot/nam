import type { Metadata } from "next";
import Link from "next/link";
import { Languages, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About NAM | Heritage Meets Future",
};

const stats = [
  { value: "Riyadh", label: "Headquarters" },
  { value: "15+", label: "Dialects Mastered" },
  { value: "99.8%", label: "Accuracy Rate" },
  { value: "Enterprise", label: "Core Focus" },
];

const values = [
  {
    icon: Languages,
    title: "Linguistic Sovereignty",
    description:
      "We believe the Arabic language, in all its local variations, deserves first-class AI models that capture its poetic depth and practical nuance.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Privacy",
    description:
      "Enterprise data remains strictly localized. We build systems that protect institutional knowledge while delivering state-of-the-art reasoning.",
  },
  {
    icon: Sparkles,
    title: "Design Excellence",
    description:
      "Technology should feel invisible. We obsess over the latency, tone, and emotional intelligence of our voice agents to create magical user experiences.",
  },
];

export default function AboutPage() {
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
                The NAM Story
              </span>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-up delay-300 font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-nam-white mb-8 tracking-tight max-w-5xl leading-[1.05] ink-diffusion">
            Bridging deep Saudi heritage with cutting-edge intelligence.
          </h1>

          <p className="opacity-0 animate-fade-up delay-400 text-lg md:text-xl text-nam-sand/80 font-light max-w-3xl leading-relaxed">
            NAM was founded on a singular premise: artificial intelligence should
            understand not just our words, but our culture, our nuance, and our
            context. We are building the foundational voice intelligence for
            modern Arabia.
          </p>
        </section>

        {/* Image Break */}
        <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 mb-32 md:mb-48 opacity-0 animate-fade-up delay-500">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-nam-blue/20 border border-nam-sand/5">
            <img
              src="/beautiful-scenery-sand-dunes-desert-area-sunny-day.jpg"
              alt="Abstract representation of Saudi landscapes"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity hover:scale-105 hover:opacity-50 transition-all duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nam-black via-nam-black/20 to-transparent" />

            {/* Overlaid Stats */}
            <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 right-8 md:right-16 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-nam-sand/10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i === 0 ? "pl-0 md:pl-4" : "pl-6 md:pl-10"} ${i >= 2 ? "mt-6 md:mt-0" : ""}`}
                >
                  <p className="font-serif text-3xl md:text-5xl text-nam-white mb-2">
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
                Rooted in the sands of innovation.
              </h2>
              <div className="h-px w-24 bg-nam-sand/30 mb-8" />
            </div>

            <div className="lg:col-span-7 space-y-8 text-lg text-nam-sand/80 font-light opacity-0 animate-fade-up delay-700">
              <p className="leading-relaxed">
                While general-purpose AI models treat Arabic as an
                afterthought—translating concepts linearly from English—NAM was
                engineered from the ground up in Saudi Arabia. We process the
                rich, complex tapestry of regional dialects natively.
              </p>
              <p className="leading-relaxed">
                We recognize that true enterprise intelligence requires more than
                mere transcription. It demands cultural awareness, contextual
                understanding, and the ability to breathe life into digital
                interactions that feel distinctly human and fundamentally local.
              </p>
              <p className="leading-relaxed">
                From the financial sector in King Abdullah Financial District to
                the burgeoning hospitality initiatives across the Kingdom, NAM
                agents are designed to represent brands with dignity, precision,
                and native fluency.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-32 md:mb-48">
          <div className="text-center mb-16 md:mb-24 opacity-0 animate-fade-up delay-800">
            <h2 className="font-serif text-3xl md:text-4xl text-nam-white mb-4">
              Our Founding Principles
            </h2>
            <p className="text-nam-sand/60 max-w-2xl mx-auto">
              The pillars that guide our engineering and design.
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
              Meet the Founders
            </h2>
            <p className="text-nam-sand/60 max-w-2xl mx-auto">
              The minds building the future of Arabic voice intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto opacity-0 animate-fade-up delay-900">
            {/* Hani Moustafa */}
            <div className="flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.01] backdrop-blur-sm hover:bg-nam-white/[0.03] transition-colors duration-500 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-nam-sand/20 mb-6 group-hover:border-nam-sand/40 transition-colors duration-300">
                <img
                  src="/hani-photo.jpeg"
                  alt="Hani Moustafa"
                  className="w-full h-50 object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl text-nam-white mb-2">
                Hani Moustafa
              </h3>
              <p className="text-sm text-nam-sand/50 uppercase tracking-wider font-medium mb-4">
                Co-Founder
              </p>
              <p className="text-nam-sand/70 font-light text-base leading-relaxed italic">
                &ldquo;Technology should speak our language — not the other way
                around.&rdquo;
              </p>
            </div>

            {/* Ahmed Almisrea */}
            <div className="flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.01] backdrop-blur-sm hover:bg-nam-white/[0.03] transition-colors duration-500 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-nam-sand/20 mb-6 group-hover:border-nam-sand/40 transition-colors duration-300">
                <img
                  src="/ahmed-photo.jpeg"
                  alt="Ahmed Almisrea"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl text-nam-white mb-2">
                Ahmed Almisrea
              </h3>
              <p className="text-sm text-nam-sand/50 uppercase tracking-wider font-medium mb-4">
                Co-Founder
              </p>
              <p className="text-nam-sand/70 font-light text-base leading-relaxed italic">
                &ldquo;Great products are built at the intersection of culture
                and craft.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto w-full text-center opacity-0 animate-fade-up delay-1000">
          <div className="py-16 md:py-24 border-t border-nam-sand/10">
            <h2 className="font-serif text-4xl md:text-5xl text-nam-white mb-6 ink-diffusion">
              Shape the future of voice.
            </h2>
            <p className="text-lg text-nam-sand/70 font-light mb-10 max-w-xl mx-auto">
              Join leading Saudi enterprises in deploying the next generation of
              conversational intelligence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 md:px-10 md:py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_30px_rgba(247,245,242,0.15)] hover:shadow-[0_0_40px_rgba(232,227,217,0.25)]"
            >
              Talk to us
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
