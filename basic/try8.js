// let result = [{a: 1}, {b: 2}, {c: 3}];

// for (let i = 0; i < result.length; i++) {
//   let entry = result[i];
//   console.log(entry);
// }

// const myObject = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };
// const {a, ...noA} = myObject;
// console.log(noA); // => { b: 2, c: 3 }

const removeKey = (key, {[key]: _, ...rest}) => rest;

let example = {
  first: "frefrze",
  second: "gergerge",
  third: "gfgfg",
  forth: "ffff",
  five: "hhhh",
};

console.log(removeKey("third", "second", example));
/*
Object {
  first: "frefrze",
  second: "gergerge"
}
*/

// How to copy and remove some member from another object

const objPayload = {
  locale: "de",
  localization_tags: [],
  last_edit: "2014-04-14T08:43:37",
  url: "/de/docs/Tools/Scratchpad",
  title: "JavaScript-Umgebung",
};

let classroomPayload = Object.keys(objPayload).reduce((acc, key) => {
  if (key !== "locale") {
    acc[key] = objPayload[key];
  }
  return acc;
}, {});

console.log(classroomPayload);
