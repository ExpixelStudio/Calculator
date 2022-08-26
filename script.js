'use strict';

//Global Variables used between all functions
let display = document.querySelector('.display');
    let i = 0;
    let currentValue = ''; 
    let storedValue = [];
    let currentOp = '';
    let storedOp = [];
    let result = 0;
    let opResult = 0;
    let maxLength = 13;


 //Calculate Functions
let add = (a,b) => a+b;

let subtract = (a,b) => a-b;

let multiply = (a,b) => a*b;

let divide = (a,b) => a/b;


function operate(inputA , op , inputB) {
    
    if (op == '+') {
        return add(inputA , inputB);
    }

    if (op == '-') {
        return subtract(inputA , inputB);
    }

    if (op == 'x' || op == "*") {
        return multiply(inputA , inputB);
    }
    
    if (op == '÷' || op == '/') {
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
    
            console.log(currentValue.length);
        });
    });
}
numberButtons();   


function operatorButtons() {

    const operators = document.querySelectorAll('.operator-btn');

    operators.forEach((op) => {
        op.addEventListener('click' , function(e){
           
            if (currentValue == '') {  // if no value entered do nothing (fixes NaN error)
                return; 
            } //else
             storedValue[i] = parseFloat(currentValue); //when any operator button is pressed store currentValue in. 
             console.log({storedValue});


             currentValue = ''; //clear currentValue after storing
             
            
            if (op.id === 'plus') {
                storedOp[i] = op.textContent;
            }

            if (op.id === 'minus') {
                storedOp[i] = op.textContent;
            }

            if (op.id === 'multiply') {
                storedOp[i] = op.textContent;
            }

            if (op.id === 'divide') {
                storedOp[i] = op.textContent;
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
                i = 1; //sets i to 1 since 0 will be populated with previous result and operator.

                storedValue[0] = result;
                storedOp[0] = storedOp[1]; // set 2nd operator pressed as the current operator after calculating with 1st pressed op.
            }   else{
                    return;
            }     
        });
    });
}
operatorButtons();


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
        if (currentValue == ''){ //Cannot toogle negative if no value entered
            return;
        }
        else if (currentValue.includes(neg)) {                                 //if '-' is already present 
           currentValue = currentValue.substring(1,currentValue.length)  // return new string starting at 
           display.textContent = currentValue;
        }else
            currentValue = neg.concat(currentValue); //adds '-' to beginning of the currentValue String 
            display.textContent = currentValue;
    }); 
}
negativeToogle();


let clearBtn = () => {  //Clears screen and resets all values.
    const clear = document.getElementById('clr');

    clear.addEventListener('click' , function(e){
        display.textContent = '0';
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

    });
}
backSpcBtn();    


function keyBoardInput() {
   document.addEventListener('keydown', function(e){
     let key = e.key;
     let keyValue = parseInt(e.key); //converts event.key code to a number
     let j = 1;
     
    
    //---BackSpace Key---
     if(key == 'Backspace') {
        currentValue = currentValue.substring(0,currentValue.length-j);
        display.textContent = currentValue;
        console.log(key);
    }
    //___BackSpace Key___
    

    //---Operator Keys---
    if (currentValue == ''){
        void(0); //void(0) also tells JS to do Nothing
    } else if (key == '+' || key == '-' || key == '*' || key == '/') {
        storedOp[i] = key;
        storedValue[i] = parseFloat(currentValue); //when any operator button is pressed store currentValue in
        currentValue = ''; //clear currentValue after storing
        i++;
        console.log({storedOp});
        
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
    }
    //___Operator Keys___
     
    
    //---Number Keys---
    if(Number.isNaN(keyValue)) { //if keyValue IS NOT a number do nothing.
        //DO NOTHING
    } else if(currentValue.length < maxLength) {
        currentValue += keyValue;
        display.textContent = currentValue;
        console.log(key);
    }
    //___Number Keys___


    //---Equal Key---
    if(key == '=' || key == 'Enter') {
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
    } 
    //___Equal Key___

    //---Decimal Key---
    if(key== '.') {
        if (currentValue.includes('.')) {
            return;
        }
        currentValue += key;
        display.textContent = currentValue;
    }
    //___Decimal Key___

    //--Negative Key---
    if (key == '`') {
        if (currentValue == ''){ //Cannot toogle negative if no value entered
            return;
        }
        else if (currentValue.includes('-')) {                                 //if '-' is already present 
           currentValue = currentValue.substring(1,currentValue.length)  // return new string starting at 
           display.textContent = currentValue;
        }else
            currentValue = '-'.concat(currentValue); //adds '-' to beginning of the currentValue String 
            display.textContent = currentValue;
    }

    //---Clear Key---
    if(key == 'Delete') {
        display.textContent = '0';
        currentValue = '';
        storedOp[i] = [];
        storedValue[i] = [];
        i= 0;
    }
    //___Clear Key___
    
   });
}
keyBoardInput();

