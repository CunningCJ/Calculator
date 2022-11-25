let currentNum = "";
let expression = "";
let lastAns = ""
let answer = ""

const currentDisplay = document.querySelector(".ans");
const exprDisplay = document.querySelector(".expr");

const numBut = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

numBut.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (currentNum.length >= 1 && expression.length >= 1){
            operate(expression);
            exprDisplay.textContent = Number(answer.toString().substring(0, 11));
            currentNum = ""
            currentDisplay.textContent = ""
            expression = ""
            handleOperator(e.target.textContent)
    }    else{
            handleOperator(e.target.textContent)
        }
    })
})

function keyboardOperator(eee){
    if (currentNum.length >= 1 && expression.length >= 1){
        operate(expression);
        exprDisplay.textContent = Number(answer.toString().substring(0, 11));
        currentNum = ""
        currentDisplay.textContent = ""
        expression = ""
        handleOperator(eee)
}    else{
        handleOperator(eee)
    }
}

document.getElementById("equ").addEventListener('click', function(){
   operate(expression)
})

document.getElementById("clear").addEventListener('click', function(){
    clear();
})

document.getElementById("point").addEventListener('click', function(){
    point()
})

function point(){
    if (currentNum.includes(".")) {
        currentDisplay.textContent = currentNum;
    } else {
        currentNum += "."
        currentDisplay.textContent = currentNum;
    }
}

document.getElementById("pi").addEventListener('click', function(){
    currentNum = "3.14159265"
    currentDisplay.textContent = currentNum;
})

document.getElementById("sqr2").addEventListener('click', function(){
    currentNum = "1.414213562"
    currentDisplay.textContent = currentNum;
})

document.getElementById("e").addEventListener('click', function(){
    currentNum = "2.71828182"
    currentDisplay.textContent = currentNum;
})

function handleNumber(number){
    if (currentNum.length < 10){
        currentNum += number;
    currentDisplay.textContent = currentNum;
    }};

function handleOperator(op){
    if (answer === ""){
        expression = op;
        lastAns = currentNum;
        exprDisplay.textContent = lastAns.toString().substring(0, 6) + " " + expression;
        currentNum = "";
        currentDisplay.textContent = "";
    } else {
        expression = op;
        lastAns = answer
        exprDisplay.textContent = answer.toString().substring(0, 6) + " " + expression;
        currentNum = "";
        currentDisplay.textContent = "";
    }
}

function add(lastAns, currentNum) {
    answer = Number(lastAns) + Number(currentNum)
}
function subtract(lastAns, currentNum){
    answer = Number(lastAns) - Number(currentNum)
}
function multiply(lastAns, currentNum){
    answer = Number(lastAns) * Number(currentNum)
}
function divide(lastAns, currentNum){
    if (Number(currentNum) === 0){
        answer = "LOL, No!"
    } else {
            answer = Number(lastAns) / Number(currentNum)

    }
}
function operate(){
    if (expression === "X"){
        exprDisplay.textContent = lastAns.toString().substring(0, 6) + " " + expression + " " + currentNum.toString().substring(0, 6);
        multiply(lastAns, currentNum);
        currentDisplay.textContent = Number(answer.toString().substring(0, 11))
    } else if (expression === "/"){
        exprDisplay.textContent = lastAns.toString().substring(0, 6) + " " + expression + " " + currentNum.toString().substring(0, 6);
        divide(lastAns, currentNum);
        currentDisplay.textContent = answer.toString().substring(0, 11)
    } else if (expression === "+"){
        exprDisplay.textContent = lastAns.toString().substring(0, 6) + " " + expression + " " + currentNum.toString().substring(0, 6);
        add(lastAns, currentNum);
        currentDisplay.textContent = Number(answer.toString().substring(0, 11))
    } else if (expression === "-"){
        exprDisplay.textContent = lastAns.toString().substring(0, 6) + " " + expression + " " + currentNum.toString().substring(0, 6);
        subtract(lastAns, currentNum);
        currentDisplay.textContent = Number(answer.toString().substring(0, 11))
    }
}
function clear(){
     currentNum = "";
     expression = "";
     lastAns = ""
     answer = ""
     currentDisplay.textContent = "";
     exprDisplay.textContent = "";
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    if (event.code === "Numpad0"){
        handleNumber(0)
    } else if (event.code === "Numpad1") {
        handleNumber(1) 
    } else if (event.code === "Numpad2") {
        handleNumber(2) 
    } else if (event.code === "Numpad3") {
        handleNumber(3) 
    } else if (event.code === "Numpad4") {
        handleNumber(4) 
    } else if (event.code === "Numpad5") {
        handleNumber(5) 
    } else if (event.code === "Numpad6") {
        handleNumber(6) 
    } else if (event.code === "Numpad7") {
        handleNumber(7) 
    } else if (event.code === "Numpad8") {
        handleNumber(8) 
    } else if (event.code === "Numpad9") {
        handleNumber(9) 
    } else if (event.code === "NumpadMultiply") {
        keyboardOperator("X")
    } else if (event.code === "NumpadDivide") {
        keyboardOperator("/")
    } else if (event.code === "NumpadAdd") {
        keyboardOperator("+")
    } else if (event.code === "NumpadSubtract") {
        keyboardOperator("-")
    } else if (event.code === "NumpadDecimal") {
        point()
    } else if (event.code === "Space") {
        operate(expression)
    } 

    event.preventDefault();
  }, true);