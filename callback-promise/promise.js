const firstName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "David";
      resolve(data);
    }, 1000);
  });
};

const lastName = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `${name} Beckham`;
      resolve(data);
    }, 1000);
  });
};

firstName()
  .then((data) => lastName(data))
  .then((result) => console.log(result));

firstName().then((data) => console.log(data));
