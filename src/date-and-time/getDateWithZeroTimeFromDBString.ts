export function getDateWithZeroTimeFromDBString(dateString: string): Date {
  const date = new Date(dateString);

  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);

  return date;
}
