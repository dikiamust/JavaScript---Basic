let cart = [
  {totalPriceCart: 2000, qty: 4},
  {totalPriceCart: 2000, qty: 3},
];
let cartTotal = 0;

cart.forEach((product) => {
  cartTotal += product.totalPriceCart * product.qty;
  //   console.log("ini", cartTotal);
});

console.log(cartTotal);
