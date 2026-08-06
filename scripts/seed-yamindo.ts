import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Yamindo CMS (bilingual)...');

  // === SiteConfig ===
  const configs = [
    { key: 'topbar_welcome', value: 'Selamat Datang di Yamindo — Yayasan Yasir Amin Indonesia' },
    { key: 'en_topbar_welcome', value: 'Welcome to Yamindo — Yasir Amin Indonesia Foundation' },
    { key: 'phone', value: '+62 21 1234 5678' },
    { key: 'email', value: 'info@yamindo.or.id' },
    { key: 'address', value: 'Jl. Kebahagiaan No. 45, Jakarta Selatan, DKI Jakarta 12345' },
    { key: 'cta_title', value: 'Bergabunglah Dengan Tim Relawan Kami' },
    { key: 'en_cta_title', value: 'Join Our Team of Volunteers' },
    { key: 'cta_subtitle', value: 'Jadilah bagian dari perubahan nyata untuk Indonesia' },
    { key: 'en_cta_subtitle', value: 'Be part of real change for Indonesia' },
  ];

  for (const c of configs) {
    await prisma.siteConfig.upsert({ where: { key: c.key }, update: { value: c.value }, create: c });
  }

  // === HeroSlides ===
  const slides = [
    {
      id: 'slide-0',
      title: 'Mengulurkan Tangan untuk Indonesia yang Lebih Baik', en_title: 'Lending a Hand for a Better Indonesia',
      subtitle: 'Membangun Harapan', en_subtitle: 'Building Hope',
      description: 'Yamindo hadir untuk memberdayakan masyarakat melalui program pendidikan, kesehatan, dan bantuan sosial bagi mereka yang membutuhkan di seluruh Indonesia.',
      en_description: 'Yamindo is here to empower communities through education, healthcare, and social assistance programs for those in need across Indonesia.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      bullets: JSON.stringify(['Pendidikan Berkualitas', 'Kesehatan Masyarakat', 'Pemberdayaan Ekonomi']),
      en_bullets: JSON.stringify(['Quality Education', 'Public Healthcare', 'Economic Empowerment']),
      bgGradient: 'from-teal-50 via-amber-50/30 to-orange-50', order: 0
    },
    {
      id: 'slide-1',
      title: 'Mewujudkan Generasi Indonesia yang Cerdas dan Sehat', en_title: 'Creating a Smart and Healthy Generation of Indonesians',
      subtitle: 'Bersama Kita Bisa', en_subtitle: 'Together We Can',
      description: 'Dengan dukungan para dermawan dan relawan, kami terus bergerak maju untuk menciptakan perubahan nyata di kehidupan masyarakat.',
      en_description: 'With the support of donors and volunteers, we continue to move forward to create real changes in people\'s lives.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      bullets: JSON.stringify(['Program Relawan', 'Bantuan Bencana', 'Sponsor Anak']),
      en_bullets: JSON.stringify(['Volunteer Programs', 'Disaster Relief', 'Child Sponsorship']),
      bgGradient: 'from-amber-50 via-teal-50/30 to-green-50', order: 1
    },
    {
      id: 'slide-2',
      title: 'Setiap Donasi Anda Adalah Harapan Baru', en_title: 'Every Donation You Make Is a New Hope',
      subtitle: 'Peduli & Berbagi', en_subtitle: 'Care & Share',
      description: 'Bergabunglah bersama ribuan dermawan yang telah berkontribusi dalam membangun masa depan yang lebih cerah untuk anak-anak Indonesia.',
      en_description: 'Join thousands of donors who have contributed to building a brighter future for Indonesian children.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
      bullets: JSON.stringify(['Transparan & Akuntabel', 'Jangkauan Nasional', 'Dampak Nyata']),
      en_bullets: JSON.stringify(['Transparent & Accountable', 'National Reach', 'Real Impact']),
      bgGradient: 'from-green-50 via-amber-50/30 to-teal-50', order: 2
    },
  ];
  for (const s of slides) { await prisma.heroSlide.upsert({ where: { id: s.id }, update: s, create: s }); }

  // === Services ===
  const services = [
    { id: 'svc-1', title: 'Pendidikan', en_title: 'Education', description: 'Memberikan akses pendidikan berkualitas bagi anak-anak dari keluarga kurang mampu di seluruh Indonesia.', en_description: 'Providing quality education access for children from underprivileged families across Indonesia.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80', icon: 'GraduationCap', color: 'from-teal-400 to-teal-600', order: 0 },
    { id: 'svc-2', title: 'Kesehatan', en_title: 'Healthcare', description: 'Menyelenggarakan program kesehatan masyarakat, layanan kesehatan gratis, dan edukasi gaya hidup sehat.', en_description: 'Organizing public health programs, free healthcare services, and healthy lifestyle education.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80', icon: 'HeartPulse', color: 'from-rose-400 to-rose-600', order: 1 },
    { id: 'svc-3', title: 'Perumahan', en_title: 'Housing', description: 'Membantu pembangunan dan renovasi rumah layak huni bagi masyarakat yang terdampak bencana atau tinggal di kondisi tidak layak.', en_description: 'Helping to build and renovate decent homes for disaster-affected communities or those living in substandard conditions.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80', icon: 'Home', color: 'from-amber-400 to-amber-600', order: 2 },
    { id: 'svc-4', title: 'Air Bersih', en_title: 'Clean Water', description: 'Menyediakan akses air bersih untuk daerah terpencil melalui pembangunan sumur bor dan instalasi air bersih.', en_description: 'Providing clean water access for remote areas through well drilling and clean water installation.', image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=500&q=80', icon: 'Droplets', color: 'from-sky-400 to-sky-600', order: 3 },
    { id: 'svc-5', title: 'Pemberdayaan', en_title: 'Empowerment', description: 'Program pelatihan keterampilan dan pemberdayaan ekonomi untuk meningkatkan kemandirian masyarakat.', en_description: 'Skills training and economic empowerment programs to increase community self-reliance.', image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80', icon: 'BookOpen', color: 'from-violet-400 to-violet-600', order: 4 },
    { id: 'svc-6', title: 'Bantuan Bencana', en_title: 'Disaster Relief', description: 'Respon cepat tanggap bencana alam dengan distribusi bantuan logistik, medis, dan psikososial.', en_description: 'Rapid disaster response with distribution of logistics, medical, and psychosocial assistance.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80', icon: 'HandHelping', color: 'from-emerald-400 to-emerald-600', order: 5 },
  ];
  for (const s of services) { await prisma.service.upsert({ where: { id: s.id }, update: s, create: s }); }

  // === AboutInfo ===
  await prisma.aboutInfo.upsert({
    where: { id: 'about-main' },
    update: {},
    create: {
      id: 'about-main',
      title: 'Tentang Yamindo', en_title: 'About Yamindo',
      description: 'Yayasan Yasir Amin Indonesia (Yamindo) didirikan dengan visi untuk menciptakan Indonesia yang lebih adil dan sejahtera. Kami berkomitmen untuk memberikan bantuan langsung kepada masyarakat yang membutuhkan.',
      en_description: 'Yasir Amin Indonesia Foundation (Yamindo) was founded with a vision to create a more just and prosperous Indonesia. We are committed to providing direct assistance to communities in need.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
      badge: 'Sejak 2010', en_badge: 'Since 2010',
      bullets: JSON.stringify(['Memberdayakan masyarakat melalui pendidikan berkualitas', 'Program kesehatan gratis untuk daerah terpencil']),
      en_bullets: JSON.stringify(['Empowering communities through quality education', 'Free healthcare programs for remote areas']),
    }
  });

  // === Causes ===
  const causes = [
    { id: 'cause-1', title: 'Air Bersih untuk Desa Tertinggal', en_title: 'Clean Water for Remote Villages', description: 'Program penyediaan air bersih bagi desa-desa yang belum memiliki akses air bersih yang memadai.', en_description: 'A program providing clean water for villages that lack adequate clean water access.', image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=400&q=80', raised: 'Rp 45.000.000', goal: 'Rp 100.000.000', percent: 45 },
    { id: 'cause-2', title: 'Beasiswa Anak Nusantara', en_title: 'Scholarship for Indonesian Children', description: 'Program beasiswa untuk anak-anak dari keluarga kurang mampu agar bisa melanjutkan pendidikan.', en_description: 'A scholarship program for children from underprivileged families to continue their education.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80', raised: 'Rp 78.500.000', goal: 'Rp 150.000.000', percent: 52 },
    { id: 'cause-3', title: 'Bantuan Bencana Alam', en_title: 'Natural Disaster Relief', description: 'Penyaluran bantuan cepat tanggap untuk korban bencana alam di berbagai wilayah Indonesia.', en_description: 'Rapid relief distribution for natural disaster victims across Indonesia.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80', raised: 'Rp 120.000.000', goal: 'Rp 200.000.000', percent: 60 },
  ];
  for (const c of causes) { await prisma.cause.upsert({ where: { id: c.id }, update: c, create: c }); }

  // === Counters ===
  const counters = [
    { id: 'cnt-1', label: 'Relawan Aktif', en_label: 'Active Volunteers', value: 15280, icon: 'Users' },
    { id: 'cnt-2', label: 'Mitra Global', en_label: 'Global Partners', value: 234, icon: 'Globe' },
    { id: 'cnt-3', label: 'Anak Terselamatkan', en_label: 'Children Saved', value: 8450, icon: 'Baby' },
    { id: 'cnt-4', label: 'Keluarga Dibantu', en_label: 'Families Helped', value: 3200, icon: 'Home' },
  ];
  for (const c of counters) { await prisma.counter.upsert({ where: { id: c.id }, update: c, create: c }); }

  // === TeamMembers ===
  const team = [
    { id: 'team-1', name: 'Dr. Yasir Amin', en_name: 'Dr. Yasir Amin', role: 'Pendiri & Ketua Yayasan', en_role: 'Founder & Chairman', bio: 'Visioner yang telah mengabdikan hidupnya untuk kesejahteraan masyarakat Indonesia.', en_bio: 'A visionary who has dedicated his life to the welfare of Indonesian communities.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
    { id: 'team-2', name: 'Hj. Siti Aminah', en_name: 'Hj. Siti Aminah', role: 'Direktur Eksekutif', en_role: 'Executive Director', bio: 'Pemimpin berpengalaman dalam manajemen organisasi nonprofit dan pengembangan masyarakat.', en_bio: 'An experienced leader in non-profit management and community development.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
    { id: 'team-3', name: 'Ahmad Fauzi, M.Pd', en_name: 'Ahmad Fauzi, M.Pd', role: 'Koordinator Pendidikan', en_role: 'Education Coordinator', bio: 'Pendidik berdedikasi yang memastikan setiap anak mendapat akses pendidikan berkualitas.', en_bio: 'A dedicated educator ensuring every child gets access to quality education.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { id: 'team-4', name: 'dr. Rina Handayani', en_name: 'dr. Rina Handayani', role: 'Koordinator Kesehatan', en_role: 'Health Coordinator', bio: 'Dokter yang berdedikasi untuk memberikan layanan kesehatan bagi masyarakat terpencil.', en_bio: 'A doctor dedicated to providing healthcare for remote communities.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
  ];
  for (const t of team) { await prisma.teamMember.upsert({ where: { id: t.id }, update: t, create: t }); }

  // === Gallery ===
  const gallery = [
    { id: 'gal-1', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Bantuan pendidikan', en_alt: 'Education assistance', order: 0 },
    { id: 'gal-2', src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80', alt: 'Program kesehatan', en_alt: 'Healthcare program', order: 1 },
    { id: 'gal-3', src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', alt: 'Bakti sosial', en_alt: 'Community service', order: 2 },
    { id: 'gal-4', src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', alt: 'Penyaluran bantuan', en_alt: 'Aid distribution', order: 3 },
    { id: 'gal-5', src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80', alt: 'Anak-anak belajar', en_alt: 'Children learning', order: 4 },
    { id: 'gal-6', src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', alt: 'Layanan medis', en_alt: 'Medical services', order: 5 },
    { id: 'gal-7', src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80', alt: 'Pelatihan keterampilan', en_alt: 'Skills training', order: 6 },
    { id: 'gal-8', src: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=600&q=80', alt: 'Program air bersih', en_alt: 'Clean water program', order: 7 },
    { id: 'gal-9', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Sekolah daerah terpencil', en_alt: 'Remote area school', order: 8 },
  ];
  for (const g of gallery) { await prisma.galleryImage.upsert({ where: { id: g.id }, update: g, create: g }); }

  // === Testimonials ===
  const testimonials = [
    { id: 'test-1', name: 'Budi Santoso', en_name: 'Budi Santoso', role: 'Donatur Tetap', en_role: 'Regular Donor', text: 'Saya sudah mendukung Yamindo selama 5 tahun. Transparansi dan dampak nyata dari program mereka membuat saya yakin bahwa donasi saya digunakan dengan baik. Sangat merekomendasikan!', en_text: 'I have been supporting Yamindo for 5 years. Their transparency and real impact make me confident that my donation is used well. Highly recommended!', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80', rating: 5, tag: 'Sangat Dipercaya', en_tag: 'Highly Trusted' },
    { id: 'test-2', name: 'Hj. Fatimah Zahra', en_name: 'Hj. Fatimah Zahra', role: 'Ketua Komunitas Peduli', en_role: 'Community Care Leader', text: 'Kolaborasi dengan Yamindo telah membantu komunitas kami mendapatkan akses air bersih. Prosesnya profesional dan tim mereka sangat ramah serta responsif.', en_text: 'Our collaboration with Yamindo has helped our community gain access to clean water. The process was professional and their team was very friendly and responsive.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', rating: 5, tag: 'Mitra Terpercaya', en_tag: 'Trusted Partner' },
    { id: 'test-3', name: 'Prof. Ahmad Dahlan', en_name: 'Prof. Ahmad Dahlan', role: 'Akademisi & Aktivis', en_role: 'Academic & Activist', text: 'Yamindo adalah salah satu yayasan yang benar-benar bekerja dari hati. Program pendidikan mereka telah mengubah hidup banyak anak di daerah terpencil Indonesia.', en_text: 'Yamindo is one of the few foundations that truly works from the heart. Their education programs have changed the lives of many children in remote areas of Indonesia.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', rating: 5, tag: 'Berpengaruh', en_tag: 'Influential' },
  ];
  for (const t of testimonials) { await prisma.testimonial.upsert({ where: { id: t.id }, update: t, create: t }); }

  // === BlogPosts ===
  const posts = [
    { id: 'post-1', title: 'Yamindo Salurkan Bantuan untuk Korban Bencana Alam NTT', en_title: 'Yamindo Distributes Aid to NTT Natural Disaster Victims', category: 'Bantuan Bencana', en_category: 'Disaster Relief', date: '15 Juli 2026', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&q=80', excerpt: 'Tim Yamindo langsung bergerak ke lokasi bencana untuk menyalurkan bantuan logistik dan medis kepada korban bencana alam di Nusa Tenggara Timur.', en_excerpt: 'The Yamindo team immediately mobilized to the disaster site to distribute logistics and medical aid to natural disaster victims in East Nusa Tenggara.' },
    { id: 'post-2', title: 'Program Beasiswa Anak Nusantara Resmi Diluncurkan', en_title: 'Archipelago Children Scholarship Program Officially Launched', category: 'Pendidikan', en_category: 'Education', date: '8 Juli 2026', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80', excerpt: 'Program beasiswa baru ini menargetkan 1.000 anak dari keluarga kurang mampu di 20 provinsi untuk mendapatkan akses pendidikan yang layak.', en_excerpt: 'This new scholarship program targets 1,000 children from underprivileged families across 20 provinces to gain access to quality education.' },
    { id: 'post-3', title: 'Kolaborasi dengan Pemerintah Daerah untuk Program Air Bersih', en_title: 'Collaboration with Local Government for Clean Water Program', category: 'Air Bersih', en_category: 'Clean Water', date: '1 Juli 2026', image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a9?w=500&q=80', excerpt: 'Kerjasama strategis dengan pemerintah daerah untuk membangun infrastruktur air bersih di 50 desa yang masih kekurangan akses air bersih.', en_excerpt: 'A strategic collaboration with local governments to build clean water infrastructure in 50 villages that still lack clean water access.' },
  ];
  for (const p of posts) { await prisma.blogPost.upsert({ where: { id: p.id }, update: p, create: p }); }

  // === Partners ===
  const partners = [
    { id: 'partner-1', name: 'Kemenkes RI', en_name: 'Ministry of Health RI', logo: 'Kemenkes', order: 0 },
    { id: 'partner-2', name: 'Kemendikbud', en_name: 'Ministry of Education', logo: 'Kemendikbud', order: 1 },
    { id: 'partner-3', name: 'UNICEF', en_name: 'UNICEF', logo: 'UNICEF', order: 2 },
    { id: 'partner-4', name: 'WHO Indonesia', en_name: 'WHO Indonesia', logo: 'WHO', order: 3 },
    { id: 'partner-5', name: 'Bank Indonesia', en_name: 'Bank Indonesia', logo: 'BI', order: 4 },
    { id: 'partner-6', name: 'Aksi Cepat Tanggap', en_name: 'Rapid Action', logo: 'ACT', order: 5 },
  ];
  for (const p of partners) { await prisma.partner.upsert({ where: { id: p.id }, update: p, create: p }); }

  // === Events ===
  const events = [
    { id: 'event-1', date: '15 Agustus 2026', title: 'Bakti Sosial HUT RI', en_title: 'Independence Day Community Service' },
    { id: 'event-2', date: '5 September 2026', title: 'Seminar Kesehatan Masyarakat', en_title: 'Public Health Seminar' },
    { id: 'event-3', date: '20 Oktober 2026', title: 'Gala Donasi Tahunan', en_title: 'Annual Donation Gala' },
  ];
  for (const e of events) { await prisma.footerEvent.upsert({ where: { id: e.id }, update: e, create: e }); }

  // === DonationPresets ===
  const presets = [
    { id: 'dp-1', label: 'Rp 50.000', en_label: 'Rp 50,000', amount: 50000, order: 0 },
    { id: 'dp-2', label: 'Rp 100.000', en_label: 'Rp 100,000', amount: 100000, order: 1 },
    { id: 'dp-3', label: 'Rp 250.000', en_label: 'Rp 250,000', amount: 250000, order: 2 },
    { id: 'dp-4', label: 'Rp 500.000', en_label: 'Rp 500,000', amount: 500000, order: 3 },
    { id: 'dp-5', label: 'Rp 1.000.000', en_label: 'Rp 1,000,000', amount: 1000000, order: 4 },
    { id: 'dp-6', label: 'Custom', en_label: 'Custom', amount: null, order: 5 },
  ];
  for (const d of presets) { await prisma.donationPreset.upsert({ where: { id: d.id }, update: d, create: d }); }

  console.log('Seeding complete!');
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });
