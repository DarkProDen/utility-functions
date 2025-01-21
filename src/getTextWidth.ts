export function getTextWidth(text: string, fontSize: string, fontFamily: string) {
  const span = document.createElement('span');
  span.innerText = text;
  span.style.fontSize = fontSize;
  span.style.fontFamily = fontFamily;
  span.style.position = 'absolute';
  span.style.zIndex = '-100';
  document.body.appendChild(span);
  const width = span.clientWidth;
  span.remove();

  return width;
}
