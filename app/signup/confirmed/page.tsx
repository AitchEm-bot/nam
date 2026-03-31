import type { Metadata } from "next";
import SignupConfirmedContent from "./SignupConfirmedContent";

export const metadata: Metadata = {
  title: "Request Received | NAM Voice Intelligence",
};

export default function SignUpConfirmedPage() {
  return <SignupConfirmedContent />;
}
