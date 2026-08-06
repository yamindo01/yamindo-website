"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "id" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (idText: string, enText: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
  t: (idText) => idText,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  const t = useCallback(
    (idText: string, enText: string) => (lang === "en" ? enText : idText),
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/**
 * Get a field from an object, preferring the English version if lang='en',
 * falling back to Indonesian if English is empty.
 */
export function getField<T extends Record<string, any>>(
  item: T,
  field: string,
  lang: Lang
): string {
  if (lang === "en") {
    const enField = `en_${field}` as keyof T;
    const enVal = String(item[enField] ?? "");
    if (enVal) return enVal;
  }
  return String(item[field] ?? "");
}

/**
 * Parse JSON bullets and return the correct language version.
 */
export function getBullets(
  item: { bullets?: string; en_bullets?: string },
  lang: Lang
): string[] {
  try {
    if (lang === "en" && item.en_bullets) {
      const parsed = JSON.parse(item.en_bullets);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]) return parsed;
    }
    const parsed = JSON.parse(item.bullets || "[]");
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // ignore
  }
  return [];
}

// ============ Static UI Dictionaries ============

export const ui = {
  // Header / Nav
  nav_home: { id: "Beranda", en: "Home" },
  nav_about: { id: "Tentang", en: "About" },
  nav_services: { id: "Layanan", en: "Services" },
  nav_programs: { id: "Program", en: "Programs" },
  nav_team: { id: "Tim", en: "Team" },
  nav_gallery: { id: "Galeri", en: "Gallery" },
  nav_news: { id: "Berita", en: "News" },
  nav_contact: { id: "Kontak", en: "Contact" },
  btn_donate_now: { id: "Donasi Sekarang", en: "Donate Now" },
  foundation_name: {
    id: "Yayasan Yasir Amin Indonesia",
    en: "Yasir Amin Indonesia Foundation",
  },

  // Hero Slider
  hero_beneficiaries: { id: "Penerima Manfaat", en: "Beneficiaries" },
  hero_cities_reached: { id: "Kota Terjangkau", en: "Cities Reached" },
  hero_learn_more: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
  hero_prev_slide: { id: "Slide sebelumnya", en: "Previous slide" },
  hero_next_slide: { id: "Slide berikutnya", en: "Next slide" },

  // Services
  services_label: { id: "Layanan Kami", en: "Our Services" },
  services_title: { id: "Program Utama Kami", en: "Our Main Programs" },

  // CTA Banner
  cta_learn_more: { id: "Pelajari Selengkapnya", en: "Learn More" },

  // About & Causes
  causes_label: { id: "Program Unggulan", en: "Featured Programs" },
  causes_title: {
    id: "Program Donasi Populer Kami",
    en: "Our Popular Donation Programs",
  },
  causes_desc: {
    id: "Dukung program-program kami yang berdampak langsung bagi masyarakat Indonesia",
    en: "Support our programs that directly impact Indonesian communities",
  },
  causes_about_default: { id: "Tentang Yamindo", en: "About Yamindo" },
  causes_about_desc_default: {
    id: "Yayasan Yasir Amin Indonesia (Yamindo) didirikan dengan visi untuk menciptakan Indonesia yang lebih adil dan sejahtera.",
    en: "Yasir Amin Indonesia Foundation (Yamindo) was founded with a vision to create a more just and prosperous Indonesia.",
  },
  causes_raised: { id: "Terkumpul", en: "Raised" },
  causes_donate: { id: "Donasi", en: "Donate" },

  // Team
  team_label: { id: "Tim Kami", en: "Our Team" },
  team_title: { id: "Tim Inti Yamindo", en: "Yamindo Core Team" },
  team_desc: {
    id: "Para profesional berdedikasi yang menggerakkan misi kemanusiaan Yamindo",
    en: "Dedicated professionals driving Yamindo's humanitarian mission",
  },

  // Gallery
  gallery_label: { id: "Galeri Kegiatan", en: "Activity Gallery" },
  gallery_title: { id: "Dokumentasi Kegiatan Kami", en: "Our Activity Documentation" },
  gallery_close: { id: "Tutup", en: "Close" },
  gallery_prev: { id: "Sebelumnya", en: "Previous" },
  gallery_next: { id: "Berikutnya", en: "Next" },

  // Testimonials
  testimonial_label: { id: "Testimoni", en: "Testimonials" },
  testimonial_title: {
    id: "Apa Kata Mereka Tentang Kami",
    en: "What They Say About Us",
  },
  testimonial_desc: {
    id: "Pendapat dari para donatur, mitra, dan penerima manfaat program Yamindo",
    en: "Opinions from donors, partners, and beneficiaries of Yamindo's programs",
  },

  // Donation
  donation_label: { id: "Mulai Berdonasi", en: "Start Donating" },
  donation_title: {
    id: "Siap Membantu Masyarakat Indonesia?",
    en: "Ready to Help Indonesian Communities?",
  },
  donation_desc: {
    id: "Setiap rupiah yang Anda donasikan akan disalurkan secara transparan kepada mereka yang membutuhkan",
    en: "Every rupiah you donate will be distributed transparently to those in need",
  },
  donation_one_time: { id: "Sekali Donasi", en: "One-time Donation" },
  donation_recurring: { id: "Donasi Rutin", en: "Recurring Donation" },
  donation_amount_placeholder: {
    id: "Masukkan jumlah donasi",
    en: "Enter donation amount",
  },
  donation_name_placeholder: {
    id: "Nama lengkap Anda (opsional)",
    en: "Your full name (optional)",
  },
  donation_email_placeholder: {
    id: "Email Anda (opsional)",
    en: "Your email (optional)",
  },
  donation_safe_note: {
    id: "Donasi Anda aman dan terjamin. Yamindo bersertifikat ISO 9001:2015.",
    en: "Your donation is safe and guaranteed. Yamindo is ISO 9001:2015 certified.",
  },

  // Blog
  blog_label: { id: "Berita Terkini", en: "Latest News" },
  blog_title: { id: "Artikel & Berita Kami", en: "Our Articles & News" },
  blog_read_more: { id: "Baca Selengkapnya", en: "Read More" },
  blog_view_all: { id: "Lihat Semua Berita", en: "View All News" },

  // Partners
  partners_label: { id: "Mitra Kami", en: "Our Partners" },
  partners_desc: {
    id: "Dipercaya oleh lembaga pemerintah dan organisasi internasional",
    en: "Trusted by government agencies and international organizations",
  },

  // Footer
  footer_quick_links: { id: "Tautan Cepat", en: "Quick Links" },
  footer_about_us: { id: "Tentang Kami", en: "About Us" },
  footer_donation_programs: { id: "Program Donasi", en: "Donation Programs" },
  footer_our_team: { id: "Tim Kami", en: "Our Team" },
  footer_activity_gallery: { id: "Galeri Kegiatan", en: "Activity Gallery" },
  footer_news_articles: { id: "Berita & Artikel", en: "News & Articles" },
  footer_contact_us: { id: "Hubungi Kami", en: "Contact Us" },
  footer_upcoming_events: { id: "Acara Mendatang", en: "Upcoming Events" },
  footer_contact: { id: "Hubungi Kami", en: "Contact Us" },
  footer_description: {
    id: "Yayasan Yasir Amin Indonesia (Yamindo) adalah lembaga nonprofit yang berkomitmen untuk memberdayakan masyarakat Indonesia melalui pendidikan, kesehatan, dan bantuan sosial.",
    en: "Yasir Amin Indonesia Foundation (Yamindo) is a non-profit organization committed to empowering Indonesian communities through education, healthcare, and social assistance.",
  },
  footer_copyright: {
    id: "Copyright \u00a9 2026 Yamindo. Seluruh Hak Cipta Dilindungi.",
    en: "Copyright \u00a9 2026 Yamindo. All Rights Reserved.",
  },
  footer_made_with: {
    id: "Dibuat dengan \u2764 untuk Indonesia",
    en: "Made with \u2764 for Indonesia",
  },
  footer_back_to_top: { id: "Kembali ke atas", en: "Back to top" },

  // Admin Panel
  admin_title: {
    id: "Admin Panel \u2014 Yamindo CMS",
    en: "Admin Panel \u2014 Yamindo CMS",
  },
  admin_desc: {
    id: "Kelola semua konten website dari sini. Perubahan langsung terlihat setelah refresh halaman.",
    en: "Manage all website content here. Changes are visible after refreshing the page.",
  },
  admin_tab_settings: { id: "Pengaturan", en: "Settings" },
  admin_tab_hero: { id: "Hero Slider", en: "Hero Slider" },
  admin_tab_services: { id: "Layanan", en: "Services" },
  admin_tab_causes: { id: "Program Donasi", en: "Donation Programs" },
  admin_tab_counters: { id: "Counter", en: "Counter" },
  admin_tab_team: { id: "Tim", en: "Team" },
  admin_tab_gallery: { id: "Galeri", en: "Gallery" },
  admin_tab_testimonials: { id: "Testimoni", en: "Testimonials" },
  admin_tab_blog: { id: "Berita", en: "News" },
  admin_tab_partners: { id: "Mitra", en: "Partners" },
  admin_tab_events: { id: "Acara", en: "Events" },
  admin_tab_donation: { id: "Donasi", en: "Donation" },
  admin_add_new: { id: "Tambah Baru", en: "Add New" },
  admin_save: { id: "Simpan", en: "Save" },
  admin_cancel: { id: "Batal", en: "Cancel" },
  admin_refresh: { id: "Refresh", en: "Refresh" },
  admin_edit_item: { id: "Edit Item", en: "Edit Item" },
  admin_new_item: { id: "Item Baru", en: "New Item" },
  admin_no_data: {
    id: "Belum ada data. Klik \"Tambah Baru\" untuk menambahkan.",
    en: 'No data yet. Click "Add New" to add an item.',
  },
  admin_items: { id: "item", en: "item(s)" },
  admin_delete_confirm: { id: "Hapus item ini?", en: "Delete this item?" },
  admin_settings_title: { id: "Pengaturan Website", en: "Website Settings" },

  // Language Switcher
  lang_id: { id: "ID", en: "ID" },
  lang_en: { id: "EN", en: "EN" },
} as const;

export type UiKey = keyof typeof ui;

/** Get a UI string by dictionary key */
export function useT() {
  const { lang } = useLang();
  return (key: UiKey) => {
    const entry = ui[key];
    return entry[lang];
  };
}
