
// const primaryScreen = document.querySelector('.display-text');
// let displayValue = '';
// let firstOperand = '';
// let secondOperand = '';
// let mathOperator = null;

// const operate = (operator, a, b) => ({ '+': a + b, '-': a - b, '*': a * b, '/': a / b }[operator]);

// function clearScreen() {
//     displayValue = firstOperand = secondOperand = mathOperator = '';
//     primaryScreen.textContent = '0';
// }

// function addToScreen() {
//     const btnValue = this.textContent;
//     if (primaryScreen.textContent === 'Error') {
//         clearScreen();
//         return;
//     }
//     if (mathOperator) {
//         secondOperand += btnValue;
//         displayValue = secondOperand;
//     } else {
//         firstOperand += btnValue;
//         displayValue = firstOperand;
//     }
//     limitScreenCharacter();
// }

// function calculate() {
//     if (mathOperator === '/' && primaryScreen.textContent === '0') {
//         primaryScreen.textContent = 'Error';
//         return;
//     }
//     if (primaryScreen.textContent === 'Error') {
//         clearScreen();
//         return;
//     }
//     const result = operate(mathOperator, parseFloat(firstOperand), parseFloat(secondOperand));
//     primaryScreen.textContent = result.toString().slice(0, 9);
//     firstOperand = result.toString();
//     secondOperand = '';
//     mathOperator = '';
// }

// function limitScreenCharacter() {
//     displayValue = displayValue.slice(0, 9);
//     primaryScreen.textContent = displayValue;
// }

// function selectOperator() {
//     if (primaryScreen.textContent === 'Error') return;
//     if (secondOperand) calculate();
//     mathOperator = this.textContent;
// }

// function sliceLast() {
//     if (primaryScreen.textContent === 'Error') return clearScreen();
//     if (secondOperand) {
//         secondOperand = secondOperand.slice(0, -1);
//         displayValue = secondOperand;
//     } else if (mathOperator) {
//         mathOperator = '';
//     } else {
//         firstOperand = firstOperand.slice(0, -1);
//         displayValue = firstOperand;
//     }
//     primaryScreen.textContent = displayValue || '0';
// }

// function addPoint() {
//     if (primaryScreen.textContent.includes('.')) return;
//     if (mathOperator) {
//         secondOperand += '.';
//         displayValue = secondOperand;
//     } else {
//         firstOperand += '.';
//         displayValue = firstOperand;
//     }
//     primaryScreen.textContent = displayValue;
// }

// const numberBtn = document.querySelectorAll('.number');
// const operatorBtn = document.querySelectorAll('.operator');
// const equalBtn = document.querySelector('.equals');
// const clearBtn = document.querySelector('.clear');
// const deleteBtn = document.querySelector('.delete');
// const pointBtn = document.querySelector('.dot');

// numberBtn.forEach(btn => btn.addEventListener('click', addToScreen));
// operatorBtn.forEach(btn => btn.addEventListener('click', selectOperator));
// equalBtn.addEventListener('click', calculate);
// clearBtn.addEventListener('click', clearScreen);
// deleteBtn.addEventListener('click', sliceLast);
// pointBtn.addEventListener('click', addPoint);







let numButtons=document.querySelectorAll('.nummber')
let operatorButtons=document.querySelectorAll('.operator')
let decimalButton=document.querySelector('.dot')
let deleteButton=document.querySelector('.delete')
let clearButton=document.querySelector('.clear')
let equalsButton=document.querySelector('.equals')
let display=document.querySelector('.display-text')
/*************************************************/


/*************************************************/
operatorButtons.forEach(operator => operator.addEventListener('click',getOperator))
numButtons.forEach(number => number.addEventListener('click',getNumber))
deleteButton.addEventListener('click',deleteNum)
clearButton.addEventListener('click',clearNum)
decimalButton.addEventListener('click',decimalNum)
equalsButton.addEventListener('click',evaluate)