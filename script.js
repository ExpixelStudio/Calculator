'use strict';

let display = document.querySelector('.display');


let add = (a,b) => a+b;

let subtract = (a,b) => a-b;

let multiply = (a,b) => a*b;

let divide = (a,b) => a/b;

function operate(inputA , op , inputB, ...more) {
    
    // inputA = parseInt(prompt('num1'));
    /* opp = prompt('operator');
    inputB = parseInt(prompt('num2')); */


    if (op == '+') {
        return add(inputA , inputB);
        console.log(add);
    }

    if (op == '-') {
        return subtract(inputA , inputB);
    }

    if (op == 'x') {
        return multiply(inputA , inputB);
    }
    
    if (op == '÷') {
        return subtract(inputA , inputB);
    }
}

function numberButtons() {
    const numbers = document.querySelectorAll('.num-btn');
    const operators = document.querySelectorAll('.operator');
    const equalBtn = document.getElementById('equals');

    let currentValue = ''; 
    let storedValue = 0;
    let storedValue2 = 0;
    let storedOp = '';
    let result = 0;
    let opResult = 0;
    numbers.forEach((button) => {
        button.addEventListener('click' , function(e) {
            display.textContent += button.textContent;

            currentValue += parseInt(button.textContent);
            console.log({currentValue});
        });
    });

    operators.forEach((op) => {
        op.addEventListener('click' , function(e){
            
             /* for (let i= 1 ; i < 10 ; i++) { */
             storedValue = parseInt(currentValue); //when any operator button pressed store currentValue in. 
             console.log({storedValue});
             currentValue = ''; //reset current value after storing last one to storedValue

            
            if (op.id === 'plus') {
                storedOp = op.textContent;
                display.textContent += op.textContent;
            }

            if (op.id === 'minus') {
                storedOp = op.textContent;
                display.textContent += op.textContent;
            }

            if (op.id === 'multiply') {
                storedOp = op.textContent;
                display.textContent += op.textContent;
            }

            if (op.id === 'divide') {
                storedOp = op.textContent;
                display.textContent += op.textContent;
            }
            
           opResult = operate(storedValue , storedOp , currentValue);
           console.log({opResult});
            
            
        });
    });

    equalBtn.addEventListener('click' , function(e){
        storedValue2 = parseInt(currentValue); //stores new currentValue after pressing = button
        display.textContent += equalBtn.textContent;
        console.log({storedValue2});
        result = operate(storedValue , storedOp , storedValue2); //calls operate function after pressing = 
        display.textContent += result;

        currentValue = result; //sets new currentValue to result's value. incase user decides to operate again.
        console.log({result});
    });
    
        console.log({storedOp});
            
            
    
}
numberButtons();


/* function operatorButtons(opi) {
    const operators = document.querySelectorAll('.operator');

    operators.forEach((op) => {
        op.addEventListener('click' , function(e){
            
            if (op.id === 'plus') {
                
                display.textContent += op.textContent;
                return opi = true;
            }

            if (op.id === 'minus') {
                display.textContent += op.textContent;
            }

            if (op.id === 'multiply') {
                display.textContent += op.textContent;
            }

        });
    });
} */



let clearBtn = () => {
    const clear = document.getElementById('clr') 

    clear.addEventListener('click' , function(e){
        display.textContent = '';
    });
}

clearBtn();


console.log(operate());


/* 
1) create 2 variables to store the values entered to diplay.
2) after pressing an operator button store the first value to the first storage variable
3)clear screen and after entering 2nd value store to 2nd storage variable 
4) call appropriate function on to calculate result of the 2 values and store in 'result' variable.
5)when =  button is pressed display result to screen.
6) if another op is pressed after result is calculated store result to storage-variable.
7)  
*/

// populate the operate function with storedValue then New displayValue