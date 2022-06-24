const string = process.argv[2];

function obfuscator(password) {
  let pass = "";
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      pass += "4";
    } else if (password[i] === "e") {
      pass += "3";
    } else if (password[i] === "o") {
      pass += "0";
    } else if (password[i] === "l") {
      pass += "1";
    } else {
      pass += password[i];
    }
  }
  console.log(pass);
}

obfuscator(string);