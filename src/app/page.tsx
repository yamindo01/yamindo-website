"use client";

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <Services />
        <CtaBanner />
        <AboutCauses />
        <Counter />
        <Team />
        <Gallery />
        <Testimonials />
        <DonationCta />
        <Blog />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
