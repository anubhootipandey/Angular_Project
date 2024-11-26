function palindrome(str) {
  const normalizedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = normalizedStr.split("").reverse().join("");

  return normalizedStr === reversedStr;
}

console.log(palindrome("eye"));
