const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  " ",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => {
  return animal[0];
});

console.log(secretMessage.join(""));

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((smallNumber) => {
  return smallNumber < 250;
});

console.log(smallNumbers);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((favorite) => {
  return favorite.length > 7;
});

console.log(longFavoriteWords);

const animals2 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals2.findIndex((i) => {
  return i === "elephant";
});

console.log(foundAnimal);

const startsWithS = animals2.findIndex((animal) => {
  return animal[0] === "s" ? true : false;
});

console.log(startsWithS);
