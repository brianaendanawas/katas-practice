const strings = process.argv.slice(2);

for (let i = 0; i < strings.length; i++) {
  let string = "";
  for (let j = strings[i].length - 1; j >= 0; j--) {
    string += strings[i][j];
  }
  console.log(string);
}