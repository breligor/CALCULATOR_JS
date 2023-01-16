import {
  add,
  sub,
  div,
  mul,
  root2Validation,
  root3Validation,
  rootXYValidation,
  factorial,
  pow
} from "./arithmeticUnitValidation.js";

// RECEIVER 
// After receiving a "signal" (one of the commands f.e. Add, Sub, Mul, Div and e.c.), 
// performs an arithmetic operation. 

export default class ArithmeticUnit {
  constructor() {
    // keeps the operand values
    this.result = 0; 
  }

  compute(operator, operand) {
    switch (operator) {
      case "+":
        this.result = add(this.result, operand);
        break;

      case "-":
        this.result = sub(this.result,operand);
        break;

      case "*":
        this.result = mul(this.result, operand, 1);
        break;

      case "/":
        this.result = div(this.result, operand);
        break;

      case "^2":
        this.result = mul(this.result, this.result, 1);
        break;

      case "^3":
        this.result = mul(this.result, this.result, this.result);
        break;

      case "XY":
        this.result = pow(this.result, operand);
        break;

      case "10X":
        this.result = pow(10, this.result);
        break;

      case "root2":
        this.result = root2Validation(this.result);
        break;

      case "root3":
        this.result = root3Validation(this.result);
        break;

      case "div1X":
        this.result = div(1, this.result);
        break;

      case "rootY":
        this.result = rootXYValidation(this.result, operand);
        break;

      case "fac":
        this.result = factorial(this.result, 1);
        break;

      default:
        throw new Error("Unknown operator");
    }
  }
}
