let numButtons=document.querySelectorAll('.number')
let operatorButtons=document.querySelectorAll('.operator')
let decimalButton=document.querySelector('.dot')
let deleteButton=document.querySelector('.delete')
let clearButton=document.querySelector('.clear')
let equalsButton=document.querySelector('.equals')
let display=document.querySelector('.display-text')

let operatorButton=null;
let secondOperand=''
let firstOperand=''
/*************************************************/
function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return num1+num2
            break
        case '-':
            return num1-num2
            break
        case '*':
            return num1*num2
            break
        case '/':
            return num1/num2
            break
    }
}
function getNumber(){
    let numButton=this.textContent
    if(display.textContent=='ERROR'){
        clearNum()
        return;
    }
    if(!operatorButton){
        firstOperand+=numButton
        display.textContent=firstOperand
    }
    else{
        secondOperand+=numButton
        display.textContent=secondOperand
    }
}

function getOperator(){
    if(display.textContent=='ERROR'){
        clearNum()
        return;
    }
    operatorButton=this.textContent
    if(secondOperand){
        evaluate()
    }
}
function deleteNum(){
    if(display.textContent=='ERROR'){
        clearNum()
        return
    }
    if(operatorButton){
        secondOperand=secondOperand.slice(0,-1)
        secondOperand=secondOperand||'0'
        display.textContent=secondOperand
    }
    else{
        firstOperand=firstOperand.slice(0,-1)
        firstOperand=firstOperand||'0'
        display.textContent=firstOperand
    }
}
function clearNum(){
    firstOperand=secondOperand=''
    operatorButton=null
    display.textContent='0'
}
function decimalNum(){
    if(firstOperand==''&&secondOperand==''){
        firstOperand='0'
        display.textContent
    }
     if (display.textContent.includes('.')) return;
     if (operatorButton) {
         secondOperand += '.';
         display.textContent = secondOperand;
     } else {
        
         firstOperand += '.';
         display.textContent = firstOperand;
     }
    if(display.textContent=='ERROR'){
        clearNum()
        return 
    }
}
function evaluate(){
    let number1=parseFloat(firstOperand)
    let number2=parseFloat(secondOperand)
    let result=operate(operatorButton,number1,number2)
    display.textContent=result.toFixed(1)
    secondOperand=''
    firstOperand=result.toString()
    console.log(result)
}
/*************************************************/
    // Your event listener setup here
    


operatorButtons.forEach(operator => operator.addEventListener('click',getOperator))
numButtons.forEach(number => number.addEventListener('click',getNumber))
deleteButton.addEventListener('click',deleteNum)
clearButton.addEventListener('click',clearNum)
decimalButton.addEventListener('click',decimalNum)
equalsButton.addEventListener('click',evaluate)