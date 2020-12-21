console.log(`Hello from the Frontend`);

const xhr = new XMLHttpRequest(); // old method for HTTP Request

xhr.onreadystatechange = handleReadyStateChanged;

xhr.open(`GET`, `/foods`);
xhr.send(null); // we don't wait for the response, and that's a problem!

// Callback function:
function handleReadyStateChanged() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(`Response: ${xhr.response}`);

    const foods = JSON.parse(xhr.response);

    // eslint-disable-next-line no-restricted-syntax
    for (const food of foods) {
      // ez nem is kellene a kódba:
      console.log(`Name: ${food.name}`);
      console.log(`Kcal: ${food.amount}`);
      // csak ez:
      addFoodToList(food);
    }
  }
}

// Itt adjuk hozzá az elemeket a listához:

const foodListElement = document.getElementById(`foods`);

function addFoodToList(food) {
  const liElement = document.createElement(`li`);

  liElement.textContent = `${food.name}: ${food.amount} kcal`;

  foodListElement.appendChild(liElement);
}

// Itt pedig httprequest-el post-oljuk gombnyomásra a formból kapott adtokat a servernek
const sendButton = document.getElementById(`add-food`);

sendButton.addEventListener(`click`, (event) => {
  event.preventDefault();

  // const form = sendButton.form - ez volt az eredeti...
  const { form } = sendButton;

  const food = {
    name: form.foodName.value,
    amount: form.foodAmount.value,
  };
  console.log(food);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handleReadyStateChanged;
  xhr.open(`POST`, `/foods`);
  xhr.setRequestHeader(`Content-Type`, `application/JSON`);
  xhr.send(JSON.stringify(food));

  function handleReadyStateChanged() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      addFoodToList(food);
    }
  }
});
