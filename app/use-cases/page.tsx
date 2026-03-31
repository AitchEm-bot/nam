import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, PhoneOutgoing, Workflow, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Use Cases | NAM Voice Intelligence",
};

const useCases = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    description:
      "Resolve complex inquiries instantly, 24/7, across multiple Arabic dialects with human-like empathy, precision, and zero wait times.",
    stat: "85%",
    statLabel: "First-call resolution",
    delay: "delay-200",
    offset: "",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Sales",
    description:
      "Qualify leads, schedule appointments, and follow up with prospects naturally. Scale your sales team infinitely without losing the personal touch.",
    stat: "3x",
    statLabel: "Lead conversion rate",
    delay: "delay-300",
    offset: "mt-0 md:mt-12",
  },
  {
    icon: Workflow,
    title: "Enterprise Auto",
    description:
      "Automate internal HR queries, IT helpdesk routing, and complex workflow approvals through intuitive, seamless voice interfaces.",
    stat: "40%",
    statLabel: "Operational cost reduction",
    delay: "delay-400",
    offset: "mt-0 md:mt-24",
  },
];

const industries = [
  {
    name: "Public Sector",
    description:
      "Automate citizen inquiries, visa status checks, and public service appointments with culturally attuned Arabic dialects, ensuring broad accessibility.",
  },
  {
    name: "Banking & Finance",
    description:
      "Securely handle balance inquiries, card activation, and fraud alerts with enterprise-grade encryption and biometric authentication compatibility.",
  },
  {
    name: "Healthcare",
    description:
      "Streamline appointment scheduling, patient triage, and post-discharge follow-ups with a compassionate, HIPAA-compliant voice interface.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="relative min-h-screen bg-nam-black font-sans text-nam-white overflow-x-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(232,227,217,0.03)_0%,transparent_80%)] pointer-events-none" />
      <div className="fixed inset-0 z-0 noise-overlay" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="mb-20 md:mb-32 opacity-0 animate-fade-up delay-100 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-nam-sand/15 bg-nam-black/30 backdrop-blur-[2px] mb-8">
            <span className="text-xs md:text-sm text-nam-sand/80 tracking-[0.1em] font-medium uppercase">
              Solutions
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-nam-white tracking-tight leading-tight drop-shadow-sm ink-diffusion">
            Intelligence applied.
          </h1>
          <p className="mt-6 text-xl text-nam-sand/80 font-light drop-shadow-sm">
            Transforming operations across the Saudi enterprise landscape with
            culturally native, intent-driven voice AI.
          </p>
        </div>

        {/* Primary Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`group relative rounded-3xl bg-gradient-to-b from-nam-white/[0.04] to-nam-white/[0.01] border border-nam-white/5 p-8 md:p-10 hover:border-nam-sand/30 transition-all duration-500 opacity-0 animate-fade-up ${useCase.delay} flex flex-col h-full ${useCase.offset}`}
            >
              <div className="w-14 h-14 rounded-full bg-nam-white/5 border border-nam-white/10 flex items-center justify-center mb-8 text-nam-sand group-hover:bg-nam-sand group-hover:text-nam-black transition-colors duration-500">
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-nam-white mb-4">
                {useCase.title}
              </h3>
              <p className="text-nam-sand/70 font-light mb-12 flex-grow leading-relaxed">
                {useCase.description}
              </p>
              <div className="pt-6 border-t border-nam-white/10">
                <div className="text-3xl font-serif text-nam-white mb-1">
                  {useCase.stat}
                </div>
                <div className="text-xs text-nam-sand/50 tracking-widest uppercase font-medium">
                  {useCase.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Solutions Section */}
        <div className="mt-32 md:mt-48 opacity-0 animate-fade-up delay-500">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-nam-white mb-4">
                Built for your industry
              </h2>
              <p className="text-nam-sand/70 font-light max-w-xl">
                Specialized models trained on industry-specific terminology and
                regulatory compliance standards.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-nam-white/[0.02] border border-nam-white/5 hover:bg-nam-white/[0.05] transition-all duration-300"
              >
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="font-serif text-2xl text-nam-white">
                    {industry.name}
                  </h3>
                </div>
                <div className="md:w-1/2">
                  <p className="text-nam-sand/70 font-light">
                    {industry.description}
                  </p>
                </div>
                <div className="md:w-1/6 flex justify-end mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full border border-nam-sand/30 flex items-center justify-center text-nam-sand">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 md:mt-48 pt-24 border-t border-nam-white/10 text-center opacity-0 animate-fade-up delay-600">
          <h2 className="font-serif text-4xl md:text-5xl text-nam-white mb-6">
            Ready to deploy?
          </h2>
          <p className="text-lg text-nam-sand/70 font-light mb-10 max-w-xl mx-auto">
            Discover how NAM can transform your specific operational bottlenecks
            with a custom-trained voice agent.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-nam-white text-nam-black px-8 py-4 md:px-10 md:py-4 rounded-full text-base font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_30px_rgba(247,245,242,0.15)] hover:shadow-[0_0_40px_rgba(232,227,217,0.25)]"
          >
            Talk to us
          </Link>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
