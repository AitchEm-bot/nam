import MobileHome from "@/components/MobileHome";
import DesktopHome from "@/components/DesktopHome";

export default function Home() {
  return (
    <>
      {/* Mobile: Single-page scrolling view */}
      <div className="md:hidden">
        <MobileHome />
      </div>

      {/* Desktop: Current hero page */}
      <DesktopHome />
    </>
  );
}
