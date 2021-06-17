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

const errHandlingAndOutput;

const getUser = (email, cb) => {
  setTimeout(() => {
    const i = users.findIndex((el) => el.email === email);
    if (i >= 0) {
      cb(null, users[i]);
    } else {
      cb("User tidak ditemukan");
    }
  }, 100);
};

// //function untuk mencari data user sesuai dengan email yang di input
// getUser("alpha@gmail.com", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

const beli = (saldo, productName, cb) => {
  setTimeout(() => {
    const i = products.findIndex((e) => e.name === productName);
    if (i >= 0 && saldo >= products[i].price) {
      console.log(`${products[i].name} dibeli`);
      cb(null, saldo - products[i].price);
    } else if (i >= 0) {
      cb("Saldo tidak cukup");
    } else {
      cb("Product tidak ada");
    }
  }, 100);
};

// // function untuk beli
// beli(100000, 'product A', (err, sisaSaldo) =>{
//     if (err) console.log(err);
//     else console.log(sisaSaldo);
// });

getUser("alpha@gmail.com", (err, data) => {
  if (err) console.log(err);
  else
    beli(data.saldo, "product D", (err, sisaSaldo) => {
      if (err) console.log(err);
      else
        beli(sisaSaldo, "product D", (err, sisaSaldo) => {
          if (err) console.log(err);
          else
            beli(sisaSaldo, "product D", (err, sisaSaldo) => {
              if (err) console.log(err);
              else
                beli(sisaSaldo, "product D", (err, sisaSaldo) => {
                  if (err) console.log(err);
                  else console.log(sisaSaldo);
                });
            });
        });
    });
});