"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Program", href: "#program" },
  { label: "Tim", href: "#tim" },
  { label: "Galeri", href: "#galeri" },
  { label: "Berita", href: "#berita" },
  { label: "Kontak", href: "#kontak" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
        <a href="#beranda" onClick={(e) => handleNavClick(e, "#beranda")} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--yamindo-teal)] to-[var(--yamindo-teal-dark)] rounded-xl flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-[var(--yamindo-teal-dark)]">
              Yamindo
            </span>
            <p className="text-[10px] text-muted-foreground -mt-1 leading-tight">
              Yayasan Yasir Amin Indonesia
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-[var(--yamindo-teal)] transition-colors rounded-lg hover:bg-[var(--yamindo-teal-light)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          className="hidden lg:flex bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-full px-6 shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all"
        >
          <a href="#donasi" onClick={(e) => handleNavClick(e, "#donasi")}>
            <Heart className="w-4 h-4 mr-2 fill-white" />
            Donasi Sekarang
          </a>
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-full"
            >
              <a href="#donasi" onClick={(e) => handleNavClick(e, "#donasi")}>
                <Heart className="w-4 h-4 mr-2 fill-white" />
                Donasi Sekarang
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
