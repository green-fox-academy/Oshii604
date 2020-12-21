// store your backend url into a variable
const backend = 'http://localhost:3000/';
// store the endpoint you're calling into a variable as well
const endpointURL = `${backend}/api/search`;

// this is an example of a form
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (event) => {
  // use preventDefault well... to prevent the default behaviour of your form
  event.preventDefault();
  fetchData();
});

function addElement(parent, elementType, content) {
  let tag = document.createElement(elementType);
  if (content) {
    tag.appendChild(document.createTextNode(content));
  }
  parent.appendChild(tag);
  return tag;
}

function renderResults(results) {
  let header_names = ["Licence Plate", "Brand", "Model", "Color", "Year"];
  let table = document.getElementById("results");
  table.innerHTML = "";
  let header = addElement(table, "tr", "");
  header_names.forEach(function (e) {
    addElement(header, "th", e);
  });
  for (i in results) {
    let tr = addElement(table, "tr", "");
    for (k in results[i]) {
      addElement(tr, "td", results[i][k]);
    }
  }
}

  function fetchData() {
    let promise = fetch(`${backend}API/search`);
    return promise
      .then((response) => {
        if (response.status !== 200) {
          console.log("Error have been occured");
        }
        return response.json();
      })
      .then((body) => {
        renderResults(body);
      });
  };

  function filterData() {
    const query = document.getElementById('form').elements.licence.value;
    // console.log(query);
    let promise = fetch(`${backend}API/filter/${query}`);
    return promise
      .then((response) => {
        if (response.status !== 200) {
          console.log("Error have been occured");
        }
        return response.json();
      })
      .then((body) => {
        renderResults(body);
      });
  }
  /*
  submit.addEventListener('click', () => {
    const query = document.getElementById('form').elements.license.value;
    console.log(query);
  
    const xhr = new XMLHttpRequest();
  
    // listen for `onload` event
    xhr.onload = () => {
      // process response
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // parse JSON data
        displayResults(JSON.parse(xhr.response));
      } else {
        console.error('Error!');
      }
    };
    // create a `GET` request
    xhr.open('GET', `./search/${query}`);
    // send request
    xhr.send();
  });
*/
  
/*
  fetch(endpointURL)
    .then(async (response) => {
      // use async if you have more than one option depending on the response
      if (response.status === 200) {
        const { res } = await response.json();
        const body = document.querySelector('body');
        body.innerHTML = `It worked and you got this: ${res}`;
      } else if (response.status === 400) {
        const body = document.querySelector('body');
        body.innerHTML = `Nope didn't work`;
      }
    })
    .catch((error) => console.log(error.message));
});
*/