const fn = (word) => {
  let text = "";
  for (let i = 0; i < 3; i++) {
    final = word[i];
    text = text + final;
  }
  return text + text + text;
};
console.log(fn("Aakash"));
