import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  // Clear existing org members
  const existing = await db.orgMember.findMany();
  console.log(`Found ${existing.length} existing org members, removing...`);
  if (existing.length > 0) {
    await db.orgMember.deleteMany();
  }

  const members = [
    // Level 1: Pembina
    {
      name: 'Yasir Amin',
      en_name: 'Yasir Amin',
      position: 'Pembina / Ketua Pembina',
      en_position: 'Patron / Chief Patron',
      photo: '',
      level: 1,
      order: 1,
      active: true,
    },

    // Level 2: Pengawas
    {
      name: 'Dodon Romadona, S.Kom, M.Pd',
      en_name: 'Dodon Romadona, S.Kom, M.Pd',
      position: 'Pengawas',
      en_position: 'Supervisor',
      photo: '',
      level: 2,
      order: 1,
      active: true,
    },

    // Level 3: Ketua Pengurus
    {
      name: 'Asep Iyan Rohmana, S.Pd.',
      en_name: 'Asep Iyan Rohmana, S.Pd.',
      position: 'Ketua Pengurus',
      en_position: 'Chairman',
      photo: '',
      level: 3,
      order: 1,
      active: true,
    },

    // Level 4: Sekretaris & Bendahara
    {
      name: 'Muhidin',
      en_name: 'Muhidin',
      position: 'Sekretaris',
      en_position: 'Secretary',
      photo: '',
      level: 4,
      order: 1,
      active: true,
    },
    {
      name: 'Neni Hasanah',
      en_name: 'Neni Hasanah',
      position: 'Bendahara',
      en_position: 'Treasurer',
      photo: '',
      level: 4,
      order: 2,
      active: true,
    },

    // Level 5: Bidang-bidang
    {
      name: 'Jajang Hoeruman',
      en_name: 'Jajang Hoeruman',
      position: 'Bidang Pendidikan',
      en_position: 'Education Division',
      photo: '',
      level: 5,
      order: 1,
      active: true,
    },
    {
      name: 'Rudi',
      en_name: 'Rudi',
      position: 'Bidang Keagamaan',
      en_position: 'Religious Affairs Division',
      photo: '',
      level: 5,
      order: 2,
      active: true,
    },
    {
      name: 'Saepulloh',
      en_name: 'Saepulloh',
      position: 'Bidang Kemanusiaan',
      en_position: 'Humanitarian Division',
      photo: '',
      level: 5,
      order: 3,
      active: true,
    },
    {
      name: 'Pahrudin',
      en_name: 'Pahrudin',
      position: 'Humas',
      en_position: 'Public Relations',
      photo: '',
      level: 5,
      order: 4,
      active: true,
    },
  ];

  for (const m of members) {
    const result = await db.orgMember.create({ data: m });
    console.log(`  L${result.level}: ${result.position} - ${result.name} (${result.id})`);
  }

  console.log(`\nDone! ${members.length} org members seeded.`);
}

main().catch((e) => { console.error('Error:', e); process.exit(1); }).finally(() => db.$disconnect());
