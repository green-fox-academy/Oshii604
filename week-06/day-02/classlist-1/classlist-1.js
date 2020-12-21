const myList = document.querySelectorAll(`p`);
console.log(myList[0].classList.value);
const firstClass = document.getElementsByClassName(`apple`)[0];
const secondClass = document.getElementsByClassName(`balloon`)[0];
const thirdClass = document.getElementsByClassName(`cat`)[0];

// 1.
if (myList[3].classList.contains(`dolphin`)) {
  firstClass.innerHTML = `pear`;
}

// 2.

if (myList[0].classList.contains(`apple`)) {
  thirdClass.innerHTML = `dog`;
}

// 3.

firstClass.classList.add('red');

// 4.

secondClass.setAttribute(`style`, `width: 50px`);
// ugyanazt csinálja mindkettő
secondClass.style.setProperty('width', '50px');
