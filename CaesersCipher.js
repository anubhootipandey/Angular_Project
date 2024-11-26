function rot13(str) {
  return str
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      }
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
      }
      return char;
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
