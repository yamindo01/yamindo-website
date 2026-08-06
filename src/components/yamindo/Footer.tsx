"use client";

import { Heart, Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin, Youtube, Calendar } from "lucide-react";

interface EventItem {
  id: number;
  date: string;
  title: string;
  active: boolean;
}

const quickLinks = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Program Donasi", href: "#program" },
  { label: "Tim Kami", href: "#tim" },
  { label: "Galeri Kegiatan", href: "#galeri" },
  { label: "Berita & Artikel", href: "#berita" },
  { label: "Hubungi Kami", href: "#kontak" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer({
  siteConfig,
  events,
}: {
  siteConfig: Record<string, string>;
  events: EventItem[];
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phone = siteConfig.phone || "+62 21 1234 5678";
  const email = siteConfig.email || "info@yamindo.or.id";
  const address = siteConfig.address || "Jl. Kebahagiaan No. 45, Jakarta Selatan, DKI Jakarta 12345";

  return (
    <footer id="kontak" className="relative">
      {/* Main Footer */}
      <div className="bg-[#1a2332] text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Description Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--yamindo-teal)] to-teal-400 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Yamindo</span>
                  <p className="text-[10px] text-white/60 -mt-1 leading-tight">
                    Yayasan Yasir Amin Indonesia
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Yayasan Yasir Amin Indonesia (Yamindo) adalah lembaga nonprofit yang berkomitmen
                untuk memberdayakan masyarakat Indonesia melalui pendidikan, kesehatan, dan bantuan sosial.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/10 hover:bg-[var(--yamindo-teal)] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">Tautan Cepat</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[var(--yamindo-teal)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events */}
            <div>
              <h4 className="font-bold mb-4 text-white">Acara Mendatang</h4>
              <ul className="space-y-3">
                {events.map((event) => (
                  <li key={event.id} className="flex items-start gap-3">
                    <span className="w-12 h-12 bg-[var(--yamindo-teal)]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="w-5 h-5 text-[var(--yamindo-teal)]" />
                    </span>
                    <div>
                      <p className="text-xs text-white/40">{event.date}</p>
                      <p className="text-sm text-white/80">{event.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-white">Hubungi Kami</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--yamindo-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/60">
                    {address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--yamindo-teal)] flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--yamindo-teal)] flex-shrink-0" />
                  <a href={`mailto:${email}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#141d2b] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/40">
          <p>Copyright &copy; 2026 Yamindo. Seluruh Hak Cipta Dilindungi.</p>
          <p>
            Dibuat dengan <Heart className="w-3 h-3 inline text-[var(--yamindo-coral)] fill-[var(--yamindo-coral)]" /> untuk Indonesia
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
