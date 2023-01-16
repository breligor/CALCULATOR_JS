import ArithmeticUnit from "./arithmeticUnit.js";
import ControlUnit from "./controlUnit.js";

import { Add, Sub, Mul, Div, Func } from "./commandOperations.js";

// CLIENT create the instance of the ConcreteCommand object and set its Receiver - ArithmeticUnit class object.
export default class Calculator {
  constructor() {
    this.arithmeticUnit = new ArithmeticUnit();
    this.controlUnit = new ControlUnit();
  }

  add(operand) {
    return this.run(new Add(this.arithmeticUnit, operand));
  }

  sub(operand) {
    return this.run(new Sub(this.arithmeticUnit, operand));
  }

  mul(operand) {
    return this.run(new Mul(this.arithmeticUnit, operand));
  }

  div(operand) {
    return this.run(new Div(this.arithmeticUnit, operand));
  }

  pow2(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "^2"));
  }

  pow3(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "^3"));
  }

  powXY(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "XY"));
  }

  pow10X(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "10X"));
  }

  div1X(operand) {
    return this.run(new Func(this.arithmeticUnit, operand,"div1X"));
  }

  root2(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "root2"));
  }

  root3(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "root3"));
  }

  rootY(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "rootY"));
  }

  fac(operand) {
    return this.run(new Func(this.arithmeticUnit, operand, "fac"));
  }

  undo(levels) {
    this.controlUnit.undo(levels);

    return this.arithmeticUnit.result;
  }

  redo(levels) {
    this.controlUnit.redo(levels);

    return this.arithmeticUnit.result;
  }

  clean() {
    this.controlUnit.commands.length = 0;
    this.controlUnit.current = 0;
    this.arithmeticUnit.result = 0;
    return this.arithmeticUnit.result;
  }

  repeatLastCommand() {
    const { commands } = this.controlUnit;

    if (commands.length > 0) {
      this.run(commands[commands.length - 1]);
    }

    return this.arithmeticUnit.result;
  }

  run(command) {
    this.controlUnit.executeCommand(command);

    return this.arithmeticUnit.result;
  }
}
