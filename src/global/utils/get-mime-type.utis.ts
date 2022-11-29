export function getMimeType(uri: string) {
  return uri.substr(uri.lastIndexOf(".") + 1);
}
