// JAWABAN NO.1
for (let a=1; a<=100; a++){
    if (a%2 === 0){
        console.log(a+'genap')
    }else{
         console.log(a+'ganjil')       
    }
}


// JAWABAN NO.2
for (let b=1; b<=100; b++){
    if (b%3 === 0){
        console.log(b);
    }   
}



// JAWABAN NO.3
for (let c=1; c<=100; c++){
    if (c%3 === 0 ){
        console.log(c);
    }
    else if (c%5 === 0){
        console.log(c);
    }
    else if (c%7=== 0){
        console.log(c);
    }
}


// JAWABAN NO.4
let d= 5;
while (d<10){
    console.log(d);
    d++;
}


// JAWABAN NO.5
let number_five = [2, 6, 8, 3, 9];
console.log(number_five.sort());

// JAWABAN NO.6
let number_six = [2, 6, 8, 3, 9];
console.log(number_six.sort().reverse());


// JAWABAN NO.7

// JAWABAN NO.8

// JAWABAN NO.9

// JAWABAN NO.10
function converter(seconds) {
    if (parseInt(seconds) > 6000) {
      seconds = false;
    }  
    return seconds / 60;
  }
z= converter(110)
console.log(z)


