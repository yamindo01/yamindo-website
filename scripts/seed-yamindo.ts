import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Yamindo CMS...');

  // === SiteConfig ===
  const configs = [
    { key: 'topbar_welcome', value: 'Selamat Datang di Yamindo — Yayasan Yasir Amin Indonesia' },
    { key: 'phone', value: '+62 21 1234 5678' },
    { key: 'email', value: 'info@yamindo.or.id' },
    { key: 'address', value: 'Jl. Kebahagiaan No. 45, Jakarta Selatan, DKI Jakarta 12345' },
    { key: 'cta_title', value: 'Bergabunglah Dengan Tim Relawan Kami' },
    { key: 'cta_subtitle', value: 'Jadilah bagian dari perubahan nyata untuk Indonesia' },
  ];

  for (const c of configs) {
    await prisma.siteConfig.upsert({ where: { key: c.key }, update: { value: c.value }, create: c });
  }

  // === HeroSlides ===
  const slides = [
    { id: 'slide-0', title: 'Mengulurkan Tangan untuk Indonesia yang Lebih Baik', subtitle: 'Membangun Harapan', description: 'Yamindo hadir untuk memberdayakan masyarakat melalui program pendidikan, kesehatan, dan bantuan sosial bagi mereka yang membutuhkan di seluruh Indonesia.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', bullets: JSON.stringify(['Pendidikan Berkualitas', 'Kesehatan Masyarakat', 'Pemberdayaan Ekonomi']), bgGradient: 'from-teal-50 via-amber-50/30 to-orange-50', order: 0 },
    { id: 'slide-1', title: 'Mewujudkan Generasi Indonesia yang Cerdas dan Sehat', subtitle: 'Bersama Kita Bisa', description: 'Dengan dukungan para dermawan dan relawan, kami terus bergerak maju untuk menciptakan perubahan nyata di kehidupan masyarakat.', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80', bullets: JSON.stringify(['Program Relawan', 'Bantuan Bencana', 'Sponsor Anak']), bgGradient: 'from-amber-50 via-teal-50/30 to-green-50', order: 1 },
    { id: 'slide-2', title: 'Setiap Donasi Anda Adalah Harapan Baru', subtitle: 'Peduli & Berbagi', description: 'Bergabunglah bersama ribuan dermawan yang telah berkontribusi dalam membangun masa depan yang lebih cerah untuk anak-anak Indonesia.', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80', bullets: JSON.stringify(['Transparan & Akuntabel', 'Jangkauan Nasional', 'Dampak Nyata']), bgGradient: 'from-green-50 via-amber-50/30 to-teal-50', order: 2 },
  ];
  for (const s of slides) { await prisma.heroSlide.upsert({ where: { id: s.id }, update: s, create: s }); }

  // === Services ===
  const services = [
    { id: 'svc-1', title: 'Pendidikan', description: 'Memberikan akses pendidikan berkualitas bagi anak-anak dari keluarga kurang mampu di seluruh Indonesia.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80', icon: 'GraduationCap', color: 'from-teal-400 to-teal-600', order: 0 },
    { id: 'svc-2', title: 'Kesehatan', description: 'Menyelenggarakan program kesehatan masyarakat, layanan kesehatan gratis, dan edukasi gaya hidup sehat.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80', icon: 'HeartPulse', color: 'from-rose-400 to-rose-600', order: 1 },
    { id: 'svc-3', title: 'Perumahan', description: 'Membantu pembangunan dan renovasi rumah layak huni bagi masyarakat yang terdampak bencana atau tinggal di kondisi tidak layak.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80', icon: 'Home', color: 'from-amber-400 to-amber-600', order: 2 },
    { id: 'svc-4', title: 'Air Bersih', description: 'Menyediakan akses air bersih untuk daerah terpencil melalui pembangunan sumur bor dan instalasi air bersih.', image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=500&q=80', icon: 'Droplets', color: 'from-sky-400 to-sky-600', order: 3 },
    { id: 'svc-5', title: 'Pemberdayaan', description: 'Program pelatihan keterampilan dan pemberdayaan ekonomi untuk meningkatkan kemandirian masyarakat.', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80', icon: 'BookOpen', color: 'from-violet-400 to-violet-600', order: 4 },
    { id: 'svc-6', title: 'Bantuan Bencana', description: 'Respon cepat tanggap bencana alam dengan distribusi bantuan logistik, medis, dan psikososial.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80', icon: 'HandHelping', color: 'from-emerald-400 to-emerald-600', order: 5 },
  ];
  for (const s of services) { await prisma.service.upsert({ where: { id: s.id }, update: s, create: s }); }

  // === AboutInfo ===
  await prisma.aboutInfo.upsert({ where: { id: 'about-main' }, update: {}, create: { id: 'about-main', title: 'Tentang Yamindo', description: 'Yayasan Yasir Amin Indonesia (Yamindo) didirikan dengan visi untuk menciptakan Indonesia yang lebih adil dan sejahtera. Kami berkomitmen untuk memberikan bantuan langsung kepada masyarakat yang membutuhkan.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', badge: 'Sejak 2010', bullets: JSON.stringify(['Memberdayakan masyarakat melalui pendidikan berkualitas', 'Program kesehatan gratis untuk daerah terpencil']) } });

  // === Causes ===
  const causes = [
    { id: 'cause-1', title: 'Air Bersih untuk Desa Tertinggal', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=400&q=80', raised: 'Rp 45.000.000', goal: 'Rp 100.000.000', percent: 45 },
    { id: 'cause-2', title: 'Beasiswa Anak Nusantara', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80', raised: 'Rp 78.500.000', goal: 'Rp 150.000.000', percent: 52 },
    { id: 'cause-3', title: 'Bantuan Bencana Alam', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80', raised: 'Rp 120.000.000', goal: 'Rp 200.000.000', percent: 60 },
  ];
  for (const c of causes) { await prisma.cause.upsert({ where: { id: c.id }, update: c, create: c }); }

  // === Counters ===
  const counters = [
    { id: 'cnt-1', label: 'Relawan Aktif', value: 15280, icon: 'Users' },
    { id: 'cnt-2', label: 'Mitra Global', value: 234, icon: 'Globe' },
    { id: 'cnt-3', label: 'Anak Terselamatkan', value: 8450, icon: 'Baby' },
    { id: 'cnt-4', label: 'Keluarga Dibantu', value: 3200, icon: 'Home' },
  ];
  for (const c of counters) { await prisma.counter.upsert({ where: { id: c.id }, update: c, create: c }); }

  // === TeamMembers ===
  const team = [
    { id: 'team-1', name: 'Dr. Yasir Amin', role: 'Pendiri & Ketua Yayasan', bio: 'Visioner yang telah mengabdikan hidupnya untuk kesejahteraan masyarakat Indonesia.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
    { id: 'team-2', name: 'Hj. Siti Aminah', role: 'Direktur Eksekutif', bio: 'Pemimpin berpengalaman dalam manajemen organisasi nonprofit dan pengembangan masyarakat.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
    { id: 'team-3', name: 'Ahmad Fauzi, M.Pd', role: 'Koordinator Pendidikan', bio: 'Pendidik berdedikasi yang memastikan setiap anak mendapat akses pendidikan berkualitas.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { id: 'team-4', name: 'dr. Rina Handayani', role: 'Koordinator Kesehatan', bio: 'Dokter yang berdedikasi untuk memberikan layanan kesehatan bagi masyarakat terpencil.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
  ];
  for (const t of team) { await prisma.teamMember.upsert({ where: { id: t.id }, update: t, create: t }); }

  // === Gallery ===
  const gallery = [
    { id: 'gal-1', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Bantuan pendidikan', order: 0 },
    { id: 'gal-2', src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80', alt: 'Program kesehatan', order: 1 },
    { id: 'gal-3', src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', alt: 'Bakti sosial', order: 2 },
    { id: 'gal-4', src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', alt: 'Penyaluran bantuan', order: 3 },
    { id: 'gal-5', src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80', alt: 'Anak-anak belajar', order: 4 },
    { id: 'gal-6', src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', alt: 'Layanan medis', order: 5 },
    { id: 'gal-7', src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80', alt: 'Pelatihan keterampilan', order: 6 },
    { id: 'gal-8', src: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=600&q=80', alt: 'Program air bersih', order: 7 },
    { id: 'gal-9', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Sekolah daerah terpencil', order: 8 },
  ];
  for (const g of gallery) { await prisma.galleryImage.upsert({ where: { id: g.id }, update: g, create: g }); }

  // === Testimonials ===
  const testimonials = [
    { id: 'test-1', name: 'Budi Santoso', role: 'Donatur Tetap', text: 'Saya sudah mendukung Yamindo selama 5 tahun. Transparansi dan dampak nyata dari program mereka membuat saya yakin bahwa donasi saya digunakan dengan baik. Sangat merekomendasikan!', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80', rating: 5, tag: 'Sangat Dipercaya' },
    { id: 'test-2', name: 'Hj. Fatimah Zahra', role: 'Ketua Komunitas Peduli', text: 'Kolaborasi dengan Yamindo telah membantu komunitas kami mendapatkan akses air bersih. Prosesnya profesional dan tim mereka sangat ramah serta responsif.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', rating: 5, tag: 'Mitra Terpercaya' },
    { id: 'test-3', name: 'Prof. Ahmad Dahlan', role: 'Akademisi & Aktivis', text: 'Yamindo adalah salah satu yayasan yang benar-benar bekerja dari hati. Program pendidikan mereka telah mengubah hidup banyak anak di daerah terpencil Indonesia.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', rating: 5, tag: 'Berpengaruh' },
  ];
  for (const t of testimonials) { await prisma.testimonial.upsert({ where: { id: t.id }, update: t, create: t }); }

  // === BlogPosts ===
  const posts = [
    { id: 'post-1', title: 'Yamindo Salurkan Bantuan untuk Korban Bencana Alam NTT', category: 'Bantuan Bencana', date: '15 Juli 2026', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80', excerpt: 'Tim Yamindo langsung bergerak ke lokasi bencana untuk menyalurkan bantuan logistik dan medis kepada korban bencana alam di Nusa Tenggara Timur.' },
    { id: 'post-2', title: 'Program Beasiswa Anak Nusantara Resmi Diluncurkan', category: 'Pendidikan', date: '8 Juli 2026', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80', excerpt: 'Program beasiswa baru ini menargetkan 1.000 anak dari keluarga kurang mampu di 20 provinsi untuk mendapatkan akses pendidikan yang layak.' },
    { id: 'post-3', title: 'Kolaborasi dengan Pemerintah Daerah untuk Program Air Bersih', category: 'Air Bersih', date: '1 Juli 2026', image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=500&q=80', excerpt: 'Kerjasama strategis dengan pemerintah daerah untuk membangun infrastruktur air bersih di 50 desa yang masih kekurangan akses air bersih.' },
  ];
  for (const p of posts) { await prisma.blogPost.upsert({ where: { id: p.id }, update: p, create: p }); }

  // === Partners ===
  const partners = [
    { id: 'partner-1', name: 'Kemenkes RI', logo: 'Kemenkes', order: 0 },
    { id: 'partner-2', name: 'Kemendikbud', logo: 'Kemendikbud', order: 1 },
    { id: 'partner-3', name: 'UNICEF', logo: 'UNICEF', order: 2 },
    { id: 'partner-4', name: 'WHO Indonesia', logo: 'WHO', order: 3 },
    { id: 'partner-5', name: 'Bank Indonesia', logo: 'BI', order: 4 },
    { id: 'partner-6', name: 'Aksi Cepat Tanggap', logo: 'ACT', order: 5 },
  ];
  for (const p of partners) { await prisma.partner.upsert({ where: { id: p.id }, update: p, create: p }); }

  // === Events ===
  const events = [
    { id: 'event-1', date: '15 Agustus 2026', title: 'Bakti Sosial HUT RI' },
    { id: 'event-2', date: '5 September 2026', title: 'Seminar Kesehatan Masyarakat' },
    { id: 'event-3', date: '20 Oktober 2026', title: 'Gala Donasi Tahunan' },
  ];
  for (const e of events) { await prisma.footerEvent.upsert({ where: { id: e.id }, update: e, create: e }); }

  // === DonationPresets ===
  const presets = [
    { id: 'dp-1', label: 'Rp 50.000', amount: 50000, order: 0 },
    { id: 'dp-2', label: 'Rp 100.000', amount: 100000, order: 1 },
    { id: 'dp-3', label: 'Rp 250.000', amount: 250000, order: 2 },
    { id: 'dp-4', label: 'Rp 500.000', amount: 500000, order: 3 },
    { id: 'dp-5', label: 'Rp 1.000.000', amount: 1000000, order: 4 },
    { id: 'dp-6', label: 'Custom', amount: null, order: 5 },
  ];
  for (const d of presets) { await prisma.donationPreset.upsert({ where: { id: d.id }, update: d, create: d }); }

  console.log('Seeding complete!');
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
