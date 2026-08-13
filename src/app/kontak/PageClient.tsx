"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Map,
  CheckCircle2,
  Loader2,
  Copy,
  CheckCheck,
  Landmark,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function PageClient({
  siteConfig,
  bankAccounts = [],
  pageContents = [],
}: {
  siteConfig: Record<string, string>;
  bankAccounts?: Record<string, any>[];
  pageContents?: Record<string, any>[];
}) {
  const { lang, t } = useLang();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [copiedNo, setCopiedNo] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/admin/contact-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setError(
          t(
            "Gagal mengirim pesan. Silakan coba lagi.",
            "Failed to send message. Please try again."
          )
        );
      }
    } catch {
      setError(
        t(
          "Terjadi kesalahan jaringan. Silakan coba lagi.",
          "A network error occurred. Please try again."
        )
      );
    } finally {
      setSubmitting(false);
    }
  };

  const copyAccountNo = (no: string) => {
    navigator.clipboard.writeText(no);
    setCopiedNo(no);
    setTimeout(() => setCopiedNo(null), 2000);
  };

  const heroContent = pageContents.find((c) => c.section === 'hero');
  const formContent = pageContents.find((c) => c.section === 'form');

  const heroTitle = heroContent
    ? lang === 'en' && heroContent.en_title
      ? heroContent.en_title
      : heroContent.title
    : null;
  const heroSubtitle = heroContent
    ? lang === 'en' && heroContent.en_content
      ? heroContent.en_content
      : heroContent.content
    : null;
  const formTitle = formContent
    ? lang === 'en' && formContent.en_title
      ? formContent.en_title
      : formContent.title
    : null;
  const formDescription = formContent
    ? lang === 'en' && formContent.en_content
      ? formContent.en_content
      : formContent.content
    : null;

  const contactCards = [
    {
      icon: Phone,
      label: t("Telepon", "Phone"),
      value: siteConfig.phone || siteConfig["phone"] || "-",
      color: "bg-[var(--yamindo-teal-light)]",
      iconColor: "text-[var(--yamindo-teal)]",
    },
    {
      icon: Mail,
      label: t("Email", "Email"),
      value: siteConfig.email || siteConfig["email"] || "-",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: MapPin,
      label: t("Alamat", "Address"),
      value:
        siteConfig.address || siteConfig["address"] || "-",
      color: "bg-orange-50",
      iconColor: "text-[var(--yamindo-coral)]",
    },
    {
      icon: Clock,
      label: t("Jam Kerja", "Working Hours"),
      value:
        siteConfig.working_hours ||
        siteConfig["working_hours"] ||
        t("Senin - Jumat, 08:00 - 17:00", "Monday - Friday, 08:00 - 17:00"),
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {t("Hubungi Kami", "Contact Us")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {heroTitle || t("Kontak Kami", "Get In Touch")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {heroSubtitle || t(
              "Kami siap mendengar pertanyaan, saran, dan masukan Anda. Jangan ragu untuk menghubungi kami.",
              "We are ready to hear your questions, suggestions, and feedback. Don't hesitate to contact us."
            )}
          </p>
        </div>
      </section>

      {/* ====== CONTACT INFO CARDS ====== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.label}
                  className="border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        {card.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {card.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== BANK ACCOUNTS ====== */}
      {bankAccounts.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-stone-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                <Landmark className="w-4 h-4" />
                {t("Rekening Donasi", "Donation Accounts")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("Rekening Bank Kami", "Our Bank Accounts")}
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                {t(
                  "Anda dapat menyalurkan donasi melalui rekening bank berikut. Klik nomor rekening untuk menyalin.",
                  "You can send donations through the following bank accounts. Click the account number to copy."
                )}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankAccounts.map((acc) => (
                <Card
                  key={acc.id}
                  className="border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {acc.logo ? (
                        <img
                          src={acc.logo}
                          alt={lang === "en" && acc.en_bankName ? acc.en_bankName : acc.bankName}
                          className="h-10 w-auto object-contain rounded"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--yamindo-teal)] to-[var(--yamindo-teal-dark)] flex items-center justify-center flex-shrink-0">
                          <Landmark className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-foreground text-base">
                          {lang === "en" && acc.en_accountName ? acc.en_accountName : acc.accountName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {lang === "en" && acc.en_bankName ? acc.en_bankName : acc.bankName}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                          {t("Nomor Rekening", "Account Number")}
                        </p>
                        <button
                          onClick={() => copyAccountNo(acc.accountNo)}
                          className="flex items-center gap-2 w-full group/btn"
                          title={t("Salin nomor rekening", "Copy account number")}
                        >
                          <span className="font-mono text-lg font-bold text-[var(--yamindo-teal)] tracking-wide">
                            {acc.accountNo}
                          </span>
                          {copiedNo === acc.accountNo ? (
                            <CheckCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground group-hover/btn:text-[var(--yamindo-teal)] transition-colors flex-shrink-0" />
                          )}
                        </button>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                          {t("Atas Nama", "Account Holder")}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {lang === "en" && acc.en_accountName ? acc.en_accountName : acc.accountName}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== CONTACT FORM + MAP ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                <Send className="w-4 h-4" />
                {t("Kirim Pesan", "Send Message")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {formTitle || t(
                  "Ada pertanyaan? Tulis kepada kami",
                  "Have a question? Write to us"
                )}
              </h2>
              <p className="text-muted-foreground mb-8">
                {formDescription || t(
                  "Isi formulir di bawah ini dan tim kami akan merespons sesegera mungkin.",
                  "Fill in the form below and our team will respond as soon as possible."
                )}
              </p>

              {/* Success message */}
              {success && (
                <div className="mb-6 flex items-center gap-3 bg-emerald-50 text-emerald-700 rounded-xl p-4 border border-emerald-200">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">
                    {t(
                      "Pesan Anda berhasil dikirim! Terima kasih.",
                      "Your message was sent successfully! Thank you."
                    )}
                  </p>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="mb-6 flex items-center gap-3 bg-red-50 text-red-700 rounded-xl p-4 border border-red-200">
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t("Nama Lengkap", "Full Name")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t("Masukkan nama Anda", "Enter your name")}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t("Email", "Email")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={t(
                        "Masukkan email Anda",
                        "Enter your email"
                      )}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t("Nomor Telepon", "Phone Number")}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t(
                        "Masukkan nomor telepon",
                        "Enter phone number"
                      )}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t("Subjek", "Subject")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder={t(
                        "Subjek pesan Anda",
                        "Your message subject"
                      )}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t("Pesan", "Message")} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={t(
                      "Tulis pesan Anda di sini...",
                      "Write your message here..."
                    )}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("Mengirim...", "Sending...")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t("Kirim Pesan", "Send Message")}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 min-h-[400px] rounded-2xl bg-white border border-border/50 shadow-sm overflow-hidden flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 p-8">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mb-4">
                    <Map className="w-10 h-10 text-[var(--yamindo-teal)]" />
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {t("Lokasi Kami", "Our Location")}
                  </p>
                  <p className="text-sm text-muted-foreground text-center max-w-xs">
                    {siteConfig.address || siteConfig["address"] || "-"}
                  </p>
                </div>
                <div className="h-2 bg-[var(--yamindo-teal)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
