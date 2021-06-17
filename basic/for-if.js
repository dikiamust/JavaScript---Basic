// FOR DAN IF

// CONTOH 1
console.log('contoh 1')
let s= '';
for (let i =0; i<5; i++){
    s +='*';
}
console.log(s); //MENCETAK SECARA HORIZONTAL

// CONTOH 2
console.log('contoh 2')
let a= '';
for (let b =0; b<5; b++){
    a +='*';
    a +='\n';
}
console.log(a); //MENCETAK SECARA VERTIKAL

// CONTOH 3
console.log('contoh 3')
let c= '';
for (let d =0; d<5; d++){
    for (let e = 0; e<5; e++){
        c +='*';
    }
    c +='\n';
}
console.log(c)

// CONTOH 4
console.log('contoh 4')
let f= '';
for (let g =0; g<5; g++){
    for (let h = 0; h<=g; h++){
        f +='*';
    }
    f +='\n';
}
console.log(f)




