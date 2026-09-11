// Formatting Utilities for Indonesian Currency (Rp) & Dates

export function formatRupiah(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatDateIndonesian(dateString) {
  if (!dateString) return "-";
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  } catch (e) {
    return dateString;
  }
}

export function getTaskStatus(dueDateString, isCompleted) {
  if (isCompleted) return "completed";
  if (!dueDateString) return "normal";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(dueDateString);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "overdue";
  if (diffDays <= 3) return "upcoming"; // H-3 or today
  return "normal";
}
