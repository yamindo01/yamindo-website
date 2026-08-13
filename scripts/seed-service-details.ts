import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SERVICES = [
  {
    slug: "pendidikan",
    title: "Layanan Pendidikan",
    en_title: "Education Services",
    short_desc:
      "Program pendidikan Al-Quran, beasiswa, dan literasi untuk meningkatkan kualitas sumber daya manusia Indonesia.",
    en_short_desc:
      "Al-Quran education, scholarship, and literacy programs to improve the quality of Indonesian human resources.",
    content:
      "Yayasan Yasir Amin Indonesia memiliki komitmen besar di bidang pendidikan. Kami menyelenggarakan berbagai program pendidikan yang berfokus pada pengajaran Al-Quran, peningkatan literasi masyarakat, dan pemberian beasiswa bagi anak-anak dari keluarga kurang mampu. Program Taman Baca Al-Quran kami hadir di berbagai daerah, dilengkapi dengan pengajar yang kompeten dan metode pembelajaran yang menyenangkan. Selain itu, kami juga menyediakan program beasiswa pendidikan dari tingkat dasar hingga perguruan tinggi, serta program angkat buta huruf Al-Quran yang telah berhasil meluluskan ratusan peserta. Kami percaya bahwa pendidikan adalah fondasi utama untuk membangun generasi yang berilmu dan berkarakter.",
    en_content:
      "Yasir Amin Indonesia Foundation has a strong commitment to education. We organize various educational programs focused on Al-Quran teaching, improving community literacy, and providing scholarships for children from underprivileged families. Our Al-Quran Reading Centers are present in various regions, equipped with competent teachers and enjoyable learning methods. In addition, we also provide educational scholarship programs from elementary to university level, as well as the Al-Quran literacy program that has successfully graduated hundreds of participants. We believe that education is the primary foundation for building a knowledgeable and characterful generation.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ceecac64eb90.jpg",
    icon: "GraduationCap",
    features: JSON.stringify([
      "Taman Baca Al-Quran di 15+ lokasi",
      "Beasiswa pendidikan SD hingga kuliah",
      "Program angkat buta huruf Al-Quran",
      "Pelatihan guru dan pengajar",
      "Distribusi kitab dan buku pendidikan",
      "Kelas tahsin dan tajwid",
    ]),
    en_features: JSON.stringify([
      "Al-Quran Reading Centers in 15+ locations",
      "Education scholarships from elementary to college",
      "Al-Quran literacy program",
      "Teacher training programs",
      "Distribution of Islamic books and educational materials",
      "Tahsin and tajwid classes",
    ]),
    order: 1,
    active: true,
  },
  {
    slug: "sosial",
    title: "Layanan Sosial",
    en_title: "Social Services",
    short_desc:
      "Program santunan anak yatim, dhuafa, dan janda untuk meringankan beban kehidupan masyarakat kurang mampu.",
    en_short_desc:
      "Orphan, underprivileged, and widow support programs to ease the burden of disadvantaged communities.",
    content:
      "Layanan sosial Yamindo berfokus pada pemberdayaan dan perlindungan kelompok rentan masyarakat, khususnya anak yatim, dhuafa, dan janda. Program kafalah yatim kami menyediakan bantuan rutin berupa santunan bulanan, kebutuhan sekolah, dan pendampingan perkembangan anak. Kami juga mengelola program pemberdayaan ekonomi bagi ibu-ibu janda melalui pelatihan keterampilan dan modal usaha kecil. Setiap bulan, tim kami turun langsung untuk memastikan bantuan sampai kepada penerima manfaat yang tepat. Program ini didukung oleh donatur tetap yang memiliki komitmen untuk memberikan dampak berkelanjutan bagi kehidupan anak-anak yatim dan keluarga dhuafa di seluruh Indonesia.",
    en_content:
      "Yamindo social services focus on empowering and protecting vulnerable community groups, especially orphans, underprivileged families, and widows. Our orphan support program provides regular assistance including monthly stipends, school needs, and child development mentoring. We also manage economic empowerment programs for widows through skills training and small business capital. Every month, our team goes directly to ensure assistance reaches the right beneficiaries. This program is supported by regular donors who are committed to creating sustainable impact on the lives of orphans and underprivileged families throughout Indonesia.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f3f9ca9967e5.jpg",
    icon: "Users",
    features: JSON.stringify([
      "Santunan rutin anak yatim & dhuafa",
      "Program kafalah yatim bulanan",
      "Pemberdayaan ekonomi ibu janda",
      "Pendampingan perkembangan anak",
      "Pembagian paket sembako rutin",
      "Kunjungan dan silaturahmi penerima manfaat",
    ]),
    en_features: JSON.stringify([
      "Regular orphan and underprivileged support",
      "Monthly orphan sponsorship program",
      "Widow economic empowerment",
      "Child development mentoring",
      "Regular basic food package distribution",
      "Beneficiary visits and community engagement",
    ]),
    order: 2,
    active: true,
  },
  {
    slug: "kemanusiaan",
    title: "Layanan Kemanusiaan",
    en_title: "Humanitarian Services",
    short_desc:
      "Aksi kemanusiaan dan bantuan darurat untuk korban bencana alam, konflik, dan situasi krisis kemanusiaan.",
    en_short_desc:
      "Humanitarian actions and emergency aid for victims of natural disasters, conflicts, and humanitarian crises.",
    content:
      "Yamindo memiliki tim tanggap darurat yang siap bergerak ketika terjadi bencana alam atau situasi krisis kemanusiaan di berbagai wilayah Indonesia. Layanan kemanusiaan kami mencakup penyaluran bantuan logistik darurat seperti makanan, air bersih, selimut, obat-obatan, dan kebutuhan pokok lainnya. Kami juga menyediakan layanan dapur umum, pengobatan gratis, dan trauma healing bagi korban bencana. Tim relawan kami telah terlatih dan berpengalaman dalam penanganan pasca bencana, bekerja sama dengan lembaga-lembaga terkait dan pemerintah daerah untuk memastikan bantuan tersalurkan secara efektif dan tepat sasaran. Kami percaya bahwa setiap manusia berhak mendapatkan bantuan tanpa memandang suku, agama, dan ras.",
    en_content:
      "Yamindo has an emergency response team ready to mobilize when natural disasters or humanitarian crises occur in various regions of Indonesia. Our humanitarian services include distribution of emergency logistics such as food, clean water, blankets, medicines, and other basic necessities. We also provide public kitchen services, free medical treatment, and trauma healing for disaster victims. Our volunteer teams are trained and experienced in post-disaster handling, working with related institutions and local governments to ensure effective and targeted distribution of aid. We believe that every human being deserves assistance regardless of ethnicity, religion, and race.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/588394332193.jpg",
    icon: "Heart",
    features: JSON.stringify([
      "Tim tanggap darurat 24/7",
      "Penyaluran logistik bencana",
      "Dapur umum & pengobatan gratis",
      "Program trauma healing",
      "Posko bantuan darurat",
      "Rehabilitasi pasca bencana",
    ]),
    en_features: JSON.stringify([
      "24/7 emergency response team",
      "Disaster logistics distribution",
      "Public kitchen & free medical treatment",
      "Trauma healing program",
      "Emergency aid posts",
      "Post-disaster rehabilitation",
    ]),
    order: 3,
    active: true,
  },
  {
    slug: "bencana",
    title: "Layanan Bencana",
    en_title: "Disaster Services",
    short_desc:
      "Mitigasi bencana, siaga darurat, dan rehabilitasi pasca bencana untuk meningkatkan ketahanan masyarakat.",
    en_short_desc:
      "Disaster mitigation, emergency preparedness, and post-disaster rehabilitation to improve community resilience.",
    content:
      "Program layanan bencana Yamindo tidak hanya berfokus pada penanganan darurat, tetapi juga pada mitigasi dan kesiapsiagaan bencana. Kami menyelenggarakan pelatihan mitigasi bencana bagi masyarakat yang tinggal di daerah rawan bencana, termasuk pelatihan evakuasi, pertolongan pertama, dan pengelolaan posko. Kami juga mendistribusikan kebutuhan darurat seperti perahu karet, tenda darurat, alat medis, dan ambulans gratis untuk daerah yang membutuhkan. Program rehabilitasi pasca bencana kami meliputi pembangunan rumah sederhana, perbaikan fasilitas umum, dan pendampingan psikososial bagi korban bencana. Kami bekerja sama dengan BPBD, BNPB, dan lembaga kemanusiaan lainnya untuk memaksimalkan dampak bantuan.",
    en_content:
      "Yamindo disaster service programs focus not only on emergency response but also on disaster mitigation and preparedness. We organize disaster mitigation training for communities living in disaster-prone areas, including evacuation training, first aid, and post management. We also distribute emergency needs such as rubber boats, emergency tents, medical equipment, and free ambulances for areas in need. Our post-disaster rehabilitation program includes construction of simple houses, repair of public facilities, and psychosocial support for disaster victims. We collaborate with BPBD, BNPB, and other humanitarian organizations to maximize aid impact.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/093ed46fc4df.jpg",
    icon: "ShieldAlert",
    features: JSON.stringify([
      "Pelatihan mitigasi bencana",
      "Distribusi ambulans gratis",
      "Pembangunan rumah pasca bencana",
      "Perbaikan fasilitas umum",
      "Pendampingan psikososial",
      "Kerjasama dengan BPBD & BNPB",
    ]),
    en_features: JSON.stringify([
      "Disaster mitigation training",
      "Free ambulance distribution",
      "Post-disaster house construction",
      "Public facility repair",
      "Psychosocial support",
      "Collaboration with BPBD & BNPB",
    ]),
    order: 4,
    active: true,
  },
  {
    slug: "pelatihan",
    title: "Layanan Pelatihan & Pemberdayaan",
    en_title: "Training & Empowerment Services",
    short_desc:
      "Pelatihan keterampilan, digital marketing, dan pemberdayaan ekonomi UMKM untuk kemandirian masyarakat.",
    en_short_desc:
      "Skills training, digital marketing, and SME economic empowerment for community self-reliance.",
    content:
      "Layanan pelatihan dan pemberdayaan Yamindo dirancang untuk menciptakan masyarakat yang mandiri secara ekonomi. Kami menyelenggarakan berbagai pelatihan keterampilan seperti digital marketing, desain grafis, kewirausahaan, dan manajemen keuangan. Program pemberdayaan UMKM kami menyediakan pendampingan usaha, akses permodalan, dan pelatihan pemasaran digital. Kami juga memiliki program pelatihan khusus untuk perempuan dan pemuda agar mereka memiliki keterampilan yang relevan dengan kebutuhan pasar kerja saat ini. Setiap peserta pelatihan mendapatkan sertifikat dan pendampingan pasca pelatihan untuk memastikan mereka benar-benar bisa mengaplikasikan ilmunya. Hingga saat ini, lebih dari 1000 peserta telah mengikuti pelatihan kami dan sebagian besar telah berhasil meningkatkan penghasilan mereka.",
    en_content:
      "Yamindo training and empowerment services are designed to create an economically self-reliant community. We organize various skills training such as digital marketing, graphic design, entrepreneurship, and financial management. Our SME empowerment program provides business mentoring, capital access, and digital marketing training. We also have special training programs for women and youth so they have skills relevant to current job market needs. Each training participant receives a certificate and post-training mentoring to ensure they can truly apply their knowledge. To date, more than 1000 participants have joined our training and most have successfully increased their income.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/263b18036fa5.jpg",
    icon: "TrendingUp",
    features: JSON.stringify([
      "Pelatihan digital marketing & SEO",
      "Pendampingan UMKM & akses modal",
      "Pelatihan kewirausahaan",
      "Program khusus perempuan & pemuda",
      "Sertifikat kompetensi",
      "Pendampingan pasca pelatihan",
    ]),
    en_features: JSON.stringify([
      "Digital marketing & SEO training",
      "SME mentoring & capital access",
      "Entrepreneurship training",
      "Special programs for women & youth",
      "Competency certificates",
      "Post-training mentoring",
    ]),
    order: 5,
    active: true,
  },
  {
    slug: "kesehatan",
    title: "Layanan Kesehatan",
    en_title: "Health Services",
    short_desc:
      "Layanan kesehatan masyarakat berupa pengobatan gratis, penyuluhan kesehatan, dan bantuan medis.",
    en_short_desc:
      "Community health services including free medical treatment, health education, and medical assistance.",
    content:
      "Layanan kesehatan Yamindo hadir untuk membantu masyarakat yang kesulitan mengakses layanan kesehatan. Kami menyelenggarakan pengobatan gratis secara berkala di berbagai daerah, bekerja sama dengan tenaga medis profesional yang peduli terhadap kesehatan masyarakat. Program kami mencakup pemeriksaan kesehatan umum, pemeriksaan mata, pemeriksaan gigi, dan konsultasi gizi. Kami juga menyelenggarakan penyuluhan kesehatan tentang pola hidup sehat, kebersihan lingkungan, dan gizi seimbang. Untuk kasus yang membutuhkan penanganan lebih lanjut, kami membantu rujukan ke fasilitas kesehatan terdekat. Program ambulan gratis kami juga tersedia untuk membantu masyarakat dalam situasi darurat medis, terutama di daerah terpencil yang sulit dijangkau transportasi umum.",
    en_content:
      "Yamindo health services are here to help communities who have difficulty accessing healthcare. We organize regular free medical treatments in various areas, working with professional medical personnel who care about community health. Our programs include general health check-ups, eye examinations, dental check-ups, and nutrition consultations. We also conduct health education about healthy lifestyles, environmental hygiene, and balanced nutrition. For cases requiring further treatment, we assist with referrals to the nearest health facilities. Our free ambulance program is also available to help communities in medical emergencies, especially in remote areas that are difficult to reach by public transportation.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7dd3d55d5905.jpg",
    icon: "Stethoscope",
    features: JSON.stringify([
      "Pengobatan gratis berkala",
      "Pemeriksaan kesehatan umum, mata, & gigi",
      "Penyuluhan gizi & kesehatan",
      "Rujukan ke fasilitas kesehatan",
      "Ambulan gratis untuk daerah terpencil",
      "Bantuan obat-obatan esensial",
    ]),
    en_features: JSON.stringify([
      "Regular free medical treatment",
      "General, eye, and dental health check-ups",
      "Nutrition and health education",
      "Referral to health facilities",
      "Free ambulance for remote areas",
      "Essential medicine assistance",
    ]),
    order: 6,
    active: true,
  },
  {
    slug: "zakat",
    title: "Layanan Zakat",
    en_title: "Zakat Services",
    short_desc:
      "Pengelolaan zakat profesional dan amanah sesuai ketentuan syariat Islam untuk 8 asnaf yang berhak menerima.",
    en_short_desc:
      "Professional and trustworthy zakat management according to Islamic sharia for the 8 eligible asnaf categories.",
    content:
      "Yamindo mengelola dana zakat secara profesional, amanah, dan sesuai dengan ketentuan syariat Islam. Kami membantu para muzakki dalam menyalurkan zakatnya kepada 8 asnaf yang berhak menerima, yaitu fakir, miskin, amil, mualaf, gharim, riqab, gharimin, dan ibn sabil. Setiap penyaluran zakat didokumentasikan secara transparan dan dilaporkan kepada muzakki sebagai bentuk pertanggungjawaban amanah. Kami juga menyediakan layanan konsultasi zakat untuk membantu masyarakat menghitung dan menentukan jenis zakat yang harus dikeluarkan. Program zakat kami mencakup zakat fitrah, zakat mal, zakat emas, dan zakat penghasilan. Seluruh dana zakat yang dikelola disebarluaskan melalui program-program yang terstruktur dan terukur dampaknya.",
    en_content:
      "Yamindo manages zakat funds professionally, trustworthily, and in accordance with Islamic sharia provisions. We help muzakki (zakat payers) distribute their zakat to the 8 eligible asnaf categories: fakir, miskin, amil, mualaf, gharim, riqab, gharimin, and ibn sabil. Every zakat distribution is transparently documented and reported to muzakki as a form of trustworthy accountability. We also provide zakat consultation services to help communities calculate and determine the type of zakat they must pay. Our zakat programs cover zakat fitrah, zakat mal, gold zakat, and income zakat. All managed zakat funds are distributed through structured programs with measurable impact.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cbc03782aa60.jpg",
    icon: "HandCoins",
    features: JSON.stringify([
      "Zakat fitrah, mal, emas, & penghasilan",
      "Penyaluran ke 8 asnaf yang berhak",
      "Laporan penyaluran transparan",
      "Konsultasi perhitungan zakat",
      "Program pemberdayaan dari dana zakat",
      "Amanah & sesuai syariat",
    ]),
    en_features: JSON.stringify([
      "Zakat fitrah, mal, gold, & income",
      "Distribution to 8 eligible asnaf",
      "Transparent distribution reports",
      "Zakat calculation consultation",
      "Empowerment programs from zakat funds",
      "Trustworthy & sharia-compliant",
    ]),
    order: 7,
    active: true,
  },
  {
    slug: "wakaf",
    title: "Layanan Wakaf",
    en_title: "Waqf Services",
    short_desc:
      "Pengelolaan wakaf produktif berupa wakaf Al-Quran, tanah wakaf, dan wakaf infrastruktur untuk keberlanjutan umat.",
    en_short_desc:
      "Productive waqf management including Al-Quran waqf, land waqf, and infrastructure waqf for community sustainability.",
    content:
      "Layanan wakaf Yamindo mengelola berbagai bentuk wakaf produktif yang memberikan manfaat jangka panjang bagi umat. Program unggulan kami adalah Wakaf Al-Quran, di mana donatur dapat mewakafkan Al-Quran yang akan disalurkan ke masjid-masjid, pesantren, dan lembaga pendidikan di seluruh Indonesia. Kami juga mengelola wakaf tanah yang digunakan untuk pembangunan fasilitas pendidikan, pusat kesehatan masyarakat, dan ruang ibadah. Selain itu, kami menerima dan mengelola wakaf produktif berupa mesin usaha, kendaraan operasional, dan peralatan yang dapat menghasilkan manfaat ekonomi berkelanjutan. Setiap program wakaf kami didokumentasikan dan dilaporkan secara berkala kepada para wakif, memastikan amanah yang diberikan dikelola dengan sebaik-baiknya sesuai ketentuan syariat Islam.",
    en_content:
      "Yamindo waqf services manage various forms of productive waqf that provide long-term benefits for the community. Our flagship program is Al-Quran Waqf, where donors can endow Al-Quran copies to be distributed to mosques, Islamic boarding schools, and educational institutions throughout Indonesia. We also manage land waqf used for building educational facilities, community health centers, and worship spaces. In addition, we accept and manage productive waqf including business equipment, operational vehicles, and tools that can generate sustainable economic benefits. Each waqf program is documented and reported periodically to waqif (waqf donors), ensuring that the trust given is managed in the best possible way according to Islamic sharia provisions.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/10f5367ad7e3.jpg",
    icon: "Landmark",
    features: JSON.stringify([
      "Wakaf Al-Quran ke masjid & pesantren",
      "Pengelolaan tanah wakaf produktif",
      "Wakaf infrastruktur pendidikan",
      "Wakaf produktif mesin & kendaraan",
      "Laporan wakaf berkala & transparan",
      "Sesuai ketentuan syariat Islam",
    ]),
    en_features: JSON.stringify([
      "Al-Quran waqf to mosques & pesantren",
      "Productive land waqf management",
      "Educational infrastructure waqf",
      "Productive waqf of equipment & vehicles",
      "Regular & transparent waqf reports",
      "According to Islamic sharia provisions",
    ]),
    order: 8,
    active: true,
  },
];

async function main() {
  console.log("Seeding ServiceDetails...");

  // Clear existing
  const count = await prisma.serviceDetail.count();
  if (count > 0) {
    await prisma.serviceDetail.deleteMany({});
    console.log(`Cleared ${count} existing records`);
  }

  for (const svc of SERVICES) {
    await prisma.serviceDetail.create({ data: svc });
    console.log(`  Created: ${svc.slug} - ${svc.title}`);
  }

  console.log(`\nDone! ${SERVICES.length} ServiceDetail records seeded.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
