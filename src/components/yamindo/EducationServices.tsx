"use client";

import { BookOpen, GraduationCap, Home, School, Building2, Library, Award, Brain, Star } from "lucide-react";
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
    <section className="py-16 md:py-20 bg-white">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {data.map((item) => {
            const IconComponent = iconMap[item.icon] || BookOpen;
            return (
              <div
n                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={getField(item, "title", lang)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--yamindo-teal-light)] to-[var(--yamindo-teal)]/20 flex items-center justify-center">
                      <IconComponent className="w-14 h-14 text-[var(--yamindo-teal)]/40" />
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[var(--yamindo-teal)]" />
                  </div>
                  {/* Title at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-sm leading-tight drop-shadow-lg">
                      {getField(item, "title", lang)}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}