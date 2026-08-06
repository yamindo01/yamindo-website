import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function KontakPage() {
  const siteConfigs = await db.siteConfig.findMany();
  const siteConfig: Record<string, string> = {};
  for (const c of siteConfigs) siteConfig[c.key] = c.value;

  return (
    <PageLayout>
      <PageClient siteConfig={JSON.parse(JSON.stringify(siteConfig))} />
    </PageLayout>
  );
}
