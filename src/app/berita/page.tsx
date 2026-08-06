import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function BeritaPage() {
  const data = await db.newsArticle.findMany({
    where: { active: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <PageLayout>
      <PageClient data={JSON.parse(JSON.stringify(data))} />
    </PageLayout>
  );
}
