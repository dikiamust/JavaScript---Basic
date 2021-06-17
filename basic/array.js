// ARRAY

// CONTOH 1
let animal = ["horse", "rabbit", "cat", "lion", "tiger"];
console.log(animal);

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

// CONTOH2
let myArray = ["teks", 123, "bisaBerupaFunction", [10, 20, 30]];
console.log(myArray[3][1]);

// MENAMBAH ISI ARRAY
let arr = [];
arr[0] = "Dea";
arr[1] = "DeaNova";
console.log(arr);

// MENGHAPUS ARRAY
let arr2 = ["banana", "apple", "avocado"];
arr2[1] = undefined;
console.log(arr2);

// ARRAY METHOD => length, join, push, pop, shift, unshift, splice, slice
// CONTOH JOIN
console.log(arr2.join());

// CONTOH PUSH
arr2.push("leccy");
console.log(arr2);

// CONTOH POP
arr2.pop();
console.log(arr2);

// CONTOH SPLICE
// rumus SPLICE => spilce (indexAwal, mauDihapusBerapa, tambahElement)
let spl = ["nana", "nini", "nono"];
// spl.splice(1, 'nene', 'nunu')
spl.splice(3, 0, "nene"); // index ke 3, yg dihapus 0/tdk ada, nene yg mau ditambahkan
console.log(spl);

// CONTOH SLICE || rumus SLICE => splice(indexAwal, indexAkhir ) || indexAkhir tidak akan terbawa
let slc = ["sepatu", "baju", "celana", "topi"];
let slc1 = slc.slice(0, 2);
console.log(slc1);

// CONTOH FOREACH
let number1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number1.forEach);
number1.forEach(function (e) {
  console.log(e);
});

let names = [" john", " peter", " cena"];
names.forEach(function (e, i) {
  console.log("This is our member:\n" + i + e);
});

// CONTOH MAP
let number2 = [1, 2, 3, 4, 5, 6, 7, 8];
let number3 = number2.map(function (e) {
  return e * 2;
});
console.log(number3);

// CONTOH SORT
let number4 = [9, 4, 6, 3, 7, 2];
console.log(number4.sort());

let number5 = [2, 40, 10, 5, 9];
number5.sort(function (a, b) {
  return a - b;
});
console.log(number5);

// CONTOH FILTER
let number6 = [2, 3, 6, 5, 4, 7, 8];
let number7 = number6.filter(function (x) {
  return x == 6;
});
console.log("contoh filter: " + number7);

// CONTOH FIND
let number8 = [2, 3, 6, 5, 4, 7, 8];
let number9 = number8.find(function (x) {
  return x == 2;
});
console.log("contoh find : " + number9);

// CONTOH FINDINDEX
let number10 = [2, 3, 6, 5, 4, 7, 8];
let number11 = number10.findIndex(function (x) {
  return x == 3;
});
console.log(number11);
