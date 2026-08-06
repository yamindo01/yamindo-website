import TopBar from "@/components/yamindo/TopBar";
import Header from "@/components/yamindo/Header";
import HeroSlider from "@/components/yamindo/HeroSlider";
import Services from "@/components/yamindo/Services";
import CtaBanner from "@/components/yamindo/CtaBanner";
import AboutCauses from "@/components/yamindo/AboutCauses";
import Counter from "@/components/yamindo/Counter";
import Team from "@/components/yamindo/Team";
import Gallery from "@/components/yamindo/Gallery";
import Testimonials from "@/components/yamindo/Testimonials";
import DonationCta from "@/components/yamindo/DonationCta";
import Blog from "@/components/yamindo/Blog";
import Partners from "@/components/yamindo/Partners";
import Footer from "@/components/yamindo/Footer";
import AdminPanel from "@/components/yamindo/AdminPanel";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

async function getContent() {
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

  const siteConfig: Record<string, string> = {};
  for (const c of siteConfigs) siteConfig[c.key] = c.value;

  return {
    siteConfig,
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
  };
}

export default async function Home() {
  const content = await getContent();

  return (
    <div className="min-h-screen flex flex-col">
        <TopBar siteConfig={content.siteConfig} />
        <Header />
        <main className="flex-1">
          <HeroSlider slides={content.heroSlides} />
          <Services services={content.services} />
          <CtaBanner siteConfig={content.siteConfig} />
          <AboutCauses aboutInfo={content.aboutInfo} causes={content.causes} />
          <Counter counters={content.counters} />
          <Team members={content.teamMembers} />
          <Gallery images={content.galleryImages} />
          <Testimonials testimonials={content.testimonials} />
          <DonationCta presets={content.donationPresets} />
          <Blog posts={content.blogPosts} />
          <Partners partners={content.partners} />
        </main>
        <Footer siteConfig={content.siteConfig} events={content.footerEvents} />
        <AdminPanel />
    </div>
  );
}