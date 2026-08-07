"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  X,
  Heart,
  ChevronDown,
  GraduationCap,
  Users,
  HandHeart,
  AlertTriangle,
  Briefcase,
  Stethoscope,
  Coins,
  Landmark,
  UtensilsCrossed,
  Sunset,
  Ambulance,
  Award,
  Building2,
  School,
  BookOpen,
  BookMarked,
  Baby,
  Camera,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import LanguageSwitcher from "@/components/yamindo/LanguageSwitcher";

// ====== Sub-menu icon map ======
const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  pendidikan: GraduationCap,
  sosial: Users,
  kemanusiaan: HandHeart,
  bencana: AlertTriangle,
  pelatihan: Briefcase,
  kesehatan: Stethoscope,
  zakat: Coins,
  wakaf: Landmark,
};

const programIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "makan-santri": UtensilsCrossed,
  "buka-puasa": Sunset,
  "ambulan-gratis": Ambulance,
  "beasiswa-pendidikan": Award,
  "pembangunan-masjid": Building2,
  "pembangunan-kelas": School,
  "buta-huruf-quran": BookOpen,
  "wakaf-al-quran": BookMarked,
  "kafalah-yatim": Baby,
};

export default function Header() {
  const { lang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ====== Nav data with sub-menus ======
  const navLinks = [
    { label: t("Beranda", "Home"), href: "/" },
    { label: t("Tentang", "About"), href: "/tentang" },
    {
      label: t("Layanan", "Services"),
      href: "/layanan",
      key: "layanan",
      children: [
        { label: t("Layanan Pendidikan", "Education Services"), href: "/layanan#pendidikan", icon: "pendidikan" },
        { label: t("Layanan Sosial", "Social Services"), href: "/layanan#sosial", icon: "sosial" },
        { label: t("Layanan Kemanusiaan", "Humanitarian Services"), href: "/layanan#kemanusiaan", icon: "kemanusiaan" },
        { label: t("Layanan Bencana", "Disaster Services"), href: "/layanan#bencana", icon: "bencana" },
        { label: t("Layanan Pelatihan & Pemberdayaan", "Training & Empowerment"), href: "/layanan#pelatihan", icon: "pelatihan" },
        { label: t("Layanan Kesehatan", "Health Services"), href: "/layanan#kesehatan", icon: "kesehatan" },
        { label: t("Layanan Zakat", "Zakat Services"), href: "/layanan#zakat", icon: "zakat" },
        { label: t("Layanan Wakaf", "Waqf Services"), href: "/layanan#wakaf", icon: "wakaf" },
      ],
    },
    {
      label: t("Program", "Programs"),
      href: "/program",
      key: "program",
      children: [
        { label: t("Program Makan Santri", "Student Meal Program"), href: "/program#makan-santri", icon: "makan-santri" },
        { label: t("Program Buka Puasa Bersama", "Communal Iftar Program"), href: "/program#buka-puasa", icon: "buka-puasa" },
        { label: t("Program Ambulan Gratis", "Free Ambulance Program"), href: "/program#ambulan-gratis", icon: "ambulan-gratis" },
        { label: t("Program Beasiswa Pendidikan", "Education Scholarship Program"), href: "/program#beasiswa-pendidikan", icon: "beasiswa-pendidikan" },
        { label: t("Program Pembangunan Masjid", "Mosque Construction Program"), href: "/program#pembangunan-masjid", icon: "pembangunan-masjid" },
        { label: t("Program Pembangunan Kelas", "Classroom Construction Program"), href: "/program#pembangunan-kelas", icon: "pembangunan-kelas" },
        { label: t("Program Angkat Buta Huruf Al Quran", "Quran Literacy Program"), href: "/program#buta-huruf-quran", icon: "buta-huruf-quran" },
        { label: t("Program Wakaf Al Quran", "Quran Waqf Program"), href: "/program#wakaf-al-quran", icon: "wakaf-al-quran" },
        { label: t("Program Kafalah Yatim", "Orphan Sponsorship Program"), href: "/program#kafalah-yatim", icon: "kafalah-yatim" },
      ],
    },
    { label: t("Tim", "Team"), href: "/tim" },
    {
      label: t("Galeri", "Gallery"),
      href: "/galeri",
      key: "galeri",
      children: [
        { label: t("Gallery Photo", "Photo Gallery"), href: "/galeri#photo", icon: "photo" as string },
        { label: t("Gallery Video", "Video Gallery"), href: "/galeri#video", icon: "video" as string },
      ],
    },
    { label: t("Berita", "News"), href: "/berita" },
    { label: t("Kontak", "Contact"), href: "/kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  // ====== Desktop dropdown handlers ======
  const handleDropdownEnter = useCallback((key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  // ====== Mobile accordion toggle ======
  const toggleMobileAccordion = (key: string) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  // ====== Get icon for gallery ======
  const getGalleryIcon = (icon: string) => {
    if (icon === "video") return Video;
    return Camera;
  };

  // ====== Get icon by group ======
  const getSubIcon = (parentKey: string, iconKey: string) => {
    if (parentKey === "layanan") return serviceIcons[iconKey];
    if (parentKey === "program") return programIcons[iconKey];
    if (parentKey === "galeri") return getGalleryIcon(iconKey);
    return null;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--yamindo-teal)] to-[var(--yamindo-teal-dark)] rounded-xl flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-[var(--yamindo-teal-dark)]">
              Yamindo
            </span>
            <p className="text-[10px] text-muted-foreground -mt-1 leading-tight">
              {t("Yayasan Yasir Amin Indonesia", "Yasir Amin Indonesia Foundation")}
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const hasChildren = "children" in link && link.children;

            if (hasChildren) {
              const parentKey = link.key!;
              const isOpen = openDropdown === parentKey;

              return (
                <div
                  key={parentKey}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(parentKey)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {/* Parent trigger */}
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isOpen
                        ? "text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)]"
                        : "text-foreground/70 hover:text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </a>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-2 min-w-[280px]">
                      {link.children!.map((child, idx) => {
                        const IconComp = getSubIcon(parentKey, child.icon!);
                        const isLast = idx === link.children!.length - 1;

                        return (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child.href)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-foreground/70 hover:text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)]/60 transition-colors group ${
                              isLast ? "" : ""
                            }`}
                          >
                            {IconComp && (
                              <div className="w-8 h-8 rounded-lg bg-[var(--yamindo-teal-light)] group-hover:bg-[var(--yamindo-teal)]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                <IconComp className="w-4 h-4 text-[var(--yamindo-teal)]" />
                              </div>
                            )}
                            <span className="font-medium">{child.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // Simple link (no children)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-[var(--yamindo-teal)] transition-colors rounded-lg hover:bg-[var(--yamindo-teal-light)]"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side: Language Switcher + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            asChild
            className="bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-full px-6 shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all"
          >
            <a href="#donasi" onClick={(e) => handleNavClick(e, "#donasi")}>
              <Heart className="w-4 h-4 mr-2 fill-white" />
              {t("Donasi Sekarang", "Donate Now")}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            if (isMobileMenuOpen) setMobileExpanded(null);
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5 overflow-y-auto max-h-[calc(100vh-120px)]">
          {navLinks.map((link) => {
            const hasChildren = "children" in link && link.children;

            if (hasChildren) {
              const parentKey = link.key!;
              const isExpanded = mobileExpanded === parentKey;

              return (
                <div key={parentKey}>
                  {/* Parent row */}
                  <div className="flex items-center">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex-1 px-4 py-3 text-sm font-medium text-foreground/70 hover:text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                    <button
                      onClick={() => toggleMobileAccordion(parentKey)}
                      className="p-3 text-foreground/50 hover:text-[var(--yamindo-teal)] rounded-lg hover:bg-[var(--yamindo-teal-light)] transition-colors"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sub-items accordion */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pb-2 flex flex-col gap-0.5">
                      {link.children!.map((child) => {
                        const IconComp = getSubIcon(parentKey, child.icon!);
                        return (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child.href)}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-foreground/60 hover:text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)]/60 transition-colors"
                          >
                            {IconComp && (
                              <div className="w-7 h-7 rounded-md bg-[var(--yamindo-teal-light)] flex items-center justify-center flex-shrink-0">
                                <IconComp className="w-3.5 h-3.5 text-[var(--yamindo-teal)]" />
                              </div>
                            )}
                            <span>{child.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // Simple link
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            );
          })}

          <div className="flex items-center gap-3 mt-3 px-4">
            <LanguageSwitcher />
          </div>
          <Button
            asChild
            className="mt-2 mx-4 bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-full"
          >
            <a href="#donasi" onClick={(e) => handleNavClick(e, "#donasi")}>
              <Heart className="w-4 h-4 mr-2 fill-white" />
              {t("Donasi Sekarang", "Donate Now")}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
