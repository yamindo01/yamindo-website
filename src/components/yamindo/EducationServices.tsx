"use client";

import { BookOpen, GraduationCap, Home, School, Building2, Library, Award, Brain, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLang, getField } from "@/lib/i18n";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, GraduationCap, Home, School, Building2, Library, Award, Brain, Star,
};

interface EducationServiceItem {
  id: string;
  title: string;
  en_title: string;
  description: string;
  en_description: string;
  image: string;
  icon: string;
  order: number;
  active: boolean;
}

export default function EducationServices({
  data,
}: {
  data: EducationServiceItem[];
}) {
  const { lang, t } = useLang();

  if (data.length === 0) return null;

  return (
    <section id="pendidikan" className="py-16 md:py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            {t("Layanan Pendidikan", "Education Services")}
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t(
              "Jenjang Pendidikan Yamindo",
              "Yamindo Education Levels"
            )}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            {t(
              "Kami menyediakan layanan pendidikan dari usia dini hingga perguruan tinggi untuk membentuk generasi unggul.",
              "We provide education services from early childhood to university to shape an outstanding generation."
            )}
          </p>
        </div>

        {/* Cards Grid - 4 columns like Program Utama Kami */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item) => {
            const IconComponent = iconMap[item.icon] || BookOpen;
            return (
              <Card
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Top */}
                <div className="relative h-48 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={getField(item, "title", lang)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-[var(--yamindo-teal)]/40" />
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Icon badge - center right floating */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[var(--yamindo-teal)]" />
                  </div>
                </div>

                {/* Content Bottom */}
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {getField(item, "title", lang)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {getField(item, "description", lang)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selengkapnya Link */}
        <div className="pt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[var(--yamindo-teal)] text-[var(--yamindo-teal)] hover:bg-[var(--yamindo-teal-light)] text-sm font-medium px-6"
          >
            <a href="/layanan#pendidikan">
              {t("Selengkapnya", "View All")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}