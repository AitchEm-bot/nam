import type { Metadata } from "next";
import UseCasesContent from "./UseCasesContent";

export const metadata: Metadata = {
  title: "Use Cases | NAM Voice Intelligence",
};

export default function UseCasesPage() {
  return <UseCasesContent />;
}
