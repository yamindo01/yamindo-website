"use client";

const partners = [
  { name: "Kemenkes RI", logo: "🏥" },
  { name: "Kemendikbud", logo: "📚" },
  { name: "UNICEF", logo: "🇺🇳" },
  { name: "WHO Indonesia", logo: "🌍" },
  { name: "Bank Indonesia", logo: "🏦" },
  { name: "Aksi Cepat Tanggap", logo: "🤝" },
];

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-2">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Mitra Kami
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <p className="text-muted-foreground">
            Dipercaya oleh lembaga pemerintah dan organisasi internasional
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{partner.logo}</span>
              <span className="text-sm font-medium text-foreground/70">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
