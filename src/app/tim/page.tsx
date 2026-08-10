import { db } from '@/lib/db';
import PageClient from './PageClient';
import PageLayout from '@/components/yamindo/PageLayout';

export const dynamic = 'force-dynamic';

export default async function TimPage() {
  const [teamMembers, orgMembers, orgPhotos] = await Promise.all([
    db.teamMember.findMany({
      where: { active: true },
      orderBy: { id: 'asc' },
    }),
    db.orgMember.findMany({
      where: { active: true },
      orderBy: [{ level: 'asc' }, { order: 'asc' }],
    }),
    db.galleryPageItem.findMany({
      where: { active: true, category: 'Organisasi' },
      orderBy: { order: 'asc' },
    }),
  ]);

  return (
    <PageLayout>
      <PageClient
        teamMembers={JSON.parse(JSON.stringify(teamMembers))}
        orgMembers={JSON.parse(JSON.stringify(orgMembers))}
        orgPhotos={JSON.parse(JSON.stringify(orgPhotos))}
      />
    </PageLayout>
  );
}
