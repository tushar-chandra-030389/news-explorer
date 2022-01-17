export function formatDateYYYYMMDD(date: Date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const formattedMonth = ("0" + (month + 1)).slice(-2);
  const formattedDay = ("0" + (day + 1)).slice(-2);

  return `${year}-${formattedMonth}-${formattedDay}`;
}
