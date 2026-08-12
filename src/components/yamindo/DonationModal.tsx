"use client";

import { useState, useMemo } from "react";
import {
  Heart,
  X,
  Landmark,
  QrCode,
  Wallet,
  ChevronRight,
  Shield,
  MessageCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLang, t as tFn } from "@/lib/i18n";

export interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  programTitle: string;
  programTitleEn?: string;
  programGoal?: string;
  bankAccounts?: { accountNo: string; accountName: string; en_accountName: string; bankName: string; en_bankName: string; logo?: string }[];
}

const PAYMENT_METHODS = [
  {
    id: "transfer",
    label: "Transfer Bank",
    labelEn: "Bank Transfer",
    icon: Landmark,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    id: "qris",
    label: "QRIS",
    labelEn: "QRIS",
    icon: QrCode,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    id: "dana",
    label: "DANA",
    labelEn: "DANA",
    icon: Wallet,
    color: "from-sky-400 to-sky-500",
    bgColor: "bg-sky-50",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
  },
] as const;

type PaymentMethod = (typeof PAYMENT_METHODS)[number]["id"];

type Step = "form" | "payment" | "confirm";

const PRESET_AMOUNTS = [
  50000, 100000, 200000, 500000, 1000000, 2500000, 5000000, 10000000,
];

function formatRupiah(n: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DonationModal({
  open,
  onOpenChange,
  programTitle,
  programTitleEn,
  programGoal,
  bankAccounts = [],
}: DonationModalProps) {
  const { lang, t } = useLang();

  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(200000);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("transfer");
  const [showCustom, setShowCustom] = useState(false);

  const finalAmount = useMemo(() => {
    if (showCustom && customAmount) {
      const num = parseInt(customAmount.replace(/\D/g, ""), 10);
      return isNaN(num) || num <= 0 ? 0 : num;
    }
    return selectedAmount || 0;
  }, [showCustom, customAmount, selectedAmount]);

  const selectedMethod = PAYMENT_METHODS.find((m) => m.id === paymentMethod);

  // Reset step when modal opens/closes
  const handleOpenChange = (val: boolean) => {
    if (!val) {
      setStep("form");
      setName("");
      setPhone("");
      setSelectedAmount(200000);
      setCustomAmount("");
      setPaymentMethod("transfer");
      setShowCustom(false);
    }
    onOpenChange(val);
  };

  const canProceed = () => {
    if (step === "form") {
      return name.trim().length >= 2 && phone.trim().length >= 8 && finalAmount > 0;
    }
    if (step === "payment") {
      return !!paymentMethod;
    }
    return true;
  };

  const handleNext = () => {
    if (step === "form" && canProceed()) {
      setStep("payment");
    } else if (step === "payment" && canProceed()) {
      setStep("confirm");
    }
  };

  const buildWhatsAppLink = () => {
    const waNumber = "6281234567890";
    const title = lang === "en" && programTitleEn ? programTitleEn : programTitle;
    const methodLabel =
      lang === "en" && selectedMethod
        ? selectedMethod.labelEn
        : selectedMethod?.label || paymentMethod;

    let bankInfo = "";
    if (paymentMethod === "transfer" && bankAccounts.length > 0) {
      const list = bankAccounts
        .map(
          (b) =>
            `  • ${b.accountName}\n    ${b.bankName} - ${b.accountNo}`
        )
        .join("\n");
      bankInfo =
        lang === "id"
          ? `\n*Rekening Donasi:*
${list}\n`
          : `\n*Donation Accounts:*
${list}\n`;
    }

    const message =
      lang === "id"
        ? `Assalamualaikum, saya ingin berdonasi.\n\n` +
          `*Program:* ${title}\n` +
          `*Nama:* ${name}\n` +
          `*No. HP:* ${phone}\n` +
          `*Jumlah:* ${formatRupiah(finalAmount)}\n` +
          `*Metode Pembayaran:* ${methodLabel}\n` +
          bankInfo +
          (paymentMethod !== "transfer"
            ? `Mohon informasi ${paymentMethod === "qris" ? "QRIS" : "instruksi DANA"} untuk pembayaran. `
            : "") +
          `Terima kasih.\n\n_Dikirim melalui website Yamindo_`
        : `Assalamualaikum, I would like to donate.\n\n` +
          `*Program:* ${title}\n` +
          `*Name:* ${name}\n` +
          `*Phone:* ${phone}\n` +
          `*Amount:* ${formatRupiah(finalAmount)}\n` +
          `*Payment Method:* ${methodLabel}\n` +
          bankInfo +
          (paymentMethod !== "transfer"
            ? `Please provide ${paymentMethod === "qris" ? "QRIS" : "DANA instructions"} for payment. `
            : "") +
          `Thank you.\n\n_Sent via Yamindo website_`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${waNumber}?text=${encoded}`;
  };

  const handleDonateWhatsApp = () => {
    const link = buildWhatsAppLink();
    window.open(link, "_blank");
  };

  const getStepLabel = () => {
    if (step === "form") return t("Langkah 1 dari 3", "Step 1 of 3");
    if (step === "payment") return t("Langkah 2 dari 3", "Step 2 of 3");
    return t("Langkah 3 dari 3", "Step 3 of 3");
  };

  const getStepTitle = () => {
    if (step === "form") return t("Detail Donasi", "Donation Details");
    if (step === "payment") return t("Pilih Pembayaran", "Choose Payment");
    return t("Konfirmasi Donasi", "Confirm Donation");
  };

  const getStepDesc = () => {
    if (step === "form")
      return t(
        "Isi data Anda dan pilih jumlah donasi",
        "Fill in your details and choose donation amount"
      );
    if (step === "payment")
      return t(
        "Pilih metode pembayaran yang Anda inginkan",
        "Choose your preferred payment method"
      );
    return t("Periksa kembali dan kirim via WhatsApp", "Review and send via WhatsApp");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden rounded-2xl max-h-[90vh] overflow-y-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[var(--yamindo-teal)] to-[var(--yamindo-teal-dark)] px-6 py-5 text-white">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-white/70">
              {getStepLabel()}
            </span>
            <button
              onClick={() => handleOpenChange(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <DialogHeader>
            <DialogTitle className="text-white text-xl">
              {getStepTitle()}
            </DialogTitle>
            <DialogDescription className="text-white/80 text-sm">
              {getStepDesc()}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 px-6 pt-4">
          {["form", "payment", "confirm"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s
                    ? "bg-[var(--yamindo-teal)] text-white shadow-md"
                    : i <
                        ["form", "payment", "confirm"].indexOf(step)
                    ? "bg-[var(--yamindo-teal)]/20 text-[var(--yamindo-teal)]"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i < ["form", "payment", "confirm"].indexOf(step) ? (
                  "✓"
                ) : (
                  i + 1
                )}
              </div>
              {i < 2 && (
                <div
                  className={`w-10 h-0.5 rounded ${
                    i < ["form", "payment", "confirm"].indexOf(step)
                      ? "bg-[var(--yamindo-teal)]"
                      : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* ===== STEP 1: FORM ===== */}
          {step === "form" && (
            <div className="space-y-5">
              {/* Program info */}
              <div className="bg-[var(--yamindo-teal-light)] rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--yamindo-teal)] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">
                    {t("Program", "Program")}
                  </p>
                  <p className="text-sm font-semibold text-foreground truncate">
                    {lang === "en" && programTitleEn
                      ? programTitleEn
                      : programTitle}
                  </p>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="donor-name" className="text-sm font-medium">
                  {t("Nama Lengkap", "Full Name")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="donor-name"
                  placeholder={t(
                    "Masukkan nama lengkap Anda",
                    "Enter your full name"
                  )}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl h-11"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="donor-phone" className="text-sm font-medium">
                  {t("Nomor HP / WhatsApp", "Phone / WhatsApp Number")} <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
                    +62
                  </span>
                  <Input
                    id="donor-phone"
                    type="tel"
                    placeholder="812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/[^0-9-]/g, ""))
                    }
                    className="rounded-xl h-11 pl-12"
                  />
                </div>
              </div>

              {/* Amount Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  {t("Jumlah Donasi", "Donation Amount")} <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {PRESET_AMOUNTS.slice(0, 6).map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setShowCustom(false);
                      }}
                      className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border-2 ${
                        !showCustom && selectedAmount === amt
                          ? "border-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] text-[var(--yamindo-teal-dark)]"
                          : "border-border hover:border-[var(--yamindo-teal)]/50 text-foreground"
                      }`}
                    >
                      {(amt / 1000).toFixed(0)}K
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {PRESET_AMOUNTS.slice(6).map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setShowCustom(false);
                      }}
                      className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border-2 ${
                        !showCustom && selectedAmount === amt
                          ? "border-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] text-[var(--yamindo-teal-dark)]"
                          : "border-border hover:border-[var(--yamindo-teal)]/50 text-foreground"
                      }`}
                    >
                      {(amt / 1000000).toFixed(0)}jt
                    </button>
                  ))}
                  <button
                    onClick={() => setShowCustom(true)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border-2 ${
                      showCustom
                        ? "border-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] text-[var(--yamindo-teal-dark)]"
                        : "border-border hover:border-[var(--yamindo-teal)]/50 text-foreground"
                    }`}
                  >
                    {t("Lainnya", "Custom")}
                  </button>
                </div>

                {/* Custom amount input */}
                {showCustom && (
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                      Rp
                    </span>
                    <Input
                      type="number"
                      placeholder={t(
                        "Masukkan jumlah",
                        "Enter amount"
                      )}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="rounded-xl h-11 pl-10"
                      min={10000}
                    />
                  </div>
                )}

                {/* Selected amount display */}
                <div className="bg-gradient-to-r from-[var(--yamindo-teal)] to-[var(--yamindo-teal-dark)] rounded-xl p-4 text-center mt-2">
                  <p className="text-white/70 text-xs mb-1">
                    {t("Jumlah yang akan didonasikan", "Amount to donate")}
                  </p>
                  <p className="text-white text-2xl font-bold">
                    {formatRupiah(finalAmount)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ===== STEP 2: PAYMENT METHOD ===== */}
          {step === "payment" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {t(
                  "Pilih salah satu metode pembayaran di bawah ini:",
                  "Choose one of the payment methods below:"
                )}
              </p>

              <RadioGroup
                value={paymentMethod}
                onValueChange={(val) => setPaymentMethod(val as PaymentMethod)}
                className="gap-3"
              >
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const isSelected = paymentMethod === method.id;
                  return (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                        isSelected
                          ? `${method.borderColor} ${method.bgColor} shadow-sm`
                          : "border-border hover:border-muted-foreground/30 bg-white"
                      }`}
                    >
                      <RadioGroupItem value={method.id} className="sr-only" />
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground">
                          {lang === "en" ? method.labelEn : method.label}
                        </p>
                        {method.id === "transfer" && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {lang === "id"
                              ? "BCA, BNI, BRI, Mandiri, dll"
                              : "BCA, BNI, BRI, Mandiri, etc."}
                          </p>
                        )}
                        {method.id === "qris" && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {lang === "id"
                              ? "Scan QR dari aplikasi bank / e-wallet manapun"
                              : "Scan QR from any bank / e-wallet app"}
                          </p>
                        )}
                        {method.id === "dana" && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {lang === "id"
                              ? "Bayar langsung melalui aplikasi DANA"
                              : "Pay directly via DANA app"}
                          </p>
                        )}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? `border-[method.id === 'transfer' ? 'blue-500' : method.id === 'qris' ? 'purple-500' : 'sky-500'] bg-white`
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {isSelected && (
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${
                              method.id === "transfer"
                                ? "bg-blue-500"
                                : method.id === "qris"
                                ? "bg-purple-500"
                                : "bg-sky-500"
                            }`}
                          />
                        )}
                      </div>
                    </label>
                  );
                })}
              </RadioGroup>

              {/* Bank accounts shown when Transfer Bank selected */}
              {paymentMethod === "transfer" && bankAccounts.length > 0 && (
                <div className="space-y-3 mt-1">
                  <p className="text-sm font-semibold text-foreground">
                    {t("Transfer ke rekening berikut:", "Transfer to the following account:")}
                  </p>
                  <div className="space-y-2">
                    {bankAccounts.map((acc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl border border-blue-100 bg-blue-50/60"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                          <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {lang === "en" && acc.en_accountName ? acc.en_accountName : acc.accountName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {lang === "en" && acc.en_bankName ? acc.en_bankName : acc.bankName}
                          </p>
                          <p className="font-mono text-sm font-bold text-blue-600 mt-0.5">
                            {acc.accountNo}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(acc.accountNo);
                          }}
                          className="text-xs text-blue-500 hover:text-blue-700 font-medium shrink-0 px-2 py-1 rounded-md hover:bg-blue-100 transition-colors"
                        >
                          {t("Salin", "Copy")}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary mini */}
              <div className="bg-muted/50 rounded-xl p-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {t("Total Donasi", "Total Donation")}
                </span>
                <span className="font-bold text-foreground">
                  {formatRupiah(finalAmount)}
                </span>
              </div>
            </div>
          )}

          {/* ===== STEP 3: CONFIRM ===== */}
          {step === "confirm" && (
            <div className="space-y-4">
              {/* Confirmation card */}
              <div className="border border-border/50 rounded-xl overflow-hidden">
                {/* Program */}
                <div className="px-4 py-3 bg-muted/30 border-b border-border/50">
                  <p className="text-xs text-muted-foreground">
                    {t("Program", "Program")}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {lang === "en" && programTitleEn
                      ? programTitleEn
                      : programTitle}
                  </p>
                </div>

                {/* Details */}
                <div className="divide-y divide-border/50">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t("Nama Donatur", "Donor Name")}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {name}
                    </span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t("No. HP", "Phone")}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      +62 {phone}
                    </span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t("Jumlah Donasi", "Donation Amount")}
                    </span>
                    <span className="text-sm font-bold text-[var(--yamindo-teal)]">
                      {formatRupiah(finalAmount)}
                    </span>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {t("Metode Pembayaran", "Payment Method")}
                    </span>
                    <div className="flex items-center gap-2">
                      {selectedMethod && (
                        <div
                          className={`w-6 h-6 rounded-md bg-gradient-to-br ${selectedMethod.color} flex items-center justify-center`}
                        >
                          {(() => {
                            const Icon = selectedMethod.icon;
                            return <Icon className="w-3.5 h-3.5 text-white" />;
                          })()}
                        </div>
                      )}
                      <span className="text-sm font-medium text-foreground">
                        {lang === "en" && selectedMethod
                          ? selectedMethod.labelEn
                          : selectedMethod?.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank details in confirm if transfer */}
              {paymentMethod === "transfer" && bankAccounts.length > 0 && (
                <div className="border border-blue-100 rounded-xl overflow-hidden">
                  <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
                    <p className="text-xs font-semibold text-blue-700">
                      {t("Rekening Transfer", "Transfer Accounts")}
                    </p>
                  </div>
                  <div className="divide-y divide-blue-50">
                    {bankAccounts.map((acc, idx) => (
                      <div key={idx} className="px-4 py-2.5">
                        <p className="text-xs font-semibold text-foreground">{lang === "en" && acc.en_accountName ? acc.en_accountName : acc.accountName}</p>
                        <p className="text-xs text-muted-foreground">{lang === "en" && acc.en_bankName ? acc.en_bankName : acc.bankName} — <span className="font-mono font-bold text-blue-600">{acc.accountNo}</span></p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                <Shield className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  {paymentMethod === "transfer"
                    ? t(
                        "Setelah mengklik tombol di bawah, data donasi beserta rekening transfer akan dikirim via WhatsApp.",
                        "After clicking the button below, your donation details along with transfer accounts will be sent via WhatsApp."
                      )
                    : t(
                        "Setelah mengklik tombol di bawah, Anda akan diarahkan ke WhatsApp. Tim Yamindo akan memberikan " + (paymentMethod === "qris" ? "QRIS" : "instruksi DANA") + " selanjutnya.",
                        "After clicking the button below, you'll be redirected to WhatsApp. The Yamindo team will provide " + (paymentMethod === "qris" ? "QRIS" : "DANA instructions") + " next."
                      )}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="px-6 pb-6 flex gap-3">
          {step !== "form" && (
            <Button
              variant="outline"
              className="flex-1 rounded-xl h-11 font-medium"
              onClick={() => setStep(step === "confirm" ? "payment" : "form")}
            >
              {t("Kembali", "Back")}
            </Button>
          )}

          {step !== "confirm" ? (
            <Button
              className="flex-1 bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white rounded-xl h-11 font-medium transition-all"
              disabled={!canProceed()}
              onClick={handleNext}
            >
              {t("Lanjutkan", "Continue")}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              className="flex-1 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-xl h-12 font-semibold text-base shadow-lg transition-all"
              onClick={handleDonateWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("Donasi via WhatsApp", "Donate via WhatsApp")}
            </Button>
          )}
        </div>

        {/* Security note */}
        <div className="px-6 pb-5">
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5" />
            <span>
              {t(
                "Donasi aman & terjamin. Yamindo bersertifikat ISO 9001:2015.",
                "Safe & guaranteed donations. Yamindo is ISO 9001:2015 certified."
              )}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
