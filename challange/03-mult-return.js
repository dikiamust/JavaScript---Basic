const data = [
  { name: "alpha", point: "100" },
  { name: "beta", point: "90" },
  { name: "gama", point: "80" },
  { name: "zigma", point: "70" },
];

const extract = (index, cb) => {
  setTimeout(() => {
    cb(data[index]);
  }, 1000);
};

const format = (obj) => {
  console.log("Namanya:", obj, ", pointnya: ", obj);
};

extract(2, format);

// gunakan hasil dari fungsi extract kedalam fungsi format
// hasil output:
// Namanya: alpha , pointnya:  100
