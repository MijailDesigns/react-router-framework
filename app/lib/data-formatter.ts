export const formatDate = (date: Date) => {
  return date.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
