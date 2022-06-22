function Generate(amount) {
  const arr = [];
  const symbols = "!@#$%^&*";
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

export default Generate;
