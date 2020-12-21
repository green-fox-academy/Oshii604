const asteroidList = document.querySelector(`ul.asteroids`);
const king = document.querySelector(`li`);
asteroidList.removeChild(king);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

// console.log(planetData[0].asteroid);
// console.log(planetData.length);

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    const newPlanet = document.createElement(`li`);
    newPlanet.classList.add(`${planetData[i].category}`);
    newPlanet.textContent = `${planetData[i].content}`;
    asteroidList.appendChild(newPlanet);
  }
}
