function displayResults(results) {
  const carDetails = document.querySelector('#results');
  carDetails.innerHTML = '';
  const newTable = document.createElement('table');
  carDetails.appendChild(newTable);
  results.forEach((car) => {
    const newRow = document.createElement('tr');
    newTable.appendChild(newRow);
    const newHeader = document.createElement('th'); // ->td, tr, thead v. th!!
    newHeader.innerHTML = `Licence Plate</th> <th>Brand</th> <th>Model</th> <th>Color</th> <th>Year</th>`;
    const newParagraph = document.createElement('td');
    newParagraph.innerHTML = `<td>${car.plate}</td> <td>${car.car_brand}</td> <td>${car.car_model}</td> <td>${car.color}</td> <td>${car.year}</td>`;

    newRow.appendChild(newHeader);
    newTable.appendChild(newParagraph);
  });
}

const submit = document.getElementById('submit');

function fetchData() {
  const query = document.getElementById('form').elements.license.value;
  fetch(`./search/${query}`)
    .then((response) => response.json())
    .then((body) => displayResults(body))

  // .then((body) => {
  //   console.log(body);
  //   displayResults(body);
  // })

    .catch((error) => console.error(error));
}

submit.addEventListener('click', () => {
  fetchData();
});

// enter gombra is eventlistener!!!

// submit.addEventListener('click', () => {
//   const query = document.getElementById('form').elements.license.value;
//   console.log(query);

//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       displayResults(JSON.parse(xhr.response));
//     } else {
//       console.error('Error!');
//     }
//   };

//   xhr.open('GET', `./search/${query}`);

//   xhr.send();
// });

const filterButtons = document.getElementsByName('filter');
console.log(filterButtons);

function filterClick(item) {
  item.addEventListener('click', () => {
    const filter = document.getElementById('form').elements.filter.value;

    const xhr = new XMLHttpRequest();

    // listen for `onload` event
    xhr.onload = () => {
      // process response
      // if (xhr.status === 200) {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // parse JSON data
        console.log(JSON.parse(xhr.response));
        displayResults(JSON.parse(xhr.response));
      } else {
        console.error('Error!');
      }
    };
    // create a `GET` request
    xhr.open('GET', `./filter/${filter}`);
    // send request
    xhr.send();
  });
}
filterButtons.forEach(filterClick);
