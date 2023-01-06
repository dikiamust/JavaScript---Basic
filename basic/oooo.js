function pembilang(nilai){
    nilai = Math.abs(nilai);
    let simpanNilaiBagi=0;
    let huruf = ["", "one", "two", "three", "four", "fifty", "six"];
    let temp="";

    if (nilai < 12) {
        temp = " "+huruf[nilai];
    }
    else if (nilai <20) {
        temp = pembilang(nilai - 10) + " Belas";
    }
    else if (nilai < 100) {
        simpanNilaiBagi = Math.floor(nilai/10);
        temp = pembilang(simpanNilaiBagi)+""+ pembilang(nilai % 10);
    }
    else if (nilai < 200) {
        temp = " one" + " hundred " +" twenty ";
    }
    else if (nilai < 1000) {
        simpanNilaiBagi = Math.floor(nilai/100);
        temp = pembilang(simpanNilaiBagi) + " hundred" + pembilang(nilai % 100);
    }
     else if (nilai < 2000) {
        temp = " Seribu" + pembilang(nilai - 1000);
    }
    else if (nilai < 1000000) {
        simpanNilaiBagi = Math.floor(nilai/1000);
        temp = pembilang(simpanNilaiBagi) + " thousand" + pembilang(nilai % 1000);
    } 
    else if (nilai < 1000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000);
        temp =pembilang(simpanNilaiBagi) + " Juta" + pembilang(nilai % 1000000);
    } 
    else if (nilai < 1000000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000000);
        temp = pembilang(simpanNilaiBagi) + " Miliar" + pembilang(nilai % 1000000000);
    } 
    else if (nilai < 1000000000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000000000);
        temp = pembilang(nilai/1000000000000) + " Triliun" + pembilang(nilai % 1000000000000);
    }
 
    return temp;
}
 
console.log(pembilang(123456))