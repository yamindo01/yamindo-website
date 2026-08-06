"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function TopBar() {
  return (
    <div className="bg-[var(--yamindo-teal-dark)] text-white text-sm py-2 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="flex items-center gap-2">
          <span className="opacity-90">Selamat Datang di</span>
          <span className="font-semibold">Yamindo</span>
          <span className="opacity-70">— Yayasan Yasir Amin Indonesia</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+62 21 1234 5678</span>
          </a>
          <span className="w-px h-4 bg-white/30" />
          <a href="#" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@yamindo.or.id</span>
          </a>
          <span className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-3 ml-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="hover:text-amber-300 transition-colors hover:scale-110 transform"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
