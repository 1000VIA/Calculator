
const calculatorOperation = document.querySelector('.calculator-operation');
const calculatorResult = document.querySelector('.calculator-result');
const buttons = document.querySelector('.calculator-buttons');

const writeOperation = text => {
    if (calculatorOperation.value == 0) calculatorOperation.value = '';
    calculatorOperation.value += text;
}

const writeResult = () => {
    let operation = calculatorOperation.value.replace(String.fromCharCode(215), '*')
    // operation = operation.replace(String.fromCharCode(215), '*')
    calculatorResult.value = eval(operation)
}

buttons.addEventListener('click', e => {
    let content = e.target.textContent
    console.log('-' + content + '-')
    if (content !== '') {
        switch (content) {
            case '=': writeResult();
                break;
            case 'AC': writeScreen();
                break;
            case 'delete': changeSing();
                break;
            case ',': writeOperation('.');
                break;
            default: writeOperation(content);
                break;
        }
    }
})

