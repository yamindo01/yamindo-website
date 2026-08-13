"use client";

import {
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  Users,
  Crown,
  Briefcase,
  Shield,
  Eye,
  BookOpen,
  FileText,
  Wallet,
  HeartPulse,
  Megaphone,
  GraduationCap,
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
  fallbackIcon: React.ComponentType<{ className?: string }>;
}> = {
  1: { bgColor: "bg-amber-50", borderColor: "border-amber-200", textColor: "text-amber-800", iconBg: "bg-amber-100", iconColor: "text-amber-600", fallbackIcon: Crown },
  2: { bgColor: "bg-blue-50", borderColor: "border-blue-200", textColor: "text-blue-800", iconBg: "bg-blue-100", iconColor: "text-blue-600", fallbackIcon: Eye },
  3: { bgColor: "bg-teal-50", borderColor: "border-teal-200", textColor: "text-teal-800", iconBg: "bg-teal-100", iconColor: "text-teal-600", fallbackIcon: Briefcase },
  4: { bgColor: "bg-emerald-50", borderColor: "border-emerald-200", textColor: "text-emerald-800", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", fallbackIcon: Shield },
  5: { bgColor: "bg-violet-50", borderColor: "border-violet-200", textColor: "text-violet-800", iconBg: "bg-violet-100", iconColor: "text-violet-600", fallbackIcon: Users },
};

const BIDANG_COLORS = [
  { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", iconBg: "bg-emerald-100", icon: "text-emerald-600" },
  { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", iconBg: "bg-rose-100", icon: "text-rose-600" },
  { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", iconBg: "bg-violet-100", icon: "text-violet-600" },
  { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", iconBg: "bg-blue-100", icon: "text-blue-600" },
  { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", iconBg: "bg-amber-100", icon: "text-amber-600" },
  { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", iconBg: "bg-sky-100", icon: "text-sky-600" },
  { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", iconBg: "bg-pink-100", icon: "text-pink-600" },
  { bg: "bg-lime-50", border: "border-lime-200", text: "text-lime-700", iconBg: "bg-lime-100", icon: "text-lime-600" },
];

export default function PageClient({
  teamMembers,
  orgMembers,
  orgPhotos,
  pageContents = [],
}: {
  teamMembers: TeamMemberItem[];
  orgMembers: OrgMemberItem[];
  orgPhotos: GalleryPageItem[];
  pageContents?: Record<string, any>[];
}) {
  const { lang, t } = useLang();

  // ====== PageContent helper ======
  function getContentField(section: string, field: string) {
    const s = pageContents.find(p => p.section === section);
    if (!s) return "";
    return lang === "en" ? (s["en_" + field] || s[field]) : (s[field] || s["en_" + field]);
  }

  // Hero section from DB
  const heroSection = pageContents.find((pc) => pc.section === "hero");
  const heroBadge = heroSection
    ? getContentField("hero", "title")
    : t("Yayasan Yasir Amin Indonesia", "Yasir Amin Indonesia Foundation");
  const heroSubtitle = heroSection
    ? getContentField("hero", "content")
    : t(
        "Susunan pengurus Yayasan Yasir Amin Indonesia yang bergerak dalam dakwah, pendidikan, dan kemanusiaan.",
        "Organization structure of Yasir Amin Indonesia Foundation engaged in dakwah, education, and humanitarian work."
      );

  // Group org members by level
  const level1 = orgMembers.filter((m) => m.level === 1);
  const level2 = orgMembers.filter((m) => m.level === 2);
  const level3 = orgMembers.filter((m) => m.level === 3);
  const level4 = orgMembers.filter((m) => m.level === 4);
  const level5 = orgMembers.filter((m) => m.level === 5);
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
            {heroBadge}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("Struktur Organisasi Yamindo", "Yamindo Organization Structure")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* ====== ORG CHART ====== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              {t("Organogram", "Organogram")}
              <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("Struktur Organisasi Yamindo", "Yamindo Organization Structure")}
            </h2>
          </div>

          {hasOrgData ? (
            <div className="flex flex-col items-center">
              {/* ===== LEVEL 1: PEMBINA / KETUA PEMBINA ===== */}
              <div className="flex flex-col items-center gap-1 mb-1">
                {level1.map((m) => (
                  <OrgCard key={m.id} member={m} lang={lang} config={LEVEL_CONFIG[1]} size="lg" />
                ))}
              </div>

              {/* Connector L1 -> L2 (dashed = advisory) */}
              {level1.length > 0 && level2.length > 0 && <DashedConnector />}

              {/* ===== LEVEL 2: PENGAWAS ===== */}
              {level2.length > 0 && (
                <div className="flex flex-col items-center gap-1 mb-1">
                  {level2.map((m) => (
                    <OrgCard key={m.id} member={m} lang={lang} config={LEVEL_CONFIG[2]} size="md" />
                  ))}
                </div>
              )}

              {/* Connector L1 -> L3 (solid = direct report, bypassing L2) */}
              {level1.length > 0 && level3.length > 0 && <SolidConnector />}

              {/* ===== LEVEL 3: KETUA PENGURUS ===== */}
              {level3.length > 0 && (
                <div className="flex flex-col items-center gap-1 mb-1">
                  {level3.map((m) => (
                    <OrgCard key={m.id} member={m} lang={lang} config={LEVEL_CONFIG[3]} size="lg" />
                  ))}
                </div>
              )}

              {/* Connector L3 -> L4 */}
              {level3.length > 0 && level4.length > 0 && (
                <div className="w-full flex flex-col items-center">
                  <div className="w-px h-6 bg-[var(--yamindo-teal)]/40" />
                  <div className="w-3 h-3 rounded-full border-2 border-[var(--yamindo-teal)]/40 bg-white" />
                  <div className="relative w-[60%] max-w-md h-px bg-[var(--yamindo-teal)]/40">
                    {level4.length >= 2 && (
                      <div
                        className="absolute top-0 w-px h-6 bg-[var(--yamindo-teal)]/40"
                        style={{ left: "0%" }}
                      />
                    )}
                    {level4.length >= 2 && (
                      <div
                        className="absolute top-0 w-px h-6 bg-[var(--yamindo-teal)]/40"
                        style={{ left: "100%" }}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* ===== LEVEL 4: SEKRETARIS & BENDAHARA (side by side) ===== */}
              {level4.length > 0 && (
                <div className="w-full max-w-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {level4.map((m) => (
                      <OrgCard key={m.id} member={m} lang={lang} config={LEVEL_CONFIG[4]} size="sm" />
                    ))}
                  </div>
                </div>
              )}

              {/* Connector L3 -> L5 */}
              {level3.length > 0 && level5.length > 0 && (
                <div className="w-full flex flex-col items-center mt-1">
                  <div className="w-px h-6 bg-[var(--yamindo-teal)]/40" />
                  <div className="w-3 h-3 rounded-full border-2 border-[var(--yamindo-teal)]/40 bg-white" />
                  <div className="relative w-[85%] max-w-3xl h-px bg-[var(--yamindo-teal)]/40">
                    {level5.map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 w-px h-6 bg-[var(--yamindo-teal)]/40"
                        style={{ left: level5.length > 1 ? `${(i / (level5.length - 1)) * 100}%` : "50%" }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ===== LEVEL 5: BIDANG-BIDANG ===== */}
              {level5.length > 0 && (
                <div className="w-full max-w-5xl">
                  <div
                    className={`grid gap-4 ${
                      level5.length <= 3
                        ? `grid-cols-${level5.length} max-w-${level5.length * 48}`
                        : level5.length <= 4
                        ? "grid-cols-4"
                        : "grid-cols-3 md:grid-cols-4"
                    }`}
                    style={{ gridTemplateColumns: level5.length <= 4 ? `repeat(${level5.length}, 1fr)` : undefined }}
                  >
                    {level5.map((m, i) => (
                      <OrgCard
                        key={m.id}
                        member={m}
                        lang={lang}
                        config={{ ...LEVEL_CONFIG[5], ...BIDANG_COLORS[i % BIDANG_COLORS.length] }}
                        size="xs"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ====== FALLBACK ====== */
            <FallbackOrgChart t={t} />
          )}
        </div>
      </section>

      {/* ====== TEAM MEMBERS GRID ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group overflow-hidden rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={getField(member, "name", lang)} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                      <Users className="w-16 h-16 text-[var(--yamindo-teal)]/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="bg-white/90 backdrop-blur-sm text-foreground border-0 text-xs font-medium px-2.5 py-1">
                      {getField(member, "role", lang)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground leading-tight">{getField(member, "name", lang)}</h3>
                  <p className="text-[var(--yamindo-teal)] text-sm font-medium mt-1">{getField(member, "role", lang)}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 line-clamp-3">{getField(member, "bio", lang)}</p>
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

      {/* ====== ACTIVITY GALLERY ====== */}
      {orgPhotos.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
                <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
                {t("Galeri Kegiatan", "Activity Gallery")}
                <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("Dokumentasi Kegiatan Tim", "Team Activity Documentation")}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {orgPhotos.map((photo) => (
                <div key={photo.id} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <img src={photo.thumbnail || photo.src} alt={getField(photo, "alt", lang)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium truncate">{getField(photo, "alt", lang)}</p>
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
            {t("Bergabunglah dengan Tim Kami", "Join Our Team")}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Kami selalu mencari individu berdedikasi untuk bergabung dalam misi kemanusiaan Yamindo.",
              "We are always looking for dedicated individuals to join Yamindo humanitarian mission."
            )}
          </p>
          <a href="/kontak" className="inline-flex items-center justify-center gap-2 bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 py-3 font-semibold shadow-lg transition-all text-sm">
            <Mail className="w-4 h-4" />
            {t("Hubungi Kami", "Contact Us")}
          </a>
          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {[
              { icon: CheckCircle2, label: t("Integritas", "Integrity") },
              { icon: CheckCircle2, label: t("Profesionalisme", "Professionalism") },
              { icon: CheckCircle2, label: t("Dedikasi", "Dedication") },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.label} className="flex items-center justify-center gap-2 text-white/90">
                  <Icon className="w-4 h-4" /><span className="text-sm font-medium">{v.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// ====== CONNECTORS ======
function SolidConnector() {
  return (
    <div className="flex flex-col items-center my-1">
      <div className="w-px h-8 bg-[var(--yamindo-teal)]/40" />
      <div className="w-3 h-3 rounded-full border-2 border-[var(--yamindo-teal)]/40 bg-white" />
      <div className="w-px h-8 bg-[var(--yamindo-teal)]/40" />
    </div>
  );
}

function DashedConnector() {
  return (
    <div className="flex flex-col items-center my-1">
      <div className="w-px h-6 border-l border-dashed border-[var(--yamindo-teal)]/40" />
      <div className="w-3 h-3 rounded-full border-2 border-dashed border-blue-300 bg-white" />
      <div className="w-px h-6 border-l border-dashed border-[var(--yamindo-teal)]/40" />
    </div>
  );
}

// ====== ORG CARD WITH PHOTO ======
function OrgCard({ member, lang, config, size = "md" }: {
  member: OrgMemberItem;
  lang: "id" | "en";
  config: { bgColor: string; borderColor: string; textColor: string; iconBg: string; iconColor: string; fallbackIcon: React.ComponentType<{ className?: string }> };
  size?: "lg" | "md" | "sm" | "xs";
}) {
  const name = lang === "en" && member.en_name ? member.en_name : member.name;
  const position = lang === "en" && member.en_position ? member.en_position : member.position;
  const FallbackIcon = config.fallbackIcon;

  const photoSize = size === "lg" ? "w-24 h-24 md:w-28 md:h-28" : size === "md" ? "w-20 h-20" : size === "sm" ? "w-16 h-16" : "w-14 h-14";
  const nameSize = size === "lg" ? "text-base md:text-lg" : size === "md" ? "text-sm md:text-base" : size === "sm" ? "text-xs md:text-sm" : "text-xs";
  const posSize = size === "lg" ? "text-xs md:text-sm" : "text-xs";
  const padding = size === "lg" ? "px-5 py-4 md:px-8 md:py-6" : size === "md" ? "px-4 py-3 md:px-6 md:py-4" : size === "sm" ? "px-3 py-3 md:px-4 md:py-4" : "px-3 py-3";

  return (
    <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl ${padding} text-center shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-2`}>
      <div className={`relative ${photoSize} rounded-full overflow-hidden border-4 border-white shadow-md`}>
        {member.photo ? (
          <img src={member.photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full ${config.iconBg} flex items-center justify-center`}>
            <FallbackIcon className={`w-${size === "xs" ? "6" : "8"} h-${size === "xs" ? "6" : "8"} ${config.iconColor}`} />
          </div>
        )}
      </div>
      <div>
        <h3 className={`font-bold ${config.textColor} ${nameSize} leading-tight`}>{name}</h3>
        <p className={`${posSize} text-muted-foreground mt-0.5 leading-snug`}>{position}</p>
      </div>
    </div>
  );
}

// ====== FALLBACK ORG CHART ======
function FallbackOrgChart({ t }: { t: (id: string, en: string) => string }) {
  return (
    <div className="flex flex-col items-center">
      {/* L1: Pembina */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl px-8 py-5 text-center shadow-sm w-full max-w-xs">
        <div className="w-14 h-14 rounded-full bg-amber-100 border-4 border-white shadow-md flex items-center justify-center mx-auto mb-3">
          <Crown className="w-7 h-7 text-amber-600" />
        </div>
        <h3 className="font-bold text-amber-800 text-lg">{t("Pembina", "Patron")}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{t("Ketua Pembina", "Chief Patron")}</p>
      </div>

      <DashedConnector />

      {/* L2: Pengawas */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl px-8 py-4 text-center shadow-sm w-full max-w-xs">
        <div className="w-12 h-12 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center mx-auto mb-2">
          <Eye className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-bold text-blue-800 text-base">{t("Pengawas", "Supervisor")}</h3>
      </div>

      <SolidConnector />

      {/* L3: Ketua Pengurus */}
      <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl px-8 py-5 text-center shadow-sm w-full max-w-xs">
        <div className="w-14 h-14 rounded-full bg-teal-100 border-4 border-white shadow-md flex items-center justify-center mx-auto mb-3">
          <Briefcase className="w-7 h-7 text-teal-600" />
        </div>
        <h3 className="font-bold text-teal-800 text-lg">{t("Ketua Pengurus", "Chairman")}</h3>
      </div>

      {/* L3 -> L4 connector */}
      <div className="w-full flex flex-col items-center">
        <div className="w-px h-6 bg-[var(--yamindo-teal)]/40" />
        <div className="w-3 h-3 rounded-full border-2 border-[var(--yamindo-teal)]/40 bg-white" />
        <div className="relative w-48 max-w-xs h-px bg-[var(--yamindo-teal)]/40">
          <div className="absolute top-0 -left-0 w-px h-6 bg-[var(--yamindo-teal)]/40" />
          <div className="absolute top-0 -right-0 w-px h-6 bg-[var(--yamindo-teal)]/40" />
        </div>
      </div>

      {/* L4: Sekretaris & Bendahara */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl px-4 py-3 text-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-emerald-100 border-4 border-white shadow-sm flex items-center justify-center mx-auto mb-2">
            <FileText className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="font-bold text-emerald-800 text-sm">{t("Sekretaris", "Secretary")}</h3>
        </div>
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl px-4 py-3 text-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-emerald-100 border-4 border-white shadow-sm flex items-center justify-center mx-auto mb-2">
            <Wallet className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="font-bold text-emerald-800 text-sm">{t("Bendahara", "Treasurer")}</h3>
        </div>
      </div>

      {/* L3 -> L5 connector */}
      <div className="w-full flex flex-col items-center mt-1">
        <div className="w-px h-6 bg-[var(--yamindo-teal)]/40" />
        <div className="w-3 h-3 rounded-full border-2 border-[var(--yamindo-teal)]/40 bg-white" />
        <div className="relative w-[85%] max-w-lg h-px bg-[var(--yamindo-teal)]/40">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="absolute top-0 w-px h-6 bg-[var(--yamindo-teal)]/40" style={{ left: `${(i / 3) * 100}%` }} />
          ))}
        </div>
      </div>

      {/* L5: Bidang */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
        {[
          { title: t("Bidang Pendidikan", "Education Division"), cls: "bg-emerald-50 border-emerald-200", icon: GraduationCap, ic: "text-emerald-600", ib: "bg-emerald-100" },
          { title: t("Bidang Sosial", "Social Division"), cls: "bg-rose-50 border-rose-200", icon: HeartPulse, ic: "text-rose-600", ib: "bg-rose-100" },
          { title: t("Bidang Keagamaan", "Religious Affairs"), cls: "bg-violet-50 border-violet-200", icon: BookOpen, ic: "text-violet-600", ib: "bg-violet-100" },
          { title: t("Humas", "Public Relations"), cls: "bg-blue-50 border-blue-200", icon: Megaphone, ic: "text-blue-600", ib: "bg-blue-100" },
        ].map((node) => {
          const Icon = node.icon;
          return (
            <div key={node.title} className={`${node.cls} border-2 rounded-2xl px-3 py-3 text-center shadow-sm`}>
              <div className={`w-9 h-9 rounded-full ${node.ib} border-3 border-white shadow-sm flex items-center justify-center mx-auto mb-2`}>
                <Icon className={`w-4 h-4 ${node.ic}`} />
              </div>
              <h3 className="font-bold text-foreground text-xs leading-tight">{node.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
