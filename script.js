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

    let displayValue = '';
    let state = '';


 //Calculate Functions
let add = (a,b) => a+b;

let subtract = (a,b) => a-b;

let multiply = (a,b) => a*b;

let divide = (a,b) => a/b;


function operate(inputA , op , inputB) {
    
    if (op == '÷' && inputB == 0 || inputB == '0'){
        display.style.fontSize = '1.5vw'; //makes font smaller to support longer text
        maxLength = 50;
        displayValue = 'dividing by zero? I wont allow it! {Please Clear}';
        updateDisplay();
        return;
    }
    
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

function updateDisplay() {
    const display = document.querySelector('.display');
    
    if (typeof displayValue != 'string') {
        displayValue = displayValue.toString();
    } 
        display.innerText = displayValue;
        if(displayValue.length > maxLength) {
        display.innerText = displayValue.substring(0, maxLength);
    }
}


function numberButtons() {
    const numbers = document.querySelectorAll('.num-btn');

    numbers.forEach((button) => {
            button.addEventListener('click' , function(e) {
               /* if (state == 'isResult') {
                    displayValue = '';
               } */
                
                displayValue += button.textContent;
                updateDisplay();
                state = 'isInput';
        });
    });
}
numberButtons();   



function operatorButtons() {

    const operators = document.querySelectorAll('.operator-btn');

    operators.forEach((op) => {
        op.addEventListener('click' , function(e){
           
           
            if (displayValue == '' ) {  // if no value entered do nothing (fixes NaN error)
                return; 
            } 

            state = 'isInput';
           
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
            console.log({storedValue});

            switch (i){
                case 0 :
                    storedValue[0] = parseFloat(displayValue);
                    console.log('this is nice innit');
                    displayValue = '';
                    break;

                case 1 :
                    storedValue[1] = parseFloat(displayValue);
                    console.log('that not nice foo');
                    displayValue = ''
                    break;
    
            }
            
            i++; // increment i
            console.log({i});
        
           if (i === 2) {  // operates on values after 2 values are entered
            
                result = operate(storedValue[0] , storedOp[0] , storedValue[1]); 
                
                console.log({result});
            
                storedValue[0] = result;
                displayValue = storedValue[0];
                storedOp[0] = storedOp[1]; // set 2nd operator pressed as the current operator after calculating with 1st pressed op.
                updateDisplay();
                state = 'isResult';
                displayValue = storedValue[0];
                i = 1; // returns to case 1 for input of 2nd value after storing result as first value.
                displayValue = ''; // clear for entry on new value
                console.log({storedValue});
            }   

        
        });
    });
}
operatorButtons();


function equalButton(){

    const equalBtn = document.getElementById('equals');
    
    equalBtn.addEventListener('click' , function(e){
        if (displayValue == ''  || storedValue.length < 1 ) {  // if no value entered do nothing (fixes NaN error)
            return ;
        }
        
        storedValue[1] = parseFloat(displayValue);
        result = operate(storedValue[0] , storedOp[0] , storedValue[1]);
        
        storedValue[0] = result; 
        displayValue = storedValue[0];
        updateDisplay();       
        state = 'isResult';
        i=0;
                
            console.log({i});
        
    });    
}
equalButton();


let decimalBtn = () => {
    const decimal = document.getElementById('decimal');
        
    decimal.addEventListener('click' , function(e){
        if (displayValue.includes('.')) {
            return ;
        }
        displayValue += decimal.textContent;
        updateDisplay();
    
    });
}
decimalBtn();


let negativeToogle = () => {
    const negative = document.getElementById('negative');
    

    negative.addEventListener('click' , function(e){
        
        if (displayValue == '0'  || displayValue == ''){ //Cannot toogle negative if no value entered
                return;
        } 

        displayValue = displayValue * -1;
        updateDisplay();
        state = 'isResult';
        
        console.log('neggy');
    }); 
}
negativeToogle();


let clearBtn = () => {  //Clears screen and resets all values.
    const clear = document.getElementById('clr');

    clear.addEventListener('click' , function(e){
        displayValue = '';
        updateDisplay();
        display.textContent = '0';
        storedOp[i] = [];
        storedValue[i] = [];
         i= 0;
        display.style.fontSize = '2.5vw'; //must change if change value in css
        maxLength = 13;
         
    });
}
clearBtn();


let backSpcBtn = () => {
    let j = 1;
    const backSpace = document.getElementById('bkspc');

    backSpace.addEventListener('click' , function(e){

    if (state == 'isResult'){ // prevents backspacing result
        //DO NOTHING
    } else {
        
    console.log({j});
    console.log(displayValue = displayValue.substring(0,displayValue.length-j));
    updateDisplay();
}
    });
}
backSpcBtn();    


const colorBtn = () => {
    const changeColor = document.getElementById('color');
     const top = document.querySelector('.top-panel');
     const mid = document.querySelector('.display-container');
     const bottom = document.querySelector('.device-container');
     let k = 0;
 
     const color = ['rgb(135, 206, 235)' , 'rgb(218, 210, 106)' , 'rgb(209, 127, 80)' , 'rgb(43, 177, 72)' ];    
                     //skyblue(default), yellow , orange , green
 
     changeColor.addEventListener('click' , function(e){
         
         k++;
         if (k > 3) {
             k= 0;
         }
         top.style.backgroundColor = color[k];
         mid.style.borderColor = color[k];
         bottom.style.backgroundColor = color[k];
         
         console.log(color);
     });
 }
 colorBtn(); // call colorButton


 /* pretty sure not the ideal way to handle the keyboard input, may redo the way i handled functions...
    so i can call function functionality via click and on keypress */

function keyBoardInput() {
   document.addEventListener('keydown', function(e){
     let key = e.key;
     let keyValue = parseInt(e.key); //converts event.key code to a number
     let j = 1;
     
    switch (key) {
        //back-space key
        case 'Backspace' :
            if (state == 'isResult'){ // prevents backspacing result
                //DO NOTHING
            } else {
            
            displayValue = displayValue.substring(0,displayValue.length-j);
            updateDisplay();
        }
        break;
        //back-space key _end

        //operator keys
        case '+' :
        case '-' :
        case '*' :
        case '/' :
            if (displayValue == '' ) {  // if no value entered do nothing (fixes NaN error)
                return; 
            } 

            state = 'isInput';
           
            storedOp[i] = key;
        
            switch (i){
                case 0 :
                    storedValue[0] = parseFloat(displayValue);
                    console.log('this is nice innit');
                    displayValue = '';
                    break;

                case 1 :
                    storedValue[1] = parseFloat(displayValue);
                    console.log('that not nice foo');
                    displayValue = ''
                    break;
            }
            
            i++; // increment i
            console.log({i});
        
           if (i === 2) {  // operates on values after 2 values are entered
            
                result = operate(storedValue[0] , storedOp[0] , storedValue[1]); 
                //operate();
                
                console.log({result});
                console.log(storedValue.length);
                

                storedValue[0] = result;
                displayValue = storedValue[0];
                storedOp[0] = storedOp[1]; // set 2nd operator pressed as the current operator after calculating with 1st pressed op.
                updateDisplay();
                state = 'isResult';
                displayValue = storedValue[0];
                i = 1 ;  // returns to case 1 for input of 2nd value after storing result as first value.
                displayValue = ''; // clear for entry on new value
            }   
            break;
            //operator keys _end

            //equal key
            case '=' :
            case 'Enter' :
                if (displayValue == ''  || storedValue.length < 1 ) {  // if no value entered do nothing (fixes NaN error)
                    return ;
                }
                
                storedValue[1] = parseFloat(displayValue);
                result = operate(storedValue[0] , storedOp[0] , storedValue[1]);
                
                storedValue[0] = result; 
                displayValue = storedValue[0];
                updateDisplay();       
                state = 'isResult';
                i=0;
            break;
            //equal key _end

            //decimal key
            case '.' :
                if (displayValue.includes('.')) {
                    return ;
                }
                displayValue += decimal.textContent;
                updateDisplay();
            break;

            case '`' :
                if (displayValue == '0'  || displayValue == ''){ //Cannot toogle negative if no value entered
                    return;
                } 

                displayValue = displayValue * -1;
                updateDisplay();
                state = 'isResult';
            break;
            //decimal key _end

            //clear key
            case 'Delete' :
                displayValue = '';
                updateDisplay();
                display.textContent = '0';
                storedOp[i] = [];
                storedValue[i] = [];
                i= 0;
                display.style.fontSize = '2.5vw'; //must change if change value in css
                maxLength = 13;
            break;
            //clear key _end
            
        default :
        //number keys
            if(Number.isNaN(keyValue)) { //if keyValue IS NOT a number do nothing.
                return;
            } 
            if (state == 'isResult') {
                displayValue = '';
            } 
            displayValue += keyValue;
            updateDisplay();
            state = 'isInput';
            
    }
   });
}
keyBoardInput();