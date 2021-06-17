const createName = () => {
  const arr = ["A", "B", "C", "D"];

  const time = Math.floor(Math.random() * Math.floor(5000)); // random 0 - 5000 (timer)

  setTimeout(() => {
    const index = Math.floor(Math.random() * Math.floor(3)); // random, 0 - 3 
    console.log(arr[index]);
  }, time);
};

const seratusKali = (param1) => {
  for (let i = 1; i <= 100; i += 1) {
    console.log(i, param1);
  }
};


createName(seratusKali); //memanggil fungsi seratusKali dalam fungsi createName
console.log("succes")
//gmn caranya aku implementasi callback disini
// biar setelah createName, aku aktifin seratusKali();
// hasil output:
// 1 C
// 2 C
// 3 C
// 4 C
// ...
// 95 C
// 96 C
// 97 C
// 98 C
// 99 C
// 100 C

// ABCD nya random