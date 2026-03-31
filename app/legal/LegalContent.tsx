"use client";

import { Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function LegalContent() {
  const { dict } = useI18n();

  const documents = [
    {
      title: dict.legal.privacyTitle,
      description: dict.legal.privacyDesc,
      href: "/legal/privacy-policy.pdf",
      filename: "NAM-Privacy-Policy.pdf",
    },
    {
      title: dict.legal.termsTitle,
      description: dict.legal.termsDesc,
      href: "/legal/terms-and-conditions.pdf",
      filename: "NAM-Terms-and-Conditions.pdf",
    },
  ];

  return (
    <div className="relative min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(232,227,217,0.03)_0%,transparent_80%)] pointer-events-none" />
      <div className="fixed inset-0 z-0 noise-overlay" />

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        {/* Page Header */}
        <div className="mb-16 md:mb-24 opacity-0 animate-fade-up delay-100">
          <div className="inline-flex items-center space-x-3 mb-8">
            <span className="h-px w-8 bg-nam-sand/40" />
            <span className="text-xs md:text-sm text-nam-sand/80 tracking-[0.15em] font-medium uppercase">
              {dict.legal.badge}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-nam-white tracking-tight mb-6 ink-diffusion">
            {dict.legal.headline}
          </h1>
          <p className="text-lg text-nam-sand/70 font-light max-w-2xl">
            {dict.legal.desc}{" "}
            <a
              href="/contact"
              className="text-nam-sand hover:text-nam-white underline underline-offset-4 decoration-nam-sand/30 hover:decoration-nam-white/50 transition-colors"
            >
              {dict.legal.contactUs}
            </a>
            .
          </p>
        </div>

        {/* Documents */}
        <div className="space-y-6 opacity-0 animate-fade-up delay-300">
          {documents.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              download={doc.filename}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.02] hover:bg-nam-white/[0.05] hover:border-nam-sand/25 transition-all duration-300"
            >
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="font-serif text-2xl md:text-3xl text-nam-white mb-3 group-hover:text-nam-sand transition-colors duration-300">
                  {doc.title}
                </h2>
                <p className="text-nam-sand/60 font-light leading-relaxed max-w-lg">
                  {doc.description}
                </p>
              </div>
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2.5 bg-nam-white/5 border border-nam-sand/20 text-nam-sand px-6 py-3 rounded-full text-sm font-medium group-hover:bg-nam-white group-hover:text-nam-black group-hover:border-transparent transition-all duration-300">
                  <Download className="w-4 h-4" />
                  {dict.legal.downloadPdf}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-40 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
