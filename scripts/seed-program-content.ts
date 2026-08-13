import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:5432/postgres',
    },
  },
});

const PROGRAMS: Record<string, { content: string; en_content: string }> = {
  'makan-santri': {
    content: `Program Makan Santri merupakan salah satu program unggulan Yayasan Yasir Amin Indonesia (Yamindo) yang secara khusus berfokus pada pemenuhan kebutuhan pangan bagi para santri di pondok pesantren mitra. Program ini lahir dari keprihatinan mendalam terhadap kondisi sejumlah santri yang berasal dari keluarga kurang mampu dan belum mampu memenuhi kebutuhan makan sehari-hari secara mandiri.

## Latar Belakang

Indonesia memiliki ribuan pondok pesantren yang tersebar dari Sabang hingga Merauke. Di banyak pesantren, khususnya yang berada di daerah terpencil, terdapat santri-santri yang berasal dari keluarga prasejahtera. Mereka memiliki semangat belajar yang tinggi namun terkendala biaya hidup, termasuk kebutuhan makan sehari-hari. Yamindo hadir untuk menjembatani kesenjangan ini melalui Program Makan Santri.

## Mekanisme Program

Program ini berjalan secara sistematis dan transparan. Yamindo bekerja sama langsung dengan pondok pesantren mitra yang telah melalui proses verifikasi dan seleksi ketat. Setiap bulan, dana donasi yang terkumpul didistribusikan dalam bentuk bahan pangan segar dan bergizi yang disesuaikan dengan kebutuhan lokal.

## Sasaran Penerima Manfaat

- Santri dari keluarga prasejahtera di pondok pesantren mitra Yamindo
- Santri yatim dan dhuafa yang membutuhkan bantuan biaya makan
- Pondok pesantren di daerah terpencil dan tertinggal
- Santri penghafal Al Quran yang membutuhkan dukungan nutrisi

## Dampak yang Dihasilkan

Sejak awal berdiri, Program Makan Santri telah menjangkau ratusan santri di berbagai pesantren mitra. Program ini tidak hanya memenuhi kebutuhan fisik, tetapi juga memberikan motivasi bagi santri untuk terus mengejar ilmu tanpa beban kekhawatiran akan kebutuhan dasar mereka. Dengan perut yang terisi, santri dapat lebih fokus dalam menghafal Al Quran, mendalami ilmu agama, dan mengembangkan potensi diri mereka.

## Transparansi dan Akuntabilitas

Yamindo berkomitmen penuh terhadap transparansi pengelolaan dana. Setiap donatur akan menerima laporan berkala mengenai penyaluran bantuan, termasuk dokumentasi foto dan data penerima manfaat. Kami memastikan bahwa setiap rupiah donasi sampai kepada pihak yang berhak.

## Bergabunglah Bersama Kami

Anda dapat berpartisipasi dalam Program Makan Santri dengan cara berdonasi melalui rekening resmi Yamindo. Setiap kontribusi Anda, sekecil apapun, sangat berarti bagi masa depan para santri. Bersama-sama kita wujudkan generasi Quran yang sehat, cerdas, dan berakhlak mulia.`,
    en_content: `The Makan Santri (Student Meals) Program is one of the flagship programs of Yasir Amin Indonesia Foundation (Yamindo), specifically focused on fulfilling the food needs of students at partner Islamic boarding schools (pesantren). This program was born from deep concern for the condition of many students from underprivileged families who cannot afford their daily meals.

## Background

Indonesia has thousands of Islamic boarding schools spread across the archipelago. In many pesantren, especially those in remote areas, there are students from impoverished families. They have a strong passion for learning but are hindered by living costs, including daily food needs. Yamindo bridges this gap through the Student Meals Program.

## Program Mechanism

This program operates systematically and transparently. Yamindo works directly with partner pesantren that have undergone rigorous verification and selection. Every month, collected donation funds are distributed in the form of fresh, nutritious food supplies tailored to local needs.

## Target Beneficiaries

- Students from underprivileged families at Yamindo partner pesantren
- Orphaned and disadvantaged students needing meal assistance
- Pesantren in remote and underdeveloped areas
- Quran memorization students needing nutritional support

## Impact Generated

Since its inception, the Student Meals Program has reached hundreds of students across various partner pesantren. This program not only fulfills physical needs but also provides motivation for students to pursue knowledge without the burden of worrying about their basic needs. With their stomachs full, students can focus more on memorizing the Quran, deepening their religious knowledge, and developing their potential.

## Transparency and Accountability

Yamindo is fully committed to transparent fund management. Every donor receives periodic reports on aid distribution, including photo documentation and beneficiary data. We ensure that every rupiah of donation reaches the rightful recipients.

## Join Us

You can participate in the Student Meals Program by donating through Yamindo's official bank accounts. Every contribution, no matter how small, means a lot to the future of these students. Together, let us create a generation of Quran learners who are healthy, intelligent, and of noble character.`,
  },
  'buka-puasa-bersama': {
    content: `Program Buka Puasa Bersama adalah inisiatif Yamindo yang dihelat setiap tahun selama bulan suci Ramadhan. Program ini mengundang masyarakat umum, para donatur, dan keluarga besar Yamindo untuk berbagi keberkahan dengan menyediakan menu buka puasa bagi mereka yang membutuhkan, termasuk anak-anak yatim, duafa, dan jamaah masjid dari kalangan kurang mampu.

## Nilai-Nilai Kebersamaan

Bulan Ramadhan adalah bulan penuh berkah dan ampunan. Program Buka Puasa Bersama bukan sekadar penyediaan makanan, melainkan sebuah wadah untuk mempererat tali silaturahmi antar sesama umat. Dalam suasana kebersamaan yang hangat, kita dapat merasakan kebahagiaan sejati yang jauh melampaui harta dunia.

## Pelaksanaan Kegiatan

Setiap tahun, Yamindo menyelenggarakan puluhan titik buka puasa bersama di berbagai lokasi strategis, termasuk masjid-masjid mitra, panti asuhan, dan pondok pesantren. Setiap titik buka puasa diisi dengan tausiyah singkat sebelum berbuka, doa bersama, dan tentu saja hidangan berbuka puasa yang lezat dan bergizi.

## Menu Berbuka Puasa

Menu yang disajikan dalam Program Buka Puasa Bersama disesuaikan dengan budaya lokal dan kebutuhan gizi. Yamindo memastikan setiap porsi yang disajikan memenuhi standar gizi yang baik agar penerima manfaat dapat berbuka puasa dengan lahap dan sehat. Menu yang disajikan meliputi takjil berbuka, air minum, makanan berat, dan buah-buahan.

## Penerima Manfaat

- Anak-anak yatim dan duafa di sekitar masjid mitra
- Jamaah masjid dari kalangan ekonomi lemah
- Santri di pondok pesantren mitra
- Masyarakat umum yang ingin berbagi keberkahan

## Keutamaan Memberi Makan Berbuka

Rasulullah SAW bersabda: \"Barangsiapa yang memberi makan orang yang berbuka puasa, maka baginya pahala seperti pahala orang yang berpuasa, tanpa dikurangi sedikitpun.\" (HR. Tirmidzi). Hadis ini menjadi landasan utama bagi Yamindo untuk terus menggelar Program Buka Puasa Bersama setiap tahunnya.

## Cara Berpartisipasi

Anda dapat berpartisipasi dengan cara berdonasi untuk biaya penyelenggaraan buka puasa, menjadi relawan di lapangan, atau menyediakan makanan secara langsung. Hubungi tim Yamindo melalui WhatsApp untuk informasi lebih lanjut mengenai jadwal dan lokasi buka puasa bersama tahun ini.`,
    en_content: `The Buka Puasa Bersama (Communal Iftar) Program is a Yamindo initiative held every year during the holy month of Ramadan. This program invites the general public, donors, and the extended Yamindo family to share blessings by providing iftar meals for those in need, including orphans, the poor, and mosque congregants from underprivileged backgrounds.

## Values of Togetherness

Ramadan is a month full of blessings and forgiveness. The Communal Iftar Program is not merely about providing food, but rather a platform to strengthen the bonds of brotherhood among the Muslim community. In a warm atmosphere of togetherness, we can experience true happiness that far surpasses worldly possessions.

## Activity Implementation

Each year, Yamindo organizes dozens of communal iftar points at various strategic locations, including partner mosques, orphanages, and Islamic boarding schools. Each iftar point features a brief religious talk before breaking the fast, collective prayers, and of course, delicious and nutritious iftar meals.

## Iftar Menu

The menu served in the Communal Iftar Program is adapted to local culture and nutritional needs. Yamindo ensures that every portion served meets good nutritional standards so that beneficiaries can break their fast heartily and healthily. The menu includes iftar snacks, drinking water, main meals, and fruits.

## Beneficiaries

- Orphans and the poor around partner mosques
- Mosque congregants from low-income backgrounds
- Students at partner pesantren
- General public wishing to share blessings

## Virtues of Feeding Those Breaking Fast

The Prophet Muhammad (PBUH) said: \"Whoever feeds a person who is breaking his fast, he will have a reward like that of the fasting person, without any reduction in his reward.\" (HR. Tirmidzi). This hadith serves as the primary foundation for Yamindo to continue organizing the Communal Iftar Program every year.

## How to Participate

You can participate by donating for iftar organization costs, becoming a field volunteer, or providing food directly. Contact the Yamindo team via WhatsApp for more information about this year's communal iftar schedule and locations.`,
  },
  'ambulan-gratis': {
    content: `Program Ambulan Gratis merupakan bentuk kepedulian Yamindo terhadap akses kesehatan masyarakat Indonesia, khususnya di daerah terpencil dan tertinggal. Program ini menyediakan layanan transportasi medis gratis bagi pasien yang membutuhkan rujukan dari fasilitas kesehatan tingkat pertama ke rumah sakit, maupun sebaliknya.

## Urgensi Kesehatan

Indonesia sebagai negara kepulauan menghadapi tantangan besar dalam distribusi layanan kesehatan. Banyak masyarakat di daerah terpencil yang harus menempuh perjalanan jauh dan mahal hanya untuk mengakses fasilitas kesehatan. Dalam situasi darurat medis, keterlambatan akses dapat berakibat fatal. Program Ambulan Gratis hadir untuk menjembatani kesenjangan akses kesehatan ini.

## Layanan yang Disediakan

Program Ambulan Gratis Yamindo menyediakan berbagai layanan transportasi medis, termasuk pengantaran pasien rujukan dari puskesmas ke rumah sakit, pengantaran ibu hamil ke fasilitas bersalin, transportasi jenazah, dan mobilisasi kesehatan untuk kegiatan bakti sosial di daerah terpencil.

## Jangkauan Operasional

Ambulan gratis Yamindo beroperasi di wilayah-wilayah yang membutuhkan, khususnya di daerah dengan akses transportasi terbatas. Tim kami bekerja sama dengan puskesmas dan posyandu setempat untuk memastikan layanan sampai kepada mereka yang paling membutuhkan.

## Sumber Daya Manusia

Setiap ambulan dilengkapi dengan sopir terlatih dan peralatan medis dasar. Yamindo juga bekerja sama dengan tenaga kesehatan sukarela yang siap mendampingi pasien selama perjalanan. Kami memastikan setiap perjalanan medis berjalan dengan aman dan nyaman bagi pasien.

## Dampak Program

- Mengurangi angka keterlambatan rujukan medis di daerah terpencil
- Menurunkan biaya transportasi medis bagi masyarakat miskin
- Menyelamatkan nyawa pasien melalui penanganan darurat yang cepat
- Meningkatkan akses ibu hamil terhadap layanan bersalin yang aman

## Keberlanjutan Program

Program Ambulan Gratis membutuhkan dukungan berkelanjutan dari para donatur. Biaya operasional ambulan meliputi bahan bakar, perawatan kendaraan, dan honor tenaga pengemudi. Dengan donasi Anda, kita dapat memastikan ambulan ini terus beroperasi dan menyelamatkan nyawa.`,
    en_content: `The Free Ambulance Program is Yamindo's expression of concern for public health access in Indonesia, especially in remote and underdeveloped areas. This program provides free medical transportation for patients needing referrals from primary healthcare facilities to hospitals, and vice versa.

## Health Urgency

As an archipelagic nation, Indonesia faces enormous challenges in health service distribution. Many people in remote areas must travel long distances at great expense just to access healthcare facilities. In medical emergencies, delayed access can be fatal. The Free Ambulance Program bridges this healthcare access gap.

## Services Provided

Yamindo's Free Ambulance Program provides various medical transportation services, including patient referral transport from health centers to hospitals, transporting pregnant women to maternity facilities, funeral transportation, and health mobilization for social service activities in remote areas.

## Operational Coverage

Yamindo's free ambulances operate in areas in need, particularly regions with limited transportation access. Our team works with local health centers and community health posts to ensure services reach those most in need.

## Human Resources

Each ambulance is equipped with trained drivers and basic medical equipment. Yamindo also collaborates with volunteer healthcare workers ready to accompany patients during transit. We ensure every medical journey proceeds safely and comfortably for the patient.

## Program Impact

- Reducing medical referral delays in remote areas
- Lowering medical transportation costs for the poor
- Saving lives through rapid emergency response
- Improving pregnant women's access to safe maternity services

## Program Sustainability

The Free Ambulance Program requires sustained donor support. Operational costs include fuel, vehicle maintenance, and driver compensation. With your donation, we can ensure these ambulances continue operating and saving lives.`,
  },
  'beasiswa-pendidikan': {
    content: `Program Beasiswa Pendidikan adalah wujud komitmen Yamindo dalam mendukung pencerdasan bangsa Indonesia. Program ini memberikan bantuan biaya pendidikan kepada pelajar berprestasi dari keluarga kurang mampu, agar mereka dapat melanjutkan pendidikan ke jenjang yang lebih tinggi tanpa terkendala biaya.

## Filosofi Program

Pendidikan adalah kunci untuk memutus rantai kemiskinan. Yamindo percaya bahwa setiap anak berhak mendapatkan pendidikan yang layak, terlepas dari kondisi ekonomi keluarganya. Program Beasiswa Pendidikan hadir untuk memastikan bahwa bakat dan potensi terbaik bangsa Indonesia tidak terbuang sia-sia hanya karena keterbatasan ekonomi.

## Jenis Beasiswa

Yamindo menyediakan beberapa jenis beasiswa yang disesuaikan dengan kebutuhan penerima manfaat, meliputi beasiswa pendidikan formal (SD, SMP, SMA, dan perguruan tinggi), beasiswa tahfidz Al Quran untuk para penghafal Al Quran, dan beasiswa keterampilan untuk pelajar yang ingin mengembangkan kemampuan vokasional.

## Kriteria Penerima

- Pelajar dari keluarga prasejahteran yang terverifikasi
- Memiliki prestasi akademik atau non-akademik yang membanggakan
- Bertekad kuat untuk melanjutkan pendidikan
- Bersedia memberikan laporan perkembangan belajar secara berkala

## Proses Seleksi

Proses seleksi beasiswa Yamindo dilakukan secara transparan dan meritokratis. Tim seleksi terdiri dari pendidik, tokoh masyarakat, dan perwakilan Yamindo yang independen. Setiap calon penerima melalui tahapan verifikasi data, wawancara, dan penilaian komprehensif.

## Komponen Bantuan

Beasiswa yang diberikan mencakup biaya SPP, buku dan perlengkapan sekolah, seragam, dan uang saku bulanan. Untuk beasiswa tahfidz, bantuan juga mencakup biaya hidup di pesantren dan biaya ujian tahfidz.

## Dampak Sosial

Program ini telah menghasilkan lulusan yang kini berkontribusi aktif bagi masyarakat, menjadi guru, dokter, insinyur, dan pemimpin komunitas di daerah mereka masing-masing. Mereka menjadi bukti nyata bahwa investasi pendidikan memberikan dampak yang berkelanjutan dan meluas.

## Donasi untuk Pendidikan

Dengan berdonasi ke Program Beasiswa Pendidikan, Anda tidak hanya membayar biaya sekolah seseorang, tetapi Anda sedang berinvestasi dalam masa depan bangsa Indonesia. Satu beasiswa dapat mengubah nasib satu keluarga selamanya.`,
    en_content: `The Education Scholarship Program is Yamindo's commitment to supporting the intellectual development of Indonesia. This program provides educational cost assistance to outstanding students from underprivileged families, enabling them to pursue higher education without financial constraints.

## Program Philosophy

Education is the key to breaking the cycle of poverty. Yamindo believes that every child deserves quality education, regardless of their family's economic condition. The Education Scholarship Program ensures that the best talents and potential of the Indonesian nation are not wasted simply due to economic limitations.

## Types of Scholarships

Yamindo provides several types of scholarships tailored to beneficiary needs, including formal education scholarships (elementary, junior high, senior high, and university), Quran memorization (tahfidz) scholarships, and skills scholarships for students wishing to develop vocational abilities.

## Selection Criteria

- Students from verified underprivileged families
- Possessing proud academic or non-academic achievements
- Strong determination to continue education
- Willing to provide periodic academic progress reports

## Selection Process

Yamindo's scholarship selection process is conducted transparently and meritocratically. The selection team consists of educators, community leaders, and independent Yamindo representatives. Each candidate goes through data verification, interviews, and comprehensive assessment.

## Assistance Components

Scholarships provided cover tuition fees, books and school supplies, uniforms, and monthly living allowances. For tahfidz scholarships, assistance also covers living costs at the pesantren and tahfidz examination fees.

## Social Impact

This program has produced graduates who now actively contribute to society, becoming teachers, doctors, engineers, and community leaders in their respective regions. They are living proof that educational investment provides sustainable and far-reaching impact.

## Donate for Education

By donating to the Education Scholarship Program, you are not just paying for someone's school fees — you are investing in the future of Indonesia. One scholarship can change the fate of an entire family forever.`,
  },
  'pembangunan-masjid': {
    content: `Program Pembangunan Masjid merupakan salah satu program strategis Yamindo yang bertujuan untuk memfasilitasi pembangunan dan renovasi masjid-masjid di daerah yang membutuhkan. Program ini menjadi wujud nyata upaya Yamindo dalam membantu masyarakat memiliki tempat ibadah yang layak dan nyaman.

## Pentingnya Masjid

Masjid bukan sekadar tempat ibadah. Di dalam sejarah Islam, masjid berfungsi sebagai pusat peradaban, tempat belajar, pusat komunitas, dan titik awal berkembangnya ilmu pengetahuan. Memiliki masjid yang layak merupakan kebutuhan fundamental bagi setiap komunitas Muslim.

## Prioritas Pembangunan

Yamindo memprioritaskan pembangunan masjid di daerah yang benar-benar membutuhkan, seperti daerah terpencil yang belum memiliki tempat ibadah yang memadai, daerah terdampak bencana yang masjidnya rusak, dan daerah dengan jumlah jamaah yang terus bertambah namun fasilitas masjid tidak memadai.

## Tahapan Pembangunan

Setiap proyek pembangunan masjid melalui tahapan yang terstruktur, dimulai dari survei lokasi dan kebutuhan masyarakat, perencanaan arsitektur dan anggaran, penggalangan dana, pelaksanaan pembangunan, hingga serah terima dan perawatan berkala.

## Standar Pembangunan

Masjid yang dibangun melalui program ini memenuhi standar teknis yang baik, termasuk fondasi yang kuat, struktur bangunan yang aman, ventilasi yang memadai, dan fasilitas wudhu yang bersih. Kami juga memperhatikan aspek estetika agar masjid menjadi kebanggaan masyarakat setempat.

## Partisipasi Masyarakat

Program ini melibatkan partisipasi aktif masyarakat setempat, baik dalam bentuk tenaga kerja sukarela, pemilihan desain, maupun pemeliharaan pasca pembangunan. Kami percaya bahwa keterlibatan masyarakat akan menumbuhkan rasa kepemilikan dan tanggung jawab terhadap masjid.

## Pahala Membangun Masjid

Rasulullah SAW bersabda: \"Barangsiapa yang membangun masjid karena Allah, maka Allah akan membangun untuknya rumah yang serupa di surga.\" (HR. Bukhari dan Muslim). Hadis ini menjadi motivasi bagi Yamindo dan para donatur untuk terus membangun rumah-rumah Allah di muka bumi.

## Salurkan Donasi Anda

Donasi Anda untuk Program Pembangunan Masjid akan digunakan sepenuhnya untuk pembangunan fisik masjid. Anda dapat menyalurkan donasi melalui rekening resmi BSI Yamindo. Setiap donatur akan mendapatkan laporan perkembangan pembangunan secara berkala.`,
    en_content: `The Mosque Construction Program is one of Yamindo's strategic programs aimed at facilitating the construction and renovation of mosques in areas in need. This program is a tangible manifestation of Yamindo's efforts to help communities have decent and comfortable places of worship.

## The Importance of Mosques

A mosque is not merely a place of worship. Throughout Islamic history, mosques have served as centers of civilization, learning hubs, community centers, and the starting point for the development of knowledge. Having a decent mosque is a fundamental need for every Muslim community.

## Construction Priorities

Yamindo prioritizes mosque construction in areas that truly need it, such as remote areas without adequate worship facilities, disaster-affected areas with damaged mosques, and areas with growing congregations but insufficient mosque facilities.

## Construction Phases

Every mosque construction project goes through structured phases, starting from location surveys and community needs assessment, architecture and budget planning, fundraising, construction implementation, to handover and periodic maintenance.

## Construction Standards

Mosques built through this program meet good technical standards, including strong foundations, safe building structures, adequate ventilation, and clean ablution facilities. We also pay attention to aesthetic aspects so that the mosque becomes a source of pride for the local community.

## Community Participation

This program actively involves local community participation, whether in the form of volunteer labor, design selection, or post-construction maintenance. We believe that community involvement fosters a sense of ownership and responsibility towards the mosque.

## Rewards of Building Mosques

The Prophet Muhammad (PBUH) said: \"Whoever builds a mosque for Allah, Allah will build for him a similar house in Paradise.\" (HR. Bukhari and Muslim). This hadith motivates Yamindo and donors to continue building houses of Allah on earth.

## Channel Your Donation

Your donation to the Mosque Construction Program will be used entirely for the physical construction of mosques. You can send donations through Yamindo's official BSI accounts. Every donor will receive periodic construction progress reports.`,
  },
  'pembangunan-kelas': {
    content: `Program Pembangunan Kelas merupakan inisiatif Yamindo untuk meningkatkan kualitas infrastruktur pendidikan di Indonesia. Program ini berfokus pada pembangunan dan renovasi ruang kelas yang layak, terutama di sekolah-sekolah dan pesantren yang berada di daerah terpencil dan tertinggal.

## Kondisi Pendidikan Saat Ini

Banyak sekolah dan pesantren di Indonesia, khususnya di daerah pelosok, masih menggunakan ruang kelas yang tidak layak. Atap bocor, dinding retak, lantai yang tidak rata, dan kurangnya mebeleruangan menjadi masalah klasik yang menghambat proses belajar mengajar. Anak-anak belajar dalam kondisi yang tidak nyaman dan berbahaya.

## Tujuan Program

Program Pembangunan Kelas bertujuan untuk menciptakan lingkungan belajar yang aman, nyaman, dan kondusif bagi para pelajar. Kami percaya bahwa lingkungan belajar yang baik akan berdampak positif terhadap motivasi belajar dan prestasi akademik siswa.

## Spesifikasi Bangunan

Kelas yang dibangun melalui program ini memenuhi standar Kementerian Pendidikan, termasuk ukuran ruang yang memadai untuk jumlah siswa, pencahayaan alami yang optimal, sirkulasi udara yang baik, dan perlengkapan mebeleruangan yang lengkap.

## Lokasi Prioritas

Yamindo memprioritaskan pembangunan kelas di sekolah dasar dan pesantren di daerah 3T (Terdepan, Terluar, Terpaling Belakang), sekolah yang mengalami kerusakan parah akibat bencana alam, dan lembaga pendidikan yang memiliki komitmen tinggi namun terbatas dalam hal pendanaan.

## Monitoring dan Evaluasi

Setiap proyek pembangunan kelas dimonitor secara berkala oleh tim Yamindo. Kami memastikan bahwa pembangunan berjalan sesuai rencana, anggaran, dan jadwal yang telah ditetapkan. Setelah selesai, dilakukan evaluasi menyeluruh untuk memastikan kualitas bangunan.

## Dampak Jangka Panjang

Investasi dalam pembangunan kelas memberikan dampak jangka panjang yang signifikan. Satu ruang kelas yang layak dapat digunakan selama puluhan tahun dan akan dimanfaatkan oleh ratusan siswa selama periode tersebut. Ini adalah investasi generasi yang memberikan manfaat berkelanjutan.

## Dukung Program Ini

Anda dapat berpartisipasi dengan cara berdonasi, menjadi relawan, atau menyebarkan informasi mengenai program ini. Setiap kontribusi Anda membantu menciptakan ruang belajar yang lebih baik bagi anak-anak Indonesia.`,
    en_content: `The Classroom Construction Program is Yamindo's initiative to improve the quality of educational infrastructure in Indonesia. This program focuses on building and renovating decent classrooms, especially in schools and pesantren in remote and underdeveloped areas.

## Current Education Conditions

Many schools and pesantren in Indonesia, particularly in remote areas, still use inadequate classrooms. Leaky roofs, cracked walls, uneven floors, and lack of furniture are classic problems that hinder the teaching and learning process. Children study in uncomfortable and dangerous conditions.

## Program Objectives

The Classroom Construction Program aims to create a safe, comfortable, and conducive learning environment for students. We believe that a good learning environment positively impacts students' learning motivation and academic achievement.

## Building Specifications

Classrooms built through this program meet the Ministry of Education's standards, including adequate room size for the number of students, optimal natural lighting, good air circulation, and complete furniture.

## Priority Locations

Yamindo prioritizes classroom construction in elementary schools and pesantren in 3T areas (frontier, outermost, and underdeveloped), schools severely damaged by natural disasters, and educational institutions with high commitment but limited funding.

## Monitoring and Evaluation

Every classroom construction project is periodically monitored by the Yamindo team. We ensure that construction proceeds according to the established plan, budget, and schedule. Upon completion, a comprehensive evaluation is conducted to ensure building quality.

## Long-term Impact

Investment in classroom construction provides significant long-term impact. One decent classroom can be used for decades and will be utilized by hundreds of students during that period. This is a generational investment that provides sustainable benefits.

## Support This Program

You can participate by donating, becoming a volunteer, or spreading information about this program. Every contribution helps create better learning spaces for Indonesia's children.`,
  },
  'angkat-buta-huruf-al-quran': {
    content: `Program Angkat Buta Huruf Al Quran adalah program yang sangat istimewa bagi Yamindo. Program ini secara khusus menyasar masyarakat dewasa yang belum bisa membaca Al Quran, dengan tujuan mengajarkan mereka kemampuan membaca Al Quran hingga lancar. Program ini merupakan Implementasi nyata dari tanggung jawab sosial umat Islam dalam menuntut ilmu agama.

## Realitas Buta Huruf Al Quran

Fakta yang memprihatinkan, masih banyak masyarakat Muslim di Indonesia yang belum bisa membaca Al Quran. Mereka mungkin sudah melaksanakan ibadah shalat dan berbagai amalan kebaikan lainnya, namun belum mampu membaca kitab suci umat Islam secara mandiri. Kondisi ini sering ditemukan di daerah terpencil, pada masyarakat lanjut usia, dan pada mereka yang tidak memiliki akses pendidikan agama sejak kecil.

## Metode Pengajaran

Yamindo menggunakan metode pengajaran yang efektif dan mudah dipahami, disesuaikan dengan usia dan kemampuan masing-masing peserta. Metode yang digunakan merupakan gabungan dari berbagai metode tahsin dan tashih yang telah terbukti keberhasilannya. Pengajaran dilakukan secara bertahap, dimulai dari pengenalan huruf hijaiyah hingga mampu membaca Al Quran dengan lancar.

## Target Peserta

- Masyarakat dewasa yang belum bisa membaca Al Quran
- Lansia yang ingin belajar membaca Al Quran
- Ibu-ibu rumah tangga yang belum memiliki kemampuan baca tulis Al Quran
- Masyarakat di daerah terpencil dengan akses pendidikan terbatas

## Bentuk Kegiatan

Program ini dilaksanakan melalui kelas-kelas belajar reguler yang diadakan di masjid-masjid mitra, pesantren, dan komunitas lokal. Setiap kelas dibimbing oleh guru mengaji yang berpengalaman dan memiliki kompetensi dalam mengajarkan baca tulis Al Quran kepada orang dewasa.

## Keberhasilan Program

Peserta yang berhasil menyelesaikan program ini akan mampu membaca Al Quran secara mandiri, bahkan beberapa di antaranya melanjutkan ke program tahfidz (penghafalan Al Quran). Keberhasilan ini membawa perubahan besar dalam kehidupan spiritual peserta dan keluarga mereka.

## Bagaimana Anda Dapat Membantu

Anda dapat berpartisipasi dengan cara berdonasi untuk biaya operasional kelas, menyediakan Al Quran untuk peserta, atau menjadi relawan pengajar. Hubungi tim Yamindo untuk informasi lebih lanjut mengenai cara berpartisipasi dalam program mulia ini.`,
    en_content: `The Quran Literacy Program is a very special program for Yamindo. This program specifically targets adults who cannot yet read the Quran, with the goal of teaching them to read the Quran fluently. This program is a tangible implementation of the Muslim community's social responsibility in pursuing religious knowledge.

## The Reality of Quran Illiteracy

A concerning fact: many Muslims in Indonesia still cannot read the Quran. They may already perform prayers and various other good deeds, but cannot read the Muslim holy book independently. This condition is often found in remote areas, among the elderly, and among those who did not have access to religious education since childhood.

## Teaching Method

Yamindo uses effective and easy-to-understand teaching methods, adapted to the age and ability of each participant. The methods used combine various proven tahsin and tashih approaches. Teaching is conducted gradually, starting from hijaiyah letter recognition to fluent Quran reading ability.

## Target Participants

- Adults who cannot yet read the Quran
- Elderly who wish to learn Quran reading
- Housewives without Quran literacy skills
- People in remote areas with limited educational access

## Activity Formats

This program is implemented through regular learning classes held at partner mosques, pesantren, and local communities. Each class is guided by experienced Quran teachers competent in teaching reading and writing the Quran to adults.

## Program Success

Participants who successfully complete this program will be able to read the Quran independently, with some even continuing to tahfidz (Quran memorization) programs. This success brings significant changes in the spiritual lives of participants and their families.

## How You Can Help

You can participate by donating for operational costs, providing Qurans for participants, or becoming a teaching volunteer. Contact the Yamindo team for more information on how to participate in this noble program.`,
  },
  'wakaf-al-quran': {
    content: `Program Wakaf Al Quran adalah program Yamindo yang bertujuan untuk menghimpun dan mendistribusikan Al Quran kepada masyarakat yang membutuhkan melalui mekanisme wakaf. Program ini menyediakan Al Quran berkualitas tinggi yang dapat diwakafkan oleh para donatur, kemudian disalurkan kepada masjid, pesantren, lembaga pendidikan, dan individu yang belum memiliki Al Quran.

## Keutamaan Wakaf

Wakaf merupakan salah satu amal jariyah yang pahalanya terus mengalir meskipun seseorang telah meninggal dunia. Rasulullah SAW bersabda: \"Apabila anak Adam meninggal, terputuslah amalnya kecuali tiga: sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya.\" (HR. Muslim). Wakaf Al Quran termasuk dalam kategori sedekah jariyah.

## Jenis Wakaf yang Diterima

Yamindo menerima wakaf Al Quran dalam berbagai bentuk, termasuk wakaf Al Quran terjemah untuk masyarakat awam, wakaf Al Quran per juz untuk peserta program tahsin, wakaf Al Quran 30 juz lengkap untuk masjid dan pesantren, dan wakaf mushaf khusus untuk penghafal Al Quran.

## Target Distribusi

- Masjid-masjid di daerah terpencil yang kekurangan Al Quran
- Pondok pesantren mitra Yamindo
- Lembaga tahfidz dan taman kanak-kanak Al Quran
- Masyarakat umum yang belum memiliki Al Quran
- Lembaga pemasyarakatan dan panti rehabilitasi

## Proses Pendistribusian

Setiap Al Quran yang diwakafkan didistribusikan secara terstruktur dan terdokumentasi. Tim Yamindo melakukan survei kebutuhan terlebih dahulu, kemudian melakukan pengadaan, dan mendistribusikan langsung kepada penerima manfaat. Setiap donatur akan menerima laporan distribusi lengkap.

## Kualitas Mushaf

Al Quran yang disediakan melalui program ini memiliki kualitas cetakan yang baik, dengan kertas yang tidak mudah sobek, tinta yang jelas, dan ukuran yang sesuai standar. Kami memastikan bahwa setiap mushaf yang disalurkan layak digunakan dalam jangka panjang.

## Target Distribusi Tahunan

Yamindo menargetkan distribusi ribuan mushaf Al Quran setiap tahun ke berbagai penjuru Indonesia. Target ini terus meningkat seiring dengan bertambahnya donatur dan antusiasme masyarakat untuk berwakaf.

## Wakafkan Al Quran Anda

Anda dapat berwakaf Al Quran dengan cara menyumbangkan dana melalui rekening resmi BSI Yamindo. Tim kami akan mengkonversi donasi Anda menjadi mushaf Al Quran yang berkualitas dan mendistribusikannya kepada yang berhak.`,
    en_content: `The Quran Waqf Program is Yamindo's program aimed at collecting and distributing Qurans to those in need through the waqf mechanism. This program provides high-quality Qurans that donors can endow, which are then distributed to mosques, pesantren, educational institutions, and individuals who do not yet own a Quran.

## The Virtues of Waqf

Waqf is one of the charitable acts whose rewards continue to flow even after a person has passed away. The Prophet Muhammad (PBUH) said: \"When the son of Adam dies, his deeds cease except for three: perpetual charity, beneficial knowledge, and a righteous child who prays for him.\" (HR. Muslim). Quran Waqf falls under the category of perpetual charity (sadaqah jariyah).

## Types of Waqf Accepted

Yamindo accepts Quran waqf in various forms, including translated Quran waqf for the general public, per-juz Quran waqf for tahsin program participants, complete 30-juz Quran waqf for mosques and pesantren, and special mushaf waqf for Quran memorizers.

## Distribution Targets

- Mosques in remote areas lacking Qurans
- Yamindo partner pesantren
- Tahfidz institutions and Quran kindergartens
- General public who do not yet own a Quran
- Correctional institutions and rehabilitation centers

## Distribution Process

Every endowed Quran is distributed in a structured and documented manner. The Yamindo team conducts needs surveys first, then procures and distributes directly to beneficiaries. Every donor receives a comprehensive distribution report.

## Mushaf Quality

The Qurans provided through this program have good print quality, with tear-resistant paper, clear ink, and standard-sized text. We ensure that every distributed mushaf is suitable for long-term use.

## Annual Distribution Target

Yamindo targets the distribution of thousands of Quran mushafs annually across Indonesia. This target continues to increase as donors grow and community enthusiasm for waqf increases.

## Endow Your Quran

You can endow a Quran by donating through Yamindo's official BSI accounts. Our team will convert your donation into quality Quran mushafs and distribute them to rightful recipients.`,
  },
  'kafalah-yatim': {
    content: `Program Kafalah Yatim adalah program andalan Yamindo yang secara khusus memberikan perlindungan, pendidikan, dan bimbingan kepada anak-anak yatim dan piatu di Indonesia. Program ini mencakup pemenuhan kebutuhan dasar, pendidikan formal dan non-formal, serta pembinaan karakter dan keagamaan secara menyeluruh.

## Tentang Kafalah

Kafalah secara bahasa berarti jaminan atau tanggung jawab. Dalam konteks program ini, kafalah berarti menjamin kehidupan anak-anak yatim agar mereka mendapatkan hak-haknya secara layak, termasuk sandang, pangan, pendidikan, dan kasih sayang. Islam sangat menekankan pentingnya memelihara anak yatim, sebagaimana firman Allah SWT dalam Surat Al-Baqarah ayat 177.

## Cakupan Program

Program Kafalah Yatim Yamindo mencakup seluruh aspek kehidupan anak, meliputi pembiayaan kebutuhan sehari-hari (makan, pakaian, tempat tinggal), pembiayaan pendidikan formal dari tingkat dasar hingga perguruan tinggi, pembinaan Al Quran dan ilmu agama, pembinaan keterampilan hidup dan soft skills, serta pendampingan psikologis dan motivasi.

## Jumlah Anak Asuh

Yamindo saat ini membina puluhan anak yatim yang tersebar di berbagai asrama dan keluarga angkat mitra. Setiap anak mendapatkan pendampingan intensif dari tim social worker dan caregiver yang berpengalaman.

## Pendekatan Pengasuhan

Yamindo menerapkan pendekatan pengasuhan berbasis keluarga (family-based care). Kami berupaya memberikan lingkungan yang sedekat mungkin dengan suasana keluarga asli, agar anak-anak dapat tumbuh dan berkembang secara normal. Setiap anak ditempatkan dalam kelompok kecil yang dipandu oleh pengasuh yang bertindak sebagai orang tua asuh.

## Pendidikan dan Pembinaan

Selain pendidikan formal, anak-anak asuh juga mendapatkan pembinaan intensif di bidang keagamaan, termasuk menghafal Al Quran, belajar fiqih, dan memahami akhlakul karimah. Kami juga memberikan pelatihan keterampilan seperti komputer, bahasa Inggris, dan kewirausahaan untuk mempersiapkan masa depan mereka.

## Monitoring Perkembangan

Setiap anak asuh memiliki catatan perkembangan yang terdokumentasi dengan baik. Tim Yamindo secara berkala melakukan evaluasi terhadap perkembangan akademik, karakter, dan kesehatan setiap anak. Laporan perkembangan juga dikirimkan kepada para donatur kafalah.

## Cara Berpartisipasi

Anda dapat berpartisipasi dalam Program Kafalah Yatim dengan cara menjadi sponsor tetap (kafalah penuh), berdonasi untuk biaya operasional, memberikan bantuan pendidikan, atau menjadi relawan pengajar dan pembimbing. Setiap bentuk partisipasi Anda sangat berarti bagi masa depan anak-anak yatim Indonesia.`,
    en_content: `The Orphan Sponsorship (Kafalah Yatim) Program is Yamindo's flagship program specifically providing protection, education, and guidance to orphans and fatherless children in Indonesia. This program encompasses fulfilling basic needs, formal and non-formal education, and comprehensive character and religious development.

## About Kafalah

Kafalah linguistically means guarantee or responsibility. In the context of this program, kafalah means guaranteeing the lives of orphans so they receive their rights properly, including clothing, food, education, and love. Islam strongly emphasizes the importance of caring for orphans, as stated in Allah's word in Surah Al-Baqarah, verse 177.

## Program Scope

Yamindo's Orphan Sponsorship Program encompasses all aspects of a child's life, including financing daily needs (food, clothing, shelter), financing formal education from elementary to university level, Quran and religious knowledge development, life skills and soft skills training, as well as psychological support and motivation.

## Number of Foster Children

Yamindo currently cares for dozens of orphans spread across various dormitories and partner foster families. Each child receives intensive guidance from experienced social workers and caregivers.

## Care Approach

Yamindo applies a family-based care approach. We strive to provide an environment as close as possible to a real family atmosphere, so children can grow and develop normally. Each child is placed in small groups guided by caregivers who act as foster parents.

## Education and Development

In addition to formal education, foster children also receive intensive religious development, including Quran memorization, studying fiqh, and understanding noble character (akhlakul karimah). We also provide skills training such as computers, English, and entrepreneurship to prepare them for the future.

## Progress Monitoring

Every foster child has well-documented progress records. The Yamindo team periodically evaluates each child's academic, character, and health development. Progress reports are also sent to kafalah sponsors.

## How to Participate

You can participate in the Orphan Sponsorship Program by becoming a regular sponsor (full kafalah), donating for operational costs, providing educational assistance, or becoming a teaching and mentoring volunteer. Every form of your participation means a lot to the future of Indonesian orphans.`,
  },
};

async function main() {
  const slugs = Object.keys(PROGRAMS);

  for (const slug of slugs) {
    const data = PROGRAMS[slug];
    const result = await prisma.programDetail.update({
      where: { slug },
      data: {
        content: data.content,
        en_content: data.en_content,
      },
    });
    console.log(`Updated: ${result.title}`);
  }

  console.log(`\nDone! Updated ${slugs.length} programs with narrative content.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
