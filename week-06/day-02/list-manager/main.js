const body = document.querySelector('body');

const items = document.createElement('div');
const buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');
const selectedItems = document.createElement('div');

body.appendChild(items);
body.appendChild(buttons);
body.appendChild(selectedItems);

// creating list of tasks and adding them to items div

const itemList = ['milk', 'coffee', 'new brain', 'mom'];

itemList.forEach((item, index) => {
  const newItem = document.createElement('p'); // későbbb li
  items.appendChild(newItem);
  items.children[index].innerHTML = item;
});

// creating buttons
for (let i = 0; i < 4; i++) {
  const newButton = document.createElement('button');
  buttons.appendChild(newButton);
}
const up = buttons.children[0];
const add = buttons.children[1];
const remove = buttons.children[2];
const down = buttons.children[3];

up.innerHTML = 'Up';
add.innerHTML = '>';
remove.innerHTML = 'X';
down.innerHTML = 'Down';

// select the first item
items.children[0].setAttribute('class', 'selected');

// interactive buttons

up.onclick = () => {
  if (items.children.length === 0 || items.children[0].classList.contains('selected')) {
    return;
  }
  for (let i = 0; i < items.children.length; i++) {
    if (items.children[i].classList.contains('selected')) {
      items.children[i - 1].setAttribute('class', 'selected');
      items.children[i].setAttribute('class', '');
    }
  }
};

// Próba2
add.onclick = () => {
  for (let i = 0; i < items.children.length; i++) {
    if (items.children[i].classList.contains('selected')) {
      const addedItem = items.children[i];
      items.removeChild(addedItem);
      selectedItems.appendChild(addedItem);
      addedItem.setAttribute('class', '');

      if (items.children.length !== 0) {
        items.children[0].setAttribute('class', 'selected');
      }
      return;
    }
  }
};

remove.onclick = () => {
  for (let i = 0; i < items.children.length; i++) {
    if (items.children[i].classList.contains('selected')) {
      items.removeChild(items.children[i]);

      if (items.children.length !== 0) {
        items.children[0].setAttribute('class', 'selected');
      }
      return;
    }
  }
};

down.onclick = () => {
  if (items.children.length === 0 || items.children[items.children.length - 1].classList.contains('selected')) {
    return;
  }

  for (let i = 0; i < items.children.length; i++) {
    if (items.children[i].classList.contains('selected')) {
      items.children[i + 1].setAttribute('class', 'selected');
      items.children[i].setAttribute('class', '');
      return;
    }
  }
};
