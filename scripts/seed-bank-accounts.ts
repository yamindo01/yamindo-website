import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres',
    },
  },
});

async function main() {
  await prisma.bankAccount.deleteMany({});

  const accounts = [
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      en_bankName: 'Bank Syariah Indonesia (BSI)',
      accountNo: '7320950192',
      accountName: 'WAQAF QURAN YAMINDO',
      en_accountName: 'WAQAF QURAN YAMINDO',
      logo: '',
      order: 1,
      active: true,
    },
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      en_bankName: 'Bank Syariah Indonesia (BSI)',
      accountNo: '7320950311',
      accountName: 'MASJID ABIBAS PERSIL',
      en_accountName: 'MASJID ABIBAS PERSIL',
      logo: '',
      order: 2,
      active: true,
    },
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      en_bankName: 'Bank Syariah Indonesia (BSI)',
      accountNo: '7320949402',
      accountName: 'YAYASAN YASIR AMIN INDONESIA',
      en_accountName: 'YAYASAN YASIR AMIN INDONESIA',
      logo: '',
      order: 3,
      active: true,
    },
  ];

  for (const acc of accounts) {
    await prisma.bankAccount.create({ data: acc });
    console.log(`Created: ${acc.accountName} - ${acc.accountNo}`);
  }

  console.log(`\nDone! Seeded ${accounts.length} bank accounts.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
