console.log('Helo World')

const name = 'david'
const age = 20
const isMarried = false
const myArray = [1, 'dua', 'tiga']
const myObject ={
    street: 'Ir. Soekarno ',
    no: 90
}

const mahasiswa ={
    nama: 'Beckham',
    lulus: true,
    IPSemester: [2.98, 3.02, 2.81, 2.78, 2.90],
    IPKumulatif: function(){
        let total= 0;
        let ips = this.IPSemester;
        for (let i=0; i < ips.length; i++){
            total += ips[i];
        }
        return total/ips.length;
    }
}

console.log(mahasiswa.IPKumulatif())
console.log(mahasiswa.nama)
console.log(mahasiswa.IPSemester[1])

console.log(myObject.street)