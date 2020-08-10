export default function anagramChecker(word1: string, word2: string): boolean {
  if (word1.split('').sort().join('') === word2.split('').sort().join('')) {
    return true;
  }
  return false;
}
