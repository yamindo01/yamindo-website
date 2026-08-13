import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function ProgramPage() {
  const [data, pageContents] = await Promise.all([
    db.programDetail.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
    db.pageContent.findMany({
      where: { page: 'program', active: true },
      orderBy: { order: 'asc' },
    }),
  ]);

  return (
    <PageLayout>
      <PageClient data={JSON.parse(JSON.stringify(data))} pageContents={JSON.parse(JSON.stringify(pageContents))} />
    </PageLayout>
  );
}
