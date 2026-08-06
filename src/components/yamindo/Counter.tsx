"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Globe, Baby, Home } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 15280,
    label: "Relawan Aktif",
    suffix: "",
  },
  {
    icon: Globe,
    value: 234,
    label: "Mitra Global",
    suffix: "",
  },
  {
    icon: Baby,
    value: 8450,
    label: "Anak Terselamatkan",
    suffix: "",
  },
  {
    icon: Home,
    value: 3200,
    label: "Keluarga Dibantu",
    suffix: "",
  },
];

function useCountUp(target: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isActive]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
        <stat.icon className="w-8 h-8 text-white" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-white">
        {count.toLocaleString("id-ID")}
      </p>
      <p className="text-white/70 mt-1 text-sm">{stat.label}</p>
    </div>
  );
}

export default function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--yamindo-teal-dark)] via-[var(--yamindo-teal)] to-teal-500" />
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
