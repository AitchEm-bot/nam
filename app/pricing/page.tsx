import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing Plans | NAM Voice Intelligence",
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-nam-black overflow-x-hidden font-sans text-nam-white">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(28,34,48,0.25)_0%,rgba(11,11,12,0)_60%)] pointer-events-none" />
      <div className="fixed inset-0 z-0 noise-overlay" />

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content */}
      <PricingContent />

      {/* Footer */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
}
