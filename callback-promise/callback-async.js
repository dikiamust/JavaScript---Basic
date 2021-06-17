let isExists = false;

const changeIsExists = (cb) => {
  setTimeout(() => {
    isExists = true;
    cb(isExists);
  }, 1000);
};

const checkIsExist = (input) => {
  if (isExists) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
};

console.log(1)
changeIsExists(checkIsExist); //ini dikluarkan setelah 1 detik
console.log(1)
