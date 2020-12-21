const asteroidList = document.querySelector('ul.asteroids');

const newAsteroid01 = document.createElement('li');
newAsteroid01.class = 'asteroid';
newAsteroid01.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid01);

const newAsteroid02 = document.createElement('li');
newAsteroid02.class = 'asteroid';
newAsteroid02.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid02);

const container = document.querySelector(`div.container`);
const header = document.createElement(`header`);
console.log(container);
header.textContent = 'I can add elements to the DOM!';
container.appendChild(header);

const image = document.createElement(`img`);
image.src = `https://i.pinimg.com/236x/58/f1/6c/58f16ca5420f553b83bdc300a156747a--boxer-puppies-pitbull-boxer-mix.jpg`;

container.appendChild(image);
