let myObj = new Object();
myObj.satu = "satu lagi";
myObj.dua = "dua";

console.log(myObj["satu"]);

for (i in myObj) {
  console.log(myObj[i]);
}

const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard = [];
while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 9)];
}
console.log(currentCard);
