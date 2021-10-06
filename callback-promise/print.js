function printText(n) {
  if (n <= 0) return;
  console.log([...Array(n)].map((x, i) => (i + 1).toString()).join(""));
  printText(n - 1);

  console.log("*".repeat(n) + (10 - n).toString());
}

printText(4);
