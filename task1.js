const stringLenght = (str) => {
  const str2 = str.length;
  if (str2 >= 1 && str2 <= 10) return str.length;
   throw new Error ("The string is between 1 and 10");
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

class Calculator {
    add(x,y) {
  return x + y;
}

   subtract(x, y) {
    return x - y;
  }

   multiply(x, y) {
    return x * y;
  }

   divide(x, y) {
    return x / y;
  }

}

const capitalize = (str) => {
    const str2 = str.split('')[0].toUpperCase() + str.slice(1);
    return str2;
}

module.exports = { stringLenght, reverseString, Calculator,capitalize };
