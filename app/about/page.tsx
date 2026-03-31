import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About NAM | Heritage Meets Future",
};

export default function AboutPage() {
  return <AboutContent />;
}
