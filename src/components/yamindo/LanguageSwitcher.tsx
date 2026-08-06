"use client";

import { useLang, Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] transition-all text-sm font-medium text-foreground/70 hover:text-[var(--yamindo-teal)]"
      aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      <Globe className="w-4 h-4" />
      <span
        className={`text-xs font-bold ${
          lang === "en"
            ? "bg-[var(--yamindo-teal)] text-white rounded px-1.5 py-0.5"
            : "bg-muted rounded px-1.5 py-0.5"
        }`}
      >
        EN
      </span>
      <span
        className={`text-xs font-bold ${
          lang === "id"
            ? "bg-[var(--yamindo-teal)] text-white rounded px-1.5 py-0.5"
            : "bg-muted rounded px-1.5 py-0.5"
        }`}
      >
        ID
      </span>
    </button>
  );
}
