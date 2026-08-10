import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [
      siteConfigs,
      heroSlides,
      services,
      aboutInfo,
      causes,
      counters,
      teamMembers,
      galleryImages,
      testimonials,
      blogPosts,
      partners,
      footerEvents,
      donationPresets,
    ] = await Promise.all([
      db.siteConfig.findMany(),
      db.heroSlide.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      db.service.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      db.aboutInfo.findFirst(),
      db.cause.findMany({ where: { active: true } }),
      db.counter.findMany({ where: { active: true } }),
      db.teamMember.findMany({ where: { active: true } }),
      db.galleryImage.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      db.testimonial.findMany({ where: { active: true } }),
      db.blogPost.findMany({ where: { active: true } }),
      db.partner.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      db.footerEvent.findMany({ where: { active: true } }),
      db.donationPreset.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    ]);

    const configMap: Record<string, string> = {};
    for (const c of siteConfigs) {
      configMap[c.key] = c.value;
    }

    return NextResponse.json({
      siteConfig: configMap,
      heroSlides: heroSlides.map((s) => ({
        ...s,
        bullets: JSON.parse(s.bullets || "[]"),
      })),
      services,
      aboutInfo: aboutInfo
        ? { ...aboutInfo, bullets: JSON.parse(aboutInfo.bullets || "[]") }
        : null,
      causes,
      counters,
      teamMembers,
      galleryImages,
      testimonials,
      blogPosts,
      partners,
      footerEvents,
      donationPresets,
    });
  } catch (error) {
    console.error("Content API error:", error);
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 });
  }
}
