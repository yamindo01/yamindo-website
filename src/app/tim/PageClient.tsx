"use client";

import {
  Crown,
  Briefcase,
  Users,
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ====== Types ======
interface TeamMemberItem {
  id: string;
  name: string;
  en_name: string;
  role: string;
  en_role: string;
  bio: string;
  en_bio: string;
  image: string;
  active: boolean;
}

interface GalleryPageItem {
  id: string;
  type: string;
  src: string;
  thumbnail: string;
  alt: string;
  en_alt: string;
  category: string;
  en_category: string;
  order: number;
  active: boolean;
}

// ====== Org Chart Nodes ======
interface OrgNode {
  id: string;
  title: string;
  enTitle: string;
  subtitle: string;
  enSubtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

export default function PageClient({
  teamMembers,
  orgPhotos,
}: {
  teamMembers: TeamMemberItem[];
  orgPhotos: GalleryPageItem[];
}) {
  const { lang, t } = useLang();

  // Org chart structure
  const orgChart: OrgNode[] = [
    {
      id: "ketua",
      title: t("Ketua Yayasan", "Board Chair"),
      enTitle: "Board Chair",
      subtitle: t("Pimpinan Tertinggi", "Highest Leader"),
      enSubtitle: "Highest Leader",
      icon: Crown,
      color: "text-amber-600",
      bgColor: "bg-amber-50 border-amber-200",
    },
    {
      id: "direktur",
      title: t("Direktur Eksekutif", "Executive Director"),
      enTitle: "Executive Director",
      subtitle: t("Pengelola Operasional", "Operations Manager"),
      enSubtitle: "Operations Manager",
      icon: Briefcase,
      color: "text-[var(--yamindo-teal)]",
      bgColor: "bg-[var(--yamindo-teal-light)] border-[var(--yamindo-teal)]/30",
    },
    {
      id: "k1",
      title: t("Koordinator Pendidikan", "Education Coordinator"),
      enTitle: "Education Coordinator",
      subtitle: t("Program Pendidikan", "Education Programs"),
      enSubtitle: "Education Programs",
      icon: Users,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-200",
    },
    {
      id: "k2",
      title: t("Koordinator Kesehatan", "Healthcare Coordinator"),
      enTitle: "Healthcare Coordinator",
      subtitle: t("Program Kesehatan", "Healthcare Programs"),
      enSubtitle: "Healthcare Programs",
      icon: Users,
      color: "text-rose-600",
      bgColor: "bg-rose-50 border-rose-200",
    },
    {
      id: "k3",
      title: t("Koordinator Zakat & Wakaf", "Zakat & Waqf Coordinator"),
      enTitle: "Zakat & Waqf Coordinator",
      subtitle: t("Pengelolaan Zakat & Wakaf", "Zakat & Waqf Management"),
      enSubtitle: "Zakat & Waqf Management",
      icon: Users,
      color: "text-violet-600",
      bgColor: "bg-violet-50 border-violet-200",
    },
    {
      id: "k4",
      title: t("Koordinator IT & Media", "IT & Media Coordinator"),
      enTitle: "IT & Media Coordinator",
      subtitle: t("Teknologi & Komunikasi", "Technology & Communications"),
      enSubtitle: "Technology & Communications",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-200",
    },
  ];

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {t("Tim Kami", "Our Team")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("Tim Yamindo", "Yamindo Team")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t(
              "Para profesional berdedikasi yang menggerakkan misi kemanusiaan Yamindo.",
              "Dedicated professionals driving Yamindo humanitarian mission."
            )}
          </p>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: `${teamMembers.length}+`, label: t("Anggota Tim", "Team Members") },
              { num: "15+", label: t("Tahun Pengalaman", "Years Experience") },
              { num: "30+", label: t("Provinsi", "Provinces") },
              { num: "100+", label: t("Relawan", "Volunteers") },
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

      {/* ====== ORG CHART ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              {t("Struktur Organisasi", "Organization Structure")}
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("Struktur Organisasi Yamindo", "Yamindo Organization Structure")}
            </h2>
          </div>

          {/* Chart */}
          <div className="flex flex-col items-center gap-0">
            {/* Level 1: Ketua */}
            <OrgBox node={orgChart[0]} lang={lang} />
            {/* Connector */}
            <div className="w-px h-8 bg-[var(--yamindo-teal)]/30" />
            <ChevronDown className="w-5 h-5 text-[var(--yamindo-teal)]/40 -mt-1" />
            <div className="w-px h-6 bg-[var(--yamindo-teal)]/30" />

            {/* Level 2: Direktur */}
            <OrgBox node={orgChart[1]} lang={lang} />
            {/* Connector */}
            <div className="w-px h-8 bg-[var(--yamindo-teal)]/30" />
            <ChevronDown className="w-5 h-5 text-[var(--yamindo-teal)]/40 -mt-1" />
            <div className="w-px h-6 bg-[var(--yamindo-teal)]/30" />

            {/* Level 3: 4 Coordinators */}
            <div className="w-full">
              {/* Horizontal connector line */}
              <div className="hidden md:flex justify-center">
                <div className="relative w-[75%] h-px bg-[var(--yamindo-teal)]/30">
                  {/* Vertical drops */}
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute top-0 w-px h-8 bg-[var(--yamindo-teal)]/30"
                      style={{ left: `${(i / 3) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {orgChart.slice(2).map((node) => (
                  <OrgBox key={node.id} node={node} lang={lang} compact />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TEAM MEMBERS GRID ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              {t("Tim Inti", "Core Team")}
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("Anggota Tim Kami", "Our Team Members")}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {t(
                "Kenali lebih dekat para profesional yang berdedikasi di balik program-program Yamindo.",
                "Get to know the dedicated professionals behind Yamindo programs."
              )}
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={getField(member, "name", lang)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                      <Users className="w-16 h-16 text-[var(--yamindo-teal)]/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Role badge on image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="bg-white/90 backdrop-blur-sm text-foreground border-0 text-xs font-medium px-2.5 py-1">
                      {getField(member, "role", lang)}
                    </Badge>
                  </div>
                </div>

                {/* Info */}
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {getField(member, "name", lang)}
                  </h3>
                  <p className="text-[var(--yamindo-teal)] text-sm font-medium mt-1">
                    {getField(member, "role", lang)}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 line-clamp-3">
                    {getField(member, "bio", lang)}
                  </p>
                  {/* Social icons */}
                  <div className="flex gap-2 mt-4">
                    <button className="w-8 h-8 rounded-lg bg-muted hover:bg-[var(--yamindo-teal-light)] flex items-center justify-center transition-colors" aria-label="Email">
                      <Mail className="w-4 h-4 text-muted-foreground hover:text-[var(--yamindo-teal)]" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-muted hover:bg-[var(--yamindo-teal-light)] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-[var(--yamindo-teal)]" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-muted hover:bg-[var(--yamindo-teal-light)] flex items-center justify-center transition-colors" aria-label="Instagram">
                      <Instagram className="w-4 h-4 text-muted-foreground hover:text-[var(--yamindo-teal)]" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ACTIVITY GALLERY (Organisasi photos) ====== */}
      {orgPhotos.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
                {t("Galeri Kegiatan", "Activity Gallery")}
                <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("Dokumentasi Kegiatan Tim", "Team Activity Documentation")}
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                {t(
                  "Momen-momen kebersamaan tim Yamindo dalam berbagai kegiatan.",
                  "Moments of Yamindo team togetherness in various activities."
                )}
              </p>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {orgPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={photo.thumbnail || photo.src}
                    alt={getField(photo, "alt", lang)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium truncate">
                      {getField(photo, "alt", lang)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== JOIN CTA ====== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t(
              "Bergabunglah dengan Tim Kami",
              "Join Our Team"
            )}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Kami selalu mencari individu berdedikasi untuk bergabung dalam misi kemanusiaan Yamindo.",
              "We are always looking for dedicated individuals to join Yamindo humanitarian mission."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 py-3 font-semibold shadow-lg transition-all text-sm"
            >
              <Mail className="w-4 h-4" />
              {t("Hubungi Kami", "Contact Us")}
            </a>
          </div>
          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {[
              { icon: CheckCircle2, label: t("Integritas", "Integrity") },
              { icon: CheckCircle2, label: t("Profesionalisme", "Professionalism") },
              { icon: CheckCircle2, label: t("Dedikasi", "Dedication") },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="flex items-center justify-center gap-2 text-white/90"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{v.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// ====== Org Chart Box Component ======
function OrgBox({
  node,
  lang,
  compact = false,
}: {
  node: OrgNode;
  lang: "id" | "en";
  compact?: boolean;
}) {
  const IconComponent = node.icon;
  const title = lang === "en" ? node.enTitle : node.title;
  const subtitle = lang === "en" ? node.enSubtitle : node.subtitle;

  return (
    <div className={`flex flex-col items-center ${compact ? "" : "w-full max-w-xs"}`}>
      <div
        className={`${node.bgColor} border-2 rounded-2xl px-6 py-5 ${compact ? "px-3 py-4" : "px-8 py-6"} text-center shadow-sm hover:shadow-md transition-shadow w-full`}
      >
        <div
          className={`w-12 h-12 ${compact ? "w-10 h-10" : "w-14 h-14"} rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3`}
        >
          <IconComponent className={`w-6 h-6 ${compact ? "w-5 h-5" : "w-7 h-7"} ${node.color}`} />
        </div>
        <h3
          className={`font-bold ${node.color} ${compact ? "text-sm" : "text-lg"} leading-tight`}
        >
          {title}
        </h3>
        <p
          className={`text-muted-foreground mt-1 ${compact ? "text-xs" : "text-sm"}`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
