function sortCharacter(character) {
  let words = character
    .toLowerCase()
    .split("")
    .filter((el) => el !== " ");

  let vowel = words.filter((el) => "aiueo".split("").includes(el)).join("");

  let consonant = words
    .filter((el) => !"aiueo".split("").includes(el))
    .join("");

  console.log(
    `Vowel characters : ${vowel}, \nConsonant characters : ${consonant}`
  );
}

sortCharacter("Sample Case");
sortCharacter("Next Case ");
