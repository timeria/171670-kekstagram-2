//Функция для проверки длины строки

let stringLength = (string, symbols) => {
  return string.length <= symbols;
};

console.log(stringLength("Природа", 5));

//Функция для проверки, является ли строка палиндромом
let stringIsPolindrom = (string) => {
  let newString = string.toLowerCase().split("").reverse().join("");
  return string.toLowerCase() === newString;
};

console.log(stringIsPolindrom("Кекс"));
console.log(stringIsPolindrom("Довод"));

let stringGetNumber = (string) => {
  let newString = string.replace(/[^0-9]/g, "");
  return newString === "" ? NaN : newString;
};

console.log(stringGetNumber("1 кефир, 0.5 батоналет"));
