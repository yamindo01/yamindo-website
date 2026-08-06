"use client";

import { CheckCircle, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const aboutBullets = [
  "Memberdayakan masyarakat melalui pendidikan berkualitas",
  "Program kesehatan gratis untuk daerah terpencil",
];

const causes = [
  {
    title: "Air Bersih untuk Desa Tertinggal",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    raised: "Rp 45.000.000",
    goal: "Rp 100.000.000",
    percent: 45,
    image: "https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=400&q=80",
  },
  {
    title: "Beasiswa Anak Nusantara",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    raised: "Rp 78.500.000",
    goal: "Rp 150.000.000",
    percent: 52,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
  },
  {
    title: "Bantuan Bencana Alam",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    raised: "Rp 120.000.000",
    goal: "Rp 200.000.000",
    percent: 60,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80",
  },
];

export default function AboutCauses() {
  return (
    <section id="program" className="py-16 md:py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Program Unggulan
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Program Donasi Populer Kami
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Dukung program-program kami yang berdampak langsung bagi masyarakat Indonesia
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* About Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                alt="Tentang Yamindo"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[var(--yamindo-teal)] text-white px-4 py-2 rounded-lg text-sm font-bold">
                Sejak 2010
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Tentang Yamindo
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Yayasan Yasir Amin Indonesia (Yamindo) didirikan dengan visi untuk menciptakan
                Indonesia yang lebih adil dan sejahtera. Kami berkomitmen untuk memberikan
                bantuan langsung kepada masyarakat yang membutuhkan.
              </p>
              <ul className="space-y-3">
                {aboutBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-[var(--yamindo-teal)] flex-shrink-0 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="mt-5 rounded-full border-[var(--yamindo-teal)] text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)]"
              >
                <a href="#tentang">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Causes Column */}
          <div className="lg:col-span-3 space-y-6">
            {causes.map((cause, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 flex-shrink-0">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-[var(--yamindo-teal-light)] rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[var(--yamindo-teal)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--yamindo-teal)] bg-[var(--yamindo-teal-light)] px-2 py-0.5 rounded-full">
                        Yamindo
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground mb-1">
                      <a href="#" className="hover:text-[var(--yamindo-teal)] transition-colors">
                        {cause.title}
                      </a>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cause.description}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      Terkumpul <span className="font-semibold text-[var(--yamindo-teal)]">{cause.raised}</span>
                    </p>
                    <Progress value={cause.percent} className="h-2 mb-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--yamindo-teal)]">{cause.percent}%</span>
                      <Button
                        size="sm"
                        className="bg-[var(--yamindo-coral)] hover:bg-[var(--yamindo-coral)]/90 text-white rounded-full text-xs px-4"
                      >
                        <Heart className="w-3 h-3 mr-1 fill-white" />
                        Donasi
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
