"use client";

import { useState } from "react";
import {
  GraduationCap,
  Users,
  Heart,
  ShieldAlert,
  TrendingUp,
  Stethoscope,
  HandCoins,
  Landmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ====== Icon Map ======
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Users,
  Heart,
  ShieldAlert,
  TrendingUp,
  Stethoscope,
  HandCoins,
  Landmark,
};

// ====== Types ======
interface ServiceDetailItem {
  id: string;
  slug: string;
  title: string;
  en_title: string;
  short_desc: string;
  en_short_desc: string;
  content: string;
  en_content: string;
  image: string;
  icon: string;
  features: string;
  en_features: string;
  order: number;
  active: boolean;
}

// ====== Helpers ======
function parseFeatures(item: ServiceDetailItem, lang: "id" | "en"): string[] {
  try {
    if (lang === "en" && item.en_features) {
      const parsed = JSON.parse(item.en_features);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]) return parsed;
    }
    const parsed = JSON.parse(item.features || "[]");
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // ignore
  }
  return [];
}

export default function PageClient({
  data,
  pageContents = [],
}: {
  data: ServiceDetailItem[];
  pageContents?: Record<string, any>[];
}) {
  const { lang, t } = useLang();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const selectedItem = selectedSlug
    ? data.find((s) => s.slug === selectedSlug) ?? null
    : null;

  const features = selectedItem
    ? parseFeatures(selectedItem, lang)
    : [];

  // ====== PageContent sections ======
  const heroSection = pageContents.find((pc) => pc.section === "hero");
  const statsSection = pageContents.find((pc) => pc.section === "stats");
  const ctaSection = pageContents.find((pc) => pc.section === "cta");

  // Hero subtitle: DB first, fallback to hardcoded
  const heroSubtitle = heroSection
    ? lang === "en" && heroSection.en_content
      ? heroSection.en_content
      : heroSection.content
    : t(
        "Berbagai program layanan yang kami sediakan untuk memberdayakan masyarakat Indonesia menuju kehidupan yang lebih baik.",
        "Various service programs we provide to empower Indonesian communities toward a better life."
      );

  // Stats: parse items/en_items JSON array from DB, fallback to hardcoded
  let statsData: { num: string; label: string; en_label: string }[] = [];
  if (statsSection) {
    try {
      const raw = lang === "en" && statsSection.en_items ? statsSection.en_items : statsSection.items;
      const parsed = JSON.parse(raw || "[]");
      if (Array.isArray(parsed) && parsed.length > 0) {
        statsData = parsed;
      }
    } catch {
      // ignore parse errors
    }
  }
  const fallbackStats = [
    { num: "8", label: "Layanan Utama", en_label: "Core Services" },
    { num: "30+", label: "Provinsi Terjangkau", en_label: "Provinces Reached" },
    { num: "50K+", label: "Penerima Manfaat", en_label: "Beneficiaries" },
    { num: "100+", label: "Relawan Aktif", en_label: "Active Volunteers" },
  ];
  const displayStats = statsData.length > 0
    ? statsData
    : fallbackStats;

  // CTA: DB first, fallback to hardcoded
  const ctaTitle = ctaSection
    ? lang === "en" && ctaSection.en_title
      ? ctaSection.en_title
      : ctaSection.title
    : t("Bergabunglah Bersama Kami", "Join Us Today");

  const ctaContent = ctaSection
    ? lang === "en" && ctaSection.en_content
      ? ctaSection.en_content
      : ctaSection.content
    : t(
        "Setiap kontribusi Anda membuat perbedaan besar bagi kehidupan masyarakat Indonesia.",
        "Every contribution you make creates a big difference in Indonesian communities lives."
      );

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {t("Layanan Kami", "Our Services")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t(
              "Layanan Yamindo",
              "Yamindo Services"
            )}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* ====== SERVICE STATS BAR ====== */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {displayStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-[var(--yamindo-teal)]">
                  {stat.num}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">
                  {lang === "en" && stat.en_label ? stat.en_label : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              {t("Apa Yang Kami Lakukan", "What We Do")}
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(
                "Layanan Lengkap Kami",
                "Our Complete Services"
              )}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {t(
                "Klik layanan mana pun untuk melihat detail dan fitur lengkap program kami.",
                "Click any service to see details and full program features."
              )}
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((service) => {
              const IconComponent = iconMap[service.icon] || Heart;
              const isSelected = selectedSlug === service.slug;

              return (
                <Card
                  key={service.id}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-xl ${
                    isSelected
                      ? "ring-2 ring-[var(--yamindo-teal)] shadow-lg"
                      : "border-border/50 hover:border-[var(--yamindo-teal)]/30"
                  }`}
                  onClick={() =>
                    setSelectedSlug(isSelected ? null : service.slug)
                  }
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={getField(service, "title", lang)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-[var(--yamindo-teal)]/40" />
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute top-3 left-3 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[var(--yamindo-teal)]" />
                    </div>
                    {/* Badge */}
                    <div className="absolute bottom-3 right-3">
                      <Badge className="bg-white/90 backdrop-blur-sm text-foreground border-0 text-xs font-medium px-2.5 py-1">
                        {isSelected
                          ? t("Tutup", "Close")
                          : t("Lihat Detail", "View Detail")}
                        {isSelected ? (
                          <ChevronUp className="w-3 h-3 ml-1" />
                        ) : (
                          <ChevronDown className="w-3 h-3 ml-1" />
                        )}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {getField(service, "title", lang)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {getField(service, "short_desc", lang)}
                    </p>

                    {/* Quick features preview */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {parseFeatures(service, lang)
                        .slice(0, 2)
                        .map((f, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)]/60 px-2 py-0.5 rounded-full font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            {f}
                          </span>
                        ))}
                      {parseFeatures(service, lang).length > 2 && (
                        <span className="inline-flex items-center text-xs text-muted-foreground px-2 py-0.5 rounded-full">
                          +{parseFeatures(service, lang).length - 2}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== DETAIL PANEL ====== */}
      {selectedItem && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                {selectedItem.image ? (
                  <img
                    src={selectedItem.image}
                    alt={getField(selectedItem, "title", lang)}
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="rounded-2xl shadow-xl w-full h-[400px] bg-gradient-soft flex items-center justify-center">
                    {(() => {
                      const IconComponent = iconMap[selectedItem.icon] || Heart;
                      return (
                        <IconComponent className="w-24 h-24 text-[var(--yamindo-teal)]/30" />
                      );
                    })()}
                  </div>
                )}
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--yamindo-gold)]/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[var(--yamindo-teal-light)] rounded-2xl -z-10" />
                {/* Icon overlay */}
                <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center">
                  {(() => {
                    const IconComponent = iconMap[selectedItem.icon] || Heart;
                    return (
                      <IconComponent className="w-7 h-7 text-[var(--yamindo-teal)]" />
                    );
                  })()}
                </div>
              </div>

              {/* Content */}
              <div className="lg:sticky lg:top-24">
                {/* Close button */}
                <div className="flex items-center justify-between mb-4">
                  {(() => {
                    const IconComponent = iconMap[selectedItem.icon] || Heart;
                    return (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider">
                        <IconComponent className="w-4 h-4" />
                        {getField(selectedItem, "title", lang)}
                      </span>
                    );
                  })()}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedSlug(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4 mr-1" />
                    {t("Tutup Detail", "Close Detail")}
                  </Button>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {getField(selectedItem, "title", lang)}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {getField(selectedItem, "content", lang)}
                </p>

                {/* Features list */}
                {features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {t("Fitur Program", "Program Features")}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-gradient-soft rounded-xl p-4 border border-border/30"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[var(--yamindo-teal)] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-foreground/80 text-sm font-medium leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {ctaTitle}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {ctaContent}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 font-semibold shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              {t("Donasi Sekarang", "Donate Now")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 rounded-xl px-8 font-semibold"
            >
              {t("Hubungi Kami", "Contact Us")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}