'use strict';

let display = document.querySelector('.display');

    
    let currentValue = ''; 
    let storedValue = [];
    let storedValue2 = 0;
    let currentOp = '';
    let storedOp = [];
    let result = 0;
    let opResult = 0;


let add = (a,b) => a+b;

let subtract = (a,b) => a-b;

let multiply = (a,b) => a*b;

let divide = (a,b) => a/b;

function operate(inputA , op , inputB, ...more) {
    
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
    
    
    numbers.forEach((button) => {
        button.addEventListener('click' , function(e) {
            display.textContent += button.textContent;

            currentValue += button.textContent;
            console.log({currentValue});
        });
    });
}

function operatorButtons() {
   
    let i = 0;
    const operators = document.querySelectorAll('.operator');

    operators.forEach((op) => {
        op.addEventListener('click' , function(e){
            
             //for (let i= 0 ; i < 10 ; i++) {
             
             storedValue[i] = parseInt(currentValue); //when any operator button pressed store currentValue in. 
             console.log({storedValue});

             currentValue = ''; //clear current value after storing
            
            if (op.id === 'plus') {
                storedOp[i] = op.textContent;
                display.textContent += op.textContent;
            }

            if (op.id === 'minus') {
                storedOp[i] = op.textContent;
                display.textContent += op.textContent;
            }

            if (op.id === 'multiply') {
                storedOp[i] = op.textContent;
                display.textContent += op.textContent;
            }

            if (op.id === 'divide') {
                storedOp[i] = op.textContent;
                display.textContent += op.textContent;
            }
            
            console.log({storedOp});
           //opResult = operate(storedValue , storedOp , currentValue);
            
           i++;
           console.log({i});

           if (i === 2) {

                result = operate(storedValue[0] , storedOp[0] , storedValue[1]);
              // display.textContent = '';
                display.textContent += "=" + result + storedOp; 
                console.log({result});
                i = 1;
                storedValue[0] = result;
                storedOp[0] = storedOp[1];
                //storedValue[0] = result ;
           }


        });
    });
}

function equalButton(){

    const equalBtn = document.getElementById('equals');
    
    equalBtn.addEventListener('click' , function(e){
        storedValue[1] = parseInt(currentValue); //stores new currentValue after pressing = button
        result = operate(storedValue[0] , storedOp[0] , storedValue[1]);
              // display.textContent = '';
                display.textContent += "=" + result + storedOp; 
                console.log({result});
                //i = 1;
                storedValue[0] = result;
                storedOp[0] = storedOp[1];
        console.log({result});
    });    
}

numberButtons();
operatorButtons();
equalButton();

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