let total = [{totalPriceCart: 2000}, {totalPriceCart: 2000}];

const a = {...total};

const totalPrice = total
  .map((bill) => bill.totalPriceCart)
  .reduce((acc, bill) => bill + acc);

console.log(totalPrice);

const object = {a: 1, b: 2, c: 3};
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
