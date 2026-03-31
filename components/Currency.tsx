"use client";

import { useI18n } from "@/lib/i18n";

export default function Currency({ amount }: { amount: number }) {
  const { locale } = useI18n();

  if (locale === "ar") {
    return (
      <span>
        {amount.toLocaleString("ar-SA")}{" "}
        <span className="icon-saudi_riyal_new" />
      </span>
    );
  }

  return <span>SAR {amount.toLocaleString()}</span>;
}
