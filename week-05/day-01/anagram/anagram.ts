export default function anagramChecker(line1: string, line2: string): boolean {
  if (line1.split('').sort().join('').toLowerCase === line2.split('').sort().join('').toLowerCase) {
    return true;
  }
  return false;
}
