
const calculatorOperation = document.querySelector('.calculator-operation');
const calculatorResult = document.querySelector('.calculator-result');
const buttons = document.querySelector('.calculator-buttons');

const writeOperation = text => {
    if (calculatorOperation.value == 0) calculatorOperation.value = '';
    calculatorOperation.value += text;
}

const writeResult = () => {
    calculatorResult.innerHTML = eval(calculatorOperation.value)
}

buttons.addEventListener('click', e => {
    if (e.target.textContent !== '') {
        switch (e.target.textContent) {
            case '=': writeResult();
                break;
            case 'AC': writeScreen();
                break;
            case 'delete': changeSing();
                break;
            case ',': writeOperation('.');
                break;
            default: writeOperation(e.target.textContent);
                break;
        }
    }
})

