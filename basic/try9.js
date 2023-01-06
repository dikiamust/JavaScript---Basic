// function tes() {
//   return true;
// }

// console.log(tes());

// function tes() {
//   return false;
// }
// var tes = function () {
//   return 123;
// };

// console.log(tes());

// tes = function () {
//   return 321;
// };

let example = {
  first: "frefrze",
  second: "gergerge",
  third: "gfgfg",
  forth: "ffff",
  five: "hhhh",
};

let example2 = {
  first: "frefrze",
  second: "gergerge",
  third: "gfgfg",
  forth: "ffff",
  five: "hhhh",
};

function compareObj(obj1, obj2) {
  obj1 = {};

  obj2 = {};

  for (const i in obj1) {
    if (obj1[i]) {
      //   console.log("1", obj1[key]);
      for (const j in obj2) {
        if (obj2[j] === obj1[j] && i === j) {
          console.log(i);
          //   return true;
        }
      }
    }

    console.log("Wrong");
    // return false;
  }
}
console.log(example === example2);
