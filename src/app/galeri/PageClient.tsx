"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Image as ImageIcon,
  Video,
  Grid3X3,
  Film,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ====== Types ======
interface GalleryPageItem {
  id: string;
  type: string;
  src: string;
  thumbnail: string;
  alt: string;
  en_alt: string;
  category: string;
  en_category: string;
  video_url: string;
  order: number;
  active: boolean;
}

// ====== Lightbox + Video Modal Hook ======
export default function PageClient({
  data,
  pageContents = [],
}: {
  data: GalleryPageItem[];
  pageContents?: Record<string, any>[];
}) {
  const { lang, t } = useLang();

  // ====== PageContent helper ======
  function getContentField(section: string, field: string) {
    const s = pageContents.find(p => p.section === section);
    if (!s) return "";
    return lang === "en" ? (s["en_" + field] || s[field]) : (s[field] || s["en_" + field]);
  }

  // Hero section from DB
  const heroSection = pageContents.find((pc) => pc.section === "hero");
  const heroBadge = heroSection
    ? getContentField("hero", "title")
    : t("Galeri Kegiatan", "Activity Gallery");
  const heroSubtitle = heroSection
    ? getContentField("hero", "content")
    : t(
        "Dokumentasi visual dari berbagai kegiatan dan program Yamindo di seluruh Indonesia.",
        "Visual documentation of Yamindo various activities and programs across Indonesia."
      );

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeType, setActiveType] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoItem, setVideoItem] = useState<GalleryPageItem | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const catSet = new Set<string>();
    data.forEach((item) => {
      const cat = getField(item, "category", lang);
      if (cat) catSet.add(cat);
    });
    return Array.from(catSet);
  }, [data, lang]);

  // Filter items
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Type filter
      if (activeType === "photo" && item.type !== "photo") return false;
      if (activeType === "video" && item.type !== "video") return false;

      // Category filter
      if (activeCategory !== "all") {
        const cat = getField(item, "category", lang);
        if (cat !== activeCategory) return false;
      }

      return true;
    });
  }, [data, activeCategory, activeType, lang]);

  // Photos only (for lightbox navigation)
  const photosOnly = useMemo(
    () => filteredData.filter((i) => i.type === "photo"),
    [filteredData]
  );

  // Open lightbox
  const openLightbox = useCallback(
    (item: GalleryPageItem) => {
      if (item.type === "video") {
        setVideoItem(item);
      } else {
        const idx = photosOnly.findIndex((p) => p.id === item.id);
        setLightboxIndex(idx >= 0 ? idx : null);
      }
    },
    [photosOnly]
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null && !videoItem) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
        setVideoItem(null);
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) =>
            prev !== null && prev < photosOnly.length - 1
              ? prev + 1
              : prev
          );
        }
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) =>
            prev !== null && prev > 0 ? prev - 1 : prev
          );
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, videoItem, photosOnly.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (lightboxIndex !== null || videoItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex, videoItem]);

  const currentPhoto =
    lightboxIndex !== null ? photosOnly[lightboxIndex] : null;

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {heroBadge}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("Galeri Yamindo", "Yamindo Gallery")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* ====== FILTERS ====== */}
      <section className="bg-white sticky top-0 z-20 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-4 h-4 text-muted-foreground mr-1 flex-shrink-0" />
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory("all")}
                className={`rounded-full text-xs font-medium px-4 ${
                  activeCategory === "all"
                    ? "bg-[var(--yamindo-teal)] text-white hover:bg-[var(--yamindo-teal-dark)]"
                    : "border-border/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t("Semua", "All")}
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full text-xs font-medium px-4 ${
                    activeCategory === cat
                      ? "bg-[var(--yamindo-teal)] text-white hover:bg-[var(--yamindo-teal-dark)]"
                      : "border-border/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Type toggle */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              {[
                { key: "all", label: t("Semua", "All"), Icon: Grid3X3 },
                { key: "photo", label: t("Foto", "Photo"), Icon: ImageIcon },
                { key: "video", label: t("Video", "Video"), Icon: Film },
              ].map(({ key, label, Icon }) => (
                <Button
                  key={key}
                  variant={activeType === key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveType(key)}
                  className={`rounded-md text-xs font-medium gap-1.5 ${
                    activeType === key
                      ? "bg-background shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== MASONRY GALLERY ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              {t(
                `Menampilkan ${filteredData.length} item`,
                `Showing ${filteredData.length} items`
              )}
            </p>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-[var(--yamindo-teal)]/40" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t("Tidak ada item ditemukan", "No items found")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Coba ubah filter untuk melihat galeri lainnya.",
                  "Try changing the filter to see other gallery items."
                )}
              </p>
            </div>
          ) : (
            /* Masonry grid using CSS columns */
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filteredData.map((item) => {
                const isVideo = item.type === "video";
                const imgSrc = item.thumbnail || item.src;
                const cat = getField(item, "category", lang);

                return (
                  <div
                    key={item.id}
                    className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    {/* Image */}
                    <img
                      src={imgSrc}
                      alt={getField(item, "alt", lang)}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Video play icon */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-[var(--yamindo-teal)] ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-white text-xs font-medium truncate">
                          {getField(item, "alt", lang)}
                        </p>
                        <Badge className="flex-shrink-0 bg-white/90 text-foreground border-0 text-[10px] px-1.5 py-0.5">
                          {isVideo ? (
                            <Video className="w-2.5 h-2.5 mr-0.5" />
                          ) : (
                            <ImageIcon className="w-2.5 h-2.5 mr-0.5" />
                          )}
                          {cat}
                        </Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ====== PHOTO LIGHTBOX ====== */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label={t("Tutup", "Close")}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {lightboxIndex + 1} / {photosOnly.length}
          </div>

          {/* Prev button */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label={t("Sebelumnya", "Previous")}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Image */}
          <img
            src={currentPhoto.src}
            alt={getField(currentPhoto, "alt", lang)}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          {getField(currentPhoto, "alt", lang) && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-lg text-center">
              <p className="text-white/90 text-sm font-medium">
                {getField(currentPhoto, "alt", lang)}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {getField(currentPhoto, "category", lang)}
              </p>
            </div>
          )}

          {/* Next button */}
          {lightboxIndex < photosOnly.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label={t("Berikutnya", "Next")}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      )}

      {/* ====== VIDEO MODAL ====== */}
      {videoItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoItem(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setVideoItem(null);
            }}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label={t("Tutup", "Close")}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Video container */}
          <div
            className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {videoItem.video_url ? (
              <iframe
                src={videoItem.video_url}
                title={getField(videoItem, "alt", lang)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/60">
                <Video className="w-16 h-16 mb-4" />
                <p>{t("Video tidak tersedia", "Video not available")}</p>
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-lg text-center">
            <p className="text-white/90 text-sm font-medium">
              {getField(videoItem, "alt", lang)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
