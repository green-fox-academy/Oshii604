// store your backend url into a variable
const backend = 'http://localhost:3000/';
// store the endpoint you're calling into a variable as well
const endpointURL = `${backend}/API/something`;

// this is an example of a form
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (event) => {
  // use preventDefault well... to prevent the default
  // behaviour of your form
  event.preventDefault();

  // use the FormData class to get data from your form
  const formData = new FormData(form);
  const var1 = formData.get('var1');
  const var2 = formData.get('var2');
  console.log(var1, var2);

  // store the options of your requests in a variable
  const options = {
    method: 'POST', // or delete or whatever
    headers: { 'Content-type': 'application/json' },
    // do not forget JSON.stringify pls
    body: JSON.stringify({ var1: `${var1}`, var2: `${var2}` }),
  };

  fetch(endpointURL, options)
    .then(async (response) => {
      // use async if you have more than one option
      // depending on the response
      if (response.status === 200) {
        const { res } = await response.json();
        const body = document.querySelector('body');
        body.innerHTML = `It worked and you got this: ${res}`;
      } else if (response.status === 400) {
        const body = document.querySelector('body');
        body.innerHTML = 'Nope didn\'t work';
      }
    })
    .catch((error) => console.log(error.message));
});

// now an example of a table!!!

// store the tables body in a variable
const tbody = document.querySelector('tbody');

// here I created a couple of functions to keep everything tidy

// this one creates a cell
// it takes a row to be appended into and the data which goes into the cell
function insertCell(row, data) {
  const newTd = document.createElement('td');
  newTd.innerText = data;

  row.appendChild(newTd);
}

// this one creates a row with the previous function and appends it to the tbody
// it takes an object that came from the backend
function insertRow(data) {
  const newRow = document.createElement('tr');

  // for some reason i couldnt iterate through the object with for of so
  // i did it this way
  const datas = Object.entries(data);

  // the array contains array of the key/value pairs so the [1] is the value
  datas.forEach((cell) => {
    insertCell(newRow, cell[1]);
  });

  newRow.appendChild(newBtn);
  tbody.appendChild(newRow);
}

// this is where i get the info for the table and use the insertRow() function
async function getTickets() {
  try {
    const response = await fetch(/* url of the backend */);
    const result = await response.json();

    // here i iterate through the stuff and every result will be a row
    result.tickets.forEach((ticket) => {
      insertRow(ticket);
    });
  } catch (error) {
    console.error(error);
  }
}

// this is where the magic happen, dont miss this out!!!
getTickets();
