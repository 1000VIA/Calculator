let calculator = document.getElementById('calculator');

let result = document.getElementById('calculator-resultado');

let output = document.getElementById('calculator-output');

calculator.addEventListener('click', calculatorClick);


function calculatorClick(event) {
    let target = event.target;
    let dataset = target.dataset;
    let value = dataset.value;
    let type = dataset.type;

    if (type) {
        calc.input(type, value);
        result = calc.output();
        output.innerHTML = result;
    }
}
//States
const STATE_LEFT_OPERAND = 'left_operand';
const STATE_RIGHT_OPERAND = 'right_operand';
const STATE_OPERATOR = 'operator';
const STATE_RESULT = 'result';

//Inputs
const TYPE_NUMBER = 'number';
const TYPE_ACTION = 'action';
const TYPE_OPERATOR = 'operator';


class Calculator {
    constructor() {
        this.init();
    }
    init() {
        this.accumulator = [];
        this.operator = null;
        this.leftOperand = 0;
        this.rightOperand = 0;
        this.state = null;
        this.strategy = null;
    }

    input(type, value) {

    }

    output() {
        let result = 0;
        if (this.accumulator.length > 0) {
            result = this.accumulator.join('');
        }
        return result;
    }
}