import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres',
    },
  },
});

const BSI_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BSI_logo.svg/200px-BSI_logo.svg.png';

async function main() {
  // Clear existing
  await prisma.bankAccount.deleteMany({});

  const accounts = [
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      en_bankName: 'Bank Syariah Indonesia (BSI)',
      accountNo: '7112345678',
      accountName: 'Yayasan Yasir Amin Indonesia',
      en_accountName: 'Yasir Amin Indonesia Foundation',
      logo: BSI_LOGO,
      order: 1,
      active: true,
    },
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      en_bankName: 'Bank Syariah Indonesia (BSI)',
      accountNo: '7198765432',
      accountName: 'Yayasan Yasir Amin Indonesia',
      en_accountName: 'Yasir Amin Indonesia Foundation',
      logo: BSI_LOGO,
      order: 2,
      active: true,
    },
    {
      bankName: 'Bank Syariah Indonesia (BSI)',
      en_bankName: 'Bank Syariah Indonesia (BSI)',
      accountNo: '7154321098',
      accountName: 'Yayasan Yasir Amin Indonesia',
      en_accountName: 'Yasir Amin Indonesia Foundation',
      logo: BSI_LOGO,
      order: 3,
      active: true,
    },
  ];

  for (const acc of accounts) {
    await prisma.bankAccount.create({ data: acc });
    console.log(`Created: ${acc.bankName} - ${acc.accountNo}`);
  }

  console.log(`\nDone! Seeded ${accounts.length} bank accounts.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
