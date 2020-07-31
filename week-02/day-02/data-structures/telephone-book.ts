`use strict`;

const phoneBook = new Map();

phoneBook
  .set(`William A. Lathan`, `405-709-1865`)
  .set(`John K. Miller`, `402-247-8568`)
  .set(`Hortensia E. Foster`, `606-481-6467`)
  .set(`Amanda D. Newland`, `319-243-5613`)
  .set(`Brooke P. Askew`, `307-687-2982`);

function letYouTellMe() {
  console.log(phoneBook.get(`John K. Miller`));

  for (const [key, value] of phoneBook.entries()) {
    if (value === `307-687-2982`) {
      var recall = key;
    }
  }
  console.log(recall);

  if (!phoneBook.has(`Chris E. Myers`)) {
    console.log(`No entry on this name`);
  } else {
    console.log(`There is a Chris E. Myers in the phonebook`);
  }
}
letYouTellMe();
