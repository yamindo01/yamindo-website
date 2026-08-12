import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';
import EducationServices from '@/components/yamindo/EducationServices';

export const dynamic = 'force-dynamic';

export default async function LayananPage() {
  const [data, educationData] = await Promise.all([
    db.serviceDetail.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
    db.educationService.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
  ]);

  return (
    <PageLayout>
      <EducationServices data={JSON.parse(JSON.stringify(educationData))} />
      <PageClient data={JSON.parse(JSON.stringify(data))} />
    </PageLayout>
  );
}
