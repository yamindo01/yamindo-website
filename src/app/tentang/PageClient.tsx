"use client";

import { useState } from "react";
import {
  Eye,
  Target,
  Clock,
  FileText,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import Testimonials from "@/components/yamindo/Testimonials";

interface AboutSectionItem {
  id: string;
  type: string;
  title: string;
  en_title: string;
  content: string;
  en_content: string;
  image: string;
  items: string;
  en_items: string;
  order: number;
  active: boolean;
}

interface TestimonialItem {
  id: string;
  name: string;
  en_name: string;
  role: string;
  en_role: string;
  text: string;
  en_text: string;
  image: string;
  rating: number;
  tag: string;
  en_tag: string;
  active: boolean;
}

function parseItems(section: AboutSectionItem, lang: "id" | "en"): string[] {
  try {
    if (lang === "en" && section.en_items) {
      const parsed = JSON.parse(section.en_items);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]) return parsed;
    }
    const parsed = JSON.parse(section.items || "[]");
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // ignore
  }
  return [];
}

export default function PageClient({
  sections,
  testimonials,
}: {
  sections: AboutSectionItem[];
  testimonials: TestimonialItem[];
}) {
  const { lang, t } = useLang();

  const visionSection = sections.find((s) => s.type === "vision");
  const missionSection = sections.find((s) => s.type === "mission");
  const historySection = sections.find((s) => s.type === "history");
  const legalitySection = sections.find((s) => s.type === "legality");

  const visionItems = visionSection ? parseItems(visionSection, lang) : [];
  const missionItems = missionSection ? parseItems(missionSection, lang) : [];
  const historyItems = historySection ? parseItems(historySection, lang) : [];
  const legalityItems = legalitySection ? parseItems(legalitySection, lang) : [];

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {t("Tentang Kami", "About Us")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t(
              "Yayasan Yasir Amin Indonesia",
              "Yasir Amin Indonesia Foundation"
            )}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t(
              "Mengenal lebih dekat visi, misi, dan perjalanan kami dalam memberdayakan masyarakat Indonesia.",
              "Get to know our vision, mission, and journey in empowering Indonesian communities."
            )}
          </p>
        </div>
      </section>

      {/* ====== VISION SECTION ====== */}
      {visionSection && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                {visionSection.image ? (
                  <img
                    src={visionSection.image}
                    alt={getField(visionSection, "title", lang)}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="rounded-2xl shadow-xl w-full h-[400px] bg-gradient-soft flex items-center justify-center">
                    <Eye className="w-24 h-24 text-[var(--yamindo-teal)]/30" />
                  </div>
                )}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--yamindo-gold)]/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[var(--yamindo-teal-light)] rounded-2xl -z-10" />
              </div>
              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                  <Eye className="w-4 h-4" />
                  {t("Visi Kami", "Our Vision")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {getField(visionSection, "title", lang)}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {getField(visionSection, "content", lang)}
                </p>
                {visionItems.length > 0 && (
                  <ul className="space-y-3">
                    {visionItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--yamindo-teal)] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== MISSION SECTION ====== */}
      {missionSection && (
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content (left on desktop) */}
              <div className="order-2 md:order-1">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                  <Target className="w-4 h-4" />
                  {t("Misi Kami", "Our Mission")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {getField(missionSection, "title", lang)}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {getField(missionSection, "content", lang)}
                </p>
                {missionItems.length > 0 && (
                  <ol className="space-y-4">
                    {missionItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--yamindo-teal)] text-white text-sm font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-foreground/80 pt-1">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {/* Decorative visual */}
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="rounded-2xl shadow-xl bg-gradient-to-br from-[var(--yamindo-teal)] to-[var(--yamindo-teal-dark)] p-8 md:p-12 text-white">
                    <Target className="w-16 h-16 mb-6 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">
                      {t("Misi Utama", "Core Mission")}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {t(
                        "Kami berkomitmen untuk menjalankan setiap misi dengan penuh tanggung jawab dan dedikasi tinggi demi kemajuan bangsa.",
                        "We are committed to carrying out every mission with full responsibility and high dedication for the progress of the nation."
                      )}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{missionItems.length}</div>
                        <div className="text-sm text-white/60">
                          {t("Poin Misi", "Mission Points")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[var(--yamindo-coral)]/20 rounded-full -z-10" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--yamindo-gold)]/20 rounded-full -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== HISTORY / TIMELINE SECTION ====== */}
      {historySection && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
                <Clock className="w-4 h-4" />
                {t("Sejarah Kami", "Our History")}
                <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {getField(historySection, "title", lang)}
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                {getField(historySection, "content", lang)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="md:sticky md:top-24">
                {historySection.image ? (
                  <img
                    src={historySection.image}
                    alt={getField(historySection, "title", lang)}
                    className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                  />
                ) : (
                  <div className="rounded-2xl shadow-lg w-full h-[350px] bg-gradient-warm flex items-center justify-center">
                    <Clock className="w-20 h-20 text-[var(--yamindo-coral)]/30" />
                  </div>
                )}
              </div>

              {/* Timeline */}
              <div className="relative">
                {historyItems.length > 0 && (
                  <div className="relative pl-8 border-l-2 border-[var(--yamindo-teal)]/20">
                    {historyItems.map((item, idx) => (
                      <div key={idx} className="relative mb-8 last:mb-0">
                        {/* Timeline dot */}
                        <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[var(--yamindo-teal)] border-4 border-white shadow-md" />
                        <div className="bg-gradient-soft rounded-xl p-5 shadow-sm">
                          <span className="text-xs font-semibold text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] px-3 py-1 rounded-full">
                            {t(`Tahap ${idx + 1}`, `Phase ${idx + 1}`)}
                          </span>
                          <p className="text-foreground/80 mt-2 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== LEGALITY SECTION ====== */}
      {legalitySection && (
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                <FileText className="w-4 h-4" />
                {t("Legalitas", "Legality")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {getField(legalitySection, "title", lang)}
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                {getField(legalitySection, "content", lang)}
              </p>
            </div>

            {legalityItems.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {legalityItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-[var(--yamindo-teal)]" />
                    </div>
                    <p className="text-foreground/80 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ====== TESTIMONIALS ====== */}
      {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
    </>
  );
}
