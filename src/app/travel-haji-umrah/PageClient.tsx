"use client";

import { useState } from "react";
import {
  Plane,
  Star,
  Hotel,
  UtensilsCrossed,
  Headphones,
  BadgeCheck,
  CheckCircle2,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";
import DonationModal from "@/components/yamindo/DonationModal";

const HERO_IMG = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ceecac64eb90.jpg";
const IMG2 = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/10f5367ad7e3.jpg";
const IMG3 = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/588394332193.jpg";

const PACKAGES = [
  {
    id: 1,
    title: "Paket Haji Plus",
    en_title: "Hajj Plus Package",
    duration: "40 Hari",
    hotel: "Bintang 4",
    meals: "3x Sehari",
    price: "Hubungi Kami",
    priceEn: "Contact Us",
    popular: true,
    features: [
      "Hotel dekat Masjidil Haram (150m)",
      "Penerbangan direct Jakarta - Jeddah",
      "Visa Haji resmi Kemenag",
      "Asuransi perjalanan lengkap",
      "Ziarah Madinah & Makkah",
      "Manasik Haji terarah",
      "Tim medis & pembimbing ibadah",
      "Bagasi 30 kg + hand carry 7 kg",
    ],
    featuresEn: [
      "Hotel near Masjidil Haram (150m)",
      "Direct flight Jakarta - Jeddah",
      "Official Hajj visa from Kemenag",
      "Complete travel insurance",
      "Madinah & Makkah ziyarat tours",
      "Guided Hajj ritual practice",
      "Medical team & worship guides",
      "30 kg baggage + 7 kg carry-on",
    ],
  },
  {
    id: 2,
    title: "Paket Umrah Reguler",
    en_title: "Regular Umrah Package",
    duration: "9 Hari",
    hotel: "Bintang 3",
    meals: "3x Sehari",
    price: "Mulai Rp 28 Juta",
    priceEn: "From Rp 28 Million",
    popular: false,
    features: [
      "Hotel bintang 3 di Makkah & Madinah",
      "Penerbangan transit/pasti",
      "Visa Umrah resmi",
      "Asuransi perjalanan",
      "Ziarah kota Makkah & Madinah",
      "Pembimbing ibadah",
      "Sarung ihram & buku panduan",
      "Bagasi 23 kg",
    ],
    featuresEn: [
      "3-star hotel in Makkah & Madinah",
      "Transit/direct flight",
      "Official Umrah visa",
      "Travel insurance",
      "Makkah & Madinah city ziyarat",
      "Worship guide",
      "Ihram garment & guidebook",
      "23 kg baggage",
    ],
  },
  {
    id: 3,
    title: "Paket Umrah Eksekutif",
    en_title: "Executive Umrah Package",
    duration: "12 Hari",
    hotel: "Bintang 4",
    meals: "Full Board",
    price: "Mulai Rp 45 Juta",
    priceEn: "From Rp 45 Million",
    popular: false,
    features: [
      "Hotel bintang 4 dekat Masjid (200m)",
      "Penerbangan direct",
      "Visa Umrah resmi",
      "Asuransi perjalanan premium",
      "Ziarah lengkap + city tour",
      "Pembimbing ibadah senior",
      "Welcome snack & souvenir Yamindo",
      "Bagasi 30 kg + handling",
    ],
    featuresEn: [
      "4-star hotel near Mosque (200m)",
      "Direct flight",
      "Official Umrah visa",
      "Premium travel insurance",
      "Full ziyarat + city tour",
      "Senior worship guide",
      "Welcome snack & Yamindo souvenir",
      "30 kg baggage + handling",
    ],
  },
];

export default function PageClient() {
  const { lang, t } = useLang();
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Travel Haji Umrah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            <Plane className="w-4 h-4" />
            {t("Usaha Yamindo", "Yamindo Business")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("Travel Haji & Umrah", "Hajj & Umrah Travel")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t(
              "Layanan travel haji dan umrah terpercaya dengan pemandu ibadah berpengalaman. Menyediakan paket lengkap mulai dari penerbangan, akomodasi, hingga pembimbingan ibadah di Tanah Suci.",
              "Trusted Hajj and Umrah travel services with experienced worship guides. Providing complete packages from flights, accommodation, to worship guidance in the Holy Land."
            )}
          </p>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Mengapa Memilih Kami?", "Why Choose Us?")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Yamindo Travel hadir dengan layanan profesional dan terpercaya untuk perjalanan ibadah Anda",
                "Yamindo Travel provides professional and trusted services for your worship journey"
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BadgeCheck, title: t("Terdaftar Kemenag", "Registered with Kemenag"), desc: t("Izin resmi dari Kementerian Agama RI untuk penyelenggaraan travel haji dan umrah", "Official permit from the Ministry of Religious Affairs for hajj and umrah travel") },
              { icon: Star, title: t("Muthawwif Berpengalaman", "Experienced Muthawwif"), desc: t("Pemandu ibadah bersertifikat dengan pengalaman puluhan tahun membimbing jamaah", "Certified worship guides with decades of experience guiding pilgrims") },
              { icon: Hotel, title: t("Hotel Strategis", "Strategic Hotels"), desc: t("Akomodasi bintang 3-4 dengan jarak berjalan kaki ke Masjidil Haram dan Masjid Nabawi", "3-4 star accommodation within walking distance to Masjidil Haram and Masjid Nabawi") },
              { icon: Headphones, title: t("Layanan 24 Jam", "24-Hour Service"), desc: t("Tim support siap membantu jamaah selama 24 jam selama di Tanah Suci", "Support team ready to assist pilgrims 24 hours during their stay in the Holy Land") },
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

      {/* PAKET */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Paket Travel Kami", "Our Travel Packages")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Pilih paket perjalanan ibadah yang sesuai dengan kebutuhan dan budget Anda",
                "Choose the worship travel package that suits your needs and budget"
              )}
            </p>
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
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {lang === "en" ? pkg.en_title : pkg.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {pkg.duration}</span>
                      <span className="flex items-center gap-1"><Hotel className="w-4 h-4" /> {pkg.hotel}</span>
                      <span className="flex items-center gap-1"><UtensilsCrossed className="w-4 h-4" /> {pkg.meals}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[var(--yamindo-teal)]">
                      {lang === "en" ? pkg.priceEn : pkg.price}
                    </span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {(lang === "en" ? pkg.featuresEn : pkg.features).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-[var(--yamindo-teal)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
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
                          ? `Assalamualaikum, saya tertarik dengan paket *${label}* (${pkg.duration}). Mohon informasi lebih lanjut.`
                          : `Assalamualaikum, I am interested in the *${label}* package (${pkg.duration}). Please provide more information.`
                      );
                      window.open(`https://wa.me/6281234567890?text=${waText}`, "_blank");
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("Hubungi via WhatsApp", "Contact via WhatsApp")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Dokumentasi Perjalanan", "Journey Documentation")}
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
            {t("Wujudkan Rencana Ibadah Anda", "Fulfill Your Worship Plan")}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk perjalanan haji dan umrah Anda.",
              "Contact us now for a free consultation and get the best offers for your hajj and umrah journey."
            )}
          </p>
          <Button
            size="lg"
            className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 font-semibold"
            onClick={() => {
              const waText = encodeURIComponent(
                lang === "id"
                  ? "Assalamualaikum, saya ingin konsultasi paket Haji & Umrah Yamindo."
                  : "Assalamualaikum, I would like to consult about Yamindo Hajj & Umrah packages."
              );
              window.open(`https://wa.me/6281234567890?text=${waText}`, "_blank");
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t("Konsultasi Gratis", "Free Consultation")}
          </Button>
        </div>
      </section>

      <DonationModal
        open={donateOpen}
        onOpenChange={setDonateOpen}
        programTitle={t("Travel Haji & Umrah Yamindo", "Yamindo Haji & Umrah Travel")}
      />
    </>
  );
}
