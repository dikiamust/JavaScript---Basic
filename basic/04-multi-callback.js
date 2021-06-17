const arr = [5,4,6,7];

// fungsi map
const map = (arr) =>{
    for(let i =0; i<=arr.length-1; i+=1){
        //ubah disini
        console.log(arr[i]);
    }
}

//fungsi menentukan ganjil/genap
const clog = (num) => {
    console.log(num, num %2 === 0 ? 'Genap': 'Ganjil')
}


map(arr, clog);

// gunakan hasil dari fungsi map kedalam fungsi clog
// hasil output:
// 5 Ganjil
// 4 Genap
// 6 Genap
// 7 Ganjil