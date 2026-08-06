import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function GaleriPage() {
  const data = await db.galleryPageItem.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });

  return (
    <PageLayout>
      <PageClient data={JSON.parse(JSON.stringify(data))} />
    </PageLayout>
  );
}
