import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | NAM Voice Intelligence",
};

export default function CareersPage() {
  return <CareersContent />;
}
