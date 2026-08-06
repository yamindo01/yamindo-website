"use client";

import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Quote } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  active: boolean;
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Team({ members }: { members: TeamMember[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="tim" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--yamindo-teal)] uppercase tracking-wider mb-3">
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
            Tim Kami
            <span className="w-8 h-px bg-[var(--yamindo-teal)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tim Inti Yamindo
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Para profesional berdedikasi yang menggerakkan misi kemanusiaan Yamindo
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[var(--yamindo-teal-dark)]/80 to-transparent flex items-end justify-center pb-4 transition-opacity duration-300 ${
                    hoveredIdx === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/40 transition-colors"
                      >
                        <social.icon className="w-4 h-4 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-[var(--yamindo-teal)] mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
