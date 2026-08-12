"use client";

import { useState } from "react";
import {
  Heart,
  CheckCircle2,
  MessageCircle,
  Truck,
  Camera,
  Award,
  Shield,
  Clock,
  Gift,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";

const HERO_IMG = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f3f9ca9967e5.jpg";
const IMG2 = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7dd3d55d5905.jpg";
const IMG3 = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/56fd7489e7a7.jpg";

const PACKAGES = [
  {
    id: 1,
    title: "Paket Aqiqah Kambing",
    en_title: "Goat Aqiqah Package",
    type: "Kambing",
    weight: "23-27 kg",
    price: "Rp 2.500.000",
    priceEn: "Rp 2,500,000",
    desc: "Sesuai syariat, kambing aqiqah sehat dan gemuk dengan berat 23-27 kg. Proses penyembelihan mengikuti tata cara Islam. Daging bisa diambil sendiri atau disalurkan ke panti asuhan.",
    enDesc: "Sharia-compliant, healthy and plump aqiqah goat weighing 23-27 kg. Slaughtered according to Islamic procedures. Meat can be picked up or distributed to orphanages.",
    popular: false,
  },
  {
    id: 2,
    title: "Paket Aqiqah Sapi",
    en_title: "Cow Aqiqah Package",
    type: "Sapi",
    weight: "250-300 kg",
    price: "Rp 15.000.000",
    priceEn: "Rp 15,000,000",
    desc: "Sapi aqiqah berkualitas dengan berat 250-300 kg, cocok untuk aqiqah 7 anak laki-laki atau kelompok. Daging dibagi rata sesuai ketentuan syariat.",
    enDesc: "Quality aqiqah cow weighing 250-300 kg, suitable for 7 boys or group aqiqah. Meat is divided equally according to sharia provisions.",
    popular: true,
  },
  {
    id: 3,
    title: "Paket Aqiqah Plus Nasi Box",
    en_title: "Aqiqah + Rice Box Package",
    type: "Kambing",
    weight: "23-27 kg",
    price: "Rp 3.500.000",
    priceEn: "Rp 3,500,000",
    desc: "Paket lengkap kambing aqiqah plus 50 porsi nasi box siap saji. Tersedia pilihan masakan: rendang, gule, atau opor. Cocok untuk perayaan aqiqah di rumah atau tempat ibadah.",
    enDesc: "Complete package with aqiqah goat plus 50 rice box servings. Available dishes: rendang, gule, or opor. Perfect for aqiqah celebration at home or place of worship.",
    popular: false,
  },
];

export default function PageClient() {
  const { lang, t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Aqiqah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            <Heart className="w-4 h-4" />
            {t("Usaha Yamindo", "Yamindo Business")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("Layanan Aqiqah", "Aqiqah Service")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t(
              "Layanan aqiqah lengkap dan syar\u2019i. Kami menyediakan hewan aqiqah berkualitas, penyembelihan sesuai tata cara Islam, hingga distribusi daging ke yang berhak.",
              "Complete and sharia-compliant aqiqah service. We provide quality aqiqah animals, Islamic slaughter procedures, and meat distribution to rightful recipients."
            )}
          </p>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Keunggulan Layanan Kami", "Our Service Advantages")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: t("Syar\u2019i & Terpercaya", "Sharia-Compliant & Trusted"), desc: t("Penyembelihan mengikuti tata cara Islam dengan doa dan niat yang benar", "Slaughtered following Islamic procedures with correct prayers and intentions") },
              { icon: Award, title: t("Hewan Sehat & Berkualitas", "Healthy & Quality Animals"), desc: t("Kambing dan sapi dipilih langsung dengan kriteria sehat, gemuk, dan sesuai syarat", "Goats and cows are selected directly with healthy, plump criteria meeting requirements") },
              { icon: Truck, title: t("Antar ke Lokasi", "Delivery to Location"), desc: t("Kami antar daging aqiqah ke rumah Anda atau salurkan ke panti asuhan yang membutuhkan", "We deliver aqiqah meat to your home or distribute to orphanages in need") },
              { icon: Camera, title: t("Dokumentasi Foto/Video", "Photo/Video Documentation"), desc: t("Setiap proses penyembelihan didokumentasikan dan dikirimkan kepada Anda sebagai bukti", "Every slaughter process is documented and sent to you as proof") },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-border/50 shadow-sm hover:shadow-md transition-shadow text-center">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--yamindo-teal-light)] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[var(--yamindo-teal)]" />
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PAKET AQIQAH */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Paket Aqiqah Kami", "Our Aqiqah Packages")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative overflow-hidden rounded-2xl ${
                  pkg.popular
                    ? "border-2 border-[var(--yamindo-teal)] shadow-xl"
                    : "border-border/50 shadow-md hover:shadow-lg"
                } transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[var(--yamindo-teal)] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    {t("Terpopuler", "Most Popular")}
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] px-2.5 py-1 rounded-full">
                      {pkg.type} ({pkg.weight})
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {lang === "en" ? pkg.en_title : pkg.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {lang === "en" ? pkg.enDesc : pkg.desc}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[var(--yamindo-teal)]">
                      {lang === "en" ? pkg.priceEn : pkg.price}
                    </span>
                  </div>
                  <Button
                    className={`w-full rounded-xl py-5 font-semibold ${
                      pkg.popular
                        ? "bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white"
                        : "bg-[var(--yamindo-teal)]/10 text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal)]/20"
                    }`}
                    onClick={() => {
                      const label = lang === "en" ? pkg.en_title : pkg.title;
                      const waText = encodeURIComponent(
                        lang === "id"
                          ? `Assalamualaikum, saya tertarik dengan *${label}* (${pkg.price}). Mohon informasi pemesanan.`
                          : `Assalamualaikum, I am interested in *${label}* (${pkg.priceEn}). Please provide ordering information.`
                      );
                      window.open(`https://wa.me/6281234567890?text=${waText}`, "_blank");
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("Pesan via WhatsApp", "Order via WhatsApp")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROSES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Alur Pemesanan Aqiqah", "Aqiqah Ordering Process")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: t("Hubungi Kami", "Contact Us"), desc: t("Pilih paket dan informasikan nama, tanggal, dan alamat pengantaran", "Choose a package and provide name, date, and delivery address") },
              { step: "02", title: t("Pembayaran", "Payment"), desc: t("Lakukan pembayaran via transfer bank atau metode lain yang tersedia", "Make payment via bank transfer or other available methods") },
              { step: "03", title: t("Proses Aqiqah", "Aqiqah Process"), desc: t("Penyembelihan dilakukan sesuai syariat dengan dokumentasi lengkap", "Slaughter is performed according to sharia with full documentation") },
              { step: "04", title: t("Pengantaran", "Delivery"), desc: t("Daging diantar ke lokasi Anda atau disalurkan ke panti asuhan", "Meat is delivered to your location or distributed to orphanages") },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--yamindo-teal)] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Dokumentasi Aqiqah", "Aqiqah Documentation")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[IMG2, IMG3, HERO_IMG].map((src, i) => (
              <div key={i} className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("Segerakan Aqiqah Buah Hati Anda", "Perform Aqiqah for Your Child")}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Kami siap membantu Anda melaksanakan aqiqah yang syar\u2019i dan praktis. Hubungi kami sekarang untuk konsultasi dan pemesanan.",
              "We are ready to help you perform a sharia-compliant and practical aqiqah. Contact us now for consultation and ordering."
            )}
          </p>
          <Button
            size="lg"
            className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 font-semibold"
            onClick={() => {
              const waText = encodeURIComponent(
                lang === "id"
                  ? "Assalamualaikum, saya ingin konsultasi layanan Aqiqah Yamindo."
                  : "Assalamualaikum, I would like to consult about Yamindo Aqiqah service."
              );
              window.open(`https://wa.me/6281234567890?text=${waText}`, "_blank");
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t("Hubungi Kami", "Contact Us")}
          </Button>
        </div>
      </section>
    </>
  );
}
