const countCharRecursive = (words, query) => {
  if (words.length === 0) {
    return 0;
  } else {
    let isQueryInWords = words[0].match(query);
    let hitung = 0;
    if (isQueryInWords) {
      hitung = 1;
    }

    return hitung + countCharRecursive(words.slice(1), query);
  }
};

console.log(
  countCharRecursive(["anchor", "classic", "daring", "eager", "fearless"], "ar")
);

let a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length);

console.log(countCharRecursive(["anchor"], "ar"));

const x = 6 % 2;
const y = x;

function prinA() {
  console.log(a);
  var a = 1;
}

prinA();
