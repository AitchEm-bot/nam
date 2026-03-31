import type { Metadata } from "next";
import ConfirmedContent from "./ConfirmedContent";

export const metadata: Metadata = {
  title: "Submission Confirmed | NAM Voice Intelligence",
};

export default function ConfirmedPage() {
  return <ConfirmedContent />;
}
