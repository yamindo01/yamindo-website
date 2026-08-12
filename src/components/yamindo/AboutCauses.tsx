"use client";

import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLang, getField } from "@/lib/i18n";
import { useBankAccounts } from "@/lib/useBankAccounts";
import DonationModal from "@/components/yamindo/DonationModal";

interface CauseItem {
  id: string;
  title: string;
  en_title: string;
  description: string;
  en_description: string;
  image: string;
  raised: string;
  goal: string;
  percent: number;
  active: boolean;
}

export default function AboutCauses({
  causes,
}: {
  causes: CauseItem[];
}) {
  const { lang, t } = useLang();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<CauseItem | null>(null);
  const bankAccounts = useBankAccounts();

  const openDonationModal = (cause: CauseItem) => {
    setSelectedCause(cause);
    setModalOpen(true);
  };

  return (
    <section id="program" className="py-16 md:py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            {t("Program Unggulan", "Featured Programs")}
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("Program Donasi Populer Kami", "Our Popular Donation Programs")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            {t("Dukung program-program kami yang berdampak langsung bagi masyarakat Indonesia", "Support our programs that directly impact Indonesian communities")}
          </p>
        </div>

        {/* Causes - Full Width Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={cause.image}
                  alt={getField(cause, "title", lang)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[var(--yamindo-teal-light)] rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[var(--yamindo-teal)]" />
                  </div>
                  <span className="text-xs font-medium text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] px-2 py-0.5 rounded-full">
                    Yamindo
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1">
                  <a href="#" className="hover:text-[var(--yamindo-teal)] transition-colors">
                    {getField(cause, "title", lang)}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {getField(cause, "description", lang)}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <div>
                    {t("Terkumpul", "Raised")} <span className="font-semibold text-[var(--yamindo-teal)]">{cause.raised}</span>
                  </div>
                  <div>
                    {t("Target", "Goal")} <span className="font-semibold text-foreground">{cause.goal}</span>
                  </div>
                </div>
                <Progress value={cause.percent} className="h-2 mb-2" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--yamindo-teal)]">{cause.percent}%</span>
                  <Button
                    size="sm"
                    className="bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-full text-xs px-4"
                    onClick={() => openDonationModal(cause)}
                  >
                    <Heart className="w-3 h-3 mr-1 fill-white" />
                    {t("Donasi", "Donate")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selengkapnya Link */}
        <div className="pt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[var(--yamindo-teal)] text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] text-sm font-medium px-6"
          >
            <a href="/program">
              {t("Selengkapnya", "View All Programs")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Donation Modal */}
        {selectedCause && (
          <DonationModal
            open={modalOpen}
            onOpenChange={setModalOpen}
            programTitle={selectedCause.title}
            programTitleEn={selectedCause.en_title}
            programGoal={selectedCause.goal}
            bankAccounts={bankAccounts}
          />
        )}
      </div>
    </section>
  );
}