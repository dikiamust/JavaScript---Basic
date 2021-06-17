let isExists = false;

console.log(isExists); //false //1

const changeIsExists = () => {
    setTimeout(() => {
        isExists = !isExists;    //true dalam 1 detik
    }, 1000);
}

changeIsExists();     //2

console.log(isExists); // isExists = ?

setTimeout(() => {
    console.log(isExists);
}, 2000);



//1 false....................false.............isExists = true.......................true

//2       \changeIsExists();....................../ (setelah 1000ms)

//3                                \console.log(isExists);............................./ (setelah 2000ms)
