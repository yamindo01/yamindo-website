"use client";

import {
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  Users,
  Crown,
  Briefcase,
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

interface OrgMemberItem {
  id: string;
  name: string;
  en_name: string;
  position: string;
  en_position: string;
  photo: string;
  level: number;
  order: number;
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

// ====== Level config ======
const LEVEL_CONFIG: Record<number, {
  bgColor: string;
  borderColor: string;
  textColor: string;
  iconBg: string;
  iconColor: string;
  label: string;
  enLabel: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
}> = {
  1: {
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    label: "Ketua Yayasan",
    enLabel: "Board Chair",
    fallbackIcon: Crown,
  },
  2: {
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    label: "Direktur Eksekutif",
    enLabel: "Executive Director",
    fallbackIcon: Briefcase,
  },
  3: {
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    textColor: "text-slate-700",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
    label: "Koordinator",
    enLabel: "Coordinator",
    fallbackIcon: Users,
  },
};

// Color accents for level 3 coordinators (cycles through 4 colors)
const COORD_COLORS = [
  { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", iconBg: "bg-emerald-100", icon: "text-emerald-600" },
  { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", iconBg: "bg-rose-100", icon: "text-rose-600" },
  { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", iconBg: "bg-violet-100", icon: "text-violet-600" },
  { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", iconBg: "bg-blue-100", icon: "text-blue-600" },
];

export default function PageClient({
  teamMembers,
  orgMembers,
  orgPhotos,
}: {
  teamMembers: TeamMemberItem[];
  orgMembers: OrgMemberItem[];
  orgPhotos: GalleryPageItem[];
}) {
  const { lang, t } = useLang();

  // Group org members by level
  const level1 = orgMembers.filter((m) => m.level === 1);
  const level2 = orgMembers.filter((m) => m.level === 2);
  const level3 = orgMembers.filter((m) => m.level === 3);

  const hasOrgData = orgMembers.length > 0;

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

      {/* ====== ORG CHART WITH PHOTOS ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              {t("Struktur Organisasi", "Organization Structure")}
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("Struktur Organisasi Yamindo", "Yamindo Organization Structure")}
            </h2>
          </div>

          {hasOrgData ? (
            /* ====== DYNAMIC ORG CHART FROM DATABASE ====== */
            <div className="flex flex-col items-center gap-0">
              {/* Level 1: Ketua Yayasan */}
              {level1.map((member) => (
                <OrgPhotoCard key={member.id} member={member} lang={lang} config={LEVEL_CONFIG[1]} />
              ))}

              {/* Connector L1 -> L2 */}
              {level1.length > 0 && level2.length > 0 && <Connector />}

              {/* Level 2: Direktur Eksekutif */}
              {level2.map((member) => (
                <OrgPhotoCard key={member.id} member={member} lang={lang} config={LEVEL_CONFIG[2]} />
              ))}

              {/* Connector L2 -> L3 */}
              {level2.length > 0 && level3.length > 0 && (
                <div className="w-full flex flex-col items-center">
                  <div className="w-px h-8 bg-[var(--yamindo-teal)]/30" />
                  <div className="relative w-[80%] max-w-3xl h-px bg-[var(--yamindo-teal)]/30">
                    {level3.map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 w-px h-8 bg-[var(--yamindo-teal)]/30"
                        style={{ left: level3.length > 1 ? `${(i / (level3.length - 1)) * 100}%` : "50%" }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Level 3: Coordinators */}
              {level3.length > 0 && (
                <div className="w-full max-w-5xl">
                  <div
                    className={`grid gap-6 ${
                      level3.length <= 2
                        ? "grid-cols-2 max-w-2xl mx-auto"
                        : level3.length === 3
                        ? "grid-cols-3 max-w-3xl mx-auto"
                        : "grid-cols-2 md:grid-cols-4"
                    }`}
                  >
                    {level3.map((member, i) => (
                      <OrgPhotoCard
                        key={member.id}
                        member={member}
                        lang={lang}
                        config={{ ...LEVEL_CONFIG[3], ...COORD_COLORS[i % COORD_COLORS.length] }}
                        compact
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ====== FALLBACK: Static icon-based org chart ====== */
            <div className="flex flex-col items-center gap-0">
              <StaticOrgBox
                title={t("Ketua Yayasan", "Board Chair")}
                subtitle={t("Pimpinan Tertinggi", "Highest Leader")}
                icon={<Crown className="w-7 h-7 text-amber-600" />}
                bgClass="bg-amber-50 border-amber-200"
              />
              <Connector />
              <StaticOrgBox
                title={t("Direktur Eksekutif", "Executive Director")}
                subtitle={t("Pengelola Operasional", "Operations Manager")}
                icon={<Briefcase className="w-7 h-7 text-teal-600" />}
                bgClass="bg-teal-50 border-teal-200"
              />
              <div className="w-full flex flex-col items-center">
                <div className="w-px h-8 bg-[var(--yamindo-teal)]/30" />
                <div className="relative w-[75%] max-w-2xl h-px bg-[var(--yamindo-teal)]/30">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute top-0 w-px h-8 bg-[var(--yamindo-teal)]/30"
                      style={{ left: `${(i / 3) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
                {[
                  { title: t("Koordinator Pendidikan", "Education Coordinator"), sub: t("Program Pendidikan", "Education Programs"), cls: "bg-emerald-50 border-emerald-200" },
                  { title: t("Koordinator Kesehatan", "Healthcare Coordinator"), sub: t("Program Kesehatan", "Healthcare Programs"), cls: "bg-rose-50 border-rose-200" },
                  { title: t("Koordinator Zakat & Wakaf", "Zakat & Waqf Coordinator"), sub: t("Pengelolaan Zakat & Wakaf", "Zakat & Waqf Management"), cls: "bg-violet-50 border-violet-200" },
                  { title: t("Koordinator IT & Media", "IT & Media Coordinator"), sub: t("Teknologi & Komunikasi", "Technology & Communications"), cls: "bg-blue-50 border-blue-200" },
                ].map((node) => (
                  <StaticOrgBox
                    key={node.title}
                    title={node.title}
                    subtitle={node.sub}
                    icon={<Users className="w-5 h-5 text-muted-foreground" />}
                    bgClass={node.cls}
                    compact
                  />
                ))}
              </div>
            </div>
          )}
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

// ====== Connector line between org levels ======
function Connector() {
  return (
    <>
      <div className="w-px h-6 bg-[var(--yamindo-teal)]/30" />
      <div className="w-3 h-3 rounded-full border-2 border-[var(--yamindo-teal)]/30 bg-white" />
      <div className="w-px h-6 bg-[var(--yamindo-teal)]/30" />
    </>
  );
}

// ====== Photo-based Org Card (from database) ======
function OrgPhotoCard({
  member,
  lang,
  config,
  compact = false,
}: {
  member: OrgMemberItem;
  lang: "id" | "en";
  config: {
    bgColor: string;
    borderColor: string;
    textColor: string;
    iconBg: string;
    iconColor: string;
    fallbackIcon: React.ComponentType<{ className?: string }>;
  };
  compact?: boolean;
}) {
  const name = lang === "en" && member.en_name ? member.en_name : member.name;
  const position = lang === "en" && member.en_position ? member.en_position : member.position;
  const FallbackIcon = config.fallbackIcon;
  const photoSize = compact ? "w-20 h-20 md:w-24 md:h-24" : "w-28 h-28 md:w-32 md:h-32";

  return (
    <div className={`flex flex-col items-center ${compact ? "" : "w-full max-w-xs"}`}>
      <div
        className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl px-6 py-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 w-full`}
      >
        {/* Photo */}
        <div className="flex justify-center mb-4">
          <div className={`relative ${photoSize} rounded-full overflow-hidden border-4 border-white shadow-md`}>
            {member.photo ? (
              <img
                src={member.photo}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full ${config.iconBg} flex items-center justify-center`}>
                <FallbackIcon className={`w-10 h-10 ${config.iconColor}`} />
              </div>
            )}
          </div>
        </div>
        {/* Name */}
        <h3
          className={`font-bold ${config.textColor} ${compact ? "text-sm" : "text-lg"} leading-tight`}
        >
          {name}
        </h3>
        {/* Position */}
        <p
          className={`text-muted-foreground mt-1.5 ${compact ? "text-xs" : "text-sm"} leading-snug`}
        >
          {position}
        </p>
      </div>
    </div>
  );
}

// ====== Static Org Box (fallback when no DB data) ======
function StaticOrgBox({
  title,
  subtitle,
  icon,
  bgClass,
  compact = false,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgClass: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center ${compact ? "" : "w-full max-w-xs"}`}>
      <div
        className={`${bgClass} border-2 rounded-2xl ${compact ? "px-3 py-4" : "px-8 py-6"} text-center shadow-sm hover:shadow-md transition-shadow w-full`}
      >
        <div
          className={`${compact ? "w-10 h-10" : "w-14 h-14"} rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3`}
        >
          {icon}
        </div>
        <h3
          className={`font-bold text-foreground ${compact ? "text-sm" : "text-lg"} leading-tight`}
        >
          {title}
        </h3>
        <p className={`text-muted-foreground mt-1 ${compact ? "text-xs" : "text-sm"}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
