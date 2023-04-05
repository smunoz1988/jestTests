class Calculator {
    constructor(numOne, numTwo) {
      this.num1 = numOne;
      this.num2 = numTwo;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }
  }

  const peugeot = new Car(11, 9);

  console.log(peugeot.subtract());