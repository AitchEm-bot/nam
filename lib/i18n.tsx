"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./dictionaries/en";
import ar from "./dictionaries/ar";
import type { Dictionary } from "./dictionaries/en";

type Locale = "en" | "ar";

type I18nContextValue = {
  dict: Dictionary;
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const dictionaries = { en, ar } as const;

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "ar")) {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";
      setLocaleState(browserLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <I18nContext.Provider
      value={{
        dict: dictionaries[locale],
        locale,
        dir: locale === "ar" ? "rtl" : "ltr",
        setLocale,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export type { Locale, Dictionary };
