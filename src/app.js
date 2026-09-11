/* ==========================================================================
   SUKSES TANI - React Engine with Dynamic Custom RAB Expense Items
   ========================================================================== */

const { useState, useEffect, useMemo, createElement: h } = React;

/* ==========================================================================
   1. AUTO-DETECT LANGUAGE HELPER
   ========================================================================== */
function detectBrowserLanguage() {
  try {
    const lang = (navigator.language || navigator.userLanguage || "id").toLowerCase();
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("id") || lang.startsWith("in")) return "id";
    return "id";
  } catch (e) {
    return "id";
  }
}

/* ==========================================================================
   2. TRANSLATIONS DICTIONARY (ID & EN)
   ========================================================================== */
const translations = {
  id: {
    appTitle: "Sukses Tani",
    appSub: "Asisten Budidaya & Keuangan Petani Indonesia",
    welcomeTitle: "Selamat datang di Sukses Tani",
    welcomeSub: "Aplikasi khusus pengelolaan budidaya & keuangan mandiri. Setiap akun bersifat pribadi dan dilindungi Kata Sandi / PIN.",
    loginTab: "Masuk Akun",
    registerTab: "Daftar Akun Baru",
    usernameLabel: "Username / ID Petani",
    fullnameLabel: "Nama Lengkap Petani",
    passwordLabel: "Kata Sandi / PIN Rahasia",
    confirmPasswordLabel: "Konfirmasi Kata Sandi / PIN",
    loginBtn: "Masuk ke Aplikasi",
    registerBtn: "Buat Akun Baru",
    demoAccountBtn: "Masuk Akun Contoh (Demo)",
    logout: "Keluar Akun",
    editProfile: "Edit Profil & Password",
    uploadPhoto: "Unggah Foto Profil",
    saveChanges: "Simpan Perubahan",
    
    // Navigation Menus
    navHome: "Beranda",
    navBudidaya: "Panduan Budidaya",
    navPerencanaan: "Perencanaan Biaya",
    navPenjadwalan: "Jadwal & Alarm",
    navKeuangan: "Keuangan & Siklus",

    // Home / Dashboard
    activeUser: "Petani Aktif",
    activeLandSize: "Luas Lahan Aktif",
    upcomingTasksCount: "Kegiatan Mendatang",
    overdueTasksCount: "Kegiatan Terlambat",
    lastProfitLoss: "Estimasi Laba Rugi",
    urgentAlerts: "Pengingat Penting Kegiatan",
    noUrgentAlerts: "Semua kegiatan budidaya berjalan sesuai jadwal! Tidak ada tugas terlambat.",
    quickActions: "Aksi Cepat",
    addNewPlanting: "Mulai Tanam Baru",
    catatPanen: "Catat Hasil Panen",
    viewGuide: "Baca Teknis Budidaya",

    // Commodity Selection
    selectCommodity: "Pilih Komoditas Utama",
    sawit: "Kelapa Sawit",
    kakao: "Kakao (Cokelat)",
    karet: "Karet",
    kelapa: "Kelapa",
    hortikultura: "Hortikultura (Sayur & Buah)",

    // Perencanaan Biaya (RAB)
    rabTitle: "Perencanaan Biaya per Luas Lahan (RAB Custom)",
    inputLandArea: "Luas Lahan yang Diolah (Hektare)",
    haUnit: "Hektare (Ha)",
    costBreakdown: "Rincian Estimasi Biaya Budidaya",
    bibitCost: "Biaya Bibit / Benih",
    pupukCost: "Biaya Pupuk & Nutrisi",
    pestisidaCost: "Biaya Pestisida / Obat",
    tenagaKerjaCost: "Biaya Tenaga Kerja (HOK)",
    alatCost: "Biaya Alat & Sewa Mesin",
    lainCost: "Biaya Lain-lain & Kontingensi",
    addCustomItemBtn: "+ Tambah Item Biaya Manual",
    totalProjectedCost: "Total Proyeksi Biaya",
    targetProductivity: "Target Estimasi Hasil Panen",
    projectedRevenue: "Proyeksi Potensi Pendapatan (Omset)",
    projectedNetProfit: "Proyeksi Keuntungan Bersih (Laba)",
    printRABBtn: "Cetak / Export RAB (PDF View)",

    // Penjadwalan
    plantingDateLabel: "Tanggal Mulai Tanam",
    generateScheduleBtn: "Buat Jadwal Budidaya Otomatis",
    calendarView: "Tampilan Kalender",
    listView: "Tampilan Daftar Tasks",
    filterAll: "Semua Task",
    filterUpcoming: "Mendatang (H-3)",
    filterOverdue: "Terlambat",
    filterCompleted: "Selesai",
    addCustomTask: "+ Tambah Tugas Manual",

    // Keuangan & Siklus
    financialCalcTitle: "Kalkulator Laba Rugi & Pencatatan Musim",
    actualYieldInput: "Jumlah Hasil Panen Dipanen",
    yieldUnit: "Satuan (Kg/Ton/Tandan/Butir)",
    salePriceInput: "Harga Jual per Satuan (Rp)",
    totalRevenue: "Total Pendapatan Panen",
    totalExpense: "Total Biaya Produksi",
    netProfitLoss: "Laba / Rugi Bersih",
    statusUntung: "SANGAT UNTUNG 🎉",
    statusRugi: "MENGALAMI RUGI ⚠️",
    saveCycleBtn: "Simpan Arsip Siklus Panen Ini",
    cycleArchivesTitle: "Histori & Arsip Siklus Budidaya Tersimpan",
    noCycleSaved: "Belum ada siklus tanam yang diarsipkan.",
  },
  en: {
    appTitle: "Sukses Tani",
    appSub: "Smart Cultivation & Financial Assistant for Farmers",
    welcomeTitle: "Welcome to Sukses Tani",
    welcomeSub: "Personal farm management application protected by password / PIN.",
    loginTab: "Sign In",
    registerTab: "Create New Account",
    usernameLabel: "Username / Farmer ID",
    fullnameLabel: "Full Name",
    passwordLabel: "Secret Password / PIN",
    confirmPasswordLabel: "Confirm Password / PIN",
    loginBtn: "Log In",
    registerBtn: "Register Account",
    demoAccountBtn: "Try Demo Account",
    logout: "Log Out",
    editProfile: "Edit Profile & Password",
    uploadPhoto: "Upload Profile Picture",
    saveChanges: "Save Changes",

    // Navigation Menus
    navHome: "Home",
    navBudidaya: "Cultivation Guide",
    navPerencanaan: "Cost Planning",
    navPenjadwalan: "Schedule & Alerts",
    navKeuangan: "Finances & Cycles",

    // Home / Dashboard
    activeUser: "Active Farmer",
    activeLandSize: "Active Land Area",
    upcomingTasksCount: "Upcoming Tasks",
    overdueTasksCount: "Overdue Tasks",
    lastProfitLoss: "Est. Profit/Loss",
    urgentAlerts: "Urgent Activity Reminders",
    noUrgentAlerts: "All cultivation tasks are on schedule! No overdue tasks.",
    quickActions: "Quick Actions",
    addNewPlanting: "Start New Season",
    catatPanen: "Log Harvest Sales",
    viewGuide: "Read Technical Guide",

    // Commodity Selection
    selectCommodity: "Select Main Commodity",
    sawit: "Oil Palm",
    kakao: "Cocoa",
    karet: "Rubber",
    kelapa: "Coconut",
    hortikultura: "Horticulture (Veggies & Fruit)",

    // Cost Planning (RAB)
    rabTitle: "Custom Land Budgeting (RAB)",
    inputLandArea: "Cultivated Land Area (Hectares)",
    haUnit: "Hectares (Ha)",
    costBreakdown: "Estimated Cost Breakdown",
    bibitCost: "Seeds / Seedling Cost",
    pupukCost: "Fertilizer & Nutrients",
    pestisidaCost: "Pesticides & Crop Protection",
    tenagaKerjaCost: "Labor Costs (HOK)",
    alatCost: "Equipment & Tool Rentals",
    lainCost: "Miscellaneous & Contingency",
    addCustomItemBtn: "+ Add Custom Cost Item",
    totalProjectedCost: "Total Projected Cost",
    targetProductivity: "Target Expected Yield",
    projectedRevenue: "Projected Revenue (Gross)",
    projectedNetProfit: "Projected Net Profit",
    printRABBtn: "Print / Export RAB (PDF View)",

    // Penjadwalan
    plantingDateLabel: "Planting Start Date",
    generateScheduleBtn: "Auto-Generate Cultivation Schedule",
    calendarView: "Calendar View",
    listView: "Task List View",
    filterAll: "All Tasks",
    filterUpcoming: "Upcoming (H-3)",
    filterOverdue: "Overdue",
    filterCompleted: "Completed",
    addCustomTask: "+ Add Custom Task",

    // Keuangan & Siklus
    financialCalcTitle: "Profit & Loss Calculator",
    actualYieldInput: "Total Harvest Yield Quantity",
    yieldUnit: "Unit (Kg/Ton/Bunch/Item)",
    salePriceInput: "Selling Price per Unit (Rp)",
    totalRevenue: "Total Harvest Revenue",
    totalExpense: "Total Production Expense",
    netProfitLoss: "Net Profit / Loss",
    statusUntung: "PROFITABLE 🎉",
    statusRugi: "LOSS DETECTED ⚠️",
    saveCycleBtn: "Archive This Season Cycle",
    cycleArchivesTitle: "Saved Season Cycle Archives",
    noCycleSaved: "No saved crop cycle history yet.",
  }
};

/* ==========================================================================
   3. COMMODITIES TECHNICAL GUIDE DATA
   ========================================================================== */
const commoditiesGuideData = {
  sawit: {
    id: "sawit",
    name: "Kelapa Sawit",
    englishName: "Oil Palm",
    emoji: "🌴",
    unit: "Ton TBS",
    description: "Tanaman perkebunan tahunan penghasil minyak sawit mentah (CPO) dengan potensi masa produktif hingga 25 tahun.",
    requiredInputs: [
      { category: "🌱 Bibit Unggul", item: "Bibit Sawit Bersertifikat (Tenera / Dami Mas / Marihat)", qty: "143 - 150 Pokok / Ha (umur 10-12 bulan)" },
      { category: "🧪 Pupuk & Nutrisi", item: "Pupuk Dasar Rock Phosphate (RP), Pupuk Susulan NPK 15-15-15, Urea, SP-36, KCI & Kieserite", qty: "Sekitar 1.5 - 2.5 Ton / Ha per tahun" },
      { category: "🛡️ Pestisida & Obat", item: "Herbisida Piringan (Glyphosate), Insektisida Biologi Bacillus thuringiensis (Ulat Api) & Jebakan Feromon Kumbang Tanduk", qty: "Sesuai luasan & intensitas hama" },
      { category: "🛠️ Alat & Alat Panen", item: "Dodos (pohon muda), Egrek (pohon tinggi), Angkong / Gerobak Sorong, Cangkul, & Tali Pancang", qty: "1 Set Perlengkapan Tani Sawit" }
    ],
    steps: [
      { phase: "1. Syarat Tumbuh & Persiapan Lahan", detail: "Curah hujan ideal 2.000–2.500 mm/tahun, suhu 24–28°C. Buat pancang tanam pola segitiga sama sisi (jarak 9m x 9m x 9m = 143 pokok/Ha). Buat lubang tanam 60x60x50 cm minimal 2 minggu sebelum tanam." },
      { phase: "2. Pemilihan Bibit & Penanaman", detail: "Gunakan bibit unggul bersertifikat (Tenera/Dami Mas/Marihat) umur 10–12 bulan di polybag. Beri pupuk dasar NPK/Rock Phosphate 500g per lubang tanam." },
      { phase: "3. Dosis Pemupukan Berkala (TBM & TM)", detail: "TBM (Belum Menghasilkan): NPK 15-15-15 (1.5–2 kg/pokok/tahun dibagi 3 kali aplikasi). TM (Telah Menghasilkan): Urea 2.5 kg, TSP/SP-36 1.5 kg, KCl 2.5 kg, dan Kieserit 1 kg per pokok per tahun." },
      { phase: "4. Pemeliharaan & Pruning (Pemangkasan)", detail: "Lakukan penyiangan piringan (circle weeding) diameter 2 meter. Pemangkasan pelepah (pruning) dilakukan 6 bulan sekali: pertahankan 48–56 pelepah pada pohon muda dan 40–48 pelepah pada pohon tua." },
      { phase: "5. Pengendalian Hama & Penyakit (OPT)", detail: "Waspadai Ulat Api/Kantung (semprot Insektisida Biologi Bacillus thuringiensis / Pyrethroid), Hama Kumbang Tanduk (Oryctes rhinoceros) pasang jebakan feromon, dan Penyakit Busuk Pangkal Batang (Ganoderma)." },
      { phase: "6. Pemanenan & Kriteria Matang Panen", detail: "Panen dimulai saat tanaman berumur 30–36 bulan. Kriteria brondolan lepas minimal 1–2 brondol per kg berat tandan di piringan. Rotasi panen 7–10 hari sekali." }
    ]
  },
  kakao: {
    id: "kakao",
    name: "Kakao (Cokelat)",
    englishName: "Cocoa",
    emoji: "🍫",
    unit: "Kg Biji Kering",
    description: "Komoditas perkebunan bernilai tinggi yang membutuhkan naungan dan pemangkasan rutin untuk hasil optimal.",
    requiredInputs: [
      { category: "🌱 Bibit Kakao & Naungan", item: "Bibit Klon Kakao Unggul (MCC 02 / Sulawesi 1) & Bibit Pohon Naungan (Lamtoro / Pisang)", qty: "1.111 Batang Kakao / Ha (jarak 3m x 3m)" },
      { category: "🧪 Pupuk & Nutrisi", item: "Pupuk Kandang Matang (10 kg/lubang), Pupuk NPK 16-16-16, Urea & KCI Kakao Dewasa", qty: "Sekitar 800 - 1000g NPK / pohon / tahun" },
      { category: "🛡️ Pestisida & Perlindungan", item: "Fungisida VSD (Mankozeb), Sarung Plastik Klip Transparan (Penyelubungan Buah / Sarungisasi PBK)", qty: "Secukupnya per musim tanam" },
      { category: "🛠️ Peralatan", item: "Gunting Pangkas Kakao, Gunting Panen, Kotak Fermentasi Kayu, Terpal Penjemuran Biji", qty: "1 Set Alat Panen & Pasca Panen Kakao" }
    ],
    steps: [
      { phase: "1. Syarat Tumbuh & Pohon Naungan", detail: "Ketinggian 0–800 mdpl. Membutuhkan pohon naungan sementara (pisang) dan naungan tetap (Lamtoro/Gliricidia) dipasang 6 bulan sebelum bibit kakao ditanam. Jarak tanam kakao 3m x 3m (1.111 pohon/Ha)." },
      { phase: "2. Penanaman & Olah Tanah", detail: "Gunakan klon kakao unggul (MCC 02, Sulawesi 1, Lindak). Buat lubang tanam 60x60x60 cm. Campur tanah galian atas dengan 10 kg pupuk kandang matang." },
      { phase: "3. Pemangkasan (Pruning) Terstruktur", detail: "Pemangkasan Bentuk (umur 1-2 tahun untuk membentuk jorong/chupon 4-5 cabang utama). Pemangkasan Pemeliharaan (membuang tunas air/tunas cacing setiap 2-3 bulan). Pemangkasan Rejuvenasi (peremajaan cabang tua)." },
      { phase: "4. Pemupukan Kakao", detail: "Pupuk NPK 16-16-16 dosis 250-500 gram/pohon/tahun pada tahun ke-1 & 2. Kakao dewasa (TM): Dosis 800-1000 gram NPK + 200g KCI/pohon/tahun dibagi 2 kali alokasi (awal & akhir musim hujan)." },
      { phase: "5. Pengendalian Hama Utama (PBK & VSD)", detail: "Hama Penggerek Buah Kakao (PBK): Penerapan Pangkas, Panen Sering, Kondonisasi (Penyelubungan buah muda plastik klip). Penyakit VSD (Vascular Streak Dieback): Potong ranting terinfeksi 30 cm dari batas gejala." },
      { phase: "6. Pemanenan & Fermentasi Biji", detail: "Panen saat buah berwarna kuning/oranye sempurna. Petik menggunakan gunting pangkas. Lakukan fermentasi biji basah dalam kotak kayu dilapisi daun pisang selama 4–6 hari sebelum dijemur." }
    ]
  },
  karet: {
    id: "karet",
    name: "Karet",
    englishName: "Rubber",
    emoji: "🌳",
    unit: "Kg Lateks Kering",
    description: "Tanaman penghasil getah lateks alami yang dieksploitasi melalui teknik penyadapan kulit batang.",
    requiredInputs: [
      { category: "🌱 Bibit Stum Okulasi", item: "Bibit Karet Stum Mata Tidur / Polybag Klon Produktif (PB 260 / IRR 112)", qty: "500 - 550 Pohon / Ha" },
      { category: "🧪 Pupuk & Pembeku", item: "Pupuk Urea, SP-36, KCI, NPK 15-15-15, & Asam Format / Asam Semut (Cuka Pembeku Lateks)", qty: "1 - 2 Liter Asam Format per 1.000L lateks" },
      { category: "🛡️ Fungisida Gugur Daun", item: "Fungisida Mankozeb / Karbendazim & Herbisida Penyiangan Jalur Tanam", qty: "Disesuaikan alur gugur daun" },
      { category: "🛠️ Alat Sadap", item: "Pisau Sadap Karet (Tipe Mangkok / Tarik), Mangkuk Sadap Tempurung Plastik, Talang Seng Sadap, Cincin Kawat", qty: "550 Set Mangkuk & Pisau Sadap" }
    ],
    steps: [
      { phase: "1. Persiapan Lahan & Jarak Tanam", detail: "Jarak tanam pola pagar 6m x 3m atau 7m x 2.8m (sekitar 500-550 pohon/Ha). Buat teras bersambung jika lahan miring/berbukit untuk cegah erosi." },
      { phase: "2. Penanaman Klon Rekomendasi", detail: "Gunakan bibit stum mata tidur atau polybag klon produktif (PB 260, IRR 112, RRSA 44). Tanam pada awal musim hujan." },
      { phase: "3. Pemupukan Masa TBM & TM", detail: "TBM: Beri pupuk gabungan Urea, SP-36, KCI dosis bertahap 250g hingga 750g/pohon/tahun. TM: Beri NPK 15-15-15 1–1.5 kg/pohon/tahun." },
      { phase: "4. Kriteria Matang Sadap & Teknik Penyadapan", detail: "Karet siap disadap saat lilit batang mencapai minimal 45 cm pada ketinggian 100 cm dari pertautan okulasi (biasanya umur 5-6 tahun). Gunakan irisan spiral S/2 d2 (setengah lingkaran ditarik 2 hari sekali)." },
      { phase: "5. Pengendalian Penyakit Gugur Daun (Corynespora)", detail: "Semprot fungisida berbahan aktif Mankozeb atau Karbendazim saat pembentukan daun muda pada alur gugur daun alami." },
      { phase: "6. Pembekuan Lateks (Koagulasi)", detail: "Gunakan bahan pembeku organik seperti Asam Format (Asam Semut) dosis 1-2 ml per liter lateks. Hindari pengental buatan berbahaya agar kualitas bokar tinggi." }
    ]
  },
  kelapa: {
    id: "kelapa",
    name: "Kelapa Dalam & Genjah",
    englishName: "Coconut",
    emoji: "🥥",
    unit: "Butir / Kg Kopra",
    description: "Tanaman 'Pohon Kehidupan' yang menghasilkan buah kelapa segar, kelapa parut, kopra, dan air kelapa.",
    requiredInputs: [
      { category: "🌱 Bibit Kelapa", item: "Bibit Kelapa Dalam Unggul / Kelapa Genjah Hibrida", qty: "120 - 140 Pohon / Ha" },
      { category: "🧪 Pupuk Organik & NaCl", item: "Pupuk Kandang (15kg/lubang), Urea, SP-36, KCI, & Garam Dapur (NaCl)", qty: "1 kg Garam Dapur per pohon / tahun" },
      { category: "🛡️ Insektisida Hama", item: "Insektisida Sistemik Kumbang Kelapa (Sexava & Brontispa) / Agen Hayati Parasitoid", qty: "Dosis kocor / injeksi batang" },
      { category: "🛠️ Alat Kerja", item: "Cangkul, Bambu Petik Tinggi / Tali Panen, Parang Pembelah Sabut", qty: "1 Set Alat Kelapa" }
    ],
    steps: [
      { phase: "1. Syarat Tumbuh & Pemilihan Varietas", detail: "Sangat cocok untuk daerah pesisir maupun dataran rendah hingga 600 mdpl. Varietas Kelapa Dalam (jarak tanam 9m x 9m segitiga) atau Kelapa Genjah Hibrida (jarak tanam 7.5m x 7.5m)." },
      { phase: "2. Penanaman & Olah Lahan", detail: "Buat lubang tanam ukuran 80x80x80 cm. Masukkan pupuk kandang 15 kg + Rock Phosphate 300g per lubang. Tanam bibit hingga bagian batok terbenam." },
      { phase: "3. Pemupukan Rutin Organik & Anorganik", detail: "Dosis per pohon per tahun: Urea 1 kg, SP-36 0.75 kg, KCl 1.5 kg, dan Garam Dapur (NaCl) 1 kg (untuk meningkatkan ketahanan dan kadar minyak buah kelapa)." },
      { phase: "4. Pemeliharaan Piringan & Pembumbunan", detail: "Bersihkan gulma seputar batang piringan 1.5–2 meter. Bersihkan seludang kering dan sisa tandan pada mahkota pohon 6 bulan sekali." },
      { phase: "5. Pengendalian Hama Sexava & Brontispa", detail: "Sexava spp. (Kumbang Kelapa): lakukan pembebasan musuh alami atau injeksi batang insektisida sistemik. Brontispa longissima: lepas parasitoid Tetrastichus." },
      { phase: "6. Pemanenan Buah Kelapa", detail: "Untuk Kelapa Kering/Kopra: Panen buah yang matang penuh (sabut cokelat, berbunyi nyaring saat diguncang, umur 11-12 bulan). Rotasi panen 2-3 bulan sekali." }
    ]
  },
  hortikultura: {
    id: "hortikultura",
    name: "Hortikultura (Cabai, Tomat & Buah)",
    englishName: "Horticulture (Chili, Tomato & Vegetables)",
    emoji: "🌶️",
    unit: "Kg Hasil Segar",
    description: "Tanaman semusim bernilai ekonomi cepat (3-4 bulan) yang membutuhkan manajemen air dan nutrisi insentif.",
    requiredInputs: [
      { category: "🌱 Benih Hibrida & Tray Semai", item: "Benih Unggul Cabai/Tomat Hibrida F1 & Tray Semai 128 Lubang + Media Semai Cocopeat", qty: "18.000 - 20.000 Benih / Ha" },
      { category: "🧪 Kapur & Nutrisi Lengkap", item: "Kapur Dolomit (1-2 Ton/Ha), Mulsa Plastik Hitam Perak (MPHP), Pupuk NPK 16-16-16, KNO3 Merah/Putih, Kalsium & Trichoderma", qty: "Sesuai fase pembungaan & pembuahan" },
      { category: "🛡️ Pestisida Khusus Horti", item: "Insektisida Abamektin (Cegah Thrips/Keriting), Imidakloprid, Fungisida Mankozeb / Azoksistrobin", qty: "Semprot rutin 5-7 hari sekali" },
      { category: "🛠️ Perlengkapan Bedengan", item: "Ajir Bambu (20.000 batang/Ha), Tali Rafia Penyangga, Sprayer Elektrik 16L, Pelubang Mulsa", qty: "1 Set Perlengkapan Bedengan" }
    ],
    steps: [
      { phase: "1. Pengolahan Tanah & Pemasangan Mulsa", detail: "Bajak tanah kedalaman 30 cm, buat bedengan tinggi 30-40 cm, lebar 100 cm. Beri Kapur Pertanian (Dolomit) 1-2 Ton/Ha jika pH < 6. Pasang Mulsa Plastik Hitam Perak (MPHP)." },
      { phase: "2. Pembibitan & Penanaman", detail: "Semaikan benih unggul di tray semai selama 18–25 hari sampai berdaun 4 helai. Tanam bibit pada sore hari di lubang mulsa jarak 50cm x 60cm." },
      { phase: "3. Pemasangan Turus/Ajir & Perempelan", detail: "Pasang ajir bambu tinggi 1.5 meter di samping tanaman umur 7 HST. Ikat batang tanaman dengan tali rafia. Pangkas tunas air di bawah cabang Y." },
      { phase: "4. Pemupukan Susulan (Kocor & Semprot)", detail: "Kocor NPK 16-16-16 (3-5 gram/tanaman) tiap 7 hari sekali dari umur 10 HST. Saat pembentukan buah, kocor NPK + KNO3 Merah/Putih + Kalium Kalsium." },
      { phase: "5. Pengendalian Hama Thrips, Kutudaun & Layu Bakteri", detail: "Kutu Daun/Thrips (cegah keriting daun): Semprot Abamektin / Imidakloprid berkala. Layu Bakteri / Fusarium: Kocor agen hayati Trichoderma spp. pada akar." },
      { phase: "6. Pemanenan Berkala", detail: "Panen pertama dimulai pada umur 75–85 HST. Petik beserta tangkainya di pagi hari. Pemanenan dapat dilakukan 2–3 hari sekali hingga 15–20 kali petik." }
    ]
  }
};

/* ==========================================================================
   4. AGRONOMIC DEFAULTS & SCHEDULE TEMPLATES
   ========================================================================== */
const agronomicDefaults = {
  sawit: {
    costPerHa: { bibit: 7150000, pupuk: 9500000, pestisida: 3200000, tenagaKerja: 8400000, alat: 2500000, lain: 2000000 },
    projectedYieldPerHa: 22.0, defaultSalePrice: 2450000, unitLabel: "Ton TBS",
    taskTemplates: [
      { title: "Pemupukan Dasar Rock Phosphate (500g/pohon)", intervalDays: 14, type: "pemupukan" },
      { title: "Penyiangan Piringan Pertama & Konsolidasi", intervalDays: 30, type: "penyiangan" },
      { title: "Pemupukan Susulan NPK 15-15-15 (Tahap I)", intervalDays: 90, type: "pemupukan" },
      { title: "Penyemprotan Hama Kumbang Tanduk (Oryctes)", intervalDays: 120, type: "pestisida" },
      { title: "Pemupukan NPK Susulan (Tahap II)", intervalDays: 180, type: "pemupukan" },
      { title: "Penyiangan Pasar Pikul & Piringan", intervalDays: 210, type: "penyiangan" },
      { title: "Pemupukan KCI & Kieserite (Tahap III)", intervalDays: 270, type: "pemupukan" },
      { title: "Pemangkasan Pelepah Pertama (Pruning TBM)", intervalDays: 360, type: "pruning" },
      { title: "Kestabilan Piringan & Pemupukan Rutin TM", intervalDays: 450, type: "pemupukan" },
      { title: "Panen Perdana & Kastrasi Tandan Pertama", intervalDays: 720, type: "panen" }
    ]
  },
  kakao: {
    costPerHa: { bibit: 8800000, pupuk: 6500000, pestisida: 4200000, tenagaKerja: 7200000, alat: 1800000, lain: 1500000 },
    projectedYieldPerHa: 1400, defaultSalePrice: 65000, unitLabel: "Kg Biji Kering",
    taskTemplates: [
      { title: "Penanaman Pohon Naungan (Lamtoro/Pisang)", intervalDays: 7, type: "penyiangan" },
      { title: "Penanaman Bibit Kakao & Pemupukan Organik", intervalDays: 30, type: "pemupukan" },
      { title: "Pemangkasan Bentuk Jorong Pertama", intervalDays: 120, type: "pruning" },
      { title: "Pemupukan NPK Kakao Tahap I", intervalDays: 150, type: "pemupukan" },
      { title: "Pemangkasan Pemeliharaan (Buang Tunas Air)", intervalDays: 210, type: "pruning" },
      { title: "Penyemprotan Penyakit VSD & Hama PBK", intervalDays: 240, type: "pestisida" },
      { title: "Pemupukan NPK + KCI Tahap II", intervalDays: 300, type: "pemupukan" },
      { title: "Penyelubungan Buah Muda Kakao (Sarungisasi)", intervalDays: 360, type: "pestisida" },
      { title: "Panen Perdana & Fermentasi Biji Kakao", intervalDays: 540, type: "panen" }
    ]
  },
  karet: {
    costPerHa: { bibit: 7500000, pupuk: 5800000, pestisida: 3500000, tenagaKerja: 9600000, alat: 3000000, lain: 1800000 },
    projectedYieldPerHa: 1800, defaultSalePrice: 14500, unitLabel: "Kg Lateks Kering",
    taskTemplates: [
      { title: "Pembersihan Lahan & Pemancangan Terasering", intervalDays: 14, type: "penyiangan" },
      { title: "Penanaman Stum Okulasi Karet & Organik", intervalDays: 30, type: "pemupukan" },
      { title: "Pemupukan Susulan Urea + SP-36 Tahap I", intervalDays: 90, type: "pemupukan" },
      { title: "Penyiangan Gulma Jalur Tanam Karet", intervalDays: 150, type: "penyiangan" },
      { title: "Penyemprotan Fungisida Gugur Daun Corynespora", intervalDays: 240, type: "pestisida" },
      { title: "Pengukuran Lilit Batang Matang Sadap (Min 45cm)", intervalDays: 1400, type: "pruning" },
      { title: "Pemasangan Mangkuk & Talang Sadap", intervalDays: 1430, type: "alat" },
      { title: "Penyadapan Perdana Karet S/2 d2", intervalDays: 1460, type: "panen" }
    ]
  },
  kelapa: {
    costPerHa: { bibit: 4800000, pupuk: 4500000, pestisida: 2400000, tenagaKerja: 4800000, alat: 1500000, lain: 1200000 },
    projectedYieldPerHa: 7200, defaultSalePrice: 3200, unitLabel: "Butir Kelapa",
    taskTemplates: [
      { title: "Pembuatan Lubang Tanam 80x80x80 cm & Dolomit", intervalDays: 14, type: "penyiangan" },
      { title: "Penanaman Bibit Kelapa & Pupuk Dasar", intervalDays: 30, type: "pemupukan" },
      { title: "Pemupukan NPK + Garam Dapur (NaCl) Tahap I", intervalDays: 120, type: "pemupukan" },
      { title: "Penyemprotan Hama Brontispa & Kumbang Kelapa", intervalDays: 180, type: "pestisida" },
      { title: "Pemupukan NPK + NaCl Tahap II", intervalDays: 300, type: "pemupukan" },
      { title: "Pembersihan Mahkota & Seludang Kering Pohon", intervalDays: 450, type: "pruning" },
      { title: "Panen Perdana Buah Kelapa", intervalDays: 1080, type: "panen" }
    ]
  },
  hortikultura: {
    costPerHa: { bibit: 4500000, pupuk: 11200000, pestisida: 8500000, tenagaKerja: 14000000, alat: 5500000, lain: 2500000 },
    projectedYieldPerHa: 15000, defaultSalePrice: 28000, unitLabel: "Kg Cabai/Tomat",
    taskTemplates: [
      { title: "Pengolahan Tanah, Aplikasi Kapur Dolomit & Mulsa", intervalDays: 1, type: "penyiangan" },
      { title: "Penyemaian Benih di Tray Semai", intervalDays: 5, type: "pemupukan" },
      { title: "Pindah Tanam (Transplanting) ke Bedengan", intervalDays: 25, type: "penyiangan" },
      { title: "Pemasangan Ajir Bambu & Tali Rafia Penyangga", intervalDays: 32, type: "alat" },
      { title: "Pemupukan Susulan Kocor NPK 16-16-16 (Tahap I)", intervalDays: 35, type: "pemupukan" },
      { title: "Penyemprotan Abamektin (Cegah Thrips & Keriting)", intervalDays: 40, type: "pestisida" },
      { title: "Perempelan Tunas Air di Bawah Cabang Y", intervalDays: 45, type: "pruning" },
      { title: "Pemupukan Kocor KNO3 + Kalsium (Pembentukan Buah)", intervalDays: 55, type: "pemupukan" },
      { title: "Panen Perdana (Petik ke-1)", intervalDays: 80, type: "panen" },
      { title: "Panen Berkala (Petik ke-2 hingga ke-15)", intervalDays: 85, type: "panen" }
    ]
  }
};

/* ==========================================================================
   5. LOCAL STORAGE HELPERS
   ========================================================================== */
const USERS_KEY = "sukses_tani_all_users";
const ACTIVE_USER_KEY = "sukses_tani_active_user_id";

const DEMO_USERS = [
  {
    id: "demo_budi",
    username: "pak_budi",
    fullname: "Pak Budi Santoso",
    password: "123",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80",
    commodity: "sawit",
    landSize: 2.0,
    lang: "auto"
  },
  {
    id: "demo_siti",
    username: "bu_siti",
    fullname: "Bu Siti Rahmah",
    password: "123",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    commodity: "hortikultura",
    landSize: 0.5,
    lang: "auto"
  }
];

function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) {
      localStorage.setItem(USERS_KEY, JSON.stringify(DEMO_USERS));
      return DEMO_USERS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEMO_USERS;
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getActiveUserId() {
  return localStorage.getItem(ACTIVE_USER_KEY) || "";
}

function setActiveUserId(id) {
  if (id) {
    localStorage.setItem(ACTIVE_USER_KEY, id);
  } else {
    localStorage.removeItem(ACTIVE_USER_KEY);
  }
}

function getActiveUser() {
  const users = getUsers();
  const activeId = getActiveUserId();
  if (!activeId) return null;
  return users.find(u => u.id === activeId) || null;
}

function registerUser(fullname, username, password) {
  const users = getUsers();
  const cleanUsername = username.toLowerCase().trim();
  
  if (users.some(u => u.username === cleanUsername)) {
    return { success: false, message: "Username sudah terdaftar! Gunakan username lain." };
  }

  if (!password || password.length < 3) {
    return { success: false, message: "Kata sandi / PIN minimal 3 karakter!" };
  }

  const newUser = {
    id: "user_" + Date.now(),
    username: cleanUsername,
    fullname: fullname.trim() || username,
    password: password.trim(),
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${cleanUsername}`,
    commodity: "sawit",
    landSize: 1.0,
    lang: "auto"
  };

  users.push(newUser);
  saveUsers(users);
  setActiveUserId(newUser.id);
  return { success: true, user: newUser };
}

function loginUser(username, password) {
  const users = getUsers();
  const cleanUsername = username.toLowerCase().trim();
  const found = users.find(u => u.username === cleanUsername);
  
  if (!found) {
    return { success: false, message: "Username tidak ditemukan! Silakan daftar akun baru." };
  }

  if (found.password && found.password !== password.trim()) {
    return { success: false, message: "Kata sandi / PIN rahasia salah! Akses ditolak." };
  }

  setActiveUserId(found.id);
  return { success: true, user: found };
}

function updateUserProfile(userId, updates) {
  const users = getUsers();
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    saveUsers(users);
    return users[index];
  }
  return null;
}

function getUserData(userId) {
  if (!userId) return null;
  try {
    const raw = localStorage.getItem(`sukses_tani_${userId}_data`);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  
  return {
    commodity: "sawit",
    landSize: 1.0,
    plantingDate: new Date().toISOString().split("T")[0],
    tasks: [],
    customRabItems: [], // Dynamic custom RAB items
    financials: {
      bibit: 7150000, pupuk: 9500000, pestisida: 3200000,
      tenagaKerja: 8400000, alat: 2500000, lain: 2000000,
      harvestQty: 22.0, unitPrice: 2450000
    },
    cycleArchives: []
  };
}

function saveUserData(userId, data) {
  if (!userId) return;
  try {
    localStorage.setItem(`sukses_tani_${userId}_data`, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}

/* ==========================================================================
   6. FORMATTERS & SCHEDULE ENGINE
   ========================================================================== */
function formatRupiah(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

function formatDateIndonesian(dateString) {
  if (!dateString) return "-";
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  } catch (e) {
    return dateString;
  }
}

function getTaskStatus(dueDateString, isCompleted) {
  if (isCompleted) return "completed";
  if (!dueDateString) return "normal";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(dueDateString);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "overdue";
  if (diffDays <= 3) return "upcoming";
  return "normal";
}

function generateScheduleTasks(commodityKey, plantingDateString) {
  const commodityDef = agronomicDefaults[commodityKey] || agronomicDefaults.sawit;
  const plantingDate = new Date(plantingDateString);

  return commodityDef.taskTemplates.map((template, index) => {
    const taskDate = new Date(plantingDate);
    taskDate.setDate(taskDate.getDate() + template.intervalDays);
    
    return {
      id: `task_${Date.now()}_${index}`,
      title: template.title,
      dueDate: taskDate.toISOString().split("T")[0],
      intervalDays: template.intervalDays,
      type: template.type,
      completed: false,
      completedAt: null
    };
  });
}

/* ==========================================================================
   7. MAIN REACT APP COMPONENT
   ========================================================================== */
function App() {
  const [activeUser, setActiveUser] = useState(getActiveUser());
  const [langPreference, setLangPreference] = useState(activeUser?.lang || "auto");
  const [userData, setUserData] = useState(activeUser ? getUserData(activeUser.id) : null);
  const [currentNav, setCurrentNav] = useState("home");
  const [showProfileModal, setShowProfileModal] = useState(false);

  const effectiveLang = useMemo(() => {
    if (langPreference === "auto" || !translations[langPreference]) {
      return detectBrowserLanguage();
    }
    return langPreference;
  }, [langPreference]);

  const t = useMemo(() => translations[effectiveLang] || translations.id, [effectiveLang]);

  useEffect(() => {
    if (activeUser) {
      setUserData(getUserData(activeUser.id));
      if (activeUser.lang) setLangPreference(activeUser.lang);
    } else {
      setUserData(null);
    }
  }, [activeUser?.id]);

  const updateUserDataState = (newUserData) => {
    setUserData(newUserData);
    if (activeUser) {
      saveUserData(activeUser.id, newUserData);
    }
  };

  const handleLangChange = (newLangPref) => {
    setLangPreference(newLangPref);
    if (activeUser) {
      const updated = updateUserProfile(activeUser.id, { lang: newLangPref });
      if (updated) setActiveUser(updated);
    }
  };

  const taskAlerts = useMemo(() => {
    if (!userData || !userData.tasks) return { overdue: 0, upcoming: 0 };
    let overdue = 0;
    let upcoming = 0;

    (userData.tasks || []).forEach(task => {
      const status = getTaskStatus(task.dueDate, task.completed);
      if (status === "overdue") overdue++;
      if (status === "upcoming") upcoming++;
    });

    return { overdue, upcoming };
  }, [userData?.tasks]);

  if (!activeUser || !userData) {
    return h(LoginModal, { 
      t, 
      onClose: null, 
      onSuccess: (user) => {
        setActiveUser(user);
        setUserData(getUserData(user.id));
      }
    });
  }

  return h('div', { className: 'app-root' },
    // HEADER NAVIGATION
    h('header', { className: 'header-nav no-print' },
      h('div', { className: 'header-content' },
        h('a', { className: 'brand-logo', href: '#', onClick: (e) => { e.preventDefault(); setCurrentNav('home'); } },
          h('div', { className: 'logo-badge' }, '🌾'),
          h('div', null,
            h('div', { className: 'brand-title' }, t.appTitle),
            h('div', { style: { fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 } }, t.appSub)
          )
        ),

        // Desktop Nav Tabs
        h('nav', { className: 'desktop-nav-tabs' },
          h('button', { className: `desktop-tab-btn ${currentNav === 'home' ? 'active' : ''}`, onClick: () => setCurrentNav('home') }, h('span', null, '🏠'), ' ', t.navHome),
          h('button', { className: `desktop-tab-btn ${currentNav === 'budidaya' ? 'active' : ''}`, onClick: () => setCurrentNav('budidaya') }, h('span', null, '🌿'), ' ', t.navBudidaya),
          h('button', { className: `desktop-tab-btn ${currentNav === 'perencanaan' ? 'active' : ''}`, onClick: () => setCurrentNav('perencanaan') }, h('span', null, '📐'), ' ', t.navPerencanaan),
          h('button', { className: `desktop-tab-btn ${currentNav === 'penjadwalan' ? 'active' : ''}`, onClick: () => setCurrentNav('penjadwalan') }, 
            h('span', null, '📅'), ' ', t.navPenjadwalan,
            (taskAlerts.overdue > 0 || taskAlerts.upcoming > 0) && h('span', { className: 'badge badge-overdue', style: { fontSize: '0.68rem', padding: '2px 6px', marginLeft: '6px' } }, taskAlerts.overdue + taskAlerts.upcoming)
          ),
          h('button', { className: `desktop-tab-btn ${currentNav === 'keuangan' ? 'active' : ''}`, onClick: () => setCurrentNav('keuangan') }, h('span', null, '💰'), ' ', t.navKeuangan)
        ),

        // Right Actions
        h('div', { className: 'nav-right-actions' },
          h('select', { className: 'lang-selector', value: langPreference, onChange: (e) => handleLangChange(e.target.value) },
            h('option', { value: 'auto' }, `🌐 Auto (${detectBrowserLanguage().toUpperCase()})`),
            h('option', { value: 'id' }, '🇮🇩 ID'),
            h('option', { value: 'en' }, '🇬🇧 EN')
          ),

          h('div', { className: 'user-profile-badge', onClick: () => setShowProfileModal(true) },
            h('img', { src: activeUser.avatar, alt: 'Avatar', className: 'user-avatar-img' }),
            h('span', { className: 'user-name-text' }, activeUser.fullname || activeUser.username),
            h('span', { style: { fontSize: '0.8rem', color: 'var(--text-muted)' } }, '⚙️')
          )
        )
      )
    ),

    // MAIN VIEW CONTENT
    h('main', { className: 'app-container' },
      currentNav === 'home' && h(HomeView, { t, activeUser, userData, updateUserData: updateUserDataState, taskAlerts, setCurrentNav }),
      currentNav === 'budidaya' && h(BudidayaView, { t, userData, updateUserData: updateUserDataState, setCurrentNav }),
      currentNav === 'perencanaan' && h(PerencanaanView, { t, userData, updateUserData: updateUserDataState }),
      currentNav === 'penjadwalan' && h(PenjadwalanView, { t, userData, updateUserData: updateUserDataState }),
      currentNav === 'keuangan' && h(KeuanganView, { t, userData, updateUserData: updateUserDataState })
    ),

    // MOBILE BOTTOM NAV
    h('nav', { className: 'mobile-bottom-nav no-print' },
      h('div', { className: 'mobile-nav-items' },
        h('button', { className: `mobile-nav-btn ${currentNav === 'home' ? 'active' : ''}`, onClick: () => setCurrentNav('home') }, h('i', null, '🏠'), h('span', null, t.navHome)),
        h('button', { className: `mobile-nav-btn ${currentNav === 'budidaya' ? 'active' : ''}`, onClick: () => setCurrentNav('budidaya') }, h('i', null, '🌿'), h('span', null, 'Budidaya')),
        h('button', { className: `mobile-nav-btn ${currentNav === 'perencanaan' ? 'active' : ''}`, onClick: () => setCurrentNav('perencanaan') }, h('i', null, '📐'), h('span', null, 'RAB')),
        h('button', { className: `mobile-nav-btn ${currentNav === 'penjadwalan' ? 'active' : ''}`, onClick: () => setCurrentNav('penjadwalan') }, h('i', null, '📅'), h('span', null, 'Jadwal')),
        h('button', { className: `mobile-nav-btn ${currentNav === 'keuangan' ? 'active' : ''}`, onClick: () => setCurrentNav('keuangan') }, h('i', null, '💰'), h('span', null, 'Keuangan'))
      )
    ),

    // PROFILE MODAL
    showProfileModal && activeUser && h(ProfileModal, {
      t, activeUser, langPreference, onLangChange: handleLangChange,
      onClose: () => setShowProfileModal(false),
      onUpdate: (updatedUser) => { setActiveUser(updatedUser); setShowProfileModal(false); },
      onLogout: () => { setActiveUserId(""); setActiveUser(null); setShowProfileModal(false); }
    })
  );
}

/* ==========================================================================
   VIEW COMPONENTS
   ========================================================================== */
function HomeView({ t, activeUser, userData, updateUserData, taskAlerts, setCurrentNav }) {
  const activeCommodityDef = commoditiesGuideData[userData.commodity] || commoditiesGuideData.sawit;
  const financials = userData.financials || {};
  const totalExpense = (financials.bibit||0) + (financials.pupuk||0) + (financials.pestisida||0) + 
                       (financials.tenagaKerja||0) + (financials.alat||0) + (financials.lain||0);
  const totalRevenue = (financials.harvestQty || 0) * (financials.unitPrice || 0);
  const netProfit = totalRevenue - totalExpense;

  return h('div', { className: 'fade-in' },
    h('div', { className: 'card card-green-gradient', style: { padding: '24px', marginBottom: '20px' } },
      h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' } },
        h('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
          h('img', { 
            src: activeUser?.avatar || "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80", 
            alt: 'Avatar', 
            style: { width: '60px', height: '60px', borderRadius: '50%', border: '3px solid var(--yellow-400)', objectFit: 'cover' } 
          }),
          h('div', null,
            h('span', { className: 'badge badge-pink', style: { marginBottom: '6px' } }, t.activeUser),
            h('h2', { style: { fontSize: '1.6rem', fontWeight: 800 } }, `${t.welcomeTitle}, ${activeUser?.fullname || activeUser?.username || "Petani"}!`),
            h('p', { style: { opacity: 0.9, fontSize: '0.9rem', marginTop: '2px' } },
              'Komoditas Aktif: ', h('strong', null, `${activeCommodityDef.name} ${activeCommodityDef.emoji}`), ` (${userData.landSize} Ha)`
            )
          )
        ),
        h('button', { className: 'btn btn-yellow', onClick: () => setCurrentNav('penjadwalan') }, '📅 ', t.addNewPlanting)
      )
    ),

    taskAlerts.overdue > 0 && h('div', { className: 'alert-banner alert-banner-danger' },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
        h('span', { style: { fontSize: '1.5rem' } }, '⚠️'),
        h('div', null,
          h('strong', { style: { fontSize: '0.98rem' } }, `${taskAlerts.overdue} Kegiatan Terlambat!`),
          h('div', { style: { fontSize: '0.85rem' } }, 'Ada jadwal budidaya yang melewati tanggal batas. Mohon periksa dan tandai selesai.')
        )
      ),
      h('button', { className: 'btn btn-sm btn-primary', onClick: () => setCurrentNav('penjadwalan') }, 'Lihat Jadwal')
    ),

    taskAlerts.upcoming > 0 && h('div', { className: 'alert-banner alert-banner-warning' },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
        h('span', { style: { fontSize: '1.5rem' } }, '🔔'),
        h('div', null,
          h('strong', { style: { fontSize: '0.98rem' } }, `${taskAlerts.upcoming} Kegiatan Mendatang (H-3)!`),
          h('div', { style: { fontSize: '0.85rem' } }, 'Siapkan pemupukan, penyemprotan, atau peralatan budidaya Anda.')
        )
      ),
      h('button', { className: 'btn btn-sm btn-yellow', onClick: () => setCurrentNav('penjadwalan') }, 'Buka Kalender')
    ),

    taskAlerts.overdue === 0 && taskAlerts.upcoming === 0 && h('div', { className: 'alert-banner alert-banner-info' },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
        h('span', { style: { fontSize: '1.5rem' } }, '✨'),
        h('div', { style: { fontSize: '0.9rem', fontWeight: 600 } }, t.noUrgentAlerts)
      )
    ),

    h('div', { className: 'stats-grid' },
      h('div', { className: 'stat-card' },
        h('div', { className: 'stat-icon stat-icon-green' }, '🌾'),
        h('div', null,
          h('div', { className: 'stat-value' }, `${userData.landSize} Ha`),
          h('div', { className: 'stat-label' }, t.activeLandSize)
        )
      ),
      h('div', { className: 'stat-card' },
        h('div', { className: 'stat-icon stat-icon-yellow' }, '🔔'),
        h('div', null,
          h('div', { className: 'stat-value' }, taskAlerts.upcoming),
          h('div', { className: 'stat-label' }, t.upcomingTasksCount)
        )
      ),
      h('div', { className: 'stat-card', style: { borderColor: taskAlerts.overdue > 0 ? '#f87171' : 'var(--border-light)' } },
        h('div', { className: 'stat-icon', style: { background: '#fef2f2', color: '#dc2626' } }, '⚠️'),
        h('div', null,
          h('div', { className: 'stat-value', style: { color: taskAlerts.overdue > 0 ? '#dc2626' : 'inherit' } }, taskAlerts.overdue),
          h('div', { className: 'stat-label' }, t.overdueTasksCount)
        )
      ),
      h('div', { className: 'stat-card' },
        h('div', { className: 'stat-icon stat-icon-pink' }, '💰'),
        h('div', null,
          h('div', { className: 'stat-value', style: { fontSize: '1.1rem', color: netProfit >= 0 ? 'var(--green-600)' : '#dc2626' } }, formatRupiah(netProfit)),
          h('div', { className: 'stat-label' }, t.lastProfitLoss)
        )
      )
    ),

    h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' } },
      h('div', { className: 'card card-yellow-accent' },
        h('h3', { style: { fontSize: '1.15rem', fontWeight: 800, marginBottom: '10px' } }, '🌿 ', t.selectCommodity),
        h('p', { style: { fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' } }, 'Pilih komoditas yang sedang Anda garap saat ini untuk menyesuaikan panduan dan penjadwalan.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' } },
          Object.keys(commoditiesGuideData).map(key => {
            const item = commoditiesGuideData[key];
            const isSelected = userData.commodity === key;
            return h('div', {
              key,
              className: `commodity-card ${isSelected ? 'selected' : ''}`,
              onClick: () => updateUserData({ ...userData, commodity: key }),
              style: { padding: '10px' }
            },
              h('span', { className: 'commodity-emoji' }, item.emoji),
              h('div', { className: 'commodity-name', style: { fontSize: '0.85rem' } }, item.name)
            );
          })
        )
      ),

      h('div', { className: 'card card-pink-accent' },
        h('h3', { style: { fontSize: '1.15rem', fontWeight: 800, marginBottom: '10px' } }, '⚡ ', t.quickActions),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
          h('button', { className: 'btn btn-primary', onClick: () => setCurrentNav('penjadwalan') }, '📅 Kelola Jadwal & Alarm H-3'),
          h('button', { className: 'btn btn-yellow', onClick: () => setCurrentNav('perencanaan') }, '📐 Buat Perencanaan Biaya (RAB Custom)'),
          h('button', { className: 'btn btn-pink', onClick: () => setCurrentNav('keuangan') }, '💰 Catat Hasil Panen & Lihat Laba Rugi'),
          h('button', { className: 'btn btn-secondary', onClick: () => setCurrentNav('budidaya') }, `📖 Baca Teknis Budidaya ${activeCommodityDef.name}`)
        )
      )
    )
  );
}

function BudidayaView({ t, userData, updateUserData, setCurrentNav }) {
  const [selectedCommodity, setSelectedCommodity] = useState(userData.commodity || "sawit");
  const guide = commoditiesGuideData[selectedCommodity] || commoditiesGuideData.sawit;

  return h('div', { className: 'fade-in' },
    h('div', { className: 'card card-yellow-accent', style: { marginBottom: '20px' } },
      h('h2', { style: { fontSize: '1.5rem', fontWeight: 800, color: 'var(--green-900)' } }, '🌿 Panduan Teknis & Kebutuhan Sarana Budidaya'),
      h('p', { style: { fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' } }, 'Petunjuk langkah agronomis dan daftar sarana produksi (input tani) yang harus dibeli/dipersiapkan.'),

      h('div', { style: { display: 'flex', gap: '10px', marginTop: '16px', overflowX: 'auto', paddingBottom: '6px' } },
        Object.keys(commoditiesGuideData).map(key => {
          const item = commoditiesGuideData[key];
          const active = selectedCommodity === key;
          return h('button', {
            key,
            className: `btn ${active ? 'btn-primary' : 'btn-secondary'}`,
            style: { borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap' },
            onClick: () => setSelectedCommodity(key)
          }, `${item.emoji} ${item.name}`);
        })
      )
    ),

    h('div', { className: 'card card-pink-accent', style: { marginBottom: '20px' } },
      h('h3', { style: { fontSize: '1.25rem', fontWeight: 800, color: 'var(--pink-700)', marginBottom: '12px' } },
        `📦 Daftar Input & Saprodi yang Harus Dibeli / Dipersiapkan (${guide.name})`
      ),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' } },
        (guide.requiredInputs || []).map((req, idx) => h('div', {
          key: idx,
          style: {
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--surface-card)',
            border: '1.5px solid var(--pink-200)',
            boxShadow: 'var(--shadow-sm)'
          }
        },
          h('div', { style: { fontWeight: 800, fontSize: '0.98rem', color: 'var(--green-800)', marginBottom: '4px' } }, req.category),
          h('div', { style: { fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' } }, req.item),
          h('div', { style: { fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', fontStyle: 'italic' } }, `Estimasi kebutuhan: ${req.qty}`)
        ))
      )
    ),

    h('div', { className: 'card' },
      h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderBottom: '2px solid var(--green-100)', paddingBottom: '16px', marginBottom: '20px' } },
        h('div', { style: { display: 'flex', alignItems: 'center', gap: '14px' } },
          h('span', { style: { fontSize: '3rem' } }, guide.emoji),
          h('div', null,
            h('h3', { style: { fontSize: '1.4rem', fontWeight: 800 } }, guide.name),
            h('p', { style: { fontSize: '0.88rem', color: 'var(--text-muted)' } }, guide.description)
          )
        ),
        h('button', { 
          className: 'btn btn-yellow btn-sm',
          onClick: () => {
            updateUserData({ ...userData, commodity: selectedCommodity });
            setCurrentNav('penjadwalan');
          }
        }, `📅 Buat Jadwal Tanam ${guide.name}`)
      ),

      h('h3', { style: { fontSize: '1.1rem', fontWeight: 800, marginBottom: '14px', color: 'var(--green-800)' } }, '📋 Tahapan Langkah Budidaya Agronomis'),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
        guide.steps.map((step, idx) => h('div', {
          key: idx,
          style: {
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-main)',
            borderLeft: '4px solid var(--green-500)',
            boxShadow: 'var(--shadow-sm)'
          }
        },
          h('h4', { style: { fontSize: '1.05rem', fontWeight: 800, color: 'var(--green-800)', marginBottom: '6px' } }, step.phase),
          h('p', { style: { fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6 } }, step.detail)
        ))
      )
    )
  );
}

/* ==========================================================================
   VIEW 3: PERENCANAAN BIAYA (RAB) WITH DYNAMIC MANUAL EXPENSE ITEMS
   ========================================================================== */
function PerencanaanView({ t, userData, updateUserData }) {
  const [landArea, setLandArea] = useState(userData.landSize || 1.0);
  const [commodityKey, setCommodityKey] = useState(userData.commodity || "sawit");
  
  const defaults = agronomicDefaults[commodityKey] || agronomicDefaults.sawit;
  const commodityDef = commoditiesGuideData[commodityKey] || commoditiesGuideData.sawit;

  const [costOverrides, setCostOverrides] = useState(defaults.costPerHa);
  const [salePriceOverride, setSalePriceOverride] = useState(defaults.defaultSalePrice);

  // Dynamic Custom Cost Items (Biaya Lain-lain / Tambahan Manual)
  const [customItems, setCustomItems] = useState(userData.customRabItems || []);
  const [showAddCustomForm, setShowAddCustomForm] = useState(false);
  const [customItemName, setCustomItemName] = useState("");
  const [customItemCostPerHa, setCustomItemCostPerHa] = useState("");

  useEffect(() => {
    const def = agronomicDefaults[commodityKey] || agronomicDefaults.sawit;
    setCostOverrides(def.costPerHa);
    setSalePriceOverride(def.defaultSalePrice);
  }, [commodityKey]);

  // Scaled standard cost calculations
  const scaledCosts = useMemo(() => {
    return {
      bibit: (costOverrides.bibit || 0) * landArea,
      pupuk: (costOverrides.pupuk || 0) * landArea,
      pestisida: (costOverrides.pestisida || 0) * landArea,
      tenagaKerja: (costOverrides.tenagaKerja || 0) * landArea,
      alat: (costOverrides.alat || 0) * landArea,
      lain: (costOverrides.lain || 0) * landArea
    };
  }, [costOverrides, landArea]);

  // Scaled custom items calculation
  const totalCustomItemsCost = useMemo(() => {
    return customItems.reduce((sum, item) => sum + ((parseFloat(item.costPerHa) || 0) * landArea), 0);
  }, [customItems, landArea]);

  // Total RAB Cost = Standard Costs + Custom Costs
  const totalCost = useMemo(() => {
    const stdSum = Object.values(scaledCosts).reduce((a, b) => a + b, 0);
    return stdSum + totalCustomItemsCost;
  }, [scaledCosts, totalCustomItemsCost]);

  const projectedYield = defaults.projectedYieldPerHa * landArea;
  const projectedRevenue = projectedYield * salePriceOverride;
  const projectedNetProfit = projectedRevenue - totalCost;

  const handleCostChange = (field, val) => {
    const num = parseFloat(val) || 0;
    setCostOverrides(prev => ({ ...prev, [field]: num }));
  };

  const handleAddCustomRabItem = (e) => {
    e.preventDefault();
    if (!customItemName.trim() || isNaN(parseFloat(customItemCostPerHa))) return;

    const newItem = {
      id: `custom_rab_${Date.now()}`,
      name: customItemName.trim(),
      costPerHa: parseFloat(customItemCostPerHa) || 0
    };

    const updatedList = [...customItems, newItem];
    setCustomItems(updatedList);
    updateUserData({ ...userData, customRabItems: updatedList });

    setCustomItemName("");
    setCustomItemCostPerHa("");
    setShowAddCustomForm(false);
  };

  const handleDeleteCustomRabItem = (id) => {
    const updatedList = customItems.filter(item => item.id !== id);
    setCustomItems(updatedList);
    updateUserData({ ...userData, customRabItems: updatedList });
  };

  return h('div', { className: 'fade-in' },
    h('div', { className: 'card card-pink-accent no-print' },
      h('h2', { style: { fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' } }, '📐 ', t.rabTitle),
      h('p', { style: { fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' } }, 'Masukkan luas lahan riil Anda (misal: 0.25 Ha, 0.5 Ha, 2 Ha). Anda juga dapat menambah biaya custom manual.'),

      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' } },
        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.selectCommodity),
          h('select', {
            className: 'form-select',
            value: commodityKey,
            onChange: (e) => {
              setCommodityKey(e.target.value);
              updateUserData({ ...userData, commodity: e.target.value });
            }
          },
            Object.keys(commoditiesGuideData).map(k => h('option', { key: k, value: k }, commoditiesGuideData[k].name))
          )
        ),

        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.inputLandArea),
          h('input', {
            type: 'number', step: '0.05', min: '0.1', className: 'form-input',
            value: landArea,
            onChange: (e) => {
              const val = parseFloat(e.target.value) || 0.1;
              setLandArea(val);
              updateUserData({ ...userData, landSize: val });
            }
          })
        ),

        h('div', { className: 'form-group', style: { display: 'flex', alignItems: 'flex-end' } },
          h('button', { className: 'btn btn-yellow', style: { width: '100%' }, onClick: () => window.print() }, '🖨️ ', t.printRABBtn)
        )
      )
    ),

    h('div', { className: 'card', style: { borderTop: '4px solid var(--green-600)' } },
      h('div', { style: { textAlign: 'center', marginBottom: '24px', borderBottom: '2px solid var(--border-light)', paddingBottom: '16px' } },
        h('h2', { style: { fontSize: '1.6rem', fontWeight: 800, color: 'var(--green-900)' } }, 'RENCANA ANGGARAN BIAYA (RAB) BUDIDAYA'),
        h('p', { style: { fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' } }, `Komoditas: ${commodityDef.name} | Luas Lahan: ${landArea} Hektare (Ha)`)
      ),

      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' } },
        h('h3', { style: { fontSize: '1.1rem', fontWeight: 800 } }, '1. Rincian Estimasi Biaya Produksi (Pengeluaran)'),
        h('button', { className: 'btn btn-sm btn-pink no-print', onClick: () => setShowAddCustomForm(!showAddCustomForm) }, t.addCustomItemBtn)
      ),

      // FORM TAMBAH ITEM BIAYA CUSTOM MANUAL
      showAddCustomForm && h('form', { onSubmit: handleAddCustomRabItem, className: 'no-print', style: { padding: '16px', background: 'var(--pink-50)', borderRadius: 'var(--radius-md)', marginBottom: '16px' } },
        h('h4', { style: { fontSize: '1rem', fontWeight: 800, marginBottom: '10px', color: 'var(--pink-700)' } }, 'Tambah Item Biaya Kustom Baru ke RAB'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' } },
          h('input', {
            type: 'text', className: 'form-input',
            placeholder: 'Nama biaya (misal: Sewa Truk Angkut, Pembangunan Saung...)',
            value: customItemName,
            onChange: (e) => setCustomItemName(e.target.value),
            required: true
          }),
          h('input', {
            type: 'number', className: 'form-input',
            placeholder: 'Estimasi Biaya per Hektare (Rp)...',
            value: customItemCostPerHa,
            onChange: (e) => setCustomItemCostPerHa(e.target.value),
            required: true
          }),
          h('button', { type: 'submit', className: 'btn btn-primary' }, 'Simpan Item Biaya')
        )
      ),

      // RAB TABLE
      h('table', { style: { width: '100%', borderCollapse: 'collapse', marginBottom: '24px' } },
        h('thead', null,
          h('tr', { style: { background: 'var(--green-50)', textAlign: 'left', borderBottom: '2px solid var(--green-200)' } },
            h('th', { style: { padding: '10px' } }, 'Komponen Biaya'),
            h('th', { style: { padding: '10px' } }, 'Standar Biaya / Ha (Rp)'),
            h('th', { style: { padding: '10px', textAlign: 'right' } }, `Total Biaya Lahan (${landArea} Ha)`)
          )
        ),
        h('tbody', null,
          // STANDARD ITEMS
          [
            { key: 'bibit', label: t.bibitCost },
            { key: 'pupuk', label: t.pupukCost },
            { key: 'pestisida', label: t.pestisidaCost },
            { key: 'tenagaKerja', label: t.tenagaKerjaCost },
            { key: 'alat', label: t.alatCost },
            { key: 'lain', label: t.lainCost }
          ].map(item => h('tr', { key: item.key, style: { borderBottom: '1px solid var(--border-light)' } },
            h('td', { style: { padding: '10px', fontWeight: 600 } }, item.label),
            h('td', { style: { padding: '10px' } },
              h('input', {
                type: 'number', className: 'form-input no-print', style: { padding: '4px 8px', width: '160px' },
                value: costOverrides[item.key] || 0,
                onChange: (e) => handleCostChange(item.key, e.target.value)
              }),
              h('span', { className: 'print-only' }, `${formatRupiah(costOverrides[item.key])} / Ha`)
            ),
            h('td', { style: { padding: '10px', textAlign: 'right', fontWeight: 700 } }, formatRupiah(scaledCosts[item.key]))
          )),

          // CUSTOM MANUAL ITEMS ADDED BY USER
          customItems.map(item => {
            const itemTotal = (item.costPerHa || 0) * landArea;
            return h('tr', { key: item.id, style: { borderBottom: '1px solid var(--pink-200)', background: 'var(--pink-50)' } },
              h('td', { style: { padding: '10px', fontWeight: 700, color: 'var(--pink-700)' } },
                `➕ ${item.name} `,
                h('button', { 
                  className: 'btn btn-sm no-print', 
                  style: { background: '#fee2e2', color: '#dc2626', padding: '2px 6px', marginLeft: '8px' },
                  onClick: () => handleDeleteCustomRabItem(item.id)
                }, '🗑️')
              ),
              h('td', { style: { padding: '10px', fontWeight: 600 } }, `${formatRupiah(item.costPerHa)} / Ha`),
              h('td', { style: { padding: '10px', textAlign: 'right', fontWeight: 800, color: 'var(--pink-700)' } }, formatRupiah(itemTotal))
            );
          }),

          // TOTAL RAB ROW
          h('tr', { style: { background: 'var(--yellow-100)', fontWeight: 800, fontSize: '1.05rem' } },
            h('td', { colSpan: 2, style: { padding: '12px' } }, t.totalProjectedCost),
            h('td', { style: { padding: '12px', textAlign: 'right', color: 'var(--soil-800)' } }, formatRupiah(totalCost))
          )
        )
      ),

      h('h3', { style: { fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px' } }, '2. Proyeksi Hasil Panen & Potensi Keuntungan'),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' } },
        h('div', { style: { padding: '16px', background: 'var(--green-50)', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--green-200)' } },
          h('div', { style: { fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 } }, t.targetProductivity),
          h('div', { style: { fontSize: '1.4rem', fontWeight: 800, color: 'var(--green-800)', marginTop: '4px' } }, `${projectedYield.toLocaleString('id-ID')} ${defaults.unitLabel}`),
          h('div', { style: { fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' } }, `(Acuan standar: ${defaults.projectedYieldPerHa} ${defaults.unitLabel} / Ha)`)
        ),

        h('div', { style: { padding: '16px', background: 'var(--yellow-50)', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--yellow-400)' } },
          h('div', { style: { fontSize: '0.85rem', color: 'var(--soil-800)', fontWeight: 700 } }, 'Asumsi Harga Jual / Satuan'),
          h('div', { style: { marginTop: '6px' } },
            h('input', {
              type: 'number', className: 'form-input no-print',
              value: salePriceOverride,
              onChange: (e) => setSalePriceOverride(parseFloat(e.target.value) || 0)
            }),
            h('div', { className: 'print-only', style: { fontSize: '1.2rem', fontWeight: 800 } }, `${formatRupiah(salePriceOverride)} / ${defaults.unitLabel}`)
          )
        ),

        h('div', { style: { padding: '16px', background: 'var(--pink-50)', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--pink-400)' } },
          h('div', { style: { fontSize: '0.85rem', color: 'var(--pink-700)', fontWeight: 700 } }, t.projectedNetProfit),
          h('div', { style: { fontSize: '1.4rem', fontWeight: 800, color: projectedNetProfit >= 0 ? 'var(--green-700)' : '#dc2626', marginTop: '4px' } }, formatRupiah(projectedNetProfit)),
          h('div', { style: { fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' } }, `(Omset: ${formatRupiah(projectedRevenue)})`)
        )
      )
    )
  );
}

function PenjadwalanView({ t, userData, updateUserData }) {
  const [plantingDate, setPlantingDate] = useState(userData.plantingDate || new Date().toISOString().split("T")[0]);
  const [commodityKey, setCommodityKey] = useState(userData.commodity || "sawit");
  const [viewMode, setViewMode] = useState("list");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showCustomTaskForm, setShowCustomTaskForm] = useState(false);
  const [customTaskTitle, setCustomTaskTitle] = useState("");
  const [customTaskDate, setCustomTaskDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    if (!userData.tasks || userData.tasks.length === 0) {
      const generated = generateScheduleTasks(commodityKey, plantingDate);
      updateUserData({ ...userData, commodity: commodityKey, plantingDate, tasks: generated });
    }
  }, []);

  const handleGenerateSchedule = () => {
    const generated = generateScheduleTasks(commodityKey, plantingDate);
    updateUserData({ ...userData, commodity: commodityKey, plantingDate, tasks: generated });
  };

  const handleToggleTask = (taskId) => {
    const updated = (userData.tasks || []).map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString() : null };
      }
      return task;
    });
    updateUserData({ ...userData, tasks: updated });
  };

  const handleAddCustomTask = (e) => {
    e.preventDefault();
    if (!customTaskTitle.trim()) return;

    const newTask = {
      id: `task_custom_${Date.now()}`,
      title: customTaskTitle.trim(),
      dueDate: customTaskDate,
      intervalDays: 0,
      type: "manual",
      completed: false
    };

    const updated = [newTask, ...(userData.tasks || [])];
    updateUserData({ ...userData, tasks: updated });
    setCustomTaskTitle("");
    setShowCustomTaskForm(false);
  };

  const filteredTasks = useMemo(() => {
    return (userData.tasks || []).filter(task => {
      const status = getTaskStatus(task.dueDate, task.completed);
      if (filterStatus === "upcoming") return status === "upcoming";
      if (filterStatus === "overdue") return status === "overdue";
      if (filterStatus === "completed") return task.completed;
      return true;
    });
  }, [userData.tasks, filterStatus]);

  return h('div', { className: 'fade-in' },
    h('div', { className: 'card card-yellow-accent', style: { marginBottom: '20px' } },
      h('h2', { style: { fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' } }, '📅 Generator Penjadwalan Budidaya & Alarm'),
      h('p', { style: { fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' } }, 'Pilih tanggal tanam. Sistem akan membuat alur waktu kegiatan pemupukan, penyemprotan, dan panen lengkap dengan pengingat H-3.'),

      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' } },
        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.selectCommodity),
          h('select', { className: 'form-select', value: commodityKey, onChange: (e) => setCommodityKey(e.target.value) },
            Object.keys(commoditiesGuideData).map(k => h('option', { key: k, value: k }, commoditiesGuideData[k].name))
          )
        ),
        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.plantingDateLabel),
          h('input', { type: 'date', className: 'form-input', value: plantingDate, onChange: (e) => setPlantingDate(e.target.value) })
        ),
        h('div', { className: 'form-group', style: { display: 'flex', alignItems: 'flex-end' } },
          h('button', { className: 'btn btn-primary', style: { width: '100%' }, onClick: handleGenerateSchedule }, '⚡ ', t.generateScheduleBtn)
        )
      )
    ),

    h('div', { className: 'card' },
      h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' } },
        h('div', { style: { display: 'flex', gap: '6px', background: 'var(--green-50)', padding: '4px', borderRadius: 'var(--radius-md)' } },
          h('button', { className: `btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`, onClick: () => setViewMode('list') }, '📋 ', t.listView),
          h('button', { className: `btn btn-sm ${viewMode === 'calendar' ? 'btn-primary' : 'btn-secondary'}`, onClick: () => setViewMode('calendar') }, '📅 ', t.calendarView)
        ),

        h('div', { style: { display: 'flex', gap: '6px', overflowX: 'auto' } },
          h('button', { className: `btn btn-sm ${filterStatus === 'all' ? 'btn-yellow' : 'btn-secondary'}`, onClick: () => setFilterStatus('all') }, t.filterAll),
          h('button', { className: `btn btn-sm ${filterStatus === 'upcoming' ? 'btn-yellow' : 'btn-secondary'}`, onClick: () => setFilterStatus('upcoming') }, '🔔 ', t.filterUpcoming),
          h('button', { className: `btn btn-sm ${filterStatus === 'overdue' ? 'btn-pink' : 'btn-secondary'}`, onClick: () => setFilterStatus('overdue') }, '⚠️ ', t.filterOverdue),
          h('button', { className: `btn btn-sm ${filterStatus === 'completed' ? 'btn-primary' : 'btn-secondary'}`, onClick: () => setFilterStatus('completed') }, '✅ ', t.filterCompleted)
        ),

        h('button', { className: 'btn btn-sm btn-pink', onClick: () => setShowCustomTaskForm(!showCustomTaskForm) }, t.addCustomTask)
      ),

      showCustomTaskForm && h('form', { onSubmit: handleAddCustomTask, style: { padding: '16px', background: 'var(--pink-50)', borderRadius: 'var(--radius-md)', marginBottom: '16px' } },
        h('h4', { style: { fontSize: '1rem', fontWeight: 800, marginBottom: '10px' } }, 'Tambah Tugas Manual Baru'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' } },
          h('input', { type: 'text', className: 'form-input', placeholder: 'Misal: Beli pupuk NPK 50kg di toko tani...', value: customTaskTitle, onChange: (e) => setCustomTaskTitle(e.target.value), required: true }),
          h('input', { type: 'date', className: 'form-input', value: customTaskDate, onChange: (e) => setCustomTaskDate(e.target.value), required: true }),
          h('button', { type: 'submit', className: 'btn btn-primary' }, 'Simpan Tugas')
        )
      ),

      viewMode === 'list' && h('div', { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
        filteredTasks.length === 0 ? h('div', { style: { textAlign: 'center', padding: '30px', color: 'var(--text-muted)' } }, 'Tidak ada tugas pada filter ini.') :
        filteredTasks.map(task => {
          const status = getTaskStatus(task.dueDate, task.completed);
          return h('div', { key: task.id, className: `task-item ${task.completed ? 'completed' : ''}` },
            h('input', { type: 'checkbox', className: 'task-checkbox', checked: task.completed, onChange: () => handleToggleTask(task.id) }),
            h('div', { style: { flex: 1 } },
              h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' } },
                h('span', { className: 'task-title', style: { fontWeight: 800, fontSize: '0.98rem' } }, task.title),
                status === 'overdue' && h('span', { className: 'badge badge-overdue' }, 'TERLAMBAT ⚠️'),
                status === 'upcoming' && h('span', { className: 'badge badge-upcoming' }, 'MENDATANG (H-3) 🔔'),
                task.completed && h('span', { className: 'badge badge-completed' }, 'SELESAI ✅')
              ),
              h('div', { style: { fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' } },
                '📅 Target Tanggal: ', h('strong', null, formatDateIndonesian(task.dueDate)),
                task.intervalDays > 0 ? ` (${task.intervalDays} Hari setelah tanam)` : ''
              )
            )
          );
        })
      ),

      viewMode === 'calendar' && h(CalendarGrid, { tasks: userData.tasks || [], onToggleTask: handleToggleTask })
    )
  );
}

function CalendarGrid({ tasks, onToggleTask }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysHeader = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const calendarCells = [];

  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayTasks = tasks.filter(t => t.dueDate === dateStr);
    calendarCells.push({ date: d, dateStr, dayTasks });
  }

  return h('div', null,
    h('div', { style: { textAlign: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '10px' } },
      today.toLocaleDateString("id-ID", { month: "long", year: "numeric" })
    ),
    h('div', { className: 'calendar-grid' },
      daysHeader.map((dh, i) => h('div', { key: i, className: 'calendar-header-day' }, dh)),
      calendarCells.map((cell, idx) => {
        if (!cell) return h('div', { key: idx, className: 'calendar-cell', style: { background: 'transparent', border: 'none' } });
        
        const isToday = cell.date === today.getDate();
        return h('div', { key: idx, className: `calendar-cell ${isToday ? 'today' : ''}` },
          h('div', { className: 'calendar-date-num' }, cell.date),
          cell.dayTasks.map(t => {
            const status = getTaskStatus(t.dueDate, t.completed);
            let bg = 'var(--green-100)';
            if (status === 'overdue') bg = '#fee2e2';
            if (status === 'upcoming') bg = 'var(--yellow-200)';
            if (t.completed) bg = 'var(--border-light)';

            return h('div', {
              key: t.id,
              className: 'calendar-event-dot',
              style: { background: bg, fontWeight: 700 },
              onClick: () => onToggleTask(t.id),
              title: t.title
            }, t.completed ? '✓ ' : '', t.title);
          })
        );
      })
    )
  );
}

function KeuanganView({ t, userData, updateUserData }) {
  const [financials, setFinancials] = useState(userData.financials || {
    bibit: 7150000, pupuk: 9500000, pestisida: 3200000,
    tenagaKerja: 8400000, alat: 2500000, lain: 2000000,
    harvestQty: 22.0, unitPrice: 2450000
  });

  const [cycleName, setCycleName] = useState("");

  const totalExpense = useMemo(() => {
    return (parseFloat(financials.bibit)||0) + (parseFloat(financials.pupuk)||0) + 
           (parseFloat(financials.pestisida)||0) + (parseFloat(financials.tenagaKerja)||0) + 
           (parseFloat(financials.alat)||0) + (parseFloat(financials.lain)||0);
  }, [financials]);

  const totalRevenue = useMemo(() => {
    return (parseFloat(financials.harvestQty)||0) * (parseFloat(financials.unitPrice)||0);
  }, [financials]);

  const netProfit = totalRevenue - totalExpense;

  const handleChange = (field, val) => {
    const num = parseFloat(val) || 0;
    const updated = { ...financials, [field]: num };
    setFinancials(updated);
    updateUserData({ ...userData, financials: updated });
  };

  const handleSaveCycle = (e) => {
    e.preventDefault();
    if (!cycleName.trim()) return;

    const newArchive = {
      id: `cycle_${Date.now()}`,
      name: cycleName.trim(),
      date: new Date().toISOString(),
      commodity: userData.commodity,
      landSize: userData.landSize,
      totalExpense,
      totalRevenue,
      netProfit,
      financials: { ...financials }
    };

    const updatedArchives = [newArchive, ...(userData.cycleArchives || [])];
    updateUserData({ ...userData, cycleArchives: updatedArchives });
    setCycleName("");
    alert("Siklus berhasil disimpan ke Arsip!");
  };

  const handleDeleteArchive = (id) => {
    const updated = (userData.cycleArchives || []).filter(c => c.id !== id);
    updateUserData({ ...userData, cycleArchives: updated });
  };

  return h('div', { className: 'fade-in' },
    h('div', { className: 'card card-pink-accent', style: { marginBottom: '20px' } },
      h('h2', { style: { fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' } }, '💰 ', t.financialCalcTitle),
      h('p', { style: { fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' } }, 'Catat realisasi biaya aktual dan hasil penjualan panen Anda untuk mengetahui laba/rugi bersih usaha tani.'),

      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' } },
        h('div', { style: { background: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)' } },
          h('h3', { style: { fontSize: '1.05rem', fontWeight: 800, color: 'var(--soil-800)', marginBottom: '12px' } }, '1. Input Realisasi Biaya Produksi (Rp)'),

          [
            { key: 'bibit', label: t.bibitCost },
            { key: 'pupuk', label: t.pupukCost },
            { key: 'pestisida', label: t.pestisidaCost },
            { key: 'tenagaKerja', label: t.tenagaKerjaCost },
            { key: 'alat', label: t.alatCost },
            { key: 'lain', label: t.lainCost }
          ].map(item => h('div', { key: item.key, className: 'form-group' },
            h('label', { className: 'form-label' }, item.label),
            h('input', { type: 'number', className: 'form-input', value: financials[item.key] || 0, onChange: (e) => handleChange(item.key, e.target.value) })
          ))
        ),

        h('div', null,
          h('div', { style: { background: 'var(--green-50)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px', border: '1.5px solid var(--green-200)' } },
            h('h3', { style: { fontSize: '1.05rem', fontWeight: 800, color: 'var(--green-900)', marginBottom: '12px' } }, '2. Input Hasil Panen & Penjualan'),
            h('div', { className: 'form-group' },
              h('label', { className: 'form-label' }, t.actualYieldInput),
              h('input', { type: 'number', className: 'form-input', value: financials.harvestQty || 0, onChange: (e) => handleChange('harvestQty', e.target.value) })
            ),
            h('div', { className: 'form-group' },
              h('label', { className: 'form-label' }, t.salePriceInput),
              h('input', { type: 'number', className: 'form-input', value: financials.unitPrice || 0, onChange: (e) => handleChange('unitPrice', e.target.value) })
            )
          ),

          h('div', { style: { background: netProfit >= 0 ? 'var(--green-100)' : '#fee2e2', padding: '18px', borderRadius: 'var(--radius-md)', border: `2px solid ${netProfit >= 0 ? 'var(--green-500)' : '#f87171'}`, textAlign: 'center' } },
            h('div', { style: { fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' } }, 'STATUS KEUANGAN'),
            h('div', { style: { fontSize: '1.4rem', fontWeight: 800, color: netProfit >= 0 ? 'var(--green-800)' : '#dc2626', margin: '4px 0' } }, netProfit >= 0 ? t.statusUntung : t.statusRugi),

            h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px', textAlign: 'left', background: 'white', padding: '10px', borderRadius: '8px' } },
              h('div', null,
                h('div', { style: { fontSize: '0.75rem', color: 'var(--text-muted)' } }, t.totalRevenue),
                h('div', { style: { fontWeight: 800, color: 'var(--green-700)' } }, formatRupiah(totalRevenue))
              ),
              h('div', null,
                h('div', { style: { fontSize: '0.75rem', color: 'var(--text-muted)' } }, t.totalExpense),
                h('div', { style: { fontWeight: 800, color: '#dc2626' } }, formatRupiah(totalExpense))
              )
            ),

            h('div', { style: { marginTop: '10px', fontSize: '1.2rem', fontWeight: 800 } },
              `${t.netProfitLoss}: `, h('span', { style: { color: netProfit >= 0 ? 'var(--green-800)' : '#dc2626' } }, formatRupiah(netProfit))
            )
          ),

          h('form', { onSubmit: handleSaveCycle, style: { marginTop: '16px', display: 'flex', gap: '10px' } },
            h('input', {
              type: 'text', className: 'form-input',
              placeholder: 'Nama Siklus, misal: Siklus Panen Sawit Q1 2026...',
              value: cycleName, onChange: (e) => setCycleName(e.target.value), required: true
            }),
            h('button', { type: 'submit', className: 'btn btn-yellow', style: { whiteSpace: 'nowrap' } }, '💾 ', t.saveCycleBtn)
          )
        )
      )
    ),

    h('div', { className: 'card' },
      h('h3', { style: { fontSize: '1.2rem', fontWeight: 800, marginBottom: '14px' } }, '🗂️ ', t.cycleArchivesTitle),
      (userData.cycleArchives || []).length === 0 ? h('div', { style: { textAlign: 'center', padding: '20px', color: 'var(--text-muted)' } }, t.noCycleSaved) :
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' } },
        userData.cycleArchives.map(cycle => h('div', {
          key: cycle.id,
          style: { padding: '14px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-light)', background: 'var(--surface-card)' }
        },
          h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
            h('h4', { style: { fontWeight: 800, fontSize: '1rem', color: 'var(--green-800)' } }, cycle.name),
            h('button', { className: 'btn btn-sm', style: { background: '#fee2e2', color: '#dc2626', padding: '2px 8px' }, onClick: () => handleDeleteArchive(cycle.id) }, '🗑️')
          ),
          h('div', { style: { fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' } }, `📅 ${formatDateIndonesian(cycle.date)} | Lahan: ${cycle.landSize} Ha`),
          h('div', { style: { marginTop: '8px', fontSize: '0.9rem', fontWeight: 700, color: cycle.netProfit >= 0 ? 'var(--green-600)' : '#dc2626' } }, `Laba/Rugi: ${formatRupiah(cycle.netProfit)}`)
        ))
      )
    )
  );
}

function LoginModal({ t, onClose, onSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (isRegister) {
      if (password !== confirmPassword) {
        setErrorMsg("Konfirmasi Kata Sandi / PIN tidak cocok!");
        return;
      }
      const res = registerUser(fullname, username, password);
      if (res.success) onSuccess(res.user);
      else setErrorMsg(res.message);
    } else {
      const res = loginUser(username, password);
      if (res.success) onSuccess(res.user);
      else setErrorMsg(res.message);
    }
  };

  const handleDemoLogin = (u, defaultPass = "123") => {
    setUsername(u);
    setPassword(defaultPass);
    const res = loginUser(u, defaultPass);
    if (res.success) onSuccess(res.user);
  };

  return h('div', { className: 'modal-overlay' },
    h('div', { className: 'modal-card' },
      h('div', { className: 'login-banner' },
        h('div', { style: { fontSize: '2.5rem' } }, '🌾'),
        h('h2', { className: 'login-welcome-title' }, t.welcomeTitle),
        h('p', { className: 'login-welcome-sub' }, t.welcomeSub)
      ),

      h('div', { style: { padding: '24px' } },
        h('div', { style: { display: 'flex', gap: '8px', marginBottom: '16px', background: 'var(--green-50)', padding: '4px', borderRadius: 'var(--radius-md)' } },
          h('button', { 
            className: `btn btn-sm ${!isRegister ? 'btn-primary' : 'btn-secondary'}`, 
            style: { flex: 1 }, 
            onClick: () => { setIsRegister(false); setErrorMsg(""); setPassword(""); } 
          }, t.loginTab),
          h('button', { 
            className: `btn btn-sm ${isRegister ? 'btn-primary' : 'btn-secondary'}`, 
            style: { flex: 1 }, 
            onClick: () => { setIsRegister(true); setErrorMsg(""); setPassword(""); } 
          }, t.registerTab)
        ),

        errorMsg && h('div', { style: { padding: '10px', background: '#fee2e2', color: '#dc2626', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', marginBottom: '14px', fontWeight: 600 } }, errorMsg),

        h('form', { onSubmit: handleSubmit },
          isRegister && h('div', { className: 'form-group' },
            h('label', { className: 'form-label' }, t.fullnameLabel),
            h('input', { 
              type: 'text', className: 'form-input', 
              placeholder: 'Misal: Pak Budi Santoso', 
              value: fullname, 
              onChange: (e) => setFullname(e.target.value), 
              required: isRegister 
            })
          ),
          h('div', { className: 'form-group' },
            h('label', { className: 'form-label' }, t.usernameLabel),
            h('input', { 
              type: 'text', className: 'form-input', 
              placeholder: 'Masukkan username...', 
              value: username, 
              onChange: (e) => setUsername(e.target.value), 
              required: true 
            })
          ),
          h('div', { className: 'form-group' },
            h('label', { className: 'form-label' }, t.passwordLabel),
            h('input', { 
              type: 'password', className: 'form-input', 
              placeholder: 'Masukkan kata sandi / PIN...', 
              value: password, 
              onChange: (e) => setPassword(e.target.value), 
              required: true 
            })
          ),
          isRegister && h('div', { className: 'form-group' },
            h('label', { className: 'form-label' }, t.confirmPasswordLabel),
            h('input', { 
              type: 'password', className: 'form-input', 
              placeholder: 'Ketik ulang kata sandi / PIN...', 
              value: confirmPassword, 
              onChange: (e) => setConfirmPassword(e.target.value), 
              required: true 
            })
          ),
          h('button', { type: 'submit', className: 'btn btn-yellow', style: { width: '100%', marginTop: '10px' } }, isRegister ? t.registerBtn : t.loginBtn)
        ),

        h('div', { style: { marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', textAlign: 'center' } },
          h('div', { style: { fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' } }, 'Atau coba langsung dengan akun contoh (Demo PIN: 123):'),
          h('div', { style: { display: 'flex', gap: '8px', justifyContent: 'center' } },
            h('button', { className: 'btn btn-sm btn-secondary', onClick: () => handleDemoLogin('pak_budi', '123') }, '👨‍🌾 Pak Budi (Sawit)'),
            h('button', { className: 'btn btn-sm btn-secondary', onClick: () => handleDemoLogin('bu_siti', '123') }, '👩‍🌾 Bu Siti (Horti)')
          )
        )
      )
    )
  );
}

function ProfileModal({ t, activeUser, langPreference, onLangChange, onClose, onUpdate, onLogout }) {
  const [fullname, setFullname] = useState(activeUser.fullname || "");
  const [username, setUsername] = useState(activeUser.username || "");
  const [password, setPassword] = useState(activeUser.password || "");
  const [avatar, setAvatar] = useState(activeUser.avatar || "");
  const [selectedLang, setSelectedLang] = useState(langPreference || "auto");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLangChange(selectedLang);
    const updated = updateUserProfile(activeUser.id, {
      fullname: fullname.trim(),
      username: username.trim().toLowerCase(),
      password: password.trim(),
      avatar,
      lang: selectedLang
    });
    if (updated) onUpdate(updated);
  };

  const detectedCode = detectBrowserLanguage().toUpperCase();

  return h('div', { className: 'modal-overlay' },
    h('div', { className: 'modal-card', style: { padding: '24px' } },
      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' } },
        h('h3', { style: { fontSize: '1.2rem', fontWeight: 800 } }, `⚙️ ${t.editProfile}`),
        h('button', { className: 'btn btn-sm btn-secondary', onClick: onClose }, '✕')
      ),

      h('form', { onSubmit: handleSubmit },
        h('div', { style: { textAlign: 'center', marginBottom: '16px' } },
          h('img', { src: avatar, alt: 'Profile', style: { width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--yellow-400)', marginBottom: '8px' } }),
          h('div', null,
            h('label', { className: 'btn btn-sm btn-secondary', style: { cursor: 'pointer' } },
              `📷 ${t.uploadPhoto}`,
              h('input', { type: 'file', accept: 'image/*', onChange: handlePhotoUpload, style: { display: 'none' } })
            )
          )
        ),

        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.fullnameLabel),
          h('input', { type: 'text', className: 'form-input', value: fullname, onChange: (e) => setFullname(e.target.value), required: true })
        ),

        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.usernameLabel),
          h('input', { type: 'text', className: 'form-input', value: username, onChange: (e) => setUsername(e.target.value), required: true })
        ),

        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, t.passwordLabel),
          h('input', { type: 'password', className: 'form-input', value: password, onChange: (e) => setPassword(e.target.value), required: true })
        ),

        h('div', { className: 'form-group' },
          h('label', { className: 'form-label' }, '🌐 Pengaturan Bahasa Aplikasi'),
          h('select', { 
            className: 'form-select', 
            value: selectedLang, 
            onChange: (e) => setSelectedLang(e.target.value) 
          },
            h('option', { value: 'auto' }, `🌐 Deteksi Otomatis Browser (${detectedCode})`),
            h('option', { value: 'id' }, '🇮🇩 Bahasa Indonesia'),
            h('option', { value: 'en' }, '🇬🇧 English')
          ),
          h('div', { style: { fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' } }, 
            `Bahasa terdeteksi saat ini: ${detectedCode === 'ID' ? 'Bahasa Indonesia' : 'English'} (${navigator.language || 'id-ID'})`
          )
        ),

        h('div', { style: { display: 'flex', gap: '10px', marginTop: '20px' } },
          h('button', { type: 'submit', className: 'btn btn-primary', style: { flex: 1 } }, t.saveChanges),
          h('button', { type: 'button', className: 'btn btn-pink', onClick: onLogout }, t.logout)
        )
      )
    )
  );
}

// Render React App to DOM
const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(h(App));
}
