export function convertDateToTimeString(date: Date) {
  let minutes = date.getMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  let seconds = date.getSeconds().toString();
  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}
