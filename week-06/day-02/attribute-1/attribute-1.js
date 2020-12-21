// 1.

const myImage = document.getElementsByTagName(`img`)[0];
console.log(myImage);

// 2.
myImage.setAttribute('src', 'https://i.pinimg.com/236x/58/f1/6c/58f16ca5420f553b83bdc300a156747a--boxer-puppies-pitbull-boxer-mix.jpg');

// 3.
const weblink = document.getElementsByTagName(`a`)[0];
weblink.setAttribute(`href`, `https://www.greenfoxacademy.com/`);

// 4-5.

const forbiddenButton = document.getElementsByClassName(`this-one`)[0];
console.log(forbiddenButton);
forbiddenButton.innerHTML = `Don't click me!`;
forbiddenButton.setAttribute('disabled', '');
