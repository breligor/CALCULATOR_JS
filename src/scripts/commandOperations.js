import Command from "./command_abs_class.js";

export class Add extends Command {
  constructor(receiver, operand) {
    super();
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "+";
  }

  get reverseOperator() {
    return "-";
  }
}

export class Div extends Command {
  constructor(receiver, operand) {
    super();
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "/";
  }

  get reverseOperator() {
    return "*";
  }
}

export class Mul extends Command {
  constructor(receiver, operand) {
    super();
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "*";
  }

  get reverseOperator() {
    return "/";
  }
}

export class Sub extends Command {
  constructor(receiver, operand) {
    super();
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "-";
  }

  get reverseOperator() {
    return "+";
  }
}

export class Func extends Command {
  constructor(receiver, operand, caseValue) {
    super();
    this.receiver = receiver;
    this.operator = caseValue;
    this.operand = operand;
  }
}
