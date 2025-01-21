export function getParamValueFromURL(urlString: string, paramName: string) {
  const url = new URL(urlString);
  return url.searchParams.get(paramName);
}
