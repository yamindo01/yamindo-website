"use client";

import { useState, useMemo } from "react";
import {
  Heart,
  TrendingUp,
  Target,
  Filter,
  Search,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { useBankAccounts } from "@/lib/useBankAccounts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import DonationModal from "@/components/yamindo/DonationModal";

// ====== Types ======
interface ProgramDetailItem {
  id: string;
  title: string;
  en_title: string;
  description: string;
  en_description: string;
  image: string;
  category: string;
  en_category: string;
  raised: string;
  goal: string;
  percent: number;
  status: string;
  order: number;
  active: boolean;
}

// ====== Helpers ======
function getCategoryColor(category: string): string {
  const lower = category.toLowerCase();
  if (lower.includes("pendidikan") || lower.includes("education")) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (lower.includes("sosial") || lower.includes("social")) return "bg-amber-50 text-amber-700 border-amber-200";
  if (lower.includes("kesehatan") || lower.includes("health")) return "bg-rose-50 text-rose-700 border-rose-200";
  if (lower.includes("wakaf") || lower.includes("waqf")) return "bg-violet-50 text-violet-700 border-violet-200";
  return "bg-slate-50 text-slate-700 border-slate-200";
}

function getProgressColor(percent: number): string {
  if (percent >= 80) return "bg-[var(--yamindo-teal)]";
  if (percent >= 50) return "bg-[var(--yamindo-coral)]";
  return "bg-[var(--yamindo-gold)]";
}

function getStatusLabel(status: string, lang: "id" | "en"): string {
  if (status === "active") return lang === "id" ? "Aktif" : "Active";
  if (status === "completed") return lang === "id" ? "Selesai" : "Completed";
  if (status === "paused") return lang === "id" ? "Ditunda" : "Paused";
  return status;
}

export default function PageClient({
  data,
  pageContents = [],
}: {
  data: ProgramDetailItem[];
  pageContents?: Record<string, any>[];
}) {
  const { lang, t } = useLang();

  // ====== PageContent helper ======
  function getContentField(section: string, field: string) {
    const s = pageContents.find(p => p.section === section);
    if (!s) return "";
    return lang === "en" ? (s["en_" + field] || s[field]) : (s[field] || s["en_" + field]);
  }

  // Hero section from DB
  const heroSection = pageContents.find((pc) => pc.section === "hero");
  const heroBadge = heroSection
    ? getContentField("hero", "title")
    : t("Program Kami", "Our Programs");
  const heroSubtitle = heroSection
    ? getContentField("hero", "content")
    : t(
        "Dukung program-program donasi kami yang berdampak langsung bagi masyarakat Indonesia.",
        "Support our donation programs that directly impact Indonesian communities."
      );

  // Stats section from DB
  const statsSection = pageContents.find((pc) => pc.section === "stats");
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

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] =
    useState<ProgramDetailItem | null>(null);
  const bankAccounts = useBankAccounts();

  const openDonationModal = (program: ProgramDetailItem) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const catSet = new Set<string>();
    data.forEach((item) => {
      const cat = getField(item, "category", lang);
      if (cat) catSet.add(cat);
    });
    return Array.from(catSet);
  }, [data, lang]);

  // Filter programs
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const cat = getField(item, "category", lang);
      const title = getField(item, "title", lang);
      const desc = getField(item, "description", lang);

      // Category filter
      if (activeFilter !== "all") {
        const filterLabel =
          activeFilter === "Semua"
            ? ""
            : activeFilter === "All"
            ? ""
            : activeFilter;
        if (cat !== filterLabel && activeFilter !== "Semua" && activeFilter !== "All") {
          return false;
        }
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          title.toLowerCase().includes(q) ||
          desc.toLowerCase().includes(q) ||
          cat.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [data, activeFilter, searchQuery, lang]);

  // Stats
  const totalRaised = data.length;
  const avgPercent = data.length
    ? Math.round(data.reduce((sum, p) => sum + p.percent, 0) / data.length)
    : 0;

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {heroBadge}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t(
              "Program Donasi Aktif",
              "Active Donation Programs"
            )}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {(statsData.length > 0
              ? statsData
              : [
                  { num: `${totalRaised}`, label: "Program Aktif", en_label: "Active Programs" },
                  { num: `${avgPercent}%`, label: "Rata-rata Terkumpul", en_label: "Average Raised" },
                  { num: "4", label: "Kategori", en_label: "Categories" },
                  { num: "100+", label: "Donatur Baru/Bulan", en_label: "New Donors/Month" },
                ]
            ).map((stat) => (
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

      {/* ====== FILTERS ====== */}
      <section className="bg-white sticky top-0 z-20 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-4 h-4 text-muted-foreground mr-1" />
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
                className={`rounded-full text-xs font-medium px-4 ${
                  activeFilter === "all"
                    ? "bg-[var(--yamindo-teal)] text-white hover:bg-[var(--yamindo-teal-dark)]"
                    : "border-border/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("Semua", "All")}
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeFilter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-full text-xs font-medium px-4 ${
                    activeFilter === cat
                      ? "bg-[var(--yamindo-teal)] text-white hover:bg-[var(--yamindo-teal-dark)]"
                      : "border-border/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                placeholder={t("Cari program...", "Search programs...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-border/50 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROGRAMS GRID ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              {t(
                `Menampilkan ${filteredData.length} dari ${data.length} program`,
                `Showing ${filteredData.length} of ${data.length} programs`
              )}
            </p>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-[var(--yamindo-teal)]/40" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(
                  "Program tidak ditemukan",
                  "No programs found"
                )}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Coba ubah filter atau kata kunci pencarian Anda.",
                  "Try changing your filter or search keywords."
                )}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredData.map((program) => {
                const cat = getField(program, "category", lang);
                const catColor = getCategoryColor(cat);
                const progressColor = getProgressColor(program.percent);
                const statusLabel = getStatusLabel(program.status, lang);

                return (
                  <Card
                    key={program.id}
                    className="group overflow-hidden rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      {program.image ? (
                        <img
                          src={program.image}
                          alt={getField(program, "title", lang)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                          <Heart className="w-16 h-16 text-[var(--yamindo-teal)]/40" />
                        </div>
                      )}
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`text-xs font-medium px-2.5 py-1 border ${catColor}`}
                        >
                          {cat}
                        </Badge>
                      </div>
                      {/* Status badge */}
                      <div className="absolute top-3 right-3">
                        <Badge
                          className="text-xs font-medium px-2 py-0.5 bg-white/90 backdrop-blur-sm text-foreground border-0"
                        >
                          {statusLabel}
                        </Badge>
                      </div>
                      {/* Percentage */}
                      <div className="absolute bottom-3 right-3 bg-[var(--yamindo-teal)] text-white text-sm font-bold px-2.5 py-1 rounded-lg shadow-md">
                        {program.percent}%
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 flex flex-col gap-4">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {getField(program, "title", lang)}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {getField(program, "description", lang)}
                      </p>

                      {/* Progress section */}
                      <div className="space-y-2.5">
                        {/* Progress bar */}
                        <div className="relative">
                          <div className={`h-2.5 w-full rounded-full bg-gray-200 overflow-hidden`}>
                            <div
                              className={`h-full rounded-full transition-all duration-700 ease-out ${progressColor}`}
                              style={{ width: `${Math.min(program.percent, 100)}%` }}
                            />
                          </div>
                        </div>

                        {/* Amounts */}
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <span className="text-muted-foreground text-xs">
                              {t("Terkumpul", "Raised")}
                            </span>
                            <p className="font-bold text-foreground text-base">
                              {program.raised}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-muted-foreground text-xs">
                              {t("Target", "Goal")}
                            </span>
                            <p className="font-semibold text-foreground">
                              {program.goal}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Donate button */}
                      <Button
                        className="w-full bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white rounded-xl py-5 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                        onClick={() => openDonationModal(program)}
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        {t("Donasi Sekarang", "Donate Now")}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ====== SUMMARY STATS SECTION ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t(
                "Dampak Donasi Anda",
                "Your Donation Impact"
              )}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Bersama-sama kita telah menciptakan perubahan nyata bagi masyarakat Indonesia.",
                "Together we have created real change for Indonesian communities."
              )}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                num: "Rp 20.7 M",
                label: t("Total Donasi Terkumpul", "Total Donations Raised"),
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: Target,
                num: "8",
                label: t("Program Berjalan", "Ongoing Programs"),
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: Heart,
                num: "15K+",
                label: t("Donatur Setia", "Loyal Donors"),
                color: "bg-rose-50 text-rose-600",
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.label}
                  className="border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <CardContent className="p-8 flex flex-col items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      {item.num}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t(
              "Jadilah Bagian dari Perubahan",
              "Be Part of the Change"
            )}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Setiap rupiah yang Anda sumbangkan akan disalurkan secara transparan dan akuntabel kepada yang membutuhkan.",
              "Every rupiah you contribute will be distributed transparently and accountably to those in need."
            )}
          </p>
          <Button
            size="lg"
            className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-10 font-semibold shadow-lg text-base"
            onClick={() => {
              if (data.length > 0) openDonationModal(data[0]);
            }}
          >
            <Heart className="w-5 h-5 mr-2" />
            {t("Mulai Donasi", "Start Donating")}
          </Button>
        </div>
      </section>

      {/* Donation Modal */}
      {selectedProgram && (
        <DonationModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          programTitle={selectedProgram.title}
          programTitleEn={selectedProgram.en_title}
          programGoal={selectedProgram.goal}
          bankAccounts={bankAccounts}
        />
      )}
    </>
  );
}
