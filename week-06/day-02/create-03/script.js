const kids = [
  { petName: 'Wattled crane', owner: 'Bryant' },
  { petName: 'Devil, tasmanian', owner: 'Alejandro' },
  { petName: 'Mynah, common', owner: 'Nelie' },
  { petName: 'Dolphin, common', owner: 'Mariele' },
  { petName: 'Gray duiker', owner: 'Maddalena' },
  { petName: 'Crab (unidentified)', owner: 'Lucine' },
  { petName: 'Ant (unidentified)', owner: 'Lorianna' },
  { petName: 'Bison, american', owner: 'Tommie' },
  { petName: 'Yellow mongoose', owner: 'Vivyan' },
  { petName: 'Carpet snake', owner: 'Veda' },
  { petName: 'Lesser mouse lemur', owner: 'Isidor' },
];

const petList = document.querySelector('#pets');

/* for (let i = 0; i < kids.length; i++) {
    const newKid = document.createElement('article');
    petList.appendChild(newKid);
  } */

kids.forEach((kid) => {
  const newArticle = document.createElement('article');
  const newHeader = document.createElement('h3');
  newHeader.innerHTML = kid.owner;
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = kid.petName;

  newArticle.appendChild(newHeader);
  newArticle.appendChild(newParagraph);
  petList.appendChild(newArticle);
});
