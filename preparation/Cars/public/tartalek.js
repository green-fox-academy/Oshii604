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
    newParagraph.innerHTML = `<td>${car.plate}</td> <td>${car.car_brand}</td> <td>${car.car_model}</td>`;

    newRow.appendChild(newHeader);
    newTable.appendChild(newParagraph);
  });
}

const submit = document.getElementById('submit');

function fetchData() {
  const query = document.getElementById('form').elements.license.value;
  fetch(`./search/${query}`)
    .then((response) => response.json())
    .then((body) => console.log(body))
    .then((body) => displayResults(body));
}

submit.addEventListener('click', () => {
  fetchData();
});

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
