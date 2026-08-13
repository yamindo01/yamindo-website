import TopBar from "@/components/yamindo/TopBar";
import Header from "@/components/yamindo/Header";
import Footer from "@/components/yamindo/Footer";
import AdminPanel from "@/components/yamindo/AdminPanel";
import { db } from "@/lib/db";

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch shared data for header/footer
  const [siteConfigs, footerEvents] = await Promise.all([
    db.siteConfig.findMany(),
    db.footerEvent.findMany({ where: { active: true } }),
  ]);

  const siteConfig: Record<string, string> = {};
  for (const c of siteConfigs) siteConfig[c.key] = c.value;

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar siteConfig={siteConfig} />
      <Header siteConfig={siteConfig} />
      <main className="flex-1">{children}</main>
      <Footer siteConfig={siteConfig} events={footerEvents} />
      <AdminPanel />
    </div>
  );
}