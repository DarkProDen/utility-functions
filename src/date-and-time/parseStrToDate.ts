export function parseStrToDate(str: string, locale?: TLocale) {
  let numbers: string[];
  let day: string;
  let month: string;
  let year: string;

  switch (locale) {
    case 'ru-RU':
      numbers = str.split('.');
      [day, month, year] = numbers;
      break;
    case 'en-US':
      numbers = str.split('/');
      [month, day, year] = numbers;
      break;
    case 'es-ES':
      numbers = str.split('/');
      [day, month, year] = numbers;
      break;
    default:
      try {
        return new Date(str);
      } catch {
        return null;
      }
  }

  if (
    numbers.length === 3 &&
    day.length > 0 &&
    day.length <= 2 &&
    month.length > 0 &&
    month.length <= 2 &&
    year.length > 0 &&
    year.length <= 4
  ) {
    return new Date(+year, +month - 1, +day);
  }
  console.warn(`Can\`t parse the date: ${str}`);
  return null;
}
