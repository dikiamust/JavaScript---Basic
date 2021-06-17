// MEMBUAT OBJECT ADA 3 CARA:
// 1.OBJECT LITERAL
const mahasiswa1 ={
    nama: 'John',
    npm: '033390341',
    email:'john@gmail.com',
    jurusan: 'Teknik Informatika'
}

console.log(mahasiswa1)

// 2.OBJECT FUNCTION DECLARATION
function buatObjectMahasiswa(nama, npm, email, jurusan){
    let mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

const mahasiswa2 = buatObjectMahasiswa('Puteri', '033218733', 'putri@gmail.com', 'manajemen');
console.log(mahasiswa2)

// 3.OBJECT CONSTRUCTOR (KEYWORD new)
function Mahasiswa(nama, npm, email, jurusan){
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
}

const mahasiswa3 = new Mahasiswa('Dea Nova', '032339090', 'deanova@gmail.com', 'matematika');
console.log(mahasiswa3)


