"use client";

import { useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  GraduationCap, Users, Heart, ShieldAlert, TrendingUp,
  Stethoscope, HandCoins, Landmark, CheckCircle2,
  ArrowLeft, ArrowRight, ChevronRight,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Users, Heart, ShieldAlert, TrendingUp,
  Stethoscope, HandCoins, Landmark,
};

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

function parseFeatures(item: ServiceDetailItem, lang: "id" | "en"): string[] {
  try {
    if (lang === "en" && item.en_features) {
      const parsed = JSON.parse(item.en_features);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]) return parsed;
    }
    const parsed = JSON.parse(item.features || "[]");
    if (Array.isArray(parsed)) return parsed;
  } catch { /* ignore */ }
  return [];
}

function parseItems(pc: Record<string, any>, lang: "id" | "en") {
  try {
    const raw = lang === "en" && pc.en_items ? pc.en_items : pc.items;
    return JSON.parse(raw || "[]");
  } catch { return []; }
}

export default function PageClient({
  service,
  pageContents = [],
  allServices = [],
}: {
  service: ServiceDetailItem;
  pageContents?: Record<string, any>[];
  allServices?: ServiceDetailItem[];
}) {
  const { lang, t } = useLang();
  const router = useRouter();
  const topRef = useRef<HTMLDivElement>(null);

  const features = parseFeatures(service, lang);
  const IconComponent = iconMap[service.icon] || Heart;

  // PageContent sections
  const heroPc = pageContents.find((pc) => pc.section === "hero");
  const programsPc = pageContents.find((pc) => pc.section === "programs");
  const statsPc = pageContents.find((pc) => pc.section === "stats");
  const processPc = pageContents.find((pc) => pc.section === "process");
  const ctaPc = pageContents.find((pc) => pc.section === "cta");

  // Programs list from PageContent
  const programsList = programsPc ? parseItems(programsPc, lang) : [];
  const statsList = statsPc ? parseItems(statsPc, lang) : [];
  const processList = processPc ? parseItems(processPc, lang) : [];

  // Navigate to service
  const currentIndex = allServices.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null;
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null;

  // Scroll to top on mount
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [service.slug]);

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section ref={topRef} className="relative min-h-[400px] md:min-h-[500px] flex items-end overflow-hidden">
        {service.image ? (
          <img
            src={service.image}
            alt={getField(service, "title", lang)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <button
              onClick={() => router.push("/layanan")}
              className="hover:text-white transition-colors"
            >
              {t("Layanan", "Services")}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">
              {getField(service, "title", lang)}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 text-xs font-medium">
              {t("Layanan Yamindo", "Yamindo Service")}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {getField(service, "title", lang)}
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-3xl leading-relaxed">
            {heroPc
              ? lang === "en" && heroPc.en_content
                ? heroPc.en_content
                : heroPc.content
              : getField(service, "short_desc", lang)}
          </p>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-8 bg-[var(--yamindo-teal)] rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {t("Tentang Layanan", "About This Service")}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  {getField(service, "content", lang)
                    .split("\n\n")
                    .map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base">
                        {para}
                      </p>
                    ))}
                </div>
              </div>

              {/* Programs / Sub-services */}
              {programsList.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-8 bg-[var(--yamindo-teal)] rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {programsPc?.title
                        ? lang === "en" && programsPc.en_title
                          ? programsPc.en_title
                          : programsPc.title
                        : t("Program Kami", "Our Programs")}
                    </h2>
                  </div>
                  {programsPc?.content && (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {lang === "en" && programsPc.en_content
                        ? programsPc.en_content
                        : programsPc.content}
                    </p>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {programsList.map((prog: any, idx: number) => (
                      <Card
                        key={idx}
                        className="border border-border/50 hover:border-[var(--yamindo-teal)]/30 hover:shadow-md transition-all duration-300"
                      >
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[var(--yamindo-teal-light)] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-[var(--yamindo-teal)]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm mb-1">
                              {prog.title || prog.name || prog}
                            </h3>
                            {prog.desc && (
                              <p className="text-muted-foreground text-xs leading-relaxed">
                                {prog.desc}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Process / Steps */}
              {processList.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-8 bg-[var(--yamindo-teal)] rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {processPc?.title
                        ? lang === "en" && processPc.en_title
                          ? processPc.en_title
                          : processPc.title
                        : t("Alur Layanan", "Service Process")}
                    </h2>
                  </div>
                  {processPc?.content && (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {lang === "en" && processPc.en_content
                        ? processPc.en_content
                        : processPc.content}
                    </p>
                  )}
                  <div className="space-y-4">
                    {processList.map((step: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--yamindo-teal)] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div className="pt-1.5">
                          <h3 className="font-semibold text-foreground text-sm mb-1">
                            {step.title || step.name || step}
                          </h3>
                          {step.desc && (
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {step.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Grid */}
              {features.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-8 bg-[var(--yamindo-teal)] rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {t("Fitur Unggulan", "Key Features")}
                    </h2>
                  </div>
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

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Quick info card */}
              <Card className="border border-border/50 overflow-hidden">
                <div className="bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)] p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-wider">
                        {t("Layanan Aktif", "Active Service")}
                      </p>
                      <p className="text-white font-bold">
                        {getField(service, "title", lang)}
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <Button
                    className="w-full bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] rounded-xl"
                    onClick={() => router.push("/kontak")}
                  >
                    {t("Hubungi Kami", "Contact Us")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-xl"
                    onClick={() => router.push("/program")}
                  >
                    {t("Lihat Program", "View Programs")}
                  </Button>
                </CardContent>
              </Card>

              {/* Other services */}
              <Card className="border border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-4">
                    {t("Layanan Lainnya", "Other Services")}
                  </h3>
                  <div className="space-y-2">
                    {allServices
                      .filter((s) => s.slug !== service.slug)
                      .map((s) => {
                        const SIcon = iconMap[s.icon] || Heart;
                        return (
                          <button
                            key={s.slug}
                            onClick={() => router.push(`/layanan/${s.slug}`)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--yamindo-teal-light)]/40 transition-colors text-left group"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[var(--yamindo-teal-light)]/60 flex items-center justify-center flex-shrink-0">
                              <SIcon className="w-4 h-4 text-[var(--yamindo-teal)]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground group-hover:text-[var(--yamindo-teal)] transition-colors truncate">
                                {getField(s, "title", lang)}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[var(--yamindo-teal)] transition-colors flex-shrink-0" />
                          </button>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      {statsList.length > 0 && (
        <section className="py-12 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {statsList.map((stat: any, idx: number) => (
                <div key={idx}>
                  <div className="text-3xl md:text-4xl font-bold text-[var(--yamindo-teal)]">
                    {stat.num || stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">
                    {stat.label || stat.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {ctaPc?.title
              ? lang === "en" && ctaPc.en_title
                ? ctaPc.en_title
                : ctaPc.title
              : t("Bergabunglah Bersama Kami", "Join Us Today")}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {ctaPc?.content
              ? lang === "en" && ctaPc.en_content
                ? ctaPc.en_content
                : ctaPc.content
              : t(
                  "Setiap kontribusi Anda membuat perbedaan besar bagi kehidupan masyarakat Indonesia.",
                  "Every contribution you make creates a big difference in Indonesian communities lives."
                )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 font-semibold shadow-lg"
              onClick={() => router.push("/kontak")}
            >
              <Heart className="w-5 h-5 mr-2" />
              {t("Donasi Sekarang", "Donate Now")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 rounded-xl px-8 font-semibold"
              onClick={() => router.push("/kontak")}
            >
              {t("Hubungi Kami", "Contact Us")}
            </Button>
          </div>
        </div>
      </section>

      {/* ====== PREV / NEXT NAV ====== */}
      <section className="py-8 bg-white border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {prevService ? (
              <button
                onClick={() => router.push(`/layanan/${prevService.slug}`)}
                className="flex items-center gap-2 text-muted-foreground hover:text-[var(--yamindo-teal)] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{t("Sebelumnya", "Previous")}</p>
                  <p className="text-sm font-medium text-foreground">
                    {getField(prevService, "title", lang)}
                  </p>
                </div>
              </button>
            ) : <div />}
            {nextService ? (
              <button
                onClick={() => router.push(`/layanan/${nextService.slug}`)}
                className="flex items-center gap-2 text-muted-foreground hover:text-[var(--yamindo-teal)] transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{t("Selanjutnya", "Next")}</p>
                  <p className="text-sm font-medium text-foreground">
                    {getField(nextService, "title", lang)}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}
