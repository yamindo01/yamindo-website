import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const programs = [
  {
    title: "Program Makan Santri",
    en_title: "Santri Meal Program",
    description: "Program menyediakan makan bergizi bagi santri di pesantren dan lembaga pendidikan Islam yang membutuhkan. Setiap hari, ratusan santri mendapatkan asupan makan yang cukup untuk menunjang proses belajar dan menghafal Al Quran. Donasi Anda membantu memastikan tidak ada santri yang belajar dalam keadaan lapar, sehingga mereka dapat fokus penuh mengejar ilmu dan meraih prestasi.",
    en_description: "A program providing nutritious meals for students at Islamic boarding schools and educational institutions in need. Every day, hundreds of students receive adequate meals to support their learning and Quran memorization process. Your donation helps ensure no student studies while hungry, enabling them to fully focus on pursuing knowledge and achieving excellence.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3d8641c5cbc8.jpg",
    category: "Sosial",
    en_category: "Social",
    raised: "Rp 45.000.000",
    goal: "Rp 200.000.000",
    percent: 22,
    status: "active",
    order: 1,
    active: true,
  },
  {
    title: "Program Buka Puasa Bersama",
    en_title: "Community Iftar Program",
    description: "Menyediakan menu buka puasa bagi jamaah dan masyarakat kurang mampu selama bulan Ramadhan. Program ini menghadirkan kebersamaan dan keberkahan dengan menyiapkan takjil dan makanan berbuka untuk ratusan orang setiap harinya. Donasi Anda akan menjadi pahala yang mengalir di bulan suci Ramadhan, membantu saudara kita yang membutuhkan menikmati kehangatan berbuka puasa bersama.",
    en_description: "Providing iftar meals for worshippers and underprivileged communities during Ramadan. This program brings togetherness and blessings by preparing snacks and iftar meals for hundreds of people daily. Your donation becomes continuous reward during the holy month of Ramadan, helping those in need enjoy the warmth of breaking fast together.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/103754f9986c.webp",
    category: "Sosial",
    en_category: "Social",
    raised: "Rp 30.000.000",
    goal: "Rp 150.000.000",
    percent: 20,
    status: "active",
    order: 2,
    active: true,
  },
  {
    title: "Program Ambulan Gratis",
    en_title: "Free Ambulance Program",
    description: "Menyediakan layanan ambulans gratis bagi masyarakat yang membutuhkan transportasi medis darurat, khususnya di daerah terpencil dan pelosok Indonesia. Program ini menjawab kesulitan akses kesehatan dengan menyediakan kendaraan ambulans yang siap melayani 24 jam. Donasi Anda dapat menyelamatkan nyawa seseorang yang sedang berjuang melawan waktu dalam situasi darurat medis.",
    en_description: "Providing free ambulance services for communities in need of emergency medical transportation, especially in remote areas across Indonesia. This program addresses healthcare access challenges by providing 24/7 ready ambulance vehicles. Your donation can save the life of someone fighting against time in a medical emergency.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cb452ce68e79.jpeg",
    category: "Kesehatan",
    en_category: "Health",
    raised: "Rp 120.000.000",
    goal: "Rp 500.000.000",
    percent: 24,
    status: "active",
    order: 3,
    active: true,
  },
  {
    title: "Program Beasiswa Pendidikan",
    en_title: "Education Scholarship Program",
    description: "Memberikan beasiswa pendidikan bagi anak-anak dari keluarga kurang mampu yang berprestasi namun terkendala biaya. Program ini mencakup biaya sekolah, seragam, buku pelajaran, dan perlengkapan pendidikan lainnya. Dengan beasiswa ini, anak-anak Indonesia dapat meraih mimpi mereka dan mengubah nasib keluarga melalui pendidikan yang berkualitas.",
    en_description: "Providing educational scholarships for underprivileged children with academic potential who are limited by financial constraints. This program covers school fees, uniforms, textbooks, and other educational supplies. Through this scholarship, Indonesian children can pursue their dreams and change their family's fate through quality education.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d2de2a0b3e4a.jpeg",
    category: "Pendidikan",
    en_category: "Education",
    raised: "Rp 85.000.000",
    goal: "Rp 300.000.000",
    percent: 28,
    status: "active",
    order: 4,
    active: true,
  },
  {
    title: "Program Pembangunan Masjid",
    en_title: "Mosque Construction Program",
    description: "Membiayai pembangunan dan renovasi masjid di berbagai daerah yang membutuhkan tempat ibadah yang layak. Program ini mencakup pembangunan masjid baru hingga renovasi masjid yang sudah tidak memadai. Setiap donasi yang Anda berikan menjadi investasi akhirat yang pahalanya terus mengalir, karena masjid adalah rumah Allah yang penuh keberkahan.",
    en_description: "Financing the construction and renovation of mosques in various areas that need proper places of worship. This program covers building new mosques as well as renovating inadequate ones. Every donation you give becomes an investment in the hereafter with continuous rewards, as mosques are houses of Allah full of blessings.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7fb13936753b.jpeg",
    category: "Wakaf",
    en_category: "Waqf",
    raised: "Rp 250.000.000",
    goal: "Rp 1.000.000.000",
    percent: 25,
    status: "active",
    order: 5,
    active: true,
  },
  {
    title: "Program Pembangunan Kelas",
    en_title: "Classroom Construction Program",
    description: "Membangun dan memperbaiki ruang kelas yang kondisinya tidak layak untuk kegiatan belajar mengajar. Banyak sekolah di daerah terpencil yang masih menggunakan ruang kelas dengan atap bocor, dinding retak, dan kursi rusak. Program ini bertujuan menciptakan lingkungan belajar yang nyaman dan kondusif agar anak-anak Indonesia dapat menimba ilmu dengan tenang.",
    en_description: "Building and repairing classrooms that are unfit for teaching and learning activities. Many schools in remote areas still use classrooms with leaky roofs, cracked walls, and broken chairs. This program aims to create a comfortable and conducive learning environment so Indonesian children can pursue knowledge peacefully.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3f554c8a87ed.jpg",
    category: "Pendidikan",
    en_category: "Education",
    raised: "Rp 65.000.000",
    goal: "Rp 400.000.000",
    percent: 16,
    status: "active",
    order: 6,
    active: true,
  },
  {
    title: "Program Angkat Buta Huruf Al Quran",
    en_title: "Quran Literacy Program",
    description: "Mengajar membaca dan menulis Al Quran bagi masyarakat yang belum bisa membaca, terutama di daerah terpencil dan pelosok desa. Program ini mengirimkan guru-guru pengajar Al Quran yang terlatih untuk memberikan bimbingan intensif. Dengan program ini, kita bersama-sama membuka pintu kebaikan dengan mengajarkan Al Quran kepada saudara kita yang belum bisa membaca kitab suci.",
    en_description: "Teaching Quran reading and writing for illiterate communities, especially in remote villages and rural areas. This program deploys trained Quran teachers to provide intensive guidance. Through this program, we together open doors of goodness by teaching the Quran to those who cannot yet read the holy book.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/40468567192c.jpg",
    category: "Pendidikan",
    en_category: "Education",
    raised: "Rp 20.000.000",
    goal: "Rp 100.000.000",
    percent: 20,
    status: "active",
    order: 7,
    active: true,
  },
  {
    title: "Program Wakaf Al Quran",
    en_title: "Quran Waqf Program",
    description: "Menyediakan dan mendistribusikan mushaf Al Quran secara gratis kepada masjid, mushalla, pesantren, dan individu yang membutuhkan. Program wakaf Al Quran ini memastikan setiap orang memiliki akses terhadap kitab suci untuk dibaca dan dipelajari. Setiap Al Quran yang diwakafkan menjadi amal jariyah yang pahalanya terus mengalir selama kitab tersebut masih dibaca.",
    en_description: "Providing and distributing Quran copies for free to mosques, prayer rooms, Islamic schools, and individuals in need. This Quran waqf program ensures everyone has access to the holy book for reading and studying. Every Quran donated as waqf becomes a continuous charity whose rewards keep flowing as long as the book is being read.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a5017cc2684e.jpeg",
    category: "Wakaf",
    en_category: "Waqf",
    raised: "Rp 35.000.000",
    goal: "Rp 150.000.000",
    percent: 23,
    status: "active",
    order: 8,
    active: true,
  },
  {
    title: "Program Kafalah Yatim",
    en_title: "Orphan Sponsorship Program",
    description: "Memberikan santunan dan pendampingan kepada anak-anak yatim dan dhuafa melalui program kafalah komprehensif. Program ini mencakup biaya pendidikan, kebutuhan sehari-hari, bimbingan akademik, serta pembinaan karakter dan agama. Dengan menjadi kafalah (penyantun), Anda memberikan masa depan yang lebih cerah bagi anak-anak yatim yang kehilangan sosok ayah sebagai tulang punggung keluarga.",
    en_description: "Providing support and mentoring to orphans and underprivileged children through a comprehensive sponsorship program. This program covers education costs, daily needs, academic tutoring, and character and religious guidance. By becoming a sponsor, you give a brighter future to orphaned children who have lost their father as the family breadwinner.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9b24a22aa2ea.png",
    category: "Sosial",
    en_category: "Social",
    raised: "Rp 55.000.000",
    goal: "Rp 250.000.000",
    percent: 22,
    status: "active",
    order: 9,
    active: true,
  },
];

async function main() {
  console.log(`Seeding ${programs.length} programs...`);

  // First, delete existing active programs to avoid duplicates
  const existing = await db.programDetail.findMany({ where: { active: true } });
  console.log(`Found ${existing.length} existing programs, removing...`);
  if (existing.length > 0) {
    await db.programDetail.deleteMany({ where: { active: true } });
  }

  for (const p of programs) {
    const result = await db.programDetail.create({ data: p });
    console.log(`  ✓ Created: ${result.title} (${result.id})`);
  }

  console.log(`\nDone! ${programs.length} programs seeded successfully.`);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
