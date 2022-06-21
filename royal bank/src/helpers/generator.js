// class getUpper {
//     constructor(lowerCase, upperCase, randomSymbols, )

//   getUpperCaseLetter() {
//     console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
//   }
// }

// class getLower extends getUpper {
//   getLowerCaseLetter() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   }
// }

// getUpper.getUpperCaseLetter();

function generate(amount) {
  const arr = [];
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  for (let i = 0; i < amount; i++) {
    let expr = Math.round(Math.random() * 2);
    switch (expr) {
      case 0:
        arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
        break;
      case 1:
        arr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
        break;
      case 2:
        arr.push(symbols[Math.floor(Math.random() * symbols.length)]);
        break;
      default:
        throw new Error("err");
    }
  }
  return arr.join("");
}

console.log(generate(20));
