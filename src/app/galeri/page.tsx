import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function GaleriPage() {
  const [data, pageContents] = await Promise.all([
    db.galleryPageItem.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
    db.pageContent.findMany({
      where: { page: 'galeri', active: true },
      orderBy: { order: 'asc' },
    }),
  ]);

  return (
    <PageLayout>
      <PageClient data={JSON.parse(JSON.stringify(data))} pageContents={JSON.parse(JSON.stringify(pageContents))} />
    </PageLayout>
  );
}
