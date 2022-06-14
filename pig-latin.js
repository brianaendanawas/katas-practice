const strings = process.argv.slice(2);

let translation = "";

for (let i = 0; i < strings.length; i++) {
  let firstLetter;
  let removeLetter = strings[i].slice(1);
  for (let j = 0; j < strings[i].length; j++) {
    firstLetter = strings[i][0];
  }
  let latinWord = removeLetter + firstLetter + "ay";
  translation += latinWord + " ";
}

console.log(translation);