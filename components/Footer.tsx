import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-nam-black border-t border-nam-sand/10 py-12 md:py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl text-nam-white tracking-[0.25em] uppercase hover:opacity-80 transition-opacity duration-300 ink-diffusion"
            >
              NAM
            </Link>
            <p className="text-nam-sand/60 text-sm mt-4 font-light">
              AI voice intelligence for Saudi enterprise.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-nam-white font-medium text-sm mb-4 tracking-[0.05em]">
              PRODUCT
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-nam-white font-medium text-sm mb-4 tracking-[0.05em]">
              COMPANY
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-nam-white font-medium text-sm mb-4 tracking-[0.05em]">
              LEGAL
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal"
                  className="text-nam-sand/70 hover:text-nam-white text-sm transition-colors"
                >
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-nam-sand/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nam-sand/50 text-xs">
            &copy; 2026 NAM. Built in Saudi Arabia. Designed for the world.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            {/* Twitter / X — replace href="#" with real URL when available */}
            <Link
              href="#"
              className="text-nam-sand/50 hover:text-nam-white text-sm transition-colors"
            >
              Twitter
            </Link>
            {/* LinkedIn — replace href="#" with real URL when available */}
            <Link
              href="#"
              className="text-nam-sand/50 hover:text-nam-white text-sm transition-colors"
            >
              LinkedIn
            </Link>
            {/* Instagram — replace href="#" with real URL when available */}
            <Link
              href="#"
              className="text-nam-sand/50 hover:text-nam-white text-sm transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
