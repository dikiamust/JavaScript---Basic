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

//ubah callback menjadi promise ke dalam fungsi getUser
const getUser = (email, cb) => {
    const i = users.findIndex((el) => el.email === email);
    if (i >= 0) cb(null, users[i]);
    else cb("User tidak ditemukan");
};

//ubah callback menjadi promise ke dalam fungsi getUser
const buyProduct = (saldo, productName, cb) => {
    const i = products.findIndex((e) => e.name === productName);
    if (i >= 0 && saldo >= products[i].price) {
      console.log(`${products[i].name} dibeli`);
      cb(null, saldo - products[i].price);
    } else if (i >= 0) {
      cb("Saldo tidak cukup");
    } else {
      cb("Product tidak ada");
    }
};

// Alurnya: sebelum aku membeli product, aku mau check user nya benar atau tidak.
// gunakan/gabungkan fungsi getUser dan fungsi beli dengan menggunakan promise

