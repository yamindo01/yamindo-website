"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Yamindo Salurkan Bantuan untuk Korban Bencana Alam NTT",
    category: "Bantuan Bencana",
    date: "15 Juli 2026",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80",
    excerpt: "Tim Yamindo langsung bergerak ke lokasi bencana untuk menyalurkan bantuan logistik dan medis kepada korban bencana alam di Nusa Tenggara Timur.",
  },
  {
    title: "Program Beasiswa Anak Nusantara Resmi Diluncurkan",
    category: "Pendidikan",
    date: "8 Juli 2026",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80",
    excerpt: "Program beasiswa baru ini menargetkan 1.000 anak dari keluarga kurang mampu di 20 provinsi untuk mendapatkan akses pendidikan yang layak.",
  },
  {
    title: "Kolaborasi dengan Pemerintah Daerah untuk Program Air Bersih",
    category: "Air Bersih",
    date: "1 Juli 2026",
    image: "https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=500&q=80",
    excerpt: "Kerjasama strategis dengan pemerintah daerah untuk membangun infrastruktur air bersih di 50 desa yang masih kekurangan akses air bersih.",
  },
];

export default function Blog() {
  return (
    <section id="berita" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Berita Terkini
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Artikel & Berita Kami
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs font-semibold text-[var(--yamindo-teal-dark)] bg-[var(--yamindo-teal-light)]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[var(--yamindo-teal)] transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--yamindo-teal)] mt-3 hover:gap-2 transition-all"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 border-[var(--yamindo-teal)] text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)]"
          >
            <a href="#">
              Lihat Semua Berita
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
