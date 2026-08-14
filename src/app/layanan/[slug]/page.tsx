import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function LayananDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await db.serviceDetail.findFirst({
    where: { slug, active: true },
  });

  if (!service) {
    notFound();
  }

  const pageContents = await db.pageContent.findMany({
    where: { page: `layanan-${slug}`, active: true },
    orderBy: { order: 'asc' },
  });

  // Also fetch all services for sidebar/related
  const allServices = await db.serviceDetail.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });

  return (
    <PageLayout>
      <PageClient
        service={JSON.parse(JSON.stringify(service))}
        pageContents={JSON.parse(JSON.stringify(pageContents))}
        allServices={JSON.parse(JSON.stringify(allServices))}
      />
    </PageLayout>
  );
}
