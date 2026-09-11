// Standard Agronomic Baseline Defaults per Hectare (RAB Standards) & Task Schedules

export const agronomicDefaults = {
  sawit: {
    // Standard baseline for 1 Hectare (143 trees)
    costPerHa: {
      bibit: 7150000,       // 143 bibit unggul @ Rp 50.000
      pupuk: 9500000,       // NPK, Urea, KCI, Borate 1 Ha/tahun
      pestisida: 3200000,   // Herbisida piringan & insektisida kumbang
      tenagaKerja: 8400000, // HOK penyiangan, pemupukan, pruning, panen
      alat: 2500000,        // Dodos, egrek, angkong, sewa truk
      lain: 2000000         // Kontingensi & perbaikan jalan produksi
    },
    projectedYieldPerHa: 22.0, // 22 Ton TBS / Ha / tahun
    defaultSalePrice: 2450000, // Rp 2.450 per kg = Rp 2.450.000 / Ton
    unitLabel: "Ton TBS",

    // Default auto-generated schedule templates (Interval days after planting date)
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
    // Baseline for 1 Hectare (1,100 trees)
    costPerHa: {
      bibit: 8800000,       // 1100 bibit klon @ Rp 8.000
      pupuk: 6500000,       // NPK, Pupuk Kandang, KCI
      pestisida: 4200000,   // Fungisida VSD & Insektisida PBK
      tenagaKerja: 7200000, // HOK pangkas, sarungisasi, panen
      alat: 1800000,        // Gunting pangkas, kotak fermentasi, terpal
      lain: 1500000
    },
    projectedYieldPerHa: 1400, // 1.400 Kg Biji Kering / Ha / tahun
    defaultSalePrice: 65000,   // Rp 65.000 / Kg
    unitLabel: "Kg Biji Kering",

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
    // Baseline for 1 Hectare (500 trees)
    costPerHa: {
      bibit: 7500000,       // 500 stum polybag @ Rp 15.000
      pupuk: 5800000,       // Urea, SP-36, KCI
      pestisida: 3500000,   // Fungisida Gugur Daun & Herbisida
      tenagaKerja: 9600000, // HOK penyadapan & pembabatan
      alat: 3000000,        // Pisau sadap, mangkuk sadap, talang, asam semut
      lain: 1800000
    },
    projectedYieldPerHa: 1800, // 1.800 Kg Lateks Kering / Ha / tahun
    defaultSalePrice: 14500,   // Rp 14.500 / Kg
    unitLabel: "Kg Lateks Kering",

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
    // Baseline for 1 Hectare (120 trees)
    costPerHa: {
      bibit: 4800000,       // 120 bibit @ Rp 40.000
      pupuk: 4500000,       // Urea, NPK, NaCl (Garam)
      pestisida: 2400000,   // Insektisida kumbang sexava/brontispa
      tenagaKerja: 4800000, // HOK pembersihan mahkota & pangkas
      alat: 1500000,        // Tali, bambu petik, sewa kendaraan
      lain: 1200000
    },
    projectedYieldPerHa: 7200, // 7.200 Butir / Ha / tahun
    defaultSalePrice: 3200,    // Rp 3.200 / Butir
    unitLabel: "Butir Kelapa",

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
    // Baseline for 1 Hectare Cabai/Tomat (semusim 4 bulan)
    costPerHa: {
      bibit: 4500000,       // Benih hibrida + media semai
      pupuk: 11200000,      // NPK, KNO3, Kalsium, Organik, Dolomit
      pestisida: 8500000,   // Fungisida, Abamektin, Insektisida
      tenagaKerja: 14000000,// HOK olah tanah, mulsa, ajir, petik
      alat: 5500000,        // Mulsa MPHP, ajir bambu 20.000 btg, sprayer
      lain: 2500000
    },
    projectedYieldPerHa: 15000, // 15.000 Kg / Ha per musim
    defaultSalePrice: 28000,    // Rp 28.000 / Kg
    unitLabel: "Kg Cabai/Tomat",

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
