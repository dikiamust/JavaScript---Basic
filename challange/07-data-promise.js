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

const getUser = (email) => {
  return new Promise((resolve, reject) => {
    const i = users.findIndex((user) => user.email === email);
    if (i >= 0) resolve(users[i]);
    else reject(`User ${email} not found`);
  });
}

const buyProduct = (saldo, name) => {
  return new Promise((resolve, reject) => {
    const i = products.findIndex((e) => e.name === name);
    if (i >= 0 && saldo >= products[i].price) {
      console.log(`${products[i].name} dibeli`);
      resolve(saldo - products[i].price);
    } else if (i >= 0) {
      reject("Saldo tidak cukup");
    } else {
      reject(`Product ${name} tidak ada`);
    }
  });
}

// //pemanggilan fungsi getUser dengan promise
// getUser('alpha@gmail.com')
// .then((user) => {
//     console.log(user);
// })
// .catch((err) => {
//     console.log(err);
// })

// //pemanggilan fungsi buyProduct dengan promise
// buyProduct(100000, 'product A')
// .then(sisaSaldo => {
//     return buyProduct(sisaSaldo, 'product D');
// })
// .then(sisaSaldo => {
//     return buyProduct(sisaSaldo, 'product D');
// })
// .then(sisaSaldo => {
//     return buyProduct(sisaSaldo, 'product D');
// })
// .then(sisaSaldo => {
//     return buyProduct(sisaSaldo, 'product D');
// })
// .then(sisaSaldo => {
//    console.log(sisaSaldo);
// })
// .catch(err =>{
//     console.log(err);
// })


// Alurnya: sebelum aku membeli product, aku mau check user nya benar atau tidak.
// gunakan/gabungkan fungsi getUser dan fungsi beli dengan menggunakan promise
getUser('alpha@gmail.com')
.then(user => {
    console.log(user);
    return buyProduct(user.saldo, 'product D');
})
.then(sisaSaldo => {
    // console.log(sisaSaldo);
    return buyProduct(sisaSaldo, 'product D');
})
.then(sisaSaldo => {
    console.log(sisaSaldo);
})
.catch(err => {
    console.log(err);
})