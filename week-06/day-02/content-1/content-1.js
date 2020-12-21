// 1.

const body = document.querySelectorAll(`p`);
for (let i = 0; i < body.length - 1; i++) {
  body[i].append(` ${body[body.length - 1].textContent}`);
  // console.log(body[i].innerHTML);
}

// 2.

const container = document.querySelectorAll(`p`);

for (let i = 0; i < container.length - 1; i++) {
  // miért nem működik az első megoldás???
  // container[i].append(` ${container[container.length - 1].innerHTML}`);
  container[i].innerHTML = container[container.length - 1].innerHTML;
}
