const perPage = 10;
const totalRecords = 99;

const totalPage = Math.floor(totalRecords / perPage);

console.log(totalPage);
console.log(
  Array(totalPage)
    .fill(0)
    .map((data, index) => index + 1)
);
