import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding ServiceDetail & ProgramDetail...');

  // Clear existing
  await prisma.serviceDetail.deleteMany();
  await prisma.programDetail.deleteMany();

  // === ServiceDetail (8 services) ===
  const serviceDetails = [
    {
      id: 'svc-1', slug: 'pendidikan',
      title: 'Pendidikan', en_title: 'Education',
      short_desc: 'Program pendidikan berkualitas untuk anak-anak dan pemuda Indonesia dari keluarga kurang mampu.',
      en_short_desc: 'Quality education programs for children and youth from underprivileged Indonesian families.',
      content: 'Yamindo berkomitmen untuk memberikan akses pendidikan yang berkualitas bagi anak-anak Indonesia. Program pendidikan kami mencakup beasiswa sekolah dasar hingga menengah, pembangunan perpustakaan komunitas, pelatihan guru di daerah terpencil, serta penyediaan perlengkapan belajar. Kami bekerja sama dengan pemerintah daerah dan lembaga pendidikan untuk memastikan setiap anak mendapatkan kesempatan belajar yang layak.',
      en_content: 'Yamindo is committed to providing quality education access for Indonesian children. Our education programs include primary to secondary school scholarships, community library construction, teacher training in remote areas, and provision of learning supplies. We work with local governments and educational institutions to ensure every child receives proper learning opportunities.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      icon: 'GraduationCap',
      features: JSON.stringify(['Beasiswa Pendidikan', 'Perpustakaan Komunitas', 'Pelatihan Guru', 'Perlengkapan Sekolah']),
      en_features: JSON.stringify(['Education Scholarships', 'Community Libraries', 'Teacher Training', 'School Supplies']),
      order: 0, active: true
    },
    {
      id: 'svc-2', slug: 'sosial',
      title: 'Sosial', en_title: 'Social',
      short_desc: 'Program pemberdayaan sosial untuk meningkatkan kesejahteraan masyarakat marginal.',
      en_short_desc: 'Social empowerment programs to improve the welfare of marginalized communities.',
      content: 'Program sosial Yamindo berfokus pada pemberdayaan masyarakat melalui pendekatan berkelanjutan. Kami menyelenggarakan pelatihan keterampilan kerja, program pemberdayaan perempuan, bantuan untuk lansia, dan inisiatif pelestarian budaya lokal. Setiap program dirancang untuk memberikan dampak jangka panjang bagi kemandirian ekonomi dan sosial masyarakat.',
      en_content: 'Yamindo social programs focus on community empowerment through sustainable approaches. We organize job skills training, women empowerment programs, elderly assistance, and local cultural preservation initiatives. Each program is designed to create long-term impact on community economic and social independence.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      icon: 'Users',
      features: JSON.stringify(['Pelatihan Keterampilan', 'Pemberdayaan Perempuan', 'Bantuan Lansia', 'Pelestarian Budaya']),
      en_features: JSON.stringify(['Skills Training', 'Women Empowerment', 'Elderly Assistance', 'Cultural Preservation']),
      order: 1, active: true
    },
    {
      id: 'svc-3', slug: 'kemanusiaan',
      title: 'Kemanusiaan', en_title: 'Humanitarian',
      short_desc: 'Penanggulangan krisis kemanusiaan dan perlindungan hak-hak masyarakat rentan.',
      en_short_desc: 'Humanitarian crisis response and protection of vulnerable communities rights.',
      content: 'Tim kemanusiaan Yamindo selalu siap bergerak ketika terjadi krisis. Kami menyediakan bantuan darurat berupa makanan, air bersih, tempat tinggal, dan layanan medis. Program kami juga mencakup advokasi hak asasi manusia, perlindungan anak, dan pendampingan pengungsi. Kami beroperasi di seluruh Indonesia dengan jaringan relawan yang solid.',
      en_content: 'The Yamindo humanitarian team is always ready to mobilize during crises. We provide emergency aid including food, clean water, shelter, and medical services. Our programs also include human rights advocacy, child protection, and refugee assistance. We operate across Indonesia with a solid volunteer network.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
      icon: 'Heart',
      features: JSON.stringify(['Bantuan Darurat', 'Advokasi HAM', 'Perlindungan Anak', 'Pendampingan Pengungsi']),
      en_features: JSON.stringify(['Emergency Aid', 'Human Rights Advocacy', 'Child Protection', 'Refugee Assistance']),
      order: 2, active: true
    },
    {
      id: 'svc-4', slug: 'bencana',
      title: 'Bencana', en_title: 'Disaster',
      short_desc: 'Tanggap bencana alam dan pemulihan pasca-bencana untuk korban terdampak.',
      en_short_desc: 'Natural disaster response and post-disaster recovery for affected victims.',
      content: 'Yamindo memiliki tim tanggap bencana yang terlatih dan siap siaga 24/7. Ketika bencana melanda, tim kami segera melakukan assessmen kebutuhan, distribusi logistik, dan koordinasi dengan pemerintah. Program pemulihan pasca-bencana mencakup pembangunan hunian sementara, psikososial recovery, dan rehabilitasi infrastruktur dasar.',
      en_content: 'Yamindo has a trained disaster response team ready 24/7. When disaster strikes, our team immediately conducts needs assessment, logistics distribution, and government coordination. Post-disaster recovery programs include temporary housing construction, psychosocial recovery, and basic infrastructure rehabilitation.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
      icon: 'ShieldAlert',
      features: JSON.stringify(['Tim Tanggap 24/7', 'Distribusi Logistik', 'Pemulihan Psikososial', 'Rehabilitasi Infrastruktur']),
      en_features: JSON.stringify(['24/7 Response Team', 'Logistics Distribution', 'Psychosocial Recovery', 'Infrastructure Rehabilitation']),
      order: 3, active: true
    },
    {
      id: 'svc-5', slug: 'pelatihan-pemberdayaan',
      title: 'Pelatihan & Pemberdayaan', en_title: 'Training & Empowerment',
      short_desc: 'Program pelatihan keterampilan dan pemberdayaan ekonomi untuk masyarakat.',
      en_short_desc: 'Skills training and economic empowerment programs for communities.',
      content: 'Program pelatihan dan pemberdayaan Yamindo dirancang untuk menciptakan kemandirian ekonomi. Kami menyelenggarakan pelatihan kewirausahaan, manajemen usaha mikro, keterampilan digital, dan pelatihan pertanian modern. Setiap peserta mendapatkan pendampingan intensif hingga mampu menjalankan usaha secara mandiri dan berkelanjutan.',
      en_content: 'Yamindo training and empowerment programs are designed to create economic independence. We organize entrepreneurship training, micro-business management, digital skills, and modern agriculture training. Each participant receives intensive mentoring until they can run a business independently and sustainably.',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      icon: 'TrendingUp',
      features: JSON.stringify(['Pelatihan UMKM', 'Keterampilan Digital', 'Pertanian Modern', 'Pendampingan Bisnis']),
      en_features: JSON.stringify(['SME Training', 'Digital Skills', 'Modern Agriculture', 'Business Mentoring']),
      order: 4, active: true
    },
    {
      id: 'svc-6', slug: 'kesehatan',
      title: 'Kesehatan', en_title: 'Healthcare',
      short_desc: 'Layanan kesehatan gratis dan program kesehatan masyarakat yang menyeluruh.',
      en_short_desc: 'Free healthcare services and comprehensive public health programs.',
      content: 'Program kesehatan Yamindo mencakup layanan ambulan gratis, pengobatan keliling, penyuluhan kesehatan, dan program gizi untuk anak-anak. Kami juga menyelenggarakan donor darah rutin, screening kesehatan gratis, dan distribusi obat-obatan di daerah terpencil. Program kami bertujuan untuk mengurangi kesenjangan akses kesehatan di Indonesia.',
      en_content: 'Yamindo healthcare programs include free ambulance services, mobile clinics, health education, and child nutrition programs. We also organize regular blood drives, free health screenings, and medicine distribution in remote areas. Our programs aim to reduce healthcare access disparities in Indonesia.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      icon: 'Stethoscope',
      features: JSON.stringify(['Ambulan Gratis', 'Pengobatan Keliling', 'Program Gizi Anak', 'Donor Darah Rutin']),
      en_features: JSON.stringify(['Free Ambulance', 'Mobile Clinics', 'Child Nutrition', 'Regular Blood Drives']),
      order: 5, active: true
    },
    {
      id: 'svc-7', slug: 'zakat',
      title: 'Zakat', en_title: 'Zakat',
      short_desc: 'Pengelolaan zakat profesional dan penyaluran tepat sasaran kepada mustahik.',
      en_short_desc: 'Professional zakat management and targeted distribution to beneficiaries.',
      content: 'Yamindo sebagai lembaga pengelola zakat yang amanah menyalurkan zakat fitrah, zakat mal, dan zakat penghasilan kepada mustahik yang tepat sasaran. Kami menerapkan sistem pengelolaan yang transparan dan akuntabel dengan laporan berkala kepada donatur. Penyaluran meliputi bantuan langsung, program pemberdayaan, dan beasiswa.',
      en_content: 'Yamindo as a trusted zakat management institution distributes fitrah zakat, mal zakat, and income zakat to targeted beneficiaries. We implement a transparent and accountable management system with regular reports to donors. Distribution includes direct assistance, empowerment programs, and scholarships.',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80',
      icon: 'HandCoins',
      features: JSON.stringify(['Zakat Fitrah & Mal', 'Transparan & Akuntabel', 'Penyaluran Tepat Sasaran', 'Laporan Berkala']),
      en_features: JSON.stringify(['Fitrah & Mal Zakat', 'Transparent & Accountable', 'Targeted Distribution', 'Regular Reports']),
      order: 6, active: true
    },
    {
      id: 'svc-8', slug: 'wakaf',
      title: 'Wakaf', en_title: 'Waqf',
      short_desc: 'Pengelolaan wakaf produktif untuk kemaslahatan umat jangka panjang.',
      en_short_desc: 'Productive waqf management for long-term community benefit.',
      content: 'Program wakaf Yamindo mengelola wakaf produktif yang memberikan manfaat jangka panjang. Kami menerima wakaf berupa tanah, bangunan, dan aset lain yang kemudian dikelola untuk menghasilkan manfaat bagi umat. Program wakaf kami mencakup pembangunan sekolah, rumah sakit, masjid, dan infrastruktur publik dari dana wakaf.',
      en_content: 'Yamindo waqf program manages productive waqf that provides long-term benefits. We accept waqf in the form of land, buildings, and other assets which are then managed to generate benefits for the community. Our waqf programs include construction of schools, hospitals, mosques, and public infrastructure from waqf funds.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      icon: 'Landmark',
      features: JSON.stringify(['Wakaf Produktif', 'Bangun Sekolah & Rumah Sakit', 'Infrastruktur Publik', 'Manfaat Jangka Panjang']),
      en_features: JSON.stringify(['Productive Waqf', 'Build Schools & Hospitals', 'Public Infrastructure', 'Long-term Benefits']),
      order: 7, active: true
    },
  ];
  await prisma.serviceDetail.createMany({ data: serviceDetails });

  // === ProgramDetail (8 programs) ===
  const programDetails = [
    {
      id: 'prog-1',
      title: 'Beasiswa Anak Nusantara', en_title: 'Archipelago Children Scholarship',
      description: 'Program beasiswa penuh untuk 1.000 anak dari keluarga kurang mampu di 20 provinsi Indonesia. Mencakup biaya pendidikan, seragam, buku, dan perlengkapan sekolah.',
      en_description: 'Full scholarship program for 1,000 children from underprivileged families across 20 Indonesian provinces. Covers education costs, uniforms, books, and school supplies.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      category: 'Pendidikan', en_category: 'Education',
      raised: 'Rp 2.4 Miliar', goal: 'Rp 5 Miliar', percent: 48, status: 'active', order: 0, active: true
    },
    {
      id: 'prog-2',
      title: 'Air Bersih untuk NTT', en_title: 'Clean Water for NTT',
      description: 'Pembangunan sumur bor dan instalasi air bersih di 50 desa di Nusa Tenggara Timur untuk melayani lebih dari 10.000 kepala keluarga.',
      en_description: 'Construction of wells and clean water installations in 50 villages in East Nusa Tenggara to serve more than 10,000 households.',
      image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=800&q=80',
      category: 'Sosial', en_category: 'Social',
      raised: 'Rp 1.8 Miliar', goal: 'Rp 3 Miliar', percent: 60, status: 'active', order: 1, active: true
    },
    {
      id: 'prog-3',
      title: 'Ambulan Gratis Yamindo', en_title: 'Yamindo Free Ambulance',
      description: 'Penambahan 10 unit ambulan untuk memperluas jangkauan layanan darurat gratis ke 40 kota di seluruh Indonesia.',
      en_description: 'Addition of 10 ambulance units to expand free emergency service coverage to 40 cities across Indonesia.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      category: 'Kesehatan', en_category: 'Healthcare',
      raised: 'Rp 3.1 Miliar', goal: 'Rp 4 Miliar', percent: 78, status: 'active', order: 2, active: true
    },
    {
      id: 'prog-4',
      title: 'Sekolah Wakaf Yamindo', en_title: 'Yamindo Waqf School',
      description: 'Pembangunan sekolah dasar dan menengah bersistem wakaf di 5 kabupaten dengan tingkat putus sekolah tinggi.',
      en_description: 'Construction of waqf-based primary and secondary schools in 5 regencies with high school dropout rates.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
      category: 'Wakaf', en_category: 'Waqf',
      raised: 'Rp 6.5 Miliar', goal: 'Rp 10 Miliar', percent: 65, status: 'active', order: 3, active: true
    },
    {
      id: 'prog-5',
      title: 'Pemberdayaan UMKM Perempuan', en_title: 'Women SME Empowerment',
      description: 'Pelatihan kewirausahaan dan modal usaha untuk 500 perempuan pengusaha mikro di Jawa Barat dan Jawa Tengah.',
      en_description: 'Entrepreneurship training and business capital for 500 female micro-entrepreneurs in West Java and Central Java.',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
      category: 'Pendidikan', en_category: 'Education',
      raised: 'Rp 850 Juta', goal: 'Rp 1.5 Miliar', percent: 57, status: 'active', order: 4, active: true
    },
    {
      id: 'prog-6',
      title: 'Bantuan Korban Bencana', en_title: 'Disaster Victim Assistance',
      description: 'Dana tanggap darurat untuk bantuan logistik, medis, dan pemulihan bagi korban bencana alam di seluruh Indonesia.',
      en_description: 'Emergency response funds for logistics, medical, and recovery assistance for natural disaster victims across Indonesia.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
      category: 'Sosial', en_category: 'Social',
      raised: 'Rp 4.2 Miliar', goal: 'Rp 5 Miliar', percent: 84, status: 'active', order: 5, active: true
    },
    {
      id: 'prog-7',
      title: 'Program Gizi Anak', en_title: 'Child Nutrition Program',
      description: 'Program pemberian makanan bergizi dan suplemen untuk 5.000 anak balita di daerah rawan stunting di Indonesia.',
      en_description: 'Nutritious food and supplement program for 5,000 toddlers in stunting-prone areas in Indonesia.',
      image: 'https://images.unsplash.com/photo-1576091160550-2187d80a18e3?w=800&q=80',
      category: 'Kesehatan', en_category: 'Healthcare',
      raised: 'Rp 1.1 Miliar', goal: 'Rp 2 Miliar', percent: 55, status: 'active', order: 6, active: true
    },
    {
      id: 'prog-8',
      title: 'Wakaf Al Quran Nusantara', en_title: 'Archipelago Quran Waqf',
      description: 'Distribusi 50.000 mushaf Al Quran ke masjid, pesantren, dan sekolah di seluruh Indonesia melalui program wakaf.',
      en_description: 'Distribution of 50,000 Quran copies to mosques, pesantren, and schools across Indonesia through the waqf program.',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80',
      category: 'Wakaf', en_category: 'Waqf',
      raised: 'Rp 750 Juta', goal: 'Rp 1 Miliar', percent: 75, status: 'active', order: 7, active: true
    },
  ];
  await prisma.programDetail.createMany({ data: programDetails });

  console.log('ServiceDetail & ProgramDetail seeding complete!');
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
