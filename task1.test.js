const { stringLenght, reverseString, Calculator, capitalize } = require("./task1");

//Make a a describe
describe('check the lenght of string', () => {
     
test("Return lenght of string ", () => {
    expect(stringLenght("reemsall")).toBe(8);
  });
  
  test("Return strign is empty", () => {
    expect(() => {stringLenght("");
      }).toThrow();
      });
})

test('Return reverse of string', () => {
    expect(reverseString("reemsall")).toBe("llasmeer");
});

describe('check the sum of two numbers ', () => {
    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.add(4,5)).toBe(9);
    });

    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.add(9,5)).toBe(14);
    });

    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.add(2,5)).toBe(7);
    });
})


describe('check the subtract of two numbers', () => {
    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.subtract(20,10)).toBe(10);
    });

    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.subtract(40,10)).toBe(30);
    });

    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.subtract(50,10)).toBe(40);
    });
    
})


describe('check if the multiply is correct', () => {
    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.multiply(20,10)).toBe(200);
    });

    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.multiply(8,7)).toBe(56);
    });

    test('Return reverse of string', () => {
        const calc = new Calculator();
        expect(calc.multiply(5,4)).toBe(20);
    });

})


describe('check the divide two numbers', () => {
     
test('Return reverse of string', () => {
    const calc = new Calculator();
    expect(calc.divide(20,10)).toBe(2);
});


test('Return reverse of string', () => {
    const calc = new Calculator();
    expect(calc.divide(90,3)).toBe(30);
});


test('Return reverse of string', () => {
    const calc = new Calculator();
    expect(calc.divide(12,4)).toBe(3);
});


})


test('Return if the first letter is capital', () => {
    expect(capitalize('reem')).toBe('Reem')
})