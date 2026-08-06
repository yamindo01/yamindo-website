import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaBanner({ siteConfig }: { siteConfig: Record<string, string> }) {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal)] to-teal-500" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-white">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {siteConfig.cta_title || "Bergabunglah Dengan Tim Relawan Kami"}
            </h2>
            <p className="text-white/80 mt-1">
              {siteConfig.cta_subtitle || "Jadilah bagian dari perubahan nyata untuk Indonesia"}
            </p>
          </div>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-white text-[var(--yamindo-teal-dark)] hover:bg-white/90 rounded-full px-8 shadow-lg font-semibold"
        >
          <a href="#tim">
            Pelajari Selengkapnya
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
}
