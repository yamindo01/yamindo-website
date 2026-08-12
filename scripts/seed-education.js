const { Pool } = require('pg');

const items = [
  {
    title: 'PAUD', en_title: 'Early Childhood Education',
    description: 'Pendidikan anak usia dini dengan pendekatan bermain sambil belajar.',
    en_description: 'Early childhood education with play-based learning approach.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=400&q=80',
    icon: 'BookOpen', order: 1,
  },
  {
    title: 'TK', en_title: 'Kindergarten',
    description: 'Taman kanak-kanak yang menanamkan dasar karakter dan keterampilan sosial.',
    en_description: 'Kindergarten that instills character foundation and social skills.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    icon: 'GraduationCap', order: 2,
  },
  {
    title: 'MI', en_title: 'Islamic Elementary School',
    description: 'Madrasah Ibtidaiyah dengan kurikulum terpadu agama dan sains.',
    en_description: 'Islamic Elementary School with integrated religious and science curriculum.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
    icon: 'School', order: 3,
  },
  {
    title: 'Boarding School', en_title: 'Boarding School',
    description: 'Pondok pesantren yang membentuk kedisiplinan dan keunggulan akademik.',
    en_description: 'Islamic boarding school that builds discipline and academic excellence.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&q=80',
    icon: 'Building2', order: 4,
  },
  {
    title: 'SMA', en_title: 'Senior High School',
    description: 'Sekolah menengah atas dengan persiapan masuk perguruan tinggi.',
    en_description: 'Senior high school with university entrance preparation.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80',
    icon: 'Library', order: 5,
  },
  {
    title: 'Program S1', en_title: 'Bachelor Degree',
    description: 'Program sarjana untuk mempersiapkan profesional yang kompeten.',
    en_description: 'Bachelor program to prepare competent professionals.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80',
    icon: 'Award', order: 6,
  },
  {
    title: 'S2', en_title: 'Master Degree',
    description: 'Program magister untuk pengembangan keilmuan dan kepemimpinan.',
    en_description: 'Master program for scientific development and leadership.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
    icon: 'GraduationCap', order: 7,
  },
  {
    title: 'Bimbel', en_title: 'Tutoring',
    description: 'Bimbingan belajar untuk meningkatkan prestasi akademik siswa.',
    en_description: 'Tutoring to improve student academic achievement.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80',
    icon: 'Brain', order: 8,
  },
  {
    title: 'Rumah Tahfidz', en_title: 'Quran Memorization House',
    description: 'Program tahfidz Al-Quran untuk menghafal dan memahami kitab suci.',
    en_description: 'Quran memorization program to memorize and understand the holy book.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&q=80',
    icon: 'Star', order: 9,
  },
];

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  });

  for (const item of items) {
    await pool.query(
      `INSERT INTO "EducationService" ("id", "title", "en_title", "description", "en_description", "image", "icon", "order", "active", "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true, NOW(), NOW())`,
      [`edu-${item.order}`, item.title, item.en_title, item.description, item.en_description, item.image, item.icon, item.order]
    );
    console.log(`Inserted: ${item.title}`);
  }

  console.log('Done!');
  await pool.end();
}
main().catch(e => { console.error(e); process.exit(1); });
