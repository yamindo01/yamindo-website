import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function TentangPage() {
  const [sections, testimonials] = await Promise.all([
    db.aboutSection.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    }),
    db.testimonial.findMany({
      where: { active: true },
    }),
  ]);

  return (
    <PageLayout>
      <PageClient
        sections={JSON.parse(JSON.stringify(sections))}
        testimonials={JSON.parse(JSON.stringify(testimonials))}
      />
    </PageLayout>
  );
}
