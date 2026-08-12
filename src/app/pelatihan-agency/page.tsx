export const dynamic = 'force-dynamic';

import PageLayout from '@/components/yamindo/PageLayout';
import PageClient from './PageClient';

export default async function PelatihanAgencyPage() {
  return (
    <PageLayout>
      <PageClient />
    </PageLayout>
  );
}