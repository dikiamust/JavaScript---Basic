users = [
  { email: "alpha@gmail.com", saldo: 100000 }, //0
  { email: "beta@gmail.com", saldo: 200000 }, //1
  { email: "charlie@gmail.com", saldo: 300000 }, //2
];

products = [
  { name: "product A", price: 50000 },
  { name: "product B", price: 20000 },
  { name: "product C", price: 3000 },
  { name: "product D", price: 2500 },
];

//function untuk output ketika error & ketika berhasil
const errHandlingAndOutput = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

//function untuk mencari data user sesuai dengan email yang di input
const getUser = (email) => {
  setTimeout(() => {
    const i = users.findIndex((el) => el.email === email);
    if (i >= 0) {
      console.log(users[i]);
    } else {
      console.log("User tidak ditemukan");
    }
  }, 100);
};

//invoke atau pemanggilan function getUser
getUser("alpha@gmail.com", errHandlingAndOutput); 

//Soal
//coba implementasikan callback dari fungsi errHandlingAndOutput

//===========================================================================================================================

//function untuk menampilkan barang yang dibeli dan sisa saldo, sesuai dengan Saldo dan Product yang sesuai
const beli = (saldo, productName) => {
  setTimeout(() => {
    const i = products.findIndex((e) => e.name === productName);
    if (i >= 0 && saldo >= products[i].price) {
      console.log(`${products[i].name} dibeli`);
      console.log(saldo - products[i].price);
    } else if (i >= 0) {
      console.log("Saldo tidak cukup");
    } else {
      console.log("Product tidak ada");
    }
  }, 100);
};

beli(100000, 'product A', errHandlingAndOutput)

//Soal
//coba implementasikan callback dari fungsi errHandlingAndOutput
