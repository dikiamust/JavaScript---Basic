const randomSuccess = (ourAttacker, enemyDefender) => {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.random() < ourAttacker / (enemyDefender + 1));
  }
  console.log(arr);
  return arr.filter((el) => el).length >= 2 ? true : false;
};

console.log(randomSuccess(10, 19));
// console.log(Math.random(2, 10));

// let userA = 70;
// let userB = 20;
// let attack = Math.random(userA, userB);                                    1
// // console.log(Math.random(userA, userB));
// if (attack < 0.5) {
//   console.log("A win");
// } else {
//   console.log("B win");
// }
// attack;
