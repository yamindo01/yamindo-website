"use client";

import {
  MonitorSmartphone,
  Target,
  BarChart3,
  Megaphone,
  PenTool,
  Search,
  Camera,
  MessageCircle,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";

const HERO_IMG = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/093ed46fc4df.jpg";
const IMG2 = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/263b18036fa5.jpg";
const IMG3 = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cbc03782aa60.jpg";

const SERVICES = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    titleEn: "Social Media Management",
    desc: "Pengelolaan akun sosial media secara profesional. Kami buat konten, jadwal posting, dan interaksi dengan audiens Anda agar brand semakin dikenal dan engagement meningkat pesat.",
    enDesc: "Professional social media account management. We create content, schedule posts, and engage with your audience to increase brand awareness and boost engagement significantly.",
  },
  {
    icon: Target,
    title: "Digital Advertising",
    titleEn: "Digital Advertising",
    desc: "Iklan digital yang terukur dan efisien. Kami kelola kampanye Google Ads, Meta Ads, dan TikTok Ads dengan optimasi berkelanjutan untuk mendapatkan ROI terbaik dari setiap rupiah yang Anda investasikan.",
    enDesc: "Measurable and efficient digital advertising. We manage Google Ads, Meta Ads, and TikTok Ads campaigns with continuous optimization for the best ROI from every rupiah invested.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    titleEn: "Content Creation",
    desc: "Pembuatan konten berkualitas tinggi berupa foto, video pendek, desain grafis, dan copywriting yang menarik. Konten disesuaikan dengan identitas brand dan target audiens Anda.",
    enDesc: "High-quality content creation including photos, short videos, graphic design, and compelling copywriting. Content is tailored to your brand identity and target audience.",
  },
  {
    icon: Search,
    title: "SEO & Website",
    titleEn: "SEO & Website",
    desc: "Optimasi mesin pencari agar website Anda muncul di halaman pertama Google. Kami juga menyediakan jasa pembuatan dan pengembangan website yang modern, cepat, dan SEO-friendly.",
    enDesc: "Search engine optimization to get your website on Google's first page. We also provide modern, fast, and SEO-friendly website creation and development services.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    titleEn: "Analytics & Reporting",
    desc: "Laporan bulanan yang detail dan transparan. Kami pantau semua metrik penting dan berikan rekomendasi strategis berdasarkan data untuk terus meningkatkan performa digital Anda.",
    enDesc: "Detailed and transparent monthly reports. We monitor all key metrics and provide data-driven strategic recommendations to continuously improve your digital performance.",
  },
  {
    icon: MonitorSmartphone,
    title: "Brand Strategy",
    titleEn: "Brand Strategy",
    desc: "Rancang strategi brand yang kuat dan konsisten. Mulai dari positioning, brand voice, visual identity, hingga go-to-market strategy untuk memastikan brand Anda unggul di pasar digital.",
    enDesc: "Design a strong and consistent brand strategy. From positioning, brand voice, visual identity, to go-to-market strategy to ensure your brand excels in the digital market.",
  },
];

const TRAININGS = [
  {
    title: "Pelatihan Social Media Marketing",
    enTitle: "Social Media Marketing Training",
    duration: "3 Hari (18 JP)",
    level: "Pemula - Menengah",
    price: "Rp 2.500.000",
    priceEn: "Rp 2,500,000",
    topics: [
      "Strategi konten Instagram, TikTok, & Facebook",
      "Copywriting yang menjual",
      "Membuat konten viral dengan tools gratis",
      "Ads Manager: cara beriklan efektif",
      "Analisis insight & metric sosial media",
      "Studi kasus brand lokal & internasional",
    ],
    topicsEn: [
      "Content strategy for Instagram, TikTok, & Facebook",
      "Sales copywriting techniques",
      "Creating viral content with free tools",
      "Ads Manager: effective advertising methods",
      "Social media insight & metric analysis",
      "Local & international brand case studies",
    ],
  },
  {
    title: "Pelatihan SEO & Google Ads",
    enTitle: "SEO & Google Ads Training",
    duration: "2 Hari (12 JP)",
    level: "Menengah",
    price: "Rp 3.000.000",
    priceEn: "Rp 3,000,000",
    topics: [
      "Fondasi SEO: keyword research & on-page",
      "Teknik link building & off-page SEO",
      "Google Ads: Search, Display, & YouTube",
      "Optimasi landing page untuk konversi",
      "Google Analytics & Search Console",
      "Praktik langsung optimasi website",
    ],
    topicsEn: [
      "SEO fundamentals: keyword research & on-page",
      "Link building & off-page SEO techniques",
      "Google Ads: Search, Display, & YouTube",
      "Landing page optimization for conversion",
      "Google Analytics & Search Console",
      "Hands-on website optimization practice",
    ],
  },
  {
    title: "Pelatihan Digital Marketing Fundamental",
    enTitle: "Digital Marketing Fundamentals Training",
    duration: "5 Hari (30 JP)",
    level: "Pemula",
    price: "Rp 4.500.000",
    priceEn: "Rp 4,500,000",
    topics: [
      "Pengenalan ekosistem digital marketing",
      "Strategi konten & brand storytelling",
      "Social media marketing & ads",
      "SEO & Google Ads dasar",
      "Email marketing & funnel",
      "Project akhir: buat kampanye digital lengkap",
    ],
    topicsEn: [
      "Introduction to digital marketing ecosystem",
      "Content strategy & brand storytelling",
      "Social media marketing & ads",
      "Basic SEO & Google Ads",
      "Email marketing & funnels",
      "Final project: create a complete digital campaign",
    ],
  },
];

export default function PageClient() {
  const { lang, t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Digital Marketing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            <MonitorSmartphone className="w-4 h-4" />
            {t("Usaha Yamindo", "Yamindo Business")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t(
              "Pelatihan & Agency Digital Marketing",
              "Digital Marketing Training & Agency"
            )}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t(
              "Tingkatkan kehadiran digital bisnis Anda melalui pelatihan praktis dan jasa digital marketing profesional. Dari social media, SEO, hingga iklan digital.",
              "Boost your business digital presence through practical training and professional digital marketing services. From social media, SEO, to digital advertising."
            )}
          </p>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", label: t("Klien Terlayani", "Clients Served") },
              { num: "1000+", label: t("Peserta Pelatihan", "Training Participants") },
              { num: "50+", label: t("Brand Dikelola", "Brands Managed") },
              { num: "98%", label: t("Tingkat Kepuasan", "Satisfaction Rate") },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-[var(--yamindo-teal)]">
                  {stat.num}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY SERVICES */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Jasa Digital Marketing", "Digital Marketing Services")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Kami membantu bisnis Anda tumbuh melalui strategi digital marketing yang terukur dan berbasis data",
                "We help your business grow through measurable and data-driven digital marketing strategies"
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card
                  key={svc.title}
                  className="group overflow-hidden rounded-2xl border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--yamindo-teal)] transition-colors">
                      <Icon className="w-6 h-6 text-[var(--yamindo-teal)] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {lang === "en" ? svc.titleEn : svc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === "en" ? svc.enDesc : svc.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PELATIHAN */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Program Pelatihan", "Training Programs")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Pelatihan praktis dengan instruktur berpengalaman. Sertifikat diberikan setelah menyelesaikan program.",
                "Practical training with experienced instructors. Certificate provided upon program completion."
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TRAININGS.map((tr, i) => (
              <Card
                key={i}
                className={`overflow-hidden rounded-2xl ${
                  i === 0
                    ? "border-2 border-[var(--yamindo-teal)] shadow-xl"
                    : "border-border/50 shadow-md hover:shadow-lg"
                } transition-all`}
              >
                {i === 0 && (
                  <div className="bg-[var(--yamindo-teal)] text-white text-xs font-bold px-4 py-1.5 text-center">
                    {t("Rekomendasi", "Recommended")}
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {lang === "en" ? tr.enTitle : tr.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {tr.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {tr.level}
                    </span>
                  </div>
                  <ul className="space-y-2 flex-1 mb-6">
                    {(lang === "en" ? tr.topicsEn : tr.topics).map((topic, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-[var(--yamindo-teal)] mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[var(--yamindo-teal)]">
                      {lang === "en" ? tr.priceEn : tr.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">/orang</span>
                  </div>
                  <Button
                    className={`w-full rounded-xl py-5 font-semibold ${
                      i === 0
                        ? "bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white"
                        : "bg-[var(--yamindo-teal)]/10 text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal)]/20"
                    }`}
                    onClick={() => {
                      const label = lang === "en" ? tr.enTitle : tr.title;
                      const waText = encodeURIComponent(
                        lang === "id"
                          ? `Assalamualaikum, saya tertarik dengan pelatihan *${label}* (${tr.price}). Mohon info jadwal dan pendaftaran.`
                          : `Assalamualaikum, I am interested in *${label}* training (${tr.priceEn}). Please provide schedule and registration info.`
                      );
                      window.open(`https://wa.me/6281234567890?text=${waText}`, "_blank");
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("Daftar via WhatsApp", "Register via WhatsApp")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Kegiatan Kami", "Our Activities")}
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
            {t("Siap Mendigitalisasi Bisnis Anda?", "Ready to Digitalize Your Business?")}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Konsultasikan kebutuhan digital marketing bisnis Anda secara gratis. Tim kami siap membantu Anda meraih target.",
              "Consult your business digital marketing needs for free. Our team is ready to help you achieve your targets."
            )}
          </p>
          <Button
            size="lg"
            className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 font-semibold"
            onClick={() => {
              const waText = encodeURIComponent(
                lang === "id"
                  ? "Assalamualaikum, saya ingin konsultasi layanan Digital Marketing Yamindo."
                  : "Assalamualaikum, I would like to consult about Yamindo Digital Marketing services."
              );
              window.open(`https://wa.me/6281234567890?text=${waText}`, "_blank");
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t("Konsultasi Gratis", "Free Consultation")}
          </Button>
        </div>
      </section>
    </>
  );
}
