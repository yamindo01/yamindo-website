"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", alt: "Bantuan pendidikan" },
  { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80", alt: "Program kesehatan" },
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80", alt: "Bakti sosial" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80", alt: "Penyaluran bantuan" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80", alt: "Anak-anak belajar" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", alt: "Layanan medis" },
];

const galleryImages2 = [
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80", alt: "Pelatihan keterampilan" },
  { src: "https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=600&q=80", alt: "Program air bersih" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "Sekolah daerah terpencil" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const allImages = [...galleryImages, ...galleryImages2];

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null ? (i - 1 + allImages.length) % allImages.length : null));
  const next = () => setLightboxIdx((i) => (i !== null ? (i + 1) % allImages.length : null));

  return (
    <section id="galeri" className="py-16 md:py-24 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Galeri Kegiatan
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dokumentasi Kegiatan Kami
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--yamindo-teal-dark)]/0 group-hover:bg-[var(--yamindo-teal-dark)]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
          {galleryImages2.map((img, idx) => (
            <div
              key={`r2-${idx}`}
              className="relative group rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(galleryImages.length + idx)}
                >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--yamindo-teal-dark)]/0 group-hover:bg-[var(--yamindo-teal-dark)]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  {img.alt}
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
            aria-label="Tutup"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Berikutnya"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={allImages[lightboxIdx].src.replace("w=600", "w=1200")}
            alt={allImages[lightboxIdx].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/70 text-sm">
            {allImages[lightboxIdx].alt}
          </p>
        </div>
      )}
    </section>
  );
}
