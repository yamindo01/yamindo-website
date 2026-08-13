import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await db.programDetail.findUnique({ where: { slug } });
  if (!program || !program.active) notFound();

  return (
    <PageLayout>
      <PageClient program={JSON.parse(JSON.stringify(program))} />
    </PageLayout>
  );
}
