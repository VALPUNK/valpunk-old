export const toUpperCaseFirstLetter = (lower: string) => {
  return lower
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")
}
