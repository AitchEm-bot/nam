"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { dict, locale } = useI18n();

  return (
    <footer className="bg-nam-black border-t border-nam-sand/10 py-12 md:py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className={`font-serif text-2xl text-nam-white hover:opacity-80 transition-opacity duration-300 ink-diffusion ${locale === "ar" ? "tracking-normal" : "tracking-[0.25em] uppercase"}`}
            >
              {locale === "ar" ? "نَم" : "NAM"}
            </Link>
            <p className="text-nam-sand/60 text-sm mt-4 font-light">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-nam-white font-medium text-sm mb-4 tracking-[0.05em]">
              {dict.footer.product}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.features}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.demo}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-nam-white font-medium text-sm mb-4 tracking-[0.05em]">
              {dict.footer.company}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-nam-white font-medium text-sm mb-4 tracking-[0.05em]">
              {dict.footer.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  {dict.footer.termsPrivacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-nam-sand/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nam-sand/50 text-xs">
            {dict.footer.copyright}
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            {/* Twitter / X — replace href="#" with real URL when available */}
            <Link
              href="#"
              className="text-nam-sand/50 hover:text-nam-white text-sm transition-colors"
            >
              {dict.footer.twitter}
            </Link>
            {/* LinkedIn — replace href="#" with real URL when available */}
            <Link
              href="#"
              className="text-nam-sand/50 hover:text-nam-white text-sm transition-colors"
            >
              {dict.footer.linkedin}
            </Link>
            {/* Instagram — replace href="#" with real URL when available */}
            <Link
              href="#"
              className="text-nam-sand/50 hover:text-nam-white text-sm transition-colors"
            >
              {dict.footer.instagram}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
