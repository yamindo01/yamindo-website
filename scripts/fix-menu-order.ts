import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  const allMenus = await db.navMenu.findMany({ orderBy: { order: 'asc' } });

  const desiredOrder: Record<string, number> = {
    'Beranda': 0,
    'Tentang': 1,
    'Layanan': 2,
    'Program': 3,
    'Galeri': 4,
    'Usaha': 5,
    'Berita': 6,
    'Kontak': 7,
  };

  for (const menu of allMenus) {
    const newOrder = desiredOrder[menu.label];
    if (newOrder !== undefined && menu.order !== newOrder) {
      await db.navMenu.update({ where: { id: menu.id }, data: { order: newOrder } });
      console.log(`${menu.label}: ${menu.order} -> ${newOrder}`);
    }
  }

  // Verify
  const final = await db.navMenu.findMany({ orderBy: { order: 'asc' } });
  console.log('\nFinal order:');
  final.forEach(m => console.log(`  ${m.order}. ${m.label}`));
}

main().catch(console.error).finally(() => db.$disconnect());
