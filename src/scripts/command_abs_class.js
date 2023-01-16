// abstract base class
export default class Command {
  execute() {
    this.receiver.compute(this.operator, this.operand);
  }

  unExecute() {
    this.receiver.compute(this.reverseOperator, this.operand);
  }
}
