"use client";

import { useState } from "react";
import { Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLang, getField } from "@/lib/i18n";

interface PresetItem {
  id: string;
  label: string;
  en_label: string;
  amount: number | null;
  order: number;
  active: boolean;
}

export default function DonationCta({ presets }: { presets: PresetItem[] }) {
  const { lang, t } = useLang();
  const [selectedIdx, setSelectedIdx] = useState(1);
  const [customAmount, setCustomAmount] = useState("");

  const customPresetIdx = presets.findIndex((p) => p.amount === null);

  return (
    <section id="donasi" className="py-16 md:py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            <HandHeart className="w-4 h-4" />
            {t("Mulai Berdonasi", "Start Donating")}
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("Siap Membantu Masyarakat Indonesia?", "Ready to Help Indonesian Communities?")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            {t("Setiap rupiah yang Anda donasikan akan disalurkan secara transparan kepada mereka yang membutuhkan", "Every rupiah you donate will be distributed transparently to those in need")}
          </p>
        </div>

        {/* Donation Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-[var(--yamindo-teal)] text-white">
                {t("Sekali Donasi", "One-time Donation")}
              </button>
              <button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                {t("Donasi Rutin", "Recurring Donation")}
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {presets.map((preset, idx) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`py-3 rounded-xl text-sm font-medium transition-all border-2 ${
                    selectedIdx === idx
                      ? "border-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] text-[var(--yamindo-teal-dark)]"
                      : "border-border hover:border-[var(--yamindo-teal)]/50 text-foreground"
                  }`}
                >
                  {getField(preset, "label", lang)}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            {selectedIdx === customPresetIdx && (
              <div className="mb-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    Rp
                  </span>
                  <Input
                    type="number"
                    placeholder={t("Masukkan jumlah donasi", "Enter donation amount")}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Name Input */}
            <div className="mb-4">
              <Input
                placeholder={t("Nama lengkap Anda (opsional)", "Your full name (optional)")}
                className="rounded-xl"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <Input
                type="email"
                placeholder={t("Email Anda (opsional)", "Your email (optional)")}
                className="rounded-xl"
              />
            </div>

            {/* Donate Button */}
            <Button
              className="w-full bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-orange-200"
            >
              <Heart className="w-5 h-5 mr-2 fill-white" />
              {t("Donasi Sekarang", "Donate Now")}
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-3">
              {t("Donasi Anda aman dan terjamin. Yamindo bersertifikat ISO 9001:2015.", "Your donation is safe and guaranteed. Yamindo is ISO 9001:2015 certified.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
