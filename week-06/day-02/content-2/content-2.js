// 1.

const fruits = ['apple', 'banana', 'cat', 'dog'];
const list = document.querySelectorAll(`li`);
console.log(list);

for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = fruits[i];
  // list[i].replaceWith(fruits[i]);
}

// 2.
for (let i = 0; i < list.length; i++) {
  list[i].setAttribute('class', 'newList');
}
