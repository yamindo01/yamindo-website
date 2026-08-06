"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang, getField } from "@/lib/i18n";

interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  en_alt: string;
  order: number;
  active: boolean;
}

export default function Gallery({ images }: { images: GalleryImageItem[] }) {
  const { lang, t } = useLang();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightboxIdx((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section id="galeri" className="py-16 md:py-24 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            {t("Galeri Kegiatan", "Activity Gallery")}
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("Dokumentasi Kegiatan Kami", "Our Activity Documentation")}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={getField(img, "alt", lang)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--yamindo-teal-dark)]/0 group-hover:bg-[var(--yamindo-teal-dark)]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  {getField(img, "alt", lang)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label={t("Tutup", "Close")}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label={t("Sebelumnya", "Previous")}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label={t("Berikutnya", "Next")}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={images[lightboxIdx].src.replace("w=600", "w=1200")}
            alt={getField(images[lightboxIdx], "alt", lang)}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/70 text-sm">
            {getField(images[lightboxIdx], "alt", lang)}
          </p>
        </div>
      )}
    </section>
  );
}