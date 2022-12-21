export function s(str: string) {
  return str
    .split(/([A-Z][a-z]+)/)
    .filter((e) => e)
    .join(" ");
}
