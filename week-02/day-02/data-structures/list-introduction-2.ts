const ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
const ListB: string[] = ListA.slice();

console.log(ListA.includes(`Durian`));

ListB.splice(ListB.indexOf(`Durian`), 1);
console.log(ListB);

ListA.splice(4, 0, `Kiwifruit`);

if (ListA.length > ListB.length) {
  console.log(`Az A lista hosszabb.`);
} else {
  console.log(`A B lista hosszabb`);
}

console.log(ListA.indexOf(`Avocado`));

console.log(ListB.indexOf(`Durian`));

ListB.push(`Passion Fruit`, `Pomelo`);

console.log(ListA[2]);
