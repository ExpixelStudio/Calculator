'use strict';

let display = document.querySelector('.display');

    
    let i = 0;
    let currentValue = ''; 
    let storedValue = [];
    let currentOp = '';
    let storedOp = [];
    let result = 0;
    let opResult = 0;

    let maxLength = 13;


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
        return divide(inputA , inputB);
    }
}


function numberButtons() {
    const numbers = document.querySelectorAll('.num-btn');

    numbers.forEach((button) => {
            button.addEventListener('click' , function(e) {
                if (currentValue.length < maxLength){           // Limits user imput to 13 numbers.

                    currentValue += button.textContent;
                    display.textContent = currentValue;
                    console.log({currentValue});
                    } else {
                        return;
                }
                
                    /* if(i == 1){
                        display.textContent = currentValue;
                    } */
            console.log(currentValue.length);
        });
    });
}
    


function operatorButtons() {
   
    
    const operators = document.querySelectorAll('.operator-btn');

    operators.forEach((op) => {
        op.addEventListener('click' , function(e){
           
            if (currentValue == '') {  // if no value entered do nothing (fixes NaN error)
                return 
            } else
             storedValue[i] = parseFloat(currentValue); //when any operator button is pressed store currentValue in. 
             console.log({storedValue});

             
             
             currentValue = ''; //clear currentValue after storing
             
            
            if (op.id === 'plus') {
                storedOp[i] = op.textContent;
                //display.textContent += op.textContent;
            }

            if (op.id === 'minus') {
                storedOp[i] = op.textContent;
                //display.textContent += op.textContent;
            }

            if (op.id === 'multiply') {
                storedOp[i] = op.textContent;
                //display.textContent += op.textContent;
            }

            if (op.id === 'divide') {
                storedOp[i] = op.textContent;
                //display.textContent += op.textContent;
            }
        
            console.log({storedOp});
            
        
           i++;
           console.log({i});
        
           if (i === 2) {  // operates on values after 2 values are entered
            
           
                result = operate(storedValue[0] , storedOp[0] , storedValue[1]);
                let strResult = result.toString(); //converts numerical result to a string
                let trimResult = strResult.substring(0,maxLength); //trims string to maximum of 13 characters
                display.textContent = trimResult; //outputs trimmed result to display
                console.log({result});
                i = 1;
                storedValue[0] = result;
                storedOp[0] = storedOp[1]; // set 2nd operator pressed as the current operator after calculating with 1st pressed op.
            }   else{
                    return;
            }     
        });
    });
}

function equalButton(){

    const equalBtn = document.getElementById('equals');
    
    equalBtn.addEventListener('click' , function(e){
        if (currentValue == '') {  // if no value entered do nothing (fixes NaN error)
            return ;
        }
        storedValue[1] = parseFloat(currentValue); //stores new currentValue after pressing = button
        result = operate(storedValue[0] , storedOp[0] , storedValue[1]);
              // display.textContent = '';
              let strResult = result.toString(); //converts numerical result to a string
              let trimResult = strResult.substring(0,maxLength); //trims string to maximum of 13 characters
                display.textContent = trimResult; //outputs trimmed result to display
                console.log({result});
                
                i = 1;
        console.log({result});
    });    
}

numberButtons();
operatorButtons();
equalButton();

let decimalBtn = () => {
    const decimal = document.getElementById('decimal');
        
    decimal.addEventListener('click' , function(e){
        if (currentValue.includes('.')) {
            return ;
        }
        currentValue += decimal.textContent;
        display.textContent = currentValue;
    });
}
decimalBtn();


let negativeToogle = () => {
    const negative = document.getElementById('negative');
    const neg = '-';

    negative.addEventListener('click' , function(e){
        if (currentValue.includes(neg)) {                                 //if '-' is already present 
           currentValue = currentValue.substring(1,currentValue.length)  // return new string starting at 
           display.textContent = currentValue;
        }else
            currentValue = neg.concat(currentValue); //adds '-' to beginning of the currentValue String 
            display.textContent = currentValue;
    }); 
}
negativeToogle();


let clearBtn = () => {
    const clear = document.getElementById('clr');

    clear.addEventListener('click' , function(e){
        display.textContent = '';
        currentValue = '';
        storedOp[i] = [];
        storedValue[i] = [];
         i= 0;
    });
}

clearBtn();


let backSpcBtn = () => {
    let j = 1;
    const backSpace = document.getElementById('bkspc');

    backSpace.addEventListener('click' , function(e){
        
        console.log({j});
        console.log(currentValue = currentValue.substring(0,currentValue.length-j)); //
        display.textContent = currentValue;
        /* if (currentValue.length < 0) {
            console.log(currentValue.length);
        }  */
    });
}

backSpcBtn();    



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