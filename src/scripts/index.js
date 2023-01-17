import Calculator from './calculator.js';
import SwitchMem from './memoreHandler.js';
import { CALC_BODY, DISPLAY, SECOND_DISPLAY, MEM_VAL } from './content.js';

export default class CalculatorUI {
    constructor() {
        this.calculator = calculator;
        this.screen = DISPLAY;
        this.secondScreen = SECOND_DISPLAY;
        DISPLAY.value = 0;
        SECOND_DISPLAY.value = '';
        this.mem = MEM_VAL; // memory screen
        MEM_VAL.textContent = '';
        this.firstOperandInputted = false; // flag
        this.equallyInputted = false; // flag for equal input
        this.currentOperator = null; // operator that is going to execute
        this.inputUpdated = false; // flag that changes when the first char has entered
        // catch events on calculator
        CALC_BODY.addEventListener('click', this.CatchEvent.bind(this));
    }

    CatchEvent(event) {
        const char = event.target.getAttribute('data-character'); // for digits btns
        const operator = event.target.getAttribute('data-operator'); // for two operands operations (+ - * /)
        const control = event.target.getAttribute('data-key'); // for control btns (del, ac, back, +/-, =)
        const func = event.target.getAttribute('data-func'); // for one operand operations (x2-x!)
        const memory = event.target.getAttribute('data-mem'); // for MR MS MC M+ M-

        if (char) {
            this.inputChar(char);
        }
        if (operator) {
            this.doubleOperations(operator);
        }
        if (control) {
            this[control](); // this["MakeClear"]()
        }
        if (func) {
            this.singleOperations(func);
        }
        if (memory) {
            this.memoryOperations(memory);
        }
    }

    // percent
    makePercent() {
        DISPLAY.value /= 100;
    }

    // memory operations through sessionStorage
    memoryOperations(memory) {
        this.setDefaultFlags();
        SwitchMem(memory);
    }

    // DEL btn to delete last symbol
    makeBackspace() {
        DISPLAY.value = DISPLAY.value.slice(0, -1);
        SECOND_DISPLAY.value = SECOND_DISPLAY.value.slice(0, -1);

        if (!DISPLAY.value) {
            DISPLAY.value = 0;
            this.inputUpdated = false;
        }
    }

    // +/- btn
    makeMinusPlus() {
        if (DISPLAY.value) {
            DISPLAY.value *= -1;
        }
    }

    // dot input handler
    inputDot() {
        // only one dot in number
        if (DISPLAY.value.indexOf('.') === -1) {
            DISPLAY.value += '.';
            this.inputUpdated = true;
        } else {
            return false;
        }
    }

    // screen output
    inputChar(char) {
        if (this.inputUpdated === false) {
            if (SECOND_DISPLAY.value == 0) {
                SECOND_DISPLAY.value = '';
            }
            DISPLAY.value = char; // first input
            SECOND_DISPLAY.value += char;
            this.inputUpdated = true;
        } else {
            // second input
            DISPLAY.value += char;
            SECOND_DISPLAY.value += char;
        }
    }

    // one operand
    singleOperations(func) {
        // if the operator is entered for the first time - remember it and add it to the calculator register
        // (f.e.: ControlUnit -> commands[ 0: Add {receiver: ArithmeticUnit, operand: 2, operator: '+']} )
        if (this.currentOperator === null) {
            this.calculator.clean()
            this.calculator.add(parseFloat(DISPLAY.value));
            this.firstOperandInputted = true;
            this.currentOperator = func;
            DISPLAY.value = this.calculator[this.currentOperator](
                parseFloat(DISPLAY.value)
            );
            SECOND_DISPLAY.value = DISPLAY.value;

            return;
        }
        // further calculation when the same key is pressed again with an already existing value
        if (this.currentOperator !== null && this.firstOperandInputted) {
            DISPLAY.value = this.calculator.repeatLastCommand();
            SECOND_DISPLAY.value = DISPLAY.value;
        }
    }

    // 2 operands
    doubleOperations(operator) {
        if (!DISPLAY.value) {
            return false;
        }
        // define the first operand: it is added to the register at the moment of entering the first operator
        if (this.currentOperator === null) {
            if (this.equallyInputted) {
                this.equallyInputted = false;
                this.calculator.clean();
            }
            SECOND_DISPLAY.value += event.target.textContent;
            //  we save the operator and add it to the calculator register
            this.calculator.add(parseFloat(DISPLAY.value));
            this.firstOperandInputted = true;
            this.currentOperator = operator;
            this.inputUpdated = false; // to catch second operand

            return;
        }

        // second operand
        // if the operator is entered not in the first time, and a new character is entered
        // take 2 operands and calculate the value
        if (this.currentOperator && this.inputUpdated) {
            SECOND_DISPLAY.value += event.target.textContent;
            DISPLAY.value = this.calculator[this.currentOperator](
                parseFloat(DISPLAY.value)
            );
            this.currentOperator = operator;
            this.inputUpdated = false;

            return;
        }
        // leave only the last entered operator
        if (this.currentOperator && this.inputUpdated === false) {
            this.currentOperator = operator;
            SECOND_DISPLAY.value =
                SECOND_DISPLAY.value.substring(
                    0,
                    SECOND_DISPLAY.value.length - 1
                ) + event.target.textContent;
        }
    }

    // equal btn
    makeEqual() {
        // if equal is entered for the first time, and we have one operand and operator,
        // catch the second operand and calculate
        if (
            !this.equallyInputted &&
            this.firstOperandInputted &&
            this.inputUpdated &&
            this.currentOperator
        ) {
            DISPLAY.value = this.calculator[this.currentOperator](
                parseFloat(DISPLAY.value)
            );
            SECOND_DISPLAY.value = DISPLAY.value;
            this.equallyInputted = true;
            this.setDefaultFlags(); // clean flags
        } else {
            //repeat computation when equal is pressed every time again
            if (!this.firstOperandInputted) {
                DISPLAY.value = this.calculator.repeatLastCommand();
                SECOND_DISPLAY.value = DISPLAY.value;
                this.inputUpdated = false;
            } else {
                return false;
            }
        }
    }

    // clean flags
    setDefaultFlags() {
        this.firstOperandInputted = false;
        this.currentOperator = null;
        this.inputUpdated = false;
    }

    // AC btn
    makeClear() {
        DISPLAY.value = this.calculator.clean();
        SECOND_DISPLAY.value = '';
        this.setDefaultFlags();
    }

    // btn Back
    Undo() {
        DISPLAY.value = this.calculator.undo(1);
        SECOND_DISPLAY.value = DISPLAY.value;
        if (SECOND_DISPLAY.value == 0) {
            SECOND_DISPLAY.value = '';
        }
    }

    // btn Redo
    // Redo() {
    //     DISPLAY.value = this.calculator.redo(1);
    // }
}

export const calculator = new Calculator();
// UI
export const calculatorUI = new CalculatorUI(
    calculator,
    document.querySelector('.calcBody')
);
