// User Account Authentication & Local Storage Profile Manager

const USERS_KEY = "sukses_tani_all_users";
const ACTIVE_USER_KEY = "sukses_tani_active_user_id";

// Preset Demo Accounts for initial experience
const DEMO_USERS = [
  {
    id: "demo_budi",
    username: "pak_budi",
    fullname: "Pak Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80",
    commodity: "sawit",
    landSize: 2.0,
    lang: "id"
  },
  {
    id: "demo_siti",
    username: "bu_siti",
    fullname: "Bu Siti Rahmah",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    commodity: "hortikultura",
    landSize: 0.5,
    lang: "id"
  }
];

export function getUsers() {
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

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getActiveUserId() {
  return localStorage.getItem(ACTIVE_USER_KEY) || "demo_budi";
}

export function setActiveUserId(id) {
  localStorage.setItem(ACTIVE_USER_KEY, id);
}

export function getActiveUser() {
  const users = getUsers();
  const activeId = getActiveUserId();
  let found = users.find(u => u.id === activeId);
  if (!found && users.length > 0) {
    found = users[0];
    setActiveUserId(found.id);
  }
  return found || DEMO_USERS[0];
}

export function registerUser(fullname, username, password = "123") {
  const users = getUsers();
  const cleanUsername = username.toLowerCase().trim();
  
  if (users.some(u => u.username === cleanUsername)) {
    return { success: false, message: "Username sudah terdaftar! Gunakan username lain." };
  }

  const newUser = {
    id: "user_" + Date.now(),
    username: cleanUsername,
    fullname: fullname.trim() || username,
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${cleanUsername}`,
    commodity: "sawit",
    landSize: 1.0,
    lang: "id"
  };

  users.push(newUser);
  saveUsers(users);
  setActiveUserId(newUser.id);
  return { success: true, user: newUser };
}

export function loginUser(username) {
  const users = getUsers();
  const cleanUsername = username.toLowerCase().trim();
  const found = users.find(u => u.username === cleanUsername);
  if (found) {
    setActiveUserId(found.id);
    return { success: true, user: found };
  }
  return { success: false, message: "Username tidak ditemukan!" };
}

export function updateUserProfile(userId, updates) {
  const users = getUsers();
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    saveUsers(users);
    return users[index];
  }
  return null;
}
