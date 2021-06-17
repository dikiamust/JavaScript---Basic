// SWITCH

// CONTOH 1
let angka = 8;

switch(angka){
    case 1:
        console.log('Anda memasukan angka '+angka);
        break;
    case 2:
        console.log('Anda memasukan angka '+angka);
        break;
    case 3:
        console.log('Anda memasukan angka '+angka);
        break;
    default:
        console.log('Angka yang Anda masukan salah ');
        break;
}

// CONTOH 2
let item = 'stick';

switch(item){
    case 'nasi':
    case 'daging':
    case 'susu':
        console.log('makanan /minuman SEHAT')
        break;
    case 'humburger':
    case 'softdrink':
        console.log('makanan /minuman TIDAK SEHAT')
        break;
    default:
        console.log('makanan /minuman tidak ada pada list')
        break;

}