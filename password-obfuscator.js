const string = process.argv[2];

function passwordObfuscator(password) {
  let newPassword = "";
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      newPassword += "4";
    } else if (password[i] === "e") {
      newPassword += "3";
    } else if (password[i] === "o") {
      newPassword += "0";
    } else if (password[i] === "l") {
      newPassword += "1";
    } else {
      newPassword += password[i];
    }
  }
  console.log(newPassword);
}

passwordObfuscator(string);