const page = document.querySelector(`body`);
const button = document.querySelector('button');

/*
button.onclick = () => {
  if (page.className !== `party`) {
    page.setAttribute(`class`, `party`);
  } else { page.setAttribute(`class`, ``); }
};
*/

button.addEventListener(`click`, () => {
  if (page.className !== `party`) {
    page.setAttribute(`class`, `party`);
  } else { page.setAttribute(`class`, ``); }
});
