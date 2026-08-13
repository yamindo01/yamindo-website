import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

interface PageContentSeed {
  page: string;
  section: string;
  title: string;
  en_title: string;
  content: string;
  en_content: string;
  items: string;
  en_items: string;
  order: number;
}

const ALL_SEEDS: PageContentSeed[] = [
  // ============================================================
  // 1. PENDIDIKAN
  // ============================================================
  {
    page: "layanan-pendidikan",
    section: "hero",
    title: "Layanan Pendidikan Yasir Amin",
    en_title: "Yasir Amin Education Services",
    content: "Membangun generasi berilmu dan berkarakter melalui pendidikan Al-Quran yang berkualitas dari tingkat dasar hingga perguruan tinggi, tersebar di berbagai wilayah Indonesia.",
    en_content: "Building a knowledgeable and characterful generation through quality Al-Quran education from elementary to university level, spread across various regions in Indonesia.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-pendidikan",
    section: "programs",
    title: "Jenjang Pendidikan & Program Unggulan",
    en_title: "Education Levels & Flagship Programs",
    content: "Yayasan Yasir Amin Indonesia mengelola berbagai jenjang pendidikan formal dan non-formal yang tersebar di beberapa provinsi. Seluruh lembaga pendidikan kami berkomitmen pada integrasi kurikulum nasional dengan kurikulum keislaman yang kuat.",
    en_content: "Yasir Amin Indonesia Foundation manages various formal and non-formal education levels spread across several provinces. All our educational institutions are committed to integrating the national curriculum with a strong Islamic curriculum.",
    items: JSON.stringify([
      { title: "SD Yasir Amin", desc: "Sekolah Dasar dengan kurikulum terpadu nasional dan keislaman, fokus pada hafalan Al-Quran dan akhlak mulia." },
      { title: "SMP Yasir Amin", desc: "Sekolah Menengah Pertama dengan penguatan karakter, tahfidz program, dan pengembangan bakat siswa." },
      { title: "SMA Yasir Amin", desc: "Sekolah Menengah Atas persiapan universitas dengan program unggulan tahfidz 30 juz dan sains." },
      { title: "Pondok Pesantren Yasir Amin", desc: "Pondok pesantren tahfidz Al-Quran dengan pendidikan kitab kuning, bahasa arab, dan kemandirian santri." },
      { title: "Taman Baca Al-Quran", desc: "15+ titik taman baca di masjid dan komunitas untuk mengajarkan baca tulis Al-Quran gratis." },
      { title: "Program Beasiswa", desc: "Beasiswa pendidikan dari tingkat SD hingga perguruan tinggi untuk anak keluarga kurang mampu." },
      { title: "Kelas Tahsin & Tajwid", desc: "Program perbaikan bacaan Al-Quran untuk masyarakat umum, dari dasar hingga mahir." },
      { title: "Pelatihan Guru Mengaji", desc: "Pembinaan dan sertifikasi guru mengaji komunitas untuk meningkatkan kualitas pengajaran." },
    ]),
    en_items: JSON.stringify([
      { title: "SD Yasir Amin", desc: "Elementary school with integrated national and Islamic curriculum, focusing on Al-Quran memorization and noble character." },
      { title: "SMP Yasir Amin", desc: "Junior High School with character strengthening, tahfidz program, and student talent development." },
      { title: "SMA Yasir Amin", desc: "Senior High School with university preparation featuring 30 juz tahfidz and science programs." },
      { title: "Pondok Pesantren Yasir Amin", desc: "Al-Quran tahfidz boarding school with classical Islamic texts, Arabic language, and student independence." },
      { title: "Al-Quran Reading Centers", desc: "15+ reading centers at mosques and communities for free Al-Quran literacy education." },
      { title: "Scholarship Program", desc: "Education scholarships from elementary to university level for underprivileged children." },
      { title: "Tahsin & Tajwid Classes", desc: "Al-Quran reading improvement programs for the general public, from beginner to advanced." },
      { title: "Quran Teacher Training", desc: "Community Quran teacher development and certification to improve teaching quality." },
    ]),
    order: 2,
  },
  {
    page: "layanan-pendidikan",
    section: "stats",
    title: "Pendidikan dalam Angka",
    en_title: "Education in Numbers",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "4", label: "Jenjang Pendidikan Formal", en_label: "Formal Education Levels" },
      { num: "15+", label: "Taman Baca Al-Quran", en_label: "Al-Quran Reading Centers" },
      { num: "500+", label: "Siswa Aktif", en_label: "Active Students" },
      { num: "50+", label: "Hafidz/hafidzah Lulus", en_label: "Graduated Hafidz" },
    ]),
    en_items: JSON.stringify([
      { num: "4", label: "Formal Education Levels" },
      { num: "15+", label: "Al-Quran Reading Centers" },
      { num: "500+", label: "Active Students" },
      { num: "50+", label: "Graduated Hafidz" },
    ]),
    order: 3,
  },
  {
    page: "layanan-pendidikan",
    section: "process",
    title: "Alur Pendaftaran Siswa Baru",
    en_title: "New Student Registration Process",
    content: "Proses pendaftaran siswa baru di semua jenjang pendidikan Yasir Amin dilakukan secara terbuka dan transparan.",
    en_content: "New student registration at all Yasir Amin education levels is conducted openly and transparently.",
    items: JSON.stringify([
      { title: "Pendaftaran Online/Offline", desc: "Isi formulir pendaftaran melalui website atau datang langsung ke sekolah." },
      { title: "Seleksi & Tes Akademik", desc: "Tes baca tulis, kemampuan dasar, dan wawancara dengan orang tua." },
      { title: "Pengumuman & Daftar Ulang", desc: "Hasil seleksi diumumkan dan dilanjutkan proses daftar ulang." },
      { title: "Masa Pengenalan Lingkungan", desc: "Program orientasi siswa baru untuk adaptasi dengan lingkungan sekolah." },
    ]),
    en_items: JSON.stringify([
      { title: "Online/Offline Registration", desc: "Fill in the registration form via website or visit the school directly." },
      { title: "Selection & Academic Test", desc: "Literacy test, basic skills assessment, and parent interview." },
      { title: "Announcement & Re-registration", desc: "Selection results are announced followed by re-registration process." },
      { title: "Environment Orientation", desc: "New student orientation program for school environment adaptation." },
    ]),
    order: 4,
  },
  {
    page: "layanan-pendidikan",
    section: "cta",
    title: "Wujudkan Pendidikan Berkualitas untuk Anak Indonesia",
    en_title: "Realize Quality Education for Indonesian Children",
    content: "Bergabunglah sebagai donatur pendidikan atau daftarkan putra-putri Anda di lembaga pendidikan Yasir Amin. Setiap kontribusi Anda membantu mencetak generasi yang berilmu dan berkarakter.",
    en_content: "Join as an education donor or enroll your children at Yasir Amin educational institutions. Every contribution helps create a knowledgeable and characterful generation.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 2. SOSIAL
  // ============================================================
  {
    page: "layanan-sosial",
    section: "hero",
    title: "Layanan Sosial Yamindo",
    en_title: "Yamindo Social Services",
    content: "Mewujudkan kepedulian sosial yang nyata dan berkelanjutan bagi anak yatim, dhuafa, janda, dan kelompok rentan di seluruh Indonesia melalui program santunan dan pemberdayaan.",
    en_content: "Realizing real and sustainable social care for orphans, underprivileged families, widows, and vulnerable groups throughout Indonesia through support and empowerment programs.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-sosial",
    section: "programs",
    title: "Program Unggulan Layanan Sosial",
    en_title: "Flagship Social Service Programs",
    content: "Setiap program dirancang untuk memberikan dampak jangka panjang, bukan sekadar bantuan konsumtif semata.",
    en_content: "Each program is designed to create long-term impact, not just consumptive aid.",
    items: JSON.stringify([
      { title: "Kafalah Anak Yatim", desc: "Santunan bulanan mencakup kebutuhan pokok, biaya pendidikan, seragam, dan mentoring individual." },
      { title: "Paket Sembako Rutin", desc: "Pembagian paket kebutuhan pokok setiap bulan untuk keluarga dhuafa terdaftar." },
      { title: "Pemberdayaan Ibu Janda", desc: "Pelatihan menjahit, memasak, kerajinan, dan keterampilan digital plus modal usaha." },
      { title: "Bimbingan Karakter Anak", desc: "Pendampingan psikologis dan pembinaan akhlak bagi anak-anak penerima manfaat." },
      { title: "Santunan Lansia", desc: "Bantuan rutin dan kunjungan untuk lansia yang tidak memiliki keluarga yang merawat." },
      { title: "Silaturahmi Donatur", desc: "Pertemuan rutin antara donatur dan penerima manfaat untuk mempererat ukhuwah." },
    ]),
    en_items: JSON.stringify([
      { title: "Orphan Sponsorship (Kafalah)", desc: "Monthly stipends covering basic needs, education costs, uniforms, and individual mentoring." },
      { title: "Regular Food Packages", desc: "Monthly basic necessity packages for registered underprivileged families." },
      { title: "Widow Empowerment", desc: "Sewing, cooking, handicraft, and digital skills training plus business capital." },
      { title: "Child Character Guidance", desc: "Psychological support and moral development for beneficiary children." },
      { title: "Elderly Support", desc: "Regular assistance and visits for elderly without family care." },
      { title: "Donor Gatherings", desc: "Regular meetings between donors and beneficiaries to strengthen brotherhood." },
    ]),
    order: 2,
  },
  {
    page: "layanan-sosial",
    section: "stats",
    title: "Layanan Sosial dalam Angka",
    en_title: "Social Services in Numbers",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "500+", label: "Anak Yatim Terbantu", en_label: "Orphans Supported" },
      { num: "1000+", label: "Keluarga Dhuafa", en_label: "Underprivileged Families" },
      { num: "200+", label: "Ibu Janda Diberdayakan", en_label: "Widows Empowered" },
      { num: "30+", label: "Kota Penjangkauan", en_label: "Cities Reached" },
    ]),
    en_items: JSON.stringify([
      { num: "500+", label: "Orphans Supported" },
      { num: "1000+", label: "Underprivileged Families" },
      { num: "200+", label: "Widows Empowered" },
      { num: "30+", label: "Cities Reached" },
    ]),
    order: 3,
  },
  {
    page: "layanan-sosial",
    section: "process",
    title: "Cara Menjadi Donatur Kafalah",
    en_title: "How to Become a Kafalah Donor",
    content: "Menjadi donatur kafalah sangat mudah dan fleksibel. Anda dapat memilih paket sesuai kemampuan.",
    en_content: "Becoming a kafalah donor is very easy and flexible. You can choose a package according to your ability.",
    items: JSON.stringify([
      { title: "Pilih Paket Kafalah", desc: "Pilih paket bulanan sesuai kemampuan: Rp 200.000, Rp 350.000, atau Rp 500.000 per anak." },
      { title: "Isi Formulir Pendaftaran", desc: "Lengkapi data diri dan pilih anak yatim yang ingin dikafalahi." },
      { title: "Transfer Donasi Rutin", desc: "Lakukan transfer ke rekening resmi Yamindo setiap bulan." },
      { title: "Terima Laporan Berkala", desc: "Anda akan menerima laporan perkembangan anak yang dikafalahi setiap bulan." },
    ]),
    en_items: JSON.stringify([
      { title: "Choose Kafalah Package", desc: "Choose a monthly package: Rp 200,000, Rp 350,000, or Rp 500,000 per child." },
      { title: "Fill Registration Form", desc: "Complete your details and choose the orphan you wish to sponsor." },
      { title: "Transfer Regular Donation", desc: "Make monthly transfers to official Yamindo bank accounts." },
      { title: "Receive Periodic Reports", desc: "You will receive monthly progress reports for your sponsored child." },
    ]),
    order: 4,
  },
  {
    page: "layanan-sosial",
    section: "cta",
    title: "Jadilah Penyayang bagi Anak Yatim",
    en_title: "Be a Carer for Orphans",
    content: "Dengan Rp 200.000/bulan Anda sudah dapat mengubah kehidupan seorang anak yatim. Mulai kafalah Anda sekarang.",
    en_content: "With only Rp 200,000/month you can change an orphan's life. Start your sponsorship now.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 3. KEMANUSIAAN
  // ============================================================
  {
    page: "layanan-kemanusiaan",
    section: "hero",
    title: "Layanan Kemanusiaan Yamindo",
    en_title: "Yamindo Humanitarian Services",
    content: "Tim tanggap darurat siap bergerak 24/7 untuk membantu korban bencana dan krisis kemanusiaan di seluruh Indonesia tanpa memandang suku, agama, dan ras.",
    en_content: "Emergency response team ready 24/7 to assist disaster victims and humanitarian crises throughout Indonesia regardless of ethnicity, religion, and race.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-kemanusiaan",
    section: "programs",
    title: "Program Kemanusiaan Kami",
    en_title: "Our Humanitarian Programs",
    content: "Kami hadir di garis depan ketika bencana dan krisis terjadi, memberikan bantuan yang cepat dan tepat sasaran.",
    en_content: "We are at the frontline when disasters and crises occur, providing fast and targeted aid.",
    items: JSON.stringify([
      { title: "Tim Tanggap Darurat 24/7", desc: "Relawan terlatih siap bergerak kapan saja ke lokasi bencana dengan peralatan lengkap." },
      { title: "Penyaluran Logistik", desc: "Distribusi makanan, air bersih, selimut, obat-obatan ke lokasi terdampak." },
      { title: "Dapur Umum", desc: "Penyediaan makanan masak bagi korban bencana dan pengungsi." },
      { title: "Pengobatan Gratis", desc: "Layanan kesehatan darurat dan pemeriksaan medis gratis di posko bencana." },
      { title: "Trauma Healing", desc: "Pendampingan psikologis bagi korban bencana, terutama anak-anak." },
      { title: "Posko Bantuan", desc: "Pendirian posko koordinasi bantuan di lokasi bencana." },
    ]),
    en_items: JSON.stringify([
      { title: "24/7 Emergency Response Team", desc: "Trained volunteers ready to deploy anytime to disaster zones with full equipment." },
      { title: "Logistics Distribution", desc: "Distribution of food, clean water, blankets, medicines to affected areas." },
      { title: "Public Kitchen", desc: "Providing cooked meals for disaster victims and refugees." },
      { title: "Free Medical Treatment", desc: "Emergency healthcare and free medical check-ups at disaster posts." },
      { title: "Trauma Healing", desc: "Psychological support for disaster victims, especially children." },
      { title: "Aid Coordination Post", desc: "Establishment of aid coordination posts at disaster locations." },
    ]),
    order: 2,
  },
  {
    page: "layanan-kemanusiaan",
    section: "stats",
    title: "",
    en_title: "",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "50+", label: "Aksi Kemanusiaan", en_label: "Humanitarian Actions" },
      { num: "24/7", label: "Siaga Darurat", en_label: "Emergency Standby" },
      { num: "100K+", label: "Korban Terbantu", en_label: "Victims Assisted" },
      { num: "25", label: "Provinsi Terjangkau", en_label: "Provinces Reached" },
    ]),
    en_items: JSON.stringify([
      { num: "50+", label: "Humanitarian Actions" },
      { num: "24/7", label: "Emergency Standby" },
      { num: "100K+", label: "Victims Assisted" },
      { num: "25", label: "Provinces Reached" },
    ]),
    order: 3,
  },
  {
    page: "layanan-kemanusiaan",
    section: "process",
    title: "Mekanisme Penanganan Darurat",
    en_title: "Emergency Response Mechanism",
    content: "Kami menerapkan standar penanganan darurat yang terstruktur untuk memastikan bantuan tersalurkan cepat dan tepat.",
    en_content: "We apply structured emergency response standards to ensure aid is delivered quickly and accurately.",
    items: JSON.stringify([
      { title: "Monitoring & Early Warning", desc: "Pemantauan cuaca dan situasi darurat secara berkelanjutan." },
      { title: "Assessment Cepat", desc: "Tim survei turun ke lokasi dalam 24 jam untuk menilai kebutuhan." },
      { title: "Mobilisasi Tim & Logistik", desc: "Pengiriman relawan dan bantuan logistik sesuai hasil assessment." },
      { title: "Distribusi & Pendampingan", desc: "Penyaluran bantuan langsung dan pendampingan hingga masa pemulihan." },
    ]),
    en_items: JSON.stringify([
      { title: "Monitoring & Early Warning", desc: "Continuous weather and emergency situation monitoring." },
      { title: "Rapid Assessment", desc: "Survey team deploys within 24 hours to assess needs." },
      { title: "Team & Logistics Mobilization", desc: "Deploying volunteers and logistics based on assessment results." },
      { title: "Distribution & Accompaniment", desc: "Direct aid distribution and support through recovery period." },
    ]),
    order: 4,
  },
  {
    page: "layanan-kemanusiaan",
    section: "cta",
    title: "Bantu Korban Bencana Sekarang",
    en_title: "Help Disaster Victims Now",
    content: "Donasi Anda menjadi harapan bagi korban bencana. Salurkan donasi kemanusiaan melalui rekening resmi Yamindo.",
    en_content: "Your donation becomes hope for disaster victims. Send humanitarian aid through official Yamindo accounts.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 4. BENCANA
  // ============================================================
  {
    page: "layanan-bencana",
    section: "hero",
    title: "Layanan Bencana Yamindo",
    en_title: "Yamindo Disaster Services",
    content: "Mitigasi bencana, siaga darurat, dan rehabilitasi pasca bencana untuk meningkatkan ketahanan masyarakat Indonesia menghadapi berbagai risiko bencana.",
    en_content: "Disaster mitigation, emergency preparedness, and post-disaster rehabilitation to improve Indonesian community resilience against various disaster risks.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-bencana",
    section: "programs",
    title: "Program Penanganan Bencana",
    en_title: "Disaster Management Programs",
    content: "Kami tidak hanya merespons bencana, tetapi juga mempersiapkan masyarakat untuk menghadapi risiko bencana.",
    en_content: "We don't just respond to disasters, we also prepare communities to face disaster risks.",
    items: JSON.stringify([
      { title: "Pelatihan Mitigasi Bencana", desc: "Pelatihan evakuasi, pertolongan pertama, dan pengelolaan posko untuk masyarakat rawan bencana." },
      { title: "Distribusi Ambulans Gratis", desc: "Penyediaan ambulans gratis untuk daerah terpencil yang sulit akses kesehatan." },
      { title: "Pembangunan Rumah Pasca Bencana", desc: "Program pembangunan rumah sederhana bagi korban bencana yang kehilangan tempat tinggal." },
      { title: "Perbaikan Fasilitas Umum", desc: "Rehabilitasi masjid, sekolah, dan fasilitas publik yang rusak akibat bencana." },
      { title: "Pendampingan Psikososial", desc: "Dukungan kesehatan mental jangka panjang bagi korban bencana." },
      { title: "Kerjasama BPBD & BNPB", desc: "Koordinasi erat dengan lembaga pemerintah untuk respons bencana yang efektif." },
    ]),
    en_items: JSON.stringify([
      { title: "Disaster Mitigation Training", desc: "Evacuation, first aid, and post management training for disaster-prone communities." },
      { title: "Free Ambulance Distribution", desc: "Providing free ambulances for remote areas with limited healthcare access." },
      { title: "Post-Disaster House Construction", desc: "Building simple houses for disaster victims who lost their homes." },
      { title: "Public Facility Repair", desc: "Rehabilitating mosques, schools, and public facilities damaged by disasters." },
      { title: "Psychosocial Support", desc: "Long-term mental health support for disaster victims." },
      { title: "BPBD & BNPB Collaboration", desc: "Close coordination with government agencies for effective disaster response." },
    ]),
    order: 2,
  },
  {
    page: "layanan-bencana",
    section: "stats",
    title: "",
    en_title: "",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "20+", label: "Bencana Ditangani", en_label: "Disasters Handled" },
      { num: "500+", label: "Rumah Dibangun", en_label: "Houses Built" },
      { num: "10", label: "Ambulans Didistribusikan", en_label: "Ambulances Distributed" },
      { num: "15+", label: "Pelatihan Mitigasi", en_label: "Mitigation Trainings" },
    ]),
    en_items: JSON.stringify([
      { num: "20+", label: "Disasters Handled" },
      { num: "500+", label: "Houses Built" },
      { num: "10", label: "Ambulances Distributed" },
      { num: "15+", label: "Mitigation Trainings" },
    ]),
    order: 3,
  },
  {
    page: "layanan-bencana",
    section: "process",
    title: "Alur Penanganan Bencana",
    en_title: "Disaster Response Flow",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { title: "Pra-Bencana (Mitigasi)", desc: "Pelatihan kesiapsiagaan, simulasi evakuasi, dan penyediaan peralatan darurat." },
      { title: "Tanggap Darurat", desc: "Penyelamatan korban, distribusi logistik, dan pendirian posko bantuan." },
      { title: "Pemulihan Awal", desc: "Pengobatan, trauma healing, dan pemenuhan kebutuhan dasar korban." },
      { title: "Rehabilitasi & Rekonstruksi", desc: "Pembangunan rumah, perbaikan fasilitas, dan pendampingan ekonomi." },
    ]),
    en_items: JSON.stringify([
      { title: "Pre-Disaster (Mitigation)", desc: "Preparedness training, evacuation drills, and emergency equipment provision." },
      { title: "Emergency Response", desc: "Victim rescue, logistics distribution, and aid post establishment." },
      { title: "Initial Recovery", desc: "Medical treatment, trauma healing, and basic needs fulfillment." },
      { title: "Rehabilitation & Reconstruction", desc: "House construction, facility repair, and economic support." },
    ]),
    order: 4,
  },
  {
    page: "layanan-bencana",
    section: "cta",
    title: "Bantu Masyarakat Tangguh Bencana",
    en_title: "Help Build Disaster-Resilient Communities",
    content: "Donasi Anda membangun kesiapsiagaan dan pemulihan bagi masyarakat terdampak bencana di Indonesia.",
    en_content: "Your donation builds preparedness and recovery for disaster-affected communities in Indonesia.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 5. PELATIHAN
  // ============================================================
  {
    page: "layanan-pelatihan",
    section: "hero",
    title: "Pelatihan & Pemberdayaan Masyarakat",
    en_title: "Community Training & Empowerment",
    content: "Menciptakan masyarakat yang mandiri secara ekonomi melalui pelatihan keterampilan kerja, digital marketing, dan pemberdayaan UMKM di berbagai daerah.",
    en_content: "Creating economically self-reliant communities through job skills training, digital marketing, and SME empowerment across various regions.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-pelatihan",
    section: "programs",
    title: "Program Pelatihan Kami",
    en_title: "Our Training Programs",
    content: "Semua pelatihan kami gratis dan dilengkapi dengan sertifikat kompetensi serta pendampingan pasca pelatihan.",
    en_content: "All our training programs are free and include competency certificates with post-training mentoring.",
    items: JSON.stringify([
      { title: "Digital Marketing & SEO", desc: "Pelatihan pemasaran digital, media sosial, SEO, dan strategi konten untuk UMKM." },
      { title: "Pendampingan UMKM", desc: "Bimbingan usaha, akses permodalan, dan pendampingan bisnis selama 6 bulan." },
      { title: "Kewirausahaan", desc: "Pelatihan bisnis startup, manajemen keuangan, dan pembuatan business plan." },
      { title: "Program Perempuan Tangguh", desc: "Pelatihan khusus keterampilan kerja dan bisnis untuk perempuan." },
      { title: "Desain Grafis & Multimedia", desc: "Pelatihan Canva, Photoshop, dan pembuatan konten visual untuk bisnis." },
      { title: "Sertifikat Kompetensi", desc: "Setiap peserta mendapat sertifikat yang diakui untuk meningkatkan portofolio." },
    ]),
    en_items: JSON.stringify([
      { title: "Digital Marketing & SEO", desc: "Digital marketing, social media, SEO, and content strategy training for SMEs." },
      { title: "SME Mentoring", desc: "Business coaching, capital access, and 6-month business mentoring." },
      { title: "Entrepreneurship", desc: "Startup business, financial management, and business plan creation training." },
      { title: "Women Empowerment Program", desc: "Special job skills and business training for women." },
      { title: "Graphic Design & Multimedia", desc: "Canva, Photoshop, and visual content creation training for businesses." },
      { title: "Competency Certificate", desc: "Each participant receives a recognized certificate to boost their portfolio." },
    ]),
    order: 2,
  },
  {
    page: "layanan-pelatihan",
    section: "stats",
    title: "",
    en_title: "",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "1000+", label: "Alumni Pelatihan", en_label: "Training Alumni" },
      { num: "200+", label: "UMKM Dibimbing", en_label: "SMEs Mentored" },
      { num: "50+", label: "Pelatihan Terselenggara", en_label: "Trainings Held" },
      { num: "80%", label: "Tingkat Keberhasilan", en_label: "Success Rate" },
    ]),
    en_items: JSON.stringify([
      { num: "1000+", label: "Training Alumni" },
      { num: "200+", label: "SMEs Mentored" },
      { num: "50+", label: "Trainings Held" },
      { num: "80%", label: "Success Rate" },
    ]),
    order: 3,
  },
  {
    page: "layanan-pelatihan",
    section: "process",
    title: "Alur Mengikuti Pelatihan",
    en_title: "Training Enrollment Process",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { title: "Pendaftaran Online", desc: "Daftar melalui website atau WhatsApp dengan menyertakan data diri." },
      { title: "Seleksi Peserta", desc: "Tim kami akan menghubungi untuk verifikasi dan penentuan jadwal." },
      { title: "Pelaksanaan Pelatihan", desc: "Ikuti sesi pelatihan secara online atau offline sesuai jadwal." },
      { title: "Pendampingan Pasca Pelatihan", desc: "Dapatkan mentoring bisnis dan dukungan teknis selama 6 bulan." },
    ]),
    en_items: JSON.stringify([
      { title: "Online Registration", desc: "Register via website or WhatsApp with your personal details." },
      { title: "Participant Selection", desc: "Our team will contact you for verification and schedule confirmation." },
      { title: "Training Implementation", desc: "Attend training sessions online or offline according to schedule." },
      { title: "Post-Training Mentoring", desc: "Receive business mentoring and technical support for 6 months." },
    ]),
    order: 4,
  },
  {
    page: "layanan-pelatihan",
    section: "cta",
    title: "Mulai Perjalanan Usaha Anda",
    en_title: "Start Your Business Journey",
    content: "Daftarkan diri Anda untuk pelatihan gratis atau jadilah mentor bagi UMKM yang membutuhkan bimbingan.",
    en_content: "Register for free training or become a mentor for SMEs that need guidance.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 6. KESEHATAN
  // ============================================================
  {
    page: "layanan-kesehatan",
    section: "hero",
    title: "Layanan Kesehatan Yamindo",
    en_title: "Yamindo Health Services",
    content: "Membawa layanan kesehatan gratis kepada masyarakat yang kesulitan mengakses fasilitas kesehatan, termasuk di daerah terpencil dan tertinggal.",
    en_content: "Bringing free healthcare to communities who have difficulty accessing health facilities, including remote and underserved areas.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-kesehatan",
    section: "programs",
    title: "Program Kesehatan Kami",
    en_title: "Our Health Programs",
    content: "Layanan kesehatan kami bekerja sama dengan tenaga medis profesional yang peduli terhadap kesehatan masyarakat.",
    en_content: "Our health services work with professional medical personnel who care about community health.",
    items: JSON.stringify([
      { title: "Pengobatan Gratis Berkala", desc: "Klinik gratis bulanan di berbagai daerah dengan dokter dan perawat profesional." },
      { title: "Pemeriksaan Kesehatan Umum", desc: "Cek kesehatan komprehensif meliputi tekanan darah, gula darah, dan kolesterol." },
      { title: "Pemeriksaan Mata", desc: "Konsultasi dan pemeriksaan mata gratis, termasuk pembagian kacamata." },
      { title: "Pemeriksaan Gigi", desc: "Pencabutan, tambal gigi, dan edukasi kebersihan gigi secara gratis." },
      { title: "Penyuluhan Gizi & Kesehatan", desc: "Edukasi pola hidup sehat, gizi seimbang, dan kebersihan lingkungan." },
      { title: "Ambulan Gratis", desc: "Layanan ambulans gratis untuk situasi darurat medis di daerah terpencil." },
    ]),
    en_items: JSON.stringify([
      { title: "Regular Free Medical Treatment", desc: "Monthly free clinics in various areas with professional doctors and nurses." },
      { title: "General Health Check-up", desc: "Comprehensive health checks including blood pressure, blood sugar, and cholesterol." },
      { title: "Eye Examination", desc: "Free eye consultation and examination, including glasses distribution." },
      { title: "Dental Check-up", desc: "Free tooth extraction, filling, and dental hygiene education." },
      { title: "Nutrition & Health Education", desc: "Education on healthy lifestyles, balanced nutrition, and environmental hygiene." },
      { title: "Free Ambulance", desc: "Free ambulance service for medical emergencies in remote areas." },
    ]),
    order: 2,
  },
  {
    page: "layanan-kesehatan",
    section: "stats",
    title: "",
    en_title: "",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "30+", label: "Klinik Gratis Terlaksana", en_label: "Free Clinics Held" },
      { num: "5000+", label: "Pasien Ditangani", en_label: "Patients Treated" },
      { num: "50+", label: "Tenaga Medis Relawan", en_label: "Volunteer Medical Staff" },
      { num: "20+", label: "Kota Terjangkau", en_label: "Cities Reached" },
    ]),
    en_items: JSON.stringify([
      { num: "30+", label: "Free Clinics Held" },
      { num: "5000+", label: "Patients Treated" },
      { num: "50+", label: "Volunteer Medical Staff" },
      { num: "20+", label: "Cities Reached" },
    ]),
    order: 3,
  },
  {
    page: "layanan-kesehatan",
    section: "process",
    title: "Alur Pengobatan Gratis",
    en_title: "Free Treatment Process",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { title: "Jadwal & Lokasi", desc: "Cek jadwal klinik gratis terdekat melalui website atau WhatsApp kami." },
      { title: "Pendaftaran Pasien", desc: "Datang langsung ke lokasi atau daftar online sebelumnya." },
      { title: "Pemeriksaan & Tindakan", desc: "Dokter memeriksa dan memberikan tindakan medis yang diperlukan." },
      { title: "Obat & Rujukan", desc: "Obat gratis diberikan, jika perlu pasien dirujuk ke rumah sakit." },
    ]),
    en_items: JSON.stringify([
      { title: "Schedule & Location", desc: "Check the nearest free clinic schedule via our website or WhatsApp." },
      { title: "Patient Registration", desc: "Visit the location directly or register online beforehand." },
      { title: "Examination & Treatment", desc: "Doctors examine and provide necessary medical treatment." },
      { title: "Medicine & Referral", desc: "Free medicines provided, patients referred to hospital if needed." },
    ]),
    order: 4,
  },
  {
    page: "layanan-kesehatan",
    section: "cta",
    title: "Bantu Kami Selamatkan Nyawa",
    en_title: "Help Us Save Lives",
    content: "Menjadi donatur kesehatan berarti Anda turut menyelamatkan nyawa. Salurkan bantuan melalui rekening resmi kami.",
    en_content: "Becoming a health donor means you help save lives. Send your contribution through our official accounts.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 7. ZAKAT
  // ============================================================
  {
    page: "layanan-zakat",
    section: "hero",
    title: "Layanan Zakat Yamindo",
    en_title: "Yamindo Zakat Services",
    content: "Pengelolaan zakat profesional, amanah, dan transparan sesuai ketentuan syariat Islam untuk 8 asnaf yang berhak menerima.",
    en_content: "Professional, trustworthy, and transparent zakat management according to Islamic sharia for the 8 eligible asnaf categories.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-zakat",
    section: "programs",
    title: "Jenis Layanan Zakat",
    en_title: "Types of Zakat Services",
    content: "Kami menerima dan menyalurkan berbagai jenis zakat sesuai ketentuan syariat Islam.",
    en_content: "We accept and distribute various types of zakat according to Islamic sharia provisions.",
    items: JSON.stringify([
      { title: "Zakat Fitrah", desc: "Penerimaan dan penyaluran zakat fitrah selama bulan Ramadhan." },
      { title: "Zakat Mal (Harta)", desc: "Kalkulasi dan penyaluran zakat dari harta kekayaan yang dimiliki." },
      { title: "Zakat Emas & Perhiasan", desc: "Penghitungan dan penyaluran zakat dari kepemilikan emas dan perhiasan." },
      { title: "Zakat Penghasilan", desc: "Pembayaran zakat profesi dari gaji dan penghasilan bulanan." },
      { title: "Konsultasi Zakat", desc: "Layanan konsultasi gratis untuk menghitung zakat yang wajib dikeluarkan." },
      { title: "Laporan Transparan", desc: "Laporan penyaluran lengkap dan transparan kepada setiap muzakki." },
    ]),
    en_items: JSON.stringify([
      { title: "Zakat Fitrah", desc: "Collection and distribution of zakat fitrah during Ramadan." },
      { title: "Zakat Mal (Wealth)", desc: "Calculation and distribution of zakat from owned wealth." },
      { title: "Gold & Jewelry Zakat", desc: "Calculation and distribution of zakat from gold and jewelry ownership." },
      { title: "Income Zakat", desc: "Professional zakat payment from salary and monthly income." },
      { title: "Zakat Consultation", desc: "Free consultation service to calculate obligatory zakat." },
      { title: "Transparent Reports", desc: "Complete and transparent distribution reports to every muzakki." },
    ]),
    order: 2,
  },
  {
    page: "layanan-zakat",
    section: "stats",
    title: "",
    en_title: "",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "8", label: "Asnaf Penerima", en_label: "Eligible Asnaf" },
      { num: "4", label: "Jenis Zakat Dikelola", en_label: "Zakat Types Managed" },
      { num: "100%", label: "Transparansi Laporan", en_label: "Report Transparency" },
      { num: "5000+", label: "Muzakki Terdaftar", en_label: "Registered Muzakki" },
    ]),
    en_items: JSON.stringify([
      { num: "8", label: "Eligible Asnaf" },
      { num: "4", label: "Zakat Types Managed" },
      { num: "100%", label: "Report Transparency" },
      { num: "5000+", label: "Registered Muzakki" },
    ]),
    order: 3,
  },
  {
    page: "layanan-zakat",
    section: "process",
    title: "Cara Menunaikan Zakat",
    en_title: "How to Pay Zakat",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { title: "Konsultasi", desc: "Hubungi kami untuk konsultasi gratis mengenai perhitungan zakat Anda." },
      { title: "Hitung Zakat", desc: "Gunakan kalkulator zakat kami atau bimbingan dari amil kami." },
      { title: "Transfer ke Rekening Resmi", desc: "Transfer zakat ke rekening resmi BSI Yamindo dengan keterangan zakat." },
      { title: "Terima Laporan", desc: "Anda akan menerima laporan penyaluran zakat yang transparan." },
    ]),
    en_items: JSON.stringify([
      { title: "Consultation", desc: "Contact us for free consultation on calculating your zakat." },
      { title: "Calculate Zakat", desc: "Use our zakat calculator or get guidance from our amil." },
      { title: "Transfer to Official Account", desc: "Transfer zakat to official Yamindo BSI account with zakat notes." },
      { title: "Receive Report", desc: "You will receive a transparent zakat distribution report." },
    ]),
    order: 4,
  },
  {
    page: "layanan-zakat",
    section: "cta",
    title: "Tunaikan Zakat Anda dengan Amanah",
    en_title: "Pay Your Zakat Trustworthily",
    content: "Pastikan zakat Anda tersalurkan kepada 8 asnaf yang berhak melalui pengelolaan profesional Yamindo.",
    en_content: "Ensure your zakat reaches the 8 eligible asnaf through Yamindo's professional management.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },

  // ============================================================
  // 8. WAKAF
  // ============================================================
  {
    page: "layanan-wakaf",
    section: "hero",
    title: "Layanan Wakaf Yamindo",
    en_title: "Yamindo Waqf Services",
    content: "Mengelola wakaf produktif yang memberikan manfaat jangka panjang bagi umat, dari wakaf Al-Quran hingga wakaf infrastruktur pendidikan dan kesehatan.",
    en_content: "Managing productive waqf that provides long-term benefits for the community, from Al-Quran waqf to educational and health infrastructure waqf.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 1,
  },
  {
    page: "layanan-wakaf",
    section: "programs",
    title: "Program Wakaf Kami",
    en_title: "Our Waqf Programs",
    content: "Setiap wakaf yang dikelola didokumentasikan dan dilaporkan secara berkala kepada para wakif.",
    en_content: "Every managed waqf is documented and reported periodically to waqif (donors).",
    items: JSON.stringify([
      { title: "Wakaf Al-Quran", desc: "Penyaluran Al-Quran ke masjid, pesantren, dan lembaga pendidikan di seluruh Indonesia." },
      { title: "Tanah Wakaf Produktif", desc: "Pengelolaan tanah wakaf untuk pembangunan fasilitas pendidikan dan ibadah." },
      { title: "Wakaf Infrastruktur Pendidikan", desc: "Pembangunan sekolah, perpustakaan, dan ruang belajar dari dana wakaf." },
      { title: "Wakaf Pusat Kesehatan", desc: "Pembangunan klinik dan pusat kesehatan masyarakat di daerah terpencil." },
      { title: "Wakaf Produktif (Mesin & Kendaraan)", desc: "Pemberian mesin usaha dan kendaraan operasional untuk menghasilkan manfaat ekonomi." },
      { title: "Laporan Wakaf Berkala", desc: "Laporan dokumentasi dan perkembangan wakaf setiap 3 bulan kepada wakif." },
    ]),
    en_items: JSON.stringify([
      { title: "Al-Quran Waqf", desc: "Distributing Al-Quran to mosques, pesantren, and educational institutions across Indonesia." },
      { title: "Productive Land Waqf", desc: "Managing waqf land for building educational and worship facilities." },
      { title: "Educational Infrastructure Waqf", desc: "Building schools, libraries, and learning spaces from waqf funds." },
      { title: "Health Center Waqf", desc: "Building clinics and community health centers in remote areas." },
      { title: "Productive Waqf (Equipment & Vehicles)", desc: "Providing business equipment and operational vehicles for economic benefit." },
      { title: "Periodic Waqf Reports", desc: "Waqf documentation and progress reports every 3 months to waqif." },
    ]),
    order: 2,
  },
  {
    page: "layanan-wakaf",
    section: "stats",
    title: "",
    en_title: "",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { num: "10.000+", label: "Al-Quran Diwakafkan", en_label: "Al-Quran Endowed" },
      { num: "5", label: "Lokasi Tanah Wakaf", en_label: "Waqf Land Locations" },
      { num: "3", label: "Infrastruktur Dibangun", en_label: "Infrastructure Built" },
      { num: "100%", label: "Pelaporan Transparan", en_label: "Transparent Reporting" },
    ]),
    en_items: JSON.stringify([
      { num: "10,000+", label: "Al-Quran Endowed" },
      { num: "5", label: "Waqf Land Locations" },
      { num: "3", label: "Infrastructure Built" },
      { num: "100%", label: "Transparent Reporting" },
    ]),
    order: 3,
  },
  {
    page: "layanan-wakaf",
    section: "process",
    title: "Cara Mewakafkan",
    en_title: "How to Endow Waqf",
    content: "",
    en_content: "",
    items: JSON.stringify([
      { title: "Konsultasi Wakaf", desc: "Hubungi kami untuk berkonsultasi tentang jenis wakaf yang sesuai dengan niat Anda." },
      { title: "Pilih Program Wakaf", desc: "Pilih program wakaf yang ingin Anda dukung: Quran, tanah, infrastruktur, atau produktif." },
      { title: "Serahkan Wakaf", desc: "Transfer dana atau serahkan asset wakaf sesuai kesepakatan." },
      { title: "Terima Laporan Berkala", desc: "Anda menerima laporan dokumentasi dan perkembangan wakaf secara rutin." },
    ]),
    en_items: JSON.stringify([
      { title: "Waqf Consultation", desc: "Contact us to consult about the type of waqf that suits your intention." },
      { title: "Choose Waqf Program", desc: "Select the waqf program you wish to support: Quran, land, infrastructure, or productive." },
      { title: "Submit Waqf", desc: "Transfer funds or deliver waqf assets according to agreement." },
      { title: "Receive Periodic Reports", desc: "You receive regular waqf documentation and progress reports." },
    ]),
    order: 4,
  },
  {
    page: "layanan-wakaf",
    section: "cta",
    title: "Wakaf Jariyah untuk Keberkahan Abadi",
    en_title: "Sadaqah Jariyah for Eternal Blessings",
    content: "Wakaf Anda akan memberikan manfaat terus-menerus dan menjadi amal jariyah yang pahalanya mengalir tanpa henti.",
    en_content: "Your waqf will provide continuous benefit and become a sadaqah jariyah with endless rewards.",
    items: JSON.stringify([]),
    en_items: JSON.stringify([]),
    order: 5,
  },
];

async function main() {
  console.log("Seeding PageContent for 8 layanan detail pages...");
  console.log(`Total records: ${ALL_SEEDS.length}`);

  // Delete existing layanan-* page contents
  const deleted = await db.pageContent.deleteMany({
    where: { page: { startsWith: "layanan-" } },
  });
  console.log(`Deleted ${deleted.count} existing layanan-* records`);

  for (const seed of ALL_SEEDS) {
    await db.pageContent.create({ data: seed });
    console.log(`  Created: ${seed.page} / ${seed.section}`);
  }

  console.log(`\nDone! ${ALL_SEEDS.length} PageContent records seeded for 8 layanan pages.`);
  await db.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
