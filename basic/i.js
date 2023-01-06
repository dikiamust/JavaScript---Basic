let arr = [1, 2, 1, 1, 1];

function uniqNumb(arr) {
  let p = [];
  let o = [];

  for (let i of arr) {
    if (!p.includes(i)) {
      p.push(i);
    }
  }
}

// for (let i = 0; i < a.length; i++) {
//   for (let k = i + 1; k < a.length; k++) {
//     if (a[i] != a[k]) {
//       //do stuff
//     }
//   }
// }

console.log("h", uniqNumb(arr));

// const foundAnimal = arr.map((i) => {
//   return i === 1;
// });

// foundAnimal;

const arr1 = [4, 7, 4, 3, 3, 3, 7, 6, 5];
const arr2 = [6, 5, 4, 5, 3, 2, 5, 7, 5];
const correspondingEquality = (arr1, arr2) => {
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      continue;
    }
    res++;
  }
  return res;
};
console.log("2 array", correspondingEquality(arr1, arr2));
