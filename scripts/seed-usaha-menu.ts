import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  // First, shift Berita and Kontak menus to make room for Usaha
  // Check existing menus
  const existingMenus = await db.navMenu.findMany({ orderBy: { order: 'asc' } });
  console.log('Existing menus:', existingMenus.map(m => ({ id: m.id, label: m.label, order: m.order })));

  // Shift Galeri, Berita, Kontak by 1
  const menusToShift = ['Galeri', 'Gallery', 'Berita', 'News', 'Kontak', 'Contact'];
  for (const menu of existingMenus) {
    if (menusToShift.some(keyword => menu.label.includes(keyword) || menu.en_label.includes(keyword))) {
      await db.navMenu.update({
        where: { id: menu.id },
        data: { order: menu.order + 1 },
      });
      console.log(`  Shifted: ${menu.label} order ${menu.order} -> ${menu.order + 1}`);
    }
  }

  // Create the Usaha parent menu
  const usahaMenu = await db.navMenu.create({
    data: {
      label: 'Usaha',
      en_label: 'Business',
      href: '/travel-haji-umrah',
      navKey: 'usaha',
      order: 4, // After Galeri (which was 4, now 5)
      active: true,
    },
  });
  console.log(`\nCreated parent menu: ${usahaMenu.label} (${usahaMenu.id})`);

  // Create child menu items
  const children = [
    {
      label: 'Travel Haji & Umrah',
      en_label: 'Hajj & Umrah Travel',
      href: '/travel-haji-umrah',
      icon: 'travel-haji-umrah',
      order: 1,
    },
    {
      label: 'Aqiqah',
      en_label: 'Aqiqah',
      href: '/aqiqah',
      icon: 'aqiqah',
      order: 2,
    },
    {
      label: 'Pelatihan & Agency Digital Marketing',
      en_label: 'Digital Marketing Training & Agency',
      href: '/pelatihan-agency',
      icon: 'pelatihan-agency',
      order: 3,
    },
  ];

  for (const child of children) {
 const item = await db.navMenuItem.create({
      data: {
        parentId: usahaMenu.id,
        ...child,
        active: true,
      },
    });
    console.log(`  Created submenu: ${item.label} -> ${item.href}`);
  }

  // Verify
  const allMenus = await db.navMenu.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
    include: { children: { where: { active: true }, orderBy: { order: 'asc' } } },
  });
  console.log('\nFinal menu structure:');
  allMenus.forEach(m => {
    console.log(`  ${m.order}. ${m.label} (${m.navKey}) ${m.children.length > 0 ? `-> ${m.children.length} children` : ''}`);
    m.children.forEach(c => console.log(`     - ${c.label} (${c.icon}) -> ${c.href}`));
  });
}

main()
  .catch((e) => { console.error('Error:', e); process.exit(1); })
  .finally(() => db.$disconnect());
