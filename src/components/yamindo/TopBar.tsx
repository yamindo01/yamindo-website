import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

interface TopBarProps {
  siteConfig?: Record<string, string>;
}

export default function TopBar({ siteConfig = {} }: TopBarProps) {
  const welcome = siteConfig.topbar_welcome || "Selamat Datang di Yamindo";
  const phone = siteConfig.phone || "+62 21 1234 5678";
  const email = siteConfig.email || "info@yamindo.or.id";

  return (
    <div className="bg-[var(--yamindo-teal-dark)] text-white text-sm py-2 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="flex items-center gap-2">
          <span className="opacity-90">{welcome}</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>{phone}</span>
          </a>
          <span className="w-px h-4 bg-white/30" />
          <a href="#" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>{email}</span>
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
