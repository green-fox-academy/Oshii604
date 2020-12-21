// 1.
const king = document.getElementById('b325');
console.log(king.innerHTML);

// 2.
const businessLamp = document.getElementsByClassName(`big`);
for (let i = 0; i < businessLamp.length; i++) {
  console.log(businessLamp[i].innerHTML);
}

// 3.
const conceitedKings = document.querySelectorAll(`section`);
const conceitedKing = conceitedKings[0].children;
for (let i = 0; i < conceitedKing.length; i++) {
  alert(`${conceitedKing[i].innerHTML}`);
}

// 4.
const noBusiness = document.getElementsByTagName(`div`);
for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i].innerHTML);
}
