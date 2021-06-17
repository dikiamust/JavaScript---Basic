users = [
  { email: "alpha@a.com", saldo: 100000 },
  { email: "beta@a.com", saldo: 200000 },
  { email: "gama@a.com", saldo: 300000 },
  { email: "zigma@a.com", saldo: 400000 },
];

products = [
  { name: "potion A", price: 50000 },
  { name: "potion B", price: 20000 },
  { name: "potion C", price: 3000 },
  { name: "potion D", price: 2500 },
];

const getUser = (email) => {
  return new Promise((resolve, reject) => {
    const i = users.findIndex((user) => user.email === email);
    if (i >= 0) resolve(users[i]);
    else reject(`User ${email} not found`);
  });
};

// implementasikan async-await kedalam fungsi getUserAsync
const getUserAsync = (email) => {
  console.log(1);
  getUser(email)
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(2);
};

getUserAsync("alphax@a.com");
