const calculatorOperation = document.querySelector('.calculator-operation');
const calculatorResult = document.querySelector('.calculator-result');
const buttons = document.querySelector('.calculator-buttons');

let operationComplete = false;

const lastValue = () => calculatorOperation.value.substring(calculatorOperation.value.length - 1);

const writeOperation = text => {
    if (calculatorOperation.value == '0' && text != '.') calculatorOperation.value = '';

    if (operationComplete && isNaN(text)) {
        calculatorOperation.value = calculatorResult.value;
        operationComplete = false;
    }

    if (operationComplete && !isNaN(text)) {
        calculatorOperation.value = '';
        calculatorResult.value = '0';
        operationComplete = false;
    }

    if (isNaN(lastValue()) && isNaN(text)) {
        calculatorOperation.value = calculatorOperation.value.substring(0, calculatorOperation.value.length - 1);
    }
    calculatorOperation.value += text;
}

const writeResult = () => {

    if (isNaN(lastValue())) calculatorOperation.value = calculatorOperation.value.substring(0, calculatorOperation.value.length - 1)

    let operation = calculatorOperation.value.replace(String.fromCharCode(215), '*')
    operation = operation.replace(String.fromCharCode(215), '*')
    calculatorResult.value = eval(operation)
    operationComplete = true;
    // calculatorResult.value = lasValue().toString();

    if (calculatorResult.value.length > 9) {
        calculatorResult.style.fontsize = '2em';
        calculatorResult.style.marginTop = '1em';
    }
}

const back = () => {
    if (calculatorOperation.value.length > 0) {
        calculatorOperation.value = calculatorOperation.value.substring(0, calculatorOperation.value.length - 1);
    }
}

const resetScreen = () => {
    calculatorOperation.value = '0';
    calculatorResult.value = '0';
}

buttons.addEventListener('click', e => {
    let content = e.target.textContent
    console.log('-' + content + '-')
    if (content !== '') {
        switch (content) {
            case '=': writeResult();
                break;
            case 'AC': resetScreen();
                break;
            case 'back': back();
                break;
            case ',': writeOperation('.');
                break;
            default: writeOperation(content);
                break;
        }
    }
})

