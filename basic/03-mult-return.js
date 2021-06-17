const data = [
  {name: "alpha", point: "100"},
  {name: "beta", point: "90"},
  {name: "gama", point: "80"},
  {name: "zigma", point: "70"},
];

const extract = (index) => {
  setTimeout(() => {
    console.log(data[index]);
  }, 100);
};

for (i in data) {
  console.log(data[i].name);
}

const format = (obj) => {
  console.log("Namanya:", obj, ",Pointnya: ", obj);
};

extract(0, format);

// gunakan hasil dari fungsi extract kedalam fungsi format
// hasil output:
// Namanya: alpha ,Pointnya:  100
