import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function BeritaPage() {
  const [data, pageContents] = await Promise.all([
    db.newsArticle.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    }),
    db.pageContent.findMany({
      where: { page: 'berita', active: true },
      orderBy: { order: 'asc' },
    }),
  ]);

  return (
    <PageLayout>
      <PageClient data={JSON.parse(JSON.stringify(data))} pageContents={JSON.parse(JSON.stringify(pageContents))} />
    </PageLayout>
  );
}
