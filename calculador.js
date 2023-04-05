class Calculator {
    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }

    divide(a, b) {
      return a / b;
    }
}

const calculador = new Calculator();

module.exports = calculador;