// FUNCTION
// secara penulisan function terbagi menjadi 2, function declaration dan function expression

// CONTOH FUNCTION DECLARATION
function volumeKubus(sisi) {
  total = sisi ** 3;
  return total;
}

let kubusA = volumeKubus(10);
let kubusB = volumeKubus(5);
console.log(kubusA);
console.log(kubusB);

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) hasil += arguments[i];
  return hasil;
}

let vaiabbleSatu = tambah(1, 1, 4, 4);
console.log(vaiabbleSatu);

const sum = (s) => {
  s ** 2;
};

// CONTOH FUNCTION EXPRESSION
// function expression = function yg disimpan dalam variable

// REFACTORING
// Refactoring = penulisan code yg lebih singkat dan efisien dalam function
//  contoh refactoring function volumeKubus
function volume_kubus(sisi) {
  return sisi ** 3;
}

let contohRefactor = volume_kubus(2);
console.log(contohRefactor);

// FUNCTION REKURSIF
// function recursif adalah function yang memanggil function dirinya sendiri.
// setiap program looping bisa dilakukan dengan function recursif
function cetakAngka(n) {
  if (n === 3) return; //BASE CASE = BATAS
  console.log(n);
  cetakAngka(n - 1);
}

let contohRecursif = cetakAngka(5);
console.log(contohRecursif);
