// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
{
  let example = 'In a dishwasher far far away';
  const newWord = `galaxy`;
  const exampleArr: string[] = example.split(` `, example.length);
  for (let i = 0; i < exampleArr.length - 1; i++) {
    if (exampleArr[i] === `dishwasher`) {
      exampleArr[i] = newWord;
    }
  }
  example = exampleArr.join(` `);
  console.log(example);
}

// Avagy mindez egyszerűbben:
{
  let example = 'In a dishwasher far far away';
  // let wtc: string = `dishwasher`;
  const newSentence: string = example.replace(`dishwasher`, `galaxy`); // dishwasher helyére meg mehet a wtc
  example = newSentence;
  console.log(example);
}

// még egyszerűbben :D

let example = 'In a dishwasher far far away';
example = example.replace(`dishwasher`, `galaxy`);
console.log(example);

// Reverse

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

const toBeReversed = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(x: string) {
  // itt mi az egyszerűbb megoldás?
  const revArr: string[] = toBeReversed.split(``);
  const revvedArr: string[] = revArr.reverse();
  const reversedSentence: string = revvedArr.join(``);
  return reversedSentence;
}
console.log(reverse(toBeReversed));
export = reverse;

// Reverse egyszerűbben:
{
  const toBeReversed = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
  function reverse(x: string) {
    return toBeReversed.split(``).reverse().join(``);
  }
  console.log(reverse(toBeReversed));
}
// URL-fixer - jó, mostantól megyek a legegyszerűbb úton :)

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace(`https//`, `https://`);
url = url.replace(`bots`, `odds`);
console.log(url);

// takes longer

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
quote = [
  `${quote.slice(0, 20)} always takes longer than${quote.slice(20)}`,
].join(``);

console.log(quote);

// todo-prints  - WIP

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

const todoText = ' - Buy milk\n';

console.log(todoText);
