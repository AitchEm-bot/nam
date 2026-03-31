"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  Shield,
  MessageSquare,
  PhoneOutgoing,
  Workflow,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

function stagger(delay: number) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease, delay },
    },
  };
}

const viewOnce = { once: true, margin: "-10%" as const };

export default function MobileHome() {
  const router = useRouter();
  const { dict, locale, setLocale } = useI18n();

  const features = [
    {
      icon: BrainCircuit,
      title: dict.mobileHome.feature1Title,
      desc: dict.mobileHome.feature1Desc,
    },
    {
      icon: Zap,
      title: dict.mobileHome.feature2Title,
      desc: dict.mobileHome.feature2Desc,
    },
    {
      icon: Shield,
      title: dict.mobileHome.feature3Title,
      desc: dict.mobileHome.feature3Desc,
    },
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: dict.mobileHome.useCase1Title,
      stat: dict.mobileHome.useCase1Stat,
      statLabel: dict.mobileHome.useCase1StatLabel,
      desc: dict.mobileHome.useCase1Desc,
    },
    {
      icon: PhoneOutgoing,
      title: dict.mobileHome.useCase2Title,
      stat: dict.mobileHome.useCase2Stat,
      statLabel: dict.mobileHome.useCase2StatLabel,
      desc: dict.mobileHome.useCase2Desc,
    },
    {
      icon: Workflow,
      title: dict.mobileHome.useCase3Title,
      stat: dict.mobileHome.useCase3Stat,
      statLabel: dict.mobileHome.useCase3StatLabel,
      desc: dict.mobileHome.useCase3Desc,
    },
  ];

  const pricingTiers = [
    {
      name: dict.mobileHome.pilotName,
      price: dict.mobileHome.pilotPrice,
      sub: dict.mobileHome.pilotSub,
      features: [
        dict.mobileHome.pilotFeature1,
        dict.mobileHome.pilotFeature2,
        dict.mobileHome.pilotFeature3,
      ],
      cta: dict.mobileHome.pilotCta,
      highlighted: false,
    },
    {
      name: dict.mobileHome.growthName,
      price: dict.mobileHome.growthPrice,
      sub: dict.mobileHome.growthSub,
      features: [
        dict.mobileHome.growthFeature1,
        dict.mobileHome.growthFeature2,
        dict.mobileHome.growthFeature3,
      ],
      cta: dict.mobileHome.growthCta,
      highlighted: true,
    },
    {
      name: dict.mobileHome.enterpriseName,
      price: dict.mobileHome.enterprisePrice,
      sub: "",
      features: [
        dict.mobileHome.enterpriseFeature1,
        dict.mobileHome.enterpriseFeature2,
        dict.mobileHome.enterpriseFeature3,
      ],
      cta: dict.mobileHome.enterpriseCta,
      highlighted: false,
    },
  ];

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/contact/confirmed");
  }

  return (
    <div className="min-h-screen bg-nam-black font-sans text-nam-white">
      {/* Mobile Nav */}
      <nav className="fixed top-0 w-full z-50 bg-nam-black/10 backdrop-blur-md border-b border-nam-white/5">
        <div className="px-6 h-16 flex justify-between items-center">
          <a
            href="#hero"
            className={`font-serif text-2xl ink-diffusion ${locale === "ar" ? "tracking-normal" : "tracking-[0.2em] uppercase"}`}
          >
            {locale === "ar" ? "نَم" : "NAM"}
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="text-sm text-nam-white/70"
            >
              {dict.header.switchLang}
            </button>
            <a
              href="#contact"
              className="bg-nam-white text-nam-black px-5 py-2 rounded-full text-sm font-medium"
            >
              {dict.mobileHome.navCta}
            </a>
          </div>
        </div>
      </nav>

      {/* ───── Hero ───── */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/desert-sunset-golden-sand-dunes-clear-sky.jpg"
            alt=""
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nam-black/30 via-nam-black/50 to-nam-black/90" />
          <div className="absolute inset-0 noise-overlay" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-lg">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-nam-sand/20 bg-nam-black/20 backdrop-blur-sm text-xs tracking-widest text-nam-sand uppercase">
              {dict.mobileHome.heroBadge}
            </span>
          </motion.div>
          <motion.h1
            variants={stagger(0.1)}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl leading-tight mb-6"
          >
            {dict.mobileHome.heroHeadline}
          </motion.h1>
          <motion.p
            variants={stagger(0.2)}
            initial="hidden"
            animate="visible"
            className="text-base text-nam-sand/90 font-light mb-10"
          >
            {dict.mobileHome.heroSub}
          </motion.p>
          <motion.div
            variants={stagger(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <a
              href="#contact"
              className="bg-nam-white text-nam-black px-10 py-4 rounded-full text-base font-medium shadow-[0_0_30px_rgba(247,245,242,0.15)]"
            >
              {dict.mobileHome.heroCta}
            </a>
            <p className="text-xs text-nam-sand/50">
              {dict.mobileHome.heroTagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="py-20 px-6">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl mb-4">
            {dict.mobileHome.featuresHeading}
          </h2>
          <p className="text-nam-sand/60 text-sm">
            {dict.mobileHome.featuresSub}
          </p>
        </motion.div>
        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={stagger(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
              className="p-8 bg-nam-blue/20 rounded-2xl border border-nam-white/5"
            >
              <f.icon className="w-8 h-8 text-nam-sand mb-4" />
              <h3 className="text-lg font-medium mb-2">{f.title}</h3>
              <p className="text-nam-sand/60 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Use Cases ───── */}
      <section id="use-cases" className="py-20 px-6 bg-nam-indigo/10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="mb-14"
        >
          <h2 className="font-serif text-3xl mb-4">
            {dict.mobileHome.useCasesHeading}
          </h2>
          <p className="text-nam-sand/60 text-sm">
            {dict.mobileHome.useCasesSub}
          </p>
        </motion.div>
        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              variants={stagger(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
              className="p-6 rounded-2xl border border-nam-white/5 bg-nam-black/40"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-nam-sand/5 flex items-center justify-center shrink-0">
                  <uc.icon className="w-5 h-5 text-nam-sand" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-base font-medium">{uc.title}</h3>
                    <span className="text-xs text-nam-sand/50">
                      {uc.stat} {uc.statLabel}
                    </span>
                  </div>
                  <p className="text-nam-sand/60 text-sm leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Pricing ───── */}
      <section id="pricing" className="py-20 px-6">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl mb-4">{dict.mobileHome.pricingHeading}</h2>
          <p className="text-nam-sand/60 text-sm">
            {dict.mobileHome.pricingSub}
          </p>
        </motion.div>
        <div className="space-y-4">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={stagger(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
              className={`p-8 rounded-2xl border ${
                tier.highlighted
                  ? "border-nam-sand bg-nam-indigo/20 relative"
                  : "border-nam-white/5 bg-nam-black/40"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nam-sand text-nam-black text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                  {dict.mobileHome.growthBadge}
                </span>
              )}
              <h3 className="text-sm text-nam-sand uppercase tracking-widest mb-3">
                {tier.name}
              </h3>
              <div className="text-4xl font-serif mb-1">
                {tier.price}
                {locale === "ar" && tier.price !== dict.mobileHome.enterprisePrice && (
                  <>{" "}<span className="icon-saudi_riyal_new" /></>
                )}
                {tier.sub && (
                  <span className="text-sm text-nam-sand/50">{tier.sub}</span>
                )}
              </div>
              <ul className="space-y-3 text-sm text-nam-sand/70 my-6">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-3 rounded-full text-center text-sm font-medium transition-all ${
                  tier.highlighted
                    ? "bg-nam-white text-nam-black"
                    : "border border-nam-white/20 text-nam-white"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={stagger(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="text-center mt-6"
        >
          <Link
            href="/pricing"
            className="text-sm text-nam-sand/60 hover:text-nam-white transition-colors underline underline-offset-4 decoration-nam-sand/20"
          >
            {dict.mobileHome.viewFullPricing}
          </Link>
        </motion.div>
      </section>

      {/* ───── About + Founders ───── */}
      <section id="about" className="py-20 px-6 bg-nam-indigo/10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl mb-6 leading-tight">
            {dict.mobileHome.aboutHeading1}
            <br />
            {dict.mobileHome.aboutHeading2}
          </h2>
          <p className="text-base text-nam-sand/70 font-light leading-relaxed">
            {dict.mobileHome.aboutDesc}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="flex gap-8 mb-16"
        >
          {[
            { value: dict.mobileHome.stat1Value, label: dict.mobileHome.stat1Label },
            { value: dict.mobileHome.stat2Value, label: dict.mobileHome.stat2Label },
            { value: dict.mobileHome.stat3Value, label: dict.mobileHome.stat3Label },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-serif mb-1">{s.value}</div>
              <p className="text-[10px] uppercase tracking-widest text-nam-sand/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Founders */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="mb-6"
        >
          <h3 className="font-serif text-2xl mb-2">{dict.mobileHome.foundersHeading}</h3>
          <p className="text-nam-sand/50 text-sm">
            {dict.mobileHome.foundersSub}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: dict.mobileHome.founder1Name,
              photo: "/hani-photo.jpeg",
              role: dict.mobileHome.founder1Role,
            },
            {
              name: dict.mobileHome.founder2Name,
              photo: "/ahmed-photo.jpeg",
              role: dict.mobileHome.founder2Role,
            },
          ].map((founder, i) => (
            <motion.div
              key={founder.photo}
              variants={stagger(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
              className="flex flex-col items-center text-center p-4 rounded-2xl border border-nam-sand/10 bg-nam-white/[0.01]"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border border-nam-sand/20 mb-3">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="w-full object-cover object-center"
                />
              </div>
              <h4 className="font-serif text-base text-nam-white mb-0.5">
                {founder.name}
              </h4>
              <p className="text-[10px] text-nam-sand/50 uppercase tracking-wider">
                {founder.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Contact ───── */}
      <section id="contact" className="py-20 px-6">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          className="mb-10"
        >
          <h2 className="font-serif text-3xl mb-4">{dict.mobileHome.contactHeading}</h2>
          <p className="text-nam-sand/60 text-sm">
            {dict.mobileHome.contactSub}
          </p>
        </motion.div>

        <motion.form
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewOnce}
          onSubmit={handleSubmit}
          className="space-y-5 bg-nam-black/40 p-8 rounded-2xl border border-nam-white/10"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-nam-sand/40 mb-2">
              {dict.mobileHome.fullName}
            </label>
            <input
              type="text"
              required
              placeholder={dict.mobileHome.fullNamePlaceholder}
              className="w-full bg-nam-black/50 border border-nam-white/10 rounded-xl px-4 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand transition-all"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-nam-sand/40 mb-2">
              {dict.mobileHome.workEmail}
            </label>
            <input
              type="email"
              required
              placeholder={dict.mobileHome.workEmailPlaceholder}
              className="w-full bg-nam-black/50 border border-nam-white/10 rounded-xl px-4 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand transition-all"
            />
          </div>
          <div className="relative">
            <label className="block text-xs uppercase tracking-widest text-nam-sand/40 mb-2">
              {dict.mobileHome.inquiryType}
            </label>
            <select
              required
              defaultValue=""
              className="w-full bg-nam-black/50 border border-nam-white/10 rounded-xl px-4 py-3 text-nam-white appearance-none focus:outline-none focus:border-nam-sand transition-all"
            >
              <option value="" disabled className="text-nam-sand/20">
                {dict.mobileHome.selectOption}
              </option>
              <option value="enterprise">{dict.mobileHome.enterpriseSales}</option>
              <option value="partnership">{dict.mobileHome.strategicPartnership}</option>
              <option value="press">{dict.mobileHome.pressMedia}</option>
              <option value="other">{dict.mobileHome.otherInquiry}</option>
            </select>
            <div className="absolute right-4 bottom-3 pointer-events-none text-nam-sand/50">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-nam-sand/40 mb-2">
              {dict.mobileHome.message}
            </label>
            <textarea
              rows={3}
              required
              placeholder={dict.mobileHome.messagePlaceholder}
              className="w-full bg-nam-black/50 border border-nam-white/10 rounded-xl px-4 py-3 text-nam-white placeholder-nam-sand/20 focus:outline-none focus:border-nam-sand transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-nam-white text-nam-black font-medium rounded-xl hover:bg-nam-sand transition-all"
          >
            {dict.mobileHome.submitInquiry}
          </button>
          <p className="text-[10px] text-nam-sand/40 text-center">
            {dict.mobileHome.privacyText}{" "}
            <Link
              href="/legal"
              className="text-nam-sand/60 underline underline-offset-2"
            >
              {dict.mobileHome.privacyLink}
            </Link>
            .
          </p>
        </motion.form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
