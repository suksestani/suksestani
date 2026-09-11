// Isolated Data Storage per User Account in Local Storage

function getUserStorageKey(userId, keyName) {
  return `sukses_tani_${userId}_${keyName}`;
}

export function getUserData(userId) {
  try {
    const raw = localStorage.getItem(getUserStorageKey(userId, "data"));
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  
  // Initial seed default state if user has no data yet
  return {
    commodity: "sawit",
    landSize: 1.0,
    plantingDate: new Date().toISOString().split("T")[0],
    tasks: [],
    financials: {
      bibit: 7150000,
      pupuk: 9500000,
      pestisida: 3200000,
      tenagaKerja: 8400000,
      alat: 2500000,
      lain: 2000000,
      harvestQty: 22.0,
      unitPrice: 2450000
    },
    cycleArchives: []
  };
}

export function saveUserData(userId, data) {
  try {
    localStorage.setItem(getUserStorageKey(userId, "data"), JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}
