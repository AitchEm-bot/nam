import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 w-full flex justify-between items-center px-6 py-6 md:px-10 md:py-8 z-20">
      <div className="flex-shrink-0 opacity-0 animate-fade-up delay-100">
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl text-nam-white tracking-[0.25em] uppercase hover:opacity-80 transition-opacity duration-300 ink-diffusion"
        >
          NAM
        </Link>
      </div>
      <nav className="flex items-center gap-6 md:gap-8 opacity-0 animate-fade-up delay-200">
        <Link
          href="/signin"
          className="hidden sm:block text-sm font-medium text-nam-white/90 hover:text-nam-white transition-colors duration-200"
        >
          Sign in
        </Link>
        <Link
          href="/contact"
          className="bg-nam-white text-nam-black px-5 py-2.5 md:px-6 md:py-2.5 rounded-full text-sm font-medium hover:bg-nam-sand transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(247,245,242,0.1)] hover:shadow-[0_0_25px_rgba(232,227,217,0.2)]"
        >
          Talk to us
        </Link>
      </nav>
    </header>
  );
}
