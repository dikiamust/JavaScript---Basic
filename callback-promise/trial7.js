const equalSeven = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i] === 7) {
        result.push([arr[j], arr[i]]);
      }
    }
  }
  return result;
};

let soal = [3, 5, -4, 8, 11, 4, 4, 3];
console.log("cara 1", equalSeven(soal));

for (let num1 of soal) {
  const result = [];
  for (let num2 of soal.slice(1)) {
    const check = num1 + num2;
    if (check === 7) {
      result.push([num1, num2]);
      soal.splice(soal.indexOf(num2), 1);
      console.log("cara 2", result);
    }
  }
}
