// Comprehensive Agronomic Guide Data for 5 Commodities

export const commoditiesGuideData = {
  sawit: {
    id: "sawit",
    name: "Kelapa Sawit",
    englishName: "Oil Palm",
    emoji: "🌴",
    unit: "Ton TBS",
    description: "Tanaman perkebunan tahunan penghasil minyak sawit mentah (CPO) dengan potensi masa produktif hingga 25 tahun.",
    steps: [
      {
        phase: "1. Syarat Tumbuh & Persiapan Lahan",
        detail: "Curah hujan ideal 2.000–2.500 mm/tahun, suhu 24–28°C. Buat pancang tanam pola segitiga sama sisi (jarak 9m x 9m x 9m = 143 pokok/Ha). Buat lubang tanam 60x60x50 cm minimal 2 minggu sebelum tanam."
      },
      {
        phase: "2. Pemilihan Bibit & Penanaman",
        detail: "Gunakan bibit unggul bersertifikat (Tenera/Dami Mas/Marihat) umur 10–12 bulan di polybag. Beri pupuk dasar NPK/Rock Phosphate 500g per lubang tanam."
      },
      {
        phase: "3. Dosis Pemupukan Berkala (TBM & TM)",
        detail: "TBM (Belum Menghasilkan): NPK 15-15-15 (1.5–2 kg/pokok/tahun dibagi 3 kali aplikasi). TM (Telah Menghasilkan): Urea 2.5 kg, TSP/SP-36 1.5 kg, KCl 2.5 kg, dan Kieserit/Kieserite 1 kg per pokok per tahun."
      },
      {
        phase: "4. Pemeliharaan & Pruning (Pemangkasan)",
        detail: "Lakukan penyiangan piringan (circle weeding) diameter 2 meter. Pemangkasan pelepah (pruning) dilakukan 6 bulan sekali: pertahankan 48–56 pelepah pada pohon muda dan 40–48 pelepah pada pohon tua."
      },
      {
        phase: "5. Pengendalian Hama & Penyakit (OPT)",
        detail: "Waspadai Ulat Api/Kantung (semprot Insektisida Biologi Bacillus thuringiensis / Pyrethroid), Hama Kumbang Tanduk (Oryctes rhinoceros) pasang jebakan feromon, dan Penyakit Busuk Pangkal Batang (Ganoderma)."
      },
      {
        phase: "6. Pemanenan & Kriteria Matang Panen",
        detail: "Panen dimulai saat tanaman berumur 30–36 bulan. Kriteria brondolan lepas minimal 1–2 brondol per kg berat tandan di piringan. Rotasi panen 7–10 hari sekali."
      }
    ]
  },

  kakao: {
    id: "kakao",
    name: "Kakao (Cokelat)",
    englishName: "Cocoa",
    emoji: "🍫",
    unit: "Kg Biji Kering",
    description: "Komoditas perkebunan bernilai tinggi yang membutuhkan naungan dan pemangkasan rutin untuk hasil optimal.",
    steps: [
      {
        phase: "1. Syarat Tumbuh & Pohon Naungan",
        detail: "Ketinggian 0–800 mdpl. Membutuhkan pohon naungan sementara (pisang) dan naungan tetap (Lamtoro/Gliricidia) dipasang 6 bulan sebelum bibit kakao ditanam. Jarak tanam kakao 3m x 3m (1.111 pohon/Ha)."
      },
      {
        phase: "2. Penanaman & Olah Tanah",
        detail: "Gunakan klon kakao unggul (MCC 02, Sulawesi 1, Lindak). Buat lubang tanam 60x60x60 cm. Campur tanah galian atas dengan 10 kg pupuk kandang matang."
      },
      {
        phase: "3. Pemangkasan (Pruning) Terstruktur",
        detail: "Pemangkasan Bentuk (umur 1-2 tahun untuk membentuk jorong/chupon 4-5 cabang utama). Pemangkasan Pemeliharaan (membuang tunas air/tunas cacing setiap 2-3 bulan). Pemangkasan Rejuvenasi (peremajaan cabang tua)."
      },
      {
        phase: "4. Pemupukan Kakao",
        detail: "Pupuk NPK 16-16-16 dosis 250-500 gram/pohon/tahun pada tahun ke-1 & 2. Kakao dewasa (TM): Dosis 800-1000 gram NPK + 200g KCI/pohon/tahun dibagi 2 kali alokasi (awal & akhir musim hujan)."
      },
      {
        phase: "5. Pengendalian Hama Utama (PBK & VSD)",
        detail: "Hama Penggerek Buah Kakao (PBK): Penerapan Pangkas, Panen Sering, Kondonisasi (Penyelubungan buah muda plastik klip). Penyakit VSD (Vascular Streak Dieback): Potong ranting terinfeksi 30 cm dari batas gejala."
      },
      {
        phase: "6. Pemanenan & Fermentasi Biji",
        detail: "Panen saat buah berwarna kuning/oranye sempurna. Petik menggunakan gunting pangkas. Lakukan fermentasi biji basah dalam kotak kayu dilapisi daun pisang selama 4–6 hari sebelum dijemur."
      }
    ]
  },

  karet: {
    id: "karet",
    name: "Karet",
    englishName: "Rubber",
    emoji: "🌳",
    unit: "Kg Lateks Kering",
    description: "Tanaman penghasil getah lateks alami yang dieksploitasi melalui teknik penyadapan kulit batang.",
    steps: [
      {
        phase: "1. Persiapan Lahan & Jarak Tanam",
        detail: "Jarak tanam pola pagar 6m x 3m atau 7m x 2.8m (sekitar 500-550 pohon/Ha). Buat teras bersambung jika lahan miring/berbukit untuk cegah erosi."
      },
      {
        phase: "2. Penanaman Klon Rekomendasi",
        detail: "Gunakan bibit stum mata tidur atau polybag klon produktif (PB 260, IRR 112, RRSA 44). Tanam pada awal musim hujan."
      },
      {
        phase: "3. Pemupukan Masa TBM & TM",
        detail: "TBM: Beri pupuk gabungan Urea, SP-36, KCI dosis bertahap 250g hingga 750g/pohon/tahun. TM: Beri NPK 15-15-15 1–1.5 kg/pohon/tahun."
      },
      {
        phase: "4. Kriteria Matang Sadap & Teknik Penyadapan",
        detail: "Karet siap disadap saat lilit batang mencapai minimal 45 cm pada ketinggian 100 cm dari pertautan okulasi (biasanya umur 5-6 tahun). Gunakan irisan spiral S/2 d2 (setengah lingkaran ditarik 2 hari sekali)."
      },
      {
        phase: "5. Pengendalian Penyakit Gugur Daun (Corynespora)",
        detail: "Semprot fungisida berbahan aktif Mankozeb atau Karbendazim saat pembentukan daun muda pada alur gugur daun alami."
      },
      {
        phase: "6. Pembekuan Lateks (Koagulasi)",
        detail: "Gunakan bahan pembeku organik seperti Asam Format (Asam Semut) dosis 1-2 ml per liter lateks. Hindari pengental buatan berbahaya agar kualitas bokar tinggi."
      }
    ]
  },

  kelapa: {
    id: "kelapa",
    name: "Kelapa Dalam & Genjah",
    englishName: "Coconut",
    emoji: "🥥",
    unit: "Butir / Kg Kopra",
    description: "Tanaman 'Pohon Kehidupan' yang menghasilkan buah kelapa segar, kelapa parut, kopra, dan air kelapa.",
    steps: [
      {
        phase: "1. Syarat Tumbuh & Pemilihan Varietas",
        detail: "Sangat cocok untuk daerah pesisir maupun dataran rendah hingga 600 mdpl. Varietas Kelapa Dalam (jarak tanam 9m x 9m segitiga) atau Kelapa Genjah Hibrida (jarak tanam 7.5m x 7.5m)."
      },
      {
        phase: "2. Penanaman & Olah Lahan",
        detail: "Buat lubang tanam ukuran 80x80x80 cm. Masukkan pupuk kandang 15 kg + Rock Phosphate 300g per lubang. Tanam bibit hingga bagian batok terbenam."
      },
      {
        phase: "3. Pemupukan Rutin Organik & Anorganik",
        detail: "Dosis per pohon per tahun: Urea 1 kg, SP-36 0.75 kg, KCl 1.5 kg, dan Garam Dapur (NaCl) 1 kg (untuk meningkatkan ketahanan dan kadar minyak buah kelapa)."
      },
      {
        phase: "4. Pemeliharaan Piringan & Pembumbunan",
        detail: "Bersihkan gulma seputar batang piringan 1.5–2 meter. Bersihkan seludang kering dan sisa tandan pada mahkota pohon 6 bulan sekali."
      },
      {
        phase: "5. Pengendalian Hama Sexava & Brontispa",
        detail: "Sexava spp. (Kumbang Kelapa): lakukan pembebasan musuh alami atau injeksi batang insektisida sistemik. Brontispa longissima: lepas parasitoid Tetrastichus."
      },
      {
        phase: "6. Pemanenan Buah Kelapa",
        detail: "Untuk Kelapa Kering/Kopra: Panen buah yang matang penuh (sabut cokelat, berbunyi nyaring saat diguncang, umur 11-12 bulan). Rotasi panen 2-3 bulan sekali."
      }
    ]
  },

  hortikultura: {
    id: "hortikultura",
    name: "Hortikultura (Cabai, Tomat & Buah)",
    englishName: "Horticulture (Chili, Tomato & Vegetables)",
    emoji: "🌶️",
    unit: "Kg Hasil Segar",
    description: "Tanaman semusim bernilai ekonomi cepat (3-4 bulan) yang membutuhkan manajemen air dan nutrisi insentif.",
    steps: [
      {
        phase: "1. Pengolahan Tanah & Pemasangan Mulsa",
        detail: "Bajak tanah kedalaman 30 cm, buat bedengan tinggi 30-40 cm, lebar 100 cm. Beri Kapur Pertanian (Dolomit) 1-2 Ton/Ha jika pH < 6. Pasang Mulsa Plastik Hitam Perak (MPHP)."
      },
      {
        phase: "2. Pembibitan & Penanaman",
        detail: "Semaikan benih unggul di tray semai selama 18–25 hari sampai berdaun 4 helai. Tanam bibit pada sore hari di lubang mulsa jarak 50cm x 60cm."
      },
      {
        phase: "3. Pemasangan Turus/Ajir & Perempelan",
        detail: "Pasang ajir bambu tinggi 1.5 meter di samping tanaman umur 7 HST. Ikat batang tanaman dengan tali rafia. Pangkas tunas air di bawah cabang Y."
      },
      {
        phase: "4. Pemupukan Susulan (Kocor & Semprot)",
        detail: "Kocor NPK 16-16-16 (3-5 gram/tanaman) tiap 7 hari sekali dari umur 10 HST. Saat pembentukan buah, kocor NPK + KNO3 Merah/Putih + Kalium Kalsium."
      },
      {
        phase: "5. Pengendalian Hama Thrips, Kutudaun & Layu Bakteri",
        detail: "Kutu Daun/Thrips (cegah keriting daun): Semprot Abamektin / Imidakloprid berkala. Layu Bakteri / Fusarium: Kocor agen hayati Trichoderma spp. pada akar."
      },
      {
        phase: "6. Pemanenan Berkala",
        detail: "Panen pertama dimulahi pada umur 75–85 HST. Petik beserta tangkainya di pagi hari. Pemanenan dapat dilakukan 2–3 hari sekali hingga 15–20 kali petik."
      }
    ]
  }
};
