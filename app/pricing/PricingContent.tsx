"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Lock, Activity } from "lucide-react";

const pilotFeatures = [
  "10,000 conversational minutes",
  "2 concurrent voice agents",
  "5 standard Arabic/English voices",
  "Standard CRM integration",
  "Email support (24h SLA)",
];

const growthFeatures = [
  "50,000 conversational minutes",
  "15 concurrent voice agents",
  "1 Custom Voice Clone (Brand specific)",
  "Full API access & Webhooks",
  "Priority support (4h SLA)",
];

const enterpriseFeatures = [
  "Unlimited minutes & agents",
  "On-premise or Private Cloud deployment",
  "Custom fine-tuned AI models",
  "Advanced RBAC & SSO integration",
  "Dedicated Account Manager",
];

const enterpriseBadges = [
  {
    icon: ShieldCheck,
    title: "Data Sovereignty",
    description:
      "100% data residency in Saudi Arabia to comply with local regulations.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "AES-256 encryption at rest and in transit for all voice and text data.",
  },
  {
    icon: Activity,
    title: "99.99% Uptime SLA",
    description:
      "Geographically distributed architecture ensuring maximum availability.",
  },
];

const PILOT_MONTHLY = 999;
const GROWTH_MONTHLY = 3499;

export default function PricingContent() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pilotPrice = isAnnual ? Math.round(PILOT_MONTHLY * 0.8) : PILOT_MONTHLY;
  const growthPrice = isAnnual
    ? Math.round(GROWTH_MONTHLY * 0.8)
    : GROWTH_MONTHLY;

  return (
    <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <div className="opacity-0 animate-fade-up inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-nam-sand/15 bg-nam-black/30 backdrop-blur-md">
          <span className="text-xs md:text-sm text-nam-sand/80 tracking-[0.1em] font-medium">
            ENTERPRISE PLANS
          </span>
        </div>
        <h1
          className="opacity-0 animate-fade-up delay-100 font-serif text-4xl md:text-5xl lg:text-6xl text-nam-white mb-6 tracking-tight"
          style={{ lineHeight: 1.1 }}
        >
          Intelligence at scale.
        </h1>
        <p className="opacity-0 animate-fade-up delay-200 text-lg md:text-xl text-nam-sand/70 font-light max-w-2xl mx-auto">
          Transparent pricing for voice agents that handle your highest volume
          workloads with human-level comprehension.
        </p>
        <p className="opacity-0 animate-fade-up delay-200 mt-4 text-sm text-nam-sand/60">
          Need a custom solution?{" "}
          <Link
            href="/contact"
            className="text-nam-sand hover:text-nam-white underline decoration-nam-sand/30 underline-offset-2 transition-colors"
          >
            Talk to our team
          </Link>
        </p>

        {/* Billing Toggle */}
        <div className="opacity-0 animate-fade-up delay-300 mt-10 flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium transition-colors duration-300 ${!isAnnual ? "text-nam-white" : "text-nam-sand/60"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-8 rounded-full bg-nam-sand/10 border border-nam-sand/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-nam-sand/50"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-nam-sand transition-transform duration-300 ease-in-out ${isAnnual ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${isAnnual ? "text-nam-white" : "text-nam-sand/60"}`}
          >
            Annually
            <span className="text-[10px] uppercase tracking-wider bg-nam-sand/10 text-nam-sand px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start relative z-20">
        {/* Pilot */}
        <div className="opacity-0 animate-fade-up delay-300 glass-card border border-nam-sand/10 rounded-[2rem] p-8 md:p-10 transition-colors hover:border-nam-sand/20 flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-nam-white mb-2">Pilot</h3>
            <p className="text-sm text-nam-sand/60 font-light">
              Perfect for testing voice AI in a single department.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-serif text-nam-white">
                ${pilotPrice.toLocaleString()}
              </span>
              <span className="text-nam-sand/50 text-sm">/mo</span>
            </div>
            <p className="text-xs text-nam-sand/50 mt-2">
              {isAnnual ? "Billed annually" : "Billed monthly"}
            </p>
          </div>
          <Link
            href="#signup"
            className="w-full flex items-center justify-center border border-nam-sand/30 text-nam-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-white/5 transition-all duration-300 mb-10"
          >
            Start Pilot
          </Link>
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-[0.1em] text-nam-sand/40 font-semibold mb-6">
              What&apos;s included
            </p>
            <ul className="space-y-4">
              {pilotFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-4.5 h-4.5 text-nam-sand shrink-0 mt-0.5" />
                  <span className="text-sm text-nam-sand/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Growth (Highlighted) */}
        <div className="opacity-0 animate-fade-up delay-400 bg-[#131315] border border-nam-sand/20 rounded-[2rem] p-8 md:p-10 relative lg:-mt-4 shadow-[0_0_40px_rgba(232,227,217,0.03)] flex flex-col h-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-nam-sand text-nam-black text-[10px] uppercase tracking-[0.1em] font-bold px-4 py-1.5 rounded-full">
              Most Popular
            </span>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-nam-white mb-2">
              Growth
            </h3>
            <p className="text-sm text-nam-sand/60 font-light">
              For companies ready to automate core customer workflows.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-serif text-nam-white">
                ${growthPrice.toLocaleString()}
              </span>
              <span className="text-nam-sand/50 text-sm">/mo</span>
            </div>
            <p className="text-xs text-nam-sand/50 mt-2">
              {isAnnual ? "Billed annually" : "Billed monthly"}
            </p>
          </div>
          <Link
            href="#signup-growth"
            className="w-full flex items-center justify-center bg-nam-white text-nam-black px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 shadow-[0_0_20px_rgba(247,245,242,0.15)] hover:shadow-[0_0_30px_rgba(232,227,217,0.25)] mb-10"
          >
            Get Started
          </Link>
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-[0.1em] text-nam-white/40 font-semibold mb-6">
              Everything in Pilot, plus:
            </p>
            <ul className="space-y-4">
              {growthFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-4.5 h-4.5 text-nam-white shrink-0 mt-0.5" />
                  <span className="text-sm text-nam-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise */}
        <div className="opacity-0 animate-fade-up delay-500 glass-card border border-nam-sand/10 rounded-[2rem] p-8 md:p-10 transition-colors hover:border-nam-sand/20 flex flex-col h-full">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-nam-white mb-2">
              Enterprise
            </h3>
            <p className="text-sm text-nam-sand/60 font-light">
              Custom limits, deployment, and security for large institutions.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-serif text-nam-white">
                Custom
              </span>
            </div>
            <p className="text-xs text-nam-sand/50 mt-2">
              Volume-based pricing
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full flex items-center justify-center border border-nam-sand/30 text-nam-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-nam-white/5 transition-all duration-300 mb-10"
          >
            Contact Sales
          </Link>
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-[0.1em] text-nam-sand/40 font-semibold mb-6">
              Everything in Growth, plus:
            </p>
            <ul className="space-y-4">
              {enterpriseFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-4.5 h-4.5 text-nam-sand shrink-0 mt-0.5" />
                  <span className="text-sm text-nam-sand/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Enterprise Features Banner */}
      <div className="opacity-0 animate-fade-up delay-500 mt-20 md:mt-32 pt-16 border-t border-nam-sand/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-2xl font-serif text-nam-white mb-4">
              Enterprise Grade by Default
            </h4>
            <p className="text-sm text-nam-sand/60 font-light">
              Security and reliability engineered for the Saudi financial and
              government sectors.
            </p>
          </div>
          {enterpriseBadges.map((badge) => (
            <div key={badge.title} className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-nam-sand/5 flex items-center justify-center mb-4">
                <badge.icon className="w-5 h-5 text-nam-sand" />
              </div>
              <h5 className="text-base font-medium text-nam-white">
                {badge.title}
              </h5>
              <p className="text-sm text-nam-sand/60 font-light">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
