"use client";

import { GraduationCap, HeartPulse, Home, Droplets, BookOpen, HandHelping } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Memberikan akses pendidikan berkualitas bagi anak-anak dari keluarga kurang mampu di seluruh Indonesia.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: HeartPulse,
    title: "Kesehatan",
    description: "Menyelenggarakan program kesehatan masyarakat, layanan kesehatan gratis, dan edukasi gaya hidup sehat.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Home,
    title: "Perumahan",
    description: "Membantu pembangunan dan renovasi rumah layak huni bagi masyarakat yang terdampak bencana atau tinggal di kondisi tidak layak.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Droplets,
    title: "Air Bersih",
    description: "Menyediakan akses air bersih untuk daerah terpencil melalui pembangunan sumur bor dan instalasi air bersih.",
    image: "https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=500&q=80",
    color: "from-sky-400 to-sky-600",
  },
  {
    icon: BookOpen,
    title: "Pemberdayaan",
    description: "Program pelatihan keterampilan dan pemberdayaan ekonomi untuk meningkatkan kemandirian masyarakat.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80",
    color: "from-violet-400 to-violet-600",
  },
  {
    icon: HandHelping,
    title: "Bantuan Bencana",
    description: "Respon cepat tanggap bencana alam dengan distribusi bantuan logistik, medis, dan psikososial.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80",
    color: "from-emerald-400 to-emerald-600",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Layanan Kami
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Program Utama Kami
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[var(--yamindo-teal)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
