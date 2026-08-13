export const dynamic = 'force-dynamic';

import { db } from '@/lib/db';
import PageLayout from '@/components/yamindo/PageLayout';
import PageClient from './PageClient';

export default async function TravelHajiUmrahPage() {
  const pageContents = await db.pageContent.findMany({ where: { page: 'travel-haji-umrah', active: true }, orderBy: { order: 'asc' } });

  return (
    <PageLayout>
      <PageClient pageContents={JSON.parse(JSON.stringify(pageContents))} />
    </PageLayout>
  );
}