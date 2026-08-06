"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    subtitle: "Membangun Harapan",
    title: "Mengulurkan Tangan untuk Indonesia yang Lebih Baik",
    description:
      "Yamindo hadir untuk memberdayakan masyarakat melalui program pendidikan, kesehatan, dan bantuan sosial bagi mereka yang membutuhkan di seluruh Indonesia.",
    bullets: ["Pendidikan Berkualitas", "Kesehatan Masyarakat", "Pemberdayaan Ekonomi"],
    bgGradient: "from-teal-50 via-amber-50/30 to-orange-50",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    subtitle: "Bersama Kita Bisa",
    title: "Mewujudkan Generasi Indonesia yang Cerdas dan Sehat",
    description:
      "Dengan dukungan para dermawan dan relawan, kami terus bergerak maju untuk menciptakan perubahan nyata di kehidupan masyarakat.",
    bullets: ["Program Relawan", "Bantuan Bencana", "Sponsor Anak"],
    bgGradient: "from-amber-50 via-teal-50/30 to-green-50",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  },
  {
    subtitle: "Peduli & Berbagi",
    title: "Setiap Donasi Anda Adalah Harapan Baru",
    description:
      "Bergabunglah bersama ribuan dermawan yang telah berkontribusi dalam membangun masa depan yang lebih cerah untuk anak-anak Indonesia.",
    bullets: ["Transparan & Akuntabel", "Jangkauan Nasional", "Dampak Nyata"],
    bgGradient: "from-green-50 via-amber-50/30 to-teal-50",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section id="beranda" className="relative overflow-hidden">
      <div
        className={`bg-gradient-to-r ${slide.bgGradient} transition-all duration-700`}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div
              key={`text-${current}`}
                  className={`space-y-6 ${
                    isAnimating
                      ? "animate-fade-in-left"
                      : ""
                  }`
                }
              >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[var(--yamindo-coral)] fill-[var(--yamindo-coral)]" />
                <span className="text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                {slide.title}
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                {slide.description}
              </p>
              <ul className="space-y-2">
                {slide.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--yamindo-teal-light)] flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-[var(--yamindo-teal)]" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white rounded-full px-8 shadow-lg shadow-teal-200"
                >
                  <a href="#donasi">Donasi Sekarang</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-[var(--yamindo-teal)] text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)]"
                >
                  <a href="#tentang">Pelajari Lebih Lanjut</a>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div
              key={`img-${current}`}
              className={`relative ${
                isAnimating ? "animate-fade-in-right" : ""
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--yamindo-teal)]/20 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-4 md:p-5">
                <p className="text-2xl md:text-3xl font-bold text-[var(--yamindo-teal)]">15K+</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Penerima Manfaat
                </p>
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[var(--yamindo-coral)] rounded-xl shadow-xl p-4 md:p-5 text-white">
                <p className="text-2xl md:text-3xl font-bold">50+</p>
                <p className="text-xs md:text-sm opacity-90">
                  Kota Terjangkau
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105"
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-[var(--yamindo-teal)]"
                  : "w-2 bg-[var(--yamindo-teal)]/30 hover:bg-[var(--yamindo-teal)]/50"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105"
          aria-label="Slide berikutnya"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
}
