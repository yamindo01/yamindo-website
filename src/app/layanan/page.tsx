import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function LayananPage() {
  const data = await db.serviceDetail.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });

  const pageContents = await db.pageContent.findMany({
    where: { page: 'layanan', active: true },
    orderBy: { order: 'asc' },
  });

  return (
    <PageLayout>
      <PageClient data={JSON.parse(JSON.stringify(data))} pageContents={JSON.parse(JSON.stringify(pageContents))} />
    </PageLayout>
  );
}
