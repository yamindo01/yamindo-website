export const dynamic = 'force-dynamic';

import PageLayout from '@/components/yamindo/PageLayout';
import PageClient from './PageClient';

export default async function AqiqahPage() {
  return (
    <PageLayout>
      <PageClient />
    </PageLayout>
  );
}
