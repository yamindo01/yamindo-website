"use client";

import { Heart, Target, TrendingUp, ArrowLeft, CheckCircle2, Users } from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useBankAccounts } from "@/lib/useBankAccounts";
import DonationModal from "@/components/yamindo/DonationModal";
import { useState } from "react";

export default function PageClient({
  program,
}: {
  program: Record<string, any>;
}) {
  const { lang, t } = useLang();
  const [modalOpen, setModalOpen] = useState(false);
  const bankAccounts = useBankAccounts();

  const title = getField(program, "title", lang);
  const description = getField(program, "description", lang);
  const content = getField(program, "content", lang);
  const category = getField(program, "category", lang);

  const paragraphs = content
    ? content
        .split("\n\n")
        .filter((p: string) => p.trim())
    : [];

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[360px] md:min-h-[440px] flex items-center justify-center overflow-hidden">
        {program.image ? (
          <div className="absolute inset-0">
            <img
              src={program.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80')] bg-cover bg-center" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          {category && (
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-4 text-sm px-4 py-1">
              {category}
            </Badge>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto line-clamp-3">
            {description}
          </p>
        </div>
      </section>

      {/* ====== PROGRESS BAR ====== */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">{t("Terkumpul", "Raised")}</span>
                <span className="font-bold text-[var(--yamindo-teal)]">{program.raised}</span>
              </div>
              <Progress value={program.percent} className="h-3" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{t("Target", "Goal")}</span>
                <span className="font-semibold text-foreground">{program.goal}</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold text-[var(--yamindo-teal)]">{program.percent}%</div>
              <p className="text-xs text-muted-foreground mt-1">{t("Tercapai", "Achieved")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NARRATIVE CONTENT ====== */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-4">
          {paragraphs.length > 0 ? (
            <div className="prose prose-lg max-w-none space-y-6">
              {paragraphs.map((para: string, idx: number) => {
                // Check if paragraph starts with "##" for heading
                if (para.startsWith("## ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-8 bg-[var(--yamindo-teal)] rounded-full" />
                      {para.replace("## ", "")}
                    </h2>
                  );
                }
                // Check if paragraph starts with "- " for list items
                if (para.startsWith("- ")) {
                  const items = para.split("\n").filter((l: string) => l.startsWith("- "));
                  return (
                    <ul key={idx} className="space-y-2 ml-1">
                      {items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[var(--yamindo-teal)] mt-0.5 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {item.replace("- ", "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                return (
                  <p
                    key={idx}
                    className="text-muted-foreground leading-relaxed text-base md:text-lg"
                  >
                    {para}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-[var(--yamindo-teal)]/40" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t("Konten segera hadir", "Content coming soon")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Narasi lengkap program ini sedang disiapkan.",
                  "The full narrative for this program is being prepared."
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ====== IMPACT STATS ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("Dampak Program", "Program Impact")}
            </h2>
            <p className="text-muted-foreground mt-2">
              {t(
                "Pencapaian nyata dari program ini",
                "Real achievements from this program"
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, num: "500+", label: t("Penerima Manfaat", "Beneficiaries") },
              { icon: TrendingUp, num: "3 Tahun", label: t("Durasi Program", "Program Duration") },
              { icon: Heart, num: "100+", label: t("Donatur", "Donors") },
              { icon: Target, num: `${program.percent}%`, label: t("Terkumpul", "Raised") },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-6 rounded-2xl bg-gradient-soft">
                  <div className="w-12 h-12 rounded-xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[var(--yamindo-teal)]" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{item.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("Bantu Kami Wujudkan Program Ini", "Help Us Realize This Program")}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Setiap donasi yang Anda berikan akan langsung disalurkan kepada penerima manfaat.",
              "Every donation you give will be directly distributed to the beneficiaries."
            )}
          </p>
          <Button
            size="lg"
            className="bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-xl px-10 font-semibold shadow-lg text-base"
            onClick={() => setModalOpen(true)}
          >
            <Heart className="w-5 h-5 mr-2" />
            {t("Donasi Sekarang", "Donate Now")}
          </Button>
          <div className="mt-6">
            <Button
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
              asChild
            >
              <a href="/program">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("Kembali ke Semua Program", "Back to All Programs")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <DonationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        programTitle={program.title}
        programTitleEn={program.en_title}
        programGoal={program.goal}
        bankAccounts={bankAccounts}
      />
    </>
  );
}
