"use client";

import { useState, useMemo } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Newspaper,
  Clock,
  Sparkles,
} from "lucide-react";
import { useLang, getField } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// ====== Types ======
interface NewsArticleItem {
  id: string;
  slug: string;
  title: string;
  en_title: string;
  category: string;
  en_category: string;
  content: string;
  en_content: string;
  excerpt: string;
  en_excerpt: string;
  image: string;
  author: string;
  date: string;
  featured: boolean;
  active: boolean;
  createdAt: string;
}

// ====== Category color map ======
function getCategoryStyle(category: string): string {
  const lower = category.toLowerCase();
  if (lower.includes("pendidikan") || lower.includes("education"))
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (lower.includes("sosial") || lower.includes("social"))
    return "bg-amber-50 text-amber-700 border-amber-200";
  if (lower.includes("kesehatan") || lower.includes("health"))
    return "bg-rose-50 text-rose-700 border-rose-200";
  if (lower.includes("bencana") || lower.includes("disaster"))
    return "bg-orange-50 text-orange-700 border-orange-200";
  if (lower.includes("wakaf") || lower.includes("waqf"))
    return "bg-violet-50 text-violet-700 border-violet-200";
  if (lower.includes("pemberdayaan") || lower.includes("empowerment"))
    return "bg-teal-50 text-teal-700 border-teal-200";
  if (lower.includes("profil") || lower.includes("profile"))
    return "bg-sky-50 text-sky-700 border-sky-200";
  return "bg-slate-50 text-slate-700 border-slate-200";
}

export default function PageClient({
  data,
}: {
  data: NewsArticleItem[];
}) {
  const { lang, t } = useLang();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Featured article (first featured one)
  const featuredArticle = useMemo(
    () => data.find((a) => a.featured),
    [data]
  );

  // Extract unique categories
  const categories = useMemo(() => {
    const catSet = new Set<string>();
    data.forEach((item) => {
      const cat = getField(item, "category", lang);
      if (cat) catSet.add(cat);
    });
    return Array.from(catSet);
  }, [data, lang]);

  // Non-featured articles (or all if filtering)
  const filteredArticles = useMemo(() => {
    return data.filter((article) => {
      const cat = getField(article, "category", lang);
      const title = getField(article, "title", lang);
      const excerpt = getField(article, "excerpt", lang);

      // Category filter
      if (activeCategory !== "all") {
        if (cat !== activeCategory) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          title.toLowerCase().includes(q) ||
          excerpt.toLowerCase().includes(q) ||
          cat.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [data, activeCategory, searchQuery, lang]);

  // Whether to show featured article
  const showFeatured =
    featuredArticle &&
    activeCategory === "all" &&
    !searchQuery.trim();

  return (
    <>
      {/* ====== HERO BANNER ====== */}
      <section className="relative min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168d3c?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)]/90 via-[var(--yamindo-teal)]/80 to-[var(--yamindo-teal-dark)]/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-white/50" />
            {t("Berita & Artikel", "News & Articles")}
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("Berita Terkini", "Latest News")}
          </h1>
          <p className="text-white/80 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t(
              "Update terbaru seputar kegiatan, program, dan perkembangan Yamindo.",
              "Latest updates on Yamindo activities, programs, and developments."
            )}
          </p>
        </div>
      </section>

      {/* ====== FILTERS ====== */}
      <section className="bg-white sticky top-0 z-20 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                placeholder={t("Cari berita...", "Search news...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-border/50 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED ARTICLE ====== */}
      {showFeatured && featuredArticle && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Image */}
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group min-h-[300px] md:min-h-[420px]"
              >
                {featuredArticle.image ? (
                  <img
                    src={featuredArticle.image}
                    alt={getField(featuredArticle, "title", lang)}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full absolute inset-0 bg-gradient-soft flex items-center justify-center">
                    <Newspaper className="w-20 h-20 text-[var(--yamindo-teal)]/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                {/* Featured badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[var(--yamindo-gold)] text-[var(--yamindo-gold-light)] border-0 text-xs font-semibold px-3 py-1 gap-1">
                    <Sparkles className="w-3 h-3" />
                    {t("Artikel Unggulan", "Featured Article")}
                  </Badge>
                </div>
                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <Badge
                    className={`text-xs font-medium px-2.5 py-1 border mb-3 ${getCategoryStyle(
                      getField(featuredArticle, "category", lang)
                    )}`}
                  >
                    {getField(featuredArticle, "category", lang)}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                    {getField(featuredArticle, "title", lang)}
                  </h2>
                  <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-4">
                    {getField(featuredArticle, "excerpt", lang)}
                  </p>
                  <div className="flex items-center gap-4 text-white/60 text-xs">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredArticle.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side info */}
              <div className="flex flex-col justify-center lg:pl-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-4">
                  <Newspaper className="w-4 h-4" />
                  {t("Sorotan Utama", "Headline")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {getField(featuredArticle, "title", lang)}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {getField(featuredArticle, "excerpt", lang)}
                </p>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  {getField(featuredArticle, "content", lang).slice(0, 300)}
                  {getField(featuredArticle, "content", lang).length > 300
                    ? "..."
                    : ""}
                </p>
                <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                </div>
                <div>
                  <Button
                    className="bg-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-dark)] text-white rounded-xl px-8 font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    {t("Baca Selengkapnya", "Read More")}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== NEWS GRID ====== */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t("Semua Berita", "All News")}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                {t(
                  `Menampilkan ${filteredArticles.length} artikel`,
                  `Showing ${filteredArticles.length} articles`
                )}
              </p>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-[var(--yamindo-teal-light)] flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-[var(--yamindo-teal)]/40" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t("Berita tidak ditemukan", "No news found")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Coba ubah filter atau kata kunci pencarian Anda.",
                  "Try changing your filter or search keywords."
                )}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => {
                const cat = getField(article, "category", lang);
                const catStyle = getCategoryStyle(cat);

                return (
                  <Card
                    key={article.id}
                    className="group overflow-hidden rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-0 gap-0"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={getField(article, "title", lang)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                          <Newspaper className="w-16 h-16 text-[var(--yamindo-teal)]/40" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`text-xs font-medium px-2.5 py-1 border ${catStyle}`}
                        >
                          {cat}
                        </Badge>
                      </div>

                      {/* Featured star */}
                      {article.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-[var(--yamindo-gold)] text-white border-0 text-xs font-medium px-2 py-0.5 gap-0.5">
                            <Sparkles className="w-3 h-3" />
                          </Badge>
                        </div>
                      )}

                      {/* Date on image */}
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 flex flex-col gap-3">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground leading-tight line-clamp-2 group-hover:text-[var(--yamindo-teal)] transition-colors">
                        {getField(article, "title", lang)}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {getField(article, "excerpt", lang)}
                      </p>

                      {/* Read more link */}
                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--yamindo-teal)] group-hover:gap-2.5 transition-all">
                          {t("Baca Selengkapnya", "Read More")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ====== NEWSLETTER CTA ====== */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[var(--yamindo-teal-dark)] to-[var(--yamindo-teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Newspaper className="w-12 h-12 text-white/60 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t(
              "Tetap Terhubung dengan Kami",
              "Stay Connected with Us"
            )}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              "Dapatkan berita terbaru dan update program langsung di inbox Anda.",
              "Get the latest news and program updates directly in your inbox."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder={t("Alamat email Anda", "Your email address")}
              className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-xl px-8 font-semibold shadow-lg whitespace-nowrap">
              {t("Berlangganan", "Subscribe")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
