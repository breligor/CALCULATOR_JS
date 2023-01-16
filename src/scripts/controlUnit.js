// INVOKER for executed commands history saving
export default class ControlUnit {
  constructor() {
    this.commands = [];
    this.current = 0; // index of the command that is going to execute
  }

  executeCommand(command) {
    if (this.current <= this.commands.length - 1) {
      this.commands.splice(this.current);
    }
    this.commands.push(command);
    this.commands[this.current].execute();
    this.current++;
  }

  undo(levels) {
    // levels - the back steps value
    for (let i = 0; i < levels; i++) {
      if (this.current > 0) {
        this.commands[--this.current].unExecute();
      }
    }
  }

 // levels - the redo steps value
  redo(levels) {
    for (let i = 0; i < levels; i++) {
      if (this.current <= this.commands.length - 1) {
        this.commands[this.current++].execute();
      }
    }
  }
}
