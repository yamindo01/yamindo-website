export const dynamic = 'force-dynamic';

import { db } from '@/lib/db';
import PageLayout from '@/components/yamindo/PageLayout';
import PageClient from './PageClient';

export default async function AqiqahPage() {
  const pageContents = await db.pageContent.findMany({ where: { page: 'aqiqah', active: true }, orderBy: { order: 'asc' } });

  return (
    <PageLayout>
      <PageClient pageContents={JSON.parse(JSON.stringify(pageContents))} />
    </PageLayout>
  );
}