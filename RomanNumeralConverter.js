function convertToRoman(num) {
  const romanNumerals = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"],
  ];

  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor((num % 1000) / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;

  return (
    romanNumerals[3][thousands] +
    romanNumerals[2][hundreds] +
    romanNumerals[1][tens] +
    romanNumerals[0][ones]
  );
}

console.log(convertToRoman(36));
