// Variables
let firstNumber = 0;
let secondNumber = 0;
let answerValue = 0;
let decimalplace = 1;
let operator = "";
let operatorSelected = false;
let dotSelected = false;

// Calculator elements
const display = document.getElementById("display");
const equationDisplay = document.getElementById("equation");
const answerDisplay = document.getElementById("answer");
const buttonPlus = document.getElementById("+");
const buttonMinus = document.getElementById("-");
const buttonMultiply = document.getElementById("*");
const buttonDivide = document.getElementById("/");
const buttonEqual = document.getElementById("=");
const buttonClear = document.getElementById("C");
const buttonDot = document.getElementById(".");
const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

// Event Listeners
button0.addEventListener("click", () => {pressedNumber(0);})
button1.addEventListener("click", () => {pressedNumber(1);})
button2.addEventListener("click", () => {pressedNumber(2);})
button3.addEventListener("click", () => {pressedNumber(3);})
button4.addEventListener("click", () => {pressedNumber(4);})
button5.addEventListener("click", () => {pressedNumber(5);})
button6.addEventListener("click", () => {pressedNumber(6);})
button7.addEventListener("click", () => {pressedNumber(7);})
button8.addEventListener("click", () => {pressedNumber(8);})
button9.addEventListener("click", () => {pressedNumber(9);})

buttonDot.addEventListener("click", () => {pressedDot();})
buttonClear.addEventListener("click", () => {pressedClear();})

buttonPlus.addEventListener("click", () => {pressedOperator("+");})
buttonMinus.addEventListener("click", () => {pressedOperator("-");})
buttonMultiply.addEventListener("click", () => {pressedOperator("*");})
buttonDivide.addEventListener("click", () => {pressedOperator("/");})

buttonEqual.addEventListener("click", () => {pressedEqual();})

equationDisplay.innerText = firstNumber;
answerDisplay.innerText = answerValue;

//     MODULES
function pressedNumber(value) {
    equationDisplay.innerText == "Ans" && !operatorSelected ? equationDisplay.innerText = "" : null;
    if (operatorSelected) {
        if (dotSelected) {
            value *= Math.pow(0.1, decimalplace);
            secondNumber += value;
            decimalplace++;
        } else {
            secondNumber *= 10;
            secondNumber += value;
        }
    } else {
        if (dotSelected) {
            value *= Math.pow(0.1, decimalplace);
            firstNumber += value;
            decimalplace++;
        } else {
            firstNumber *= 10;
            firstNumber += value;
        }
    }
    updateDisplay(value);
    log();
}
function pressedDot() {
    if (!dotSelected) {
        dotSelected = true;
        decimalplace = 1;
        updateDisplay(".");
    }
    log();
}
function pressedClear() {
    firstNumber = 0;
    secondNumber = 0;
    answerValue = 0;
    operatorSelected = false;
    operator = null;
    resetDecimal();
    clearDisplay(0);
    log();
}
function pressedOperator(value) {
    if (!operatorSelected) {
        resetDecimal();
        operatorSelected = true;
        operator = value;
        updateDisplay(value);
    } else {
        pressedEqual();
        resetDecimal();
        operatorSelected = true;
        operator = value;
        updateDisplay(value);
    }
    log();
}
function pressedEqual() {
    calculate();
    operatorSelected = false;
    resetDecimal();
    updateDisplay();
    log();
}
function updateDisplay(value="") {
    updateEquationDisplay(value);
    updateAnswerDisplay();
}
function clearDisplay() {
    equationDisplay.innerText = 0;
    answerDisplay.innerText = 0;
}
function updateEquationDisplay(value) {
    if (value == "." || value == "+" || value == "-" || value == "*" || value == "/") {
        equationDisplay.innerText += value;
    }else if(value == "Ans"){
        equationDisplay.innerText = "Ans";
    } else {
        equationDisplay.innerText == "0" ? equationDisplay.innerText = "" : null;
        equationDisplay.innerText += value;
    }
}

function updateAnswerDisplay() {
    answerDisplay.innerText = answerValue;
}
function resetDecimal() {
    dotSelected = false;
    decimalplace = 1;
}
function calculate() {
    if (operatorSelected){
        switch (operator) {
            case "+":
                answerValue = firstNumber + secondNumber;
                break;
            case "-":
                answerValue = firstNumber - secondNumber;
                break;
            case "*":
                answerValue = firstNumber * secondNumber;
                break;
            case "/":
                answerValue = firstNumber / secondNumber;
                break;
        }
        firstNumber = answerValue;
    } else {
        answerValue = firstNumber;
    }
    secondNumber = 0;
    operatorSelected = false;
    updateDisplay("Ans");
    resetDecimal();
}
function continueCalculation(value) {

}

// Testing
function log(){
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operator);
    console.log(answerValue);
}