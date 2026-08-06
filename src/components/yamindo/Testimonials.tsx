"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Donatur Tetap",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    text: "Saya sudah mendukung Yamindo selama 5 tahun. Transparansi dan dampak nyata dari program mereka membuat saya yakin bahwa donasi saya digunakan dengan baik. Sangat merekomendasikan!",
    rating: 5,
    tag: "Sangat Dipercaya",
  },
  {
    name: "Hj. Fatimah Zahra",
    role: "Ketua Komunitas Peduli",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    text: "Kolaborasi dengan Yamindo telah membantu komunitas kami mendapatkan akses air bersih. Prosesnya profesional dan tim mereka sangat ramah serta responsif.",
    rating: 5,
    tag: "Mitra Terpercaya",
  },
  {
    name: "Prof. Ahmad Dahlan",
    role: "Akademisi & Aktivis",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    text: "Yamindo adalah salah satu yayasan yang benar-benar bekerja dari hati. Program pendidikan mereka telah mengubah hidup banyak anak di daerah terpencil Indonesia.",
    rating: 5,
    tag: "Berpengaruh",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Testimoni
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Pendapat dari para donatur, mitra, dan penerima manfaat program Yamindo
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-10 relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--yamindo-teal)]/10" />
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0 shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] px-3 py-1 rounded-full">
                    {t.tag}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] flex items-center justify-center transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-8 bg-[var(--yamindo-teal)]"
                      : "w-2 bg-[var(--yamindo-teal)]/30"
                  }`}
                  aria-label={`Testimoni ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] flex items-center justify-center transition-colors"
              aria-label="Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
