"use client";

import { GraduationCap, HeartPulse, Home, Droplets, BookOpen, HandHelping } from "lucide-react";
import { useLang, getField } from "@/lib/i18n";

type LucideIcon = React.ComponentType<{ className?: string }>;

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  HeartPulse,
  Home,
  Droplets,
  BookOpen,
  HandHelping,
};

interface ServiceItem {
  id: string;
  title: string;
  en_title: string;
  description: string;
  en_description: string;
  image: string;
  icon: string;
  color: string;
  order: number;
  active: boolean;
}

export default function Services({ services }: { services: ServiceItem[] }) {
  const { lang, t } = useLang();

  return (
    <section id="layanan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            {t("Layanan Kami", "Our Services")}
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("Program Utama Kami", "Our Main Programs")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={getField(service, "title", lang)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[var(--yamindo-teal)] transition-colors">
                    {getField(service, "title", lang)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {getField(service, "description", lang)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}