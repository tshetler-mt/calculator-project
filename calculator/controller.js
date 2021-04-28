

/**
 * set the global vars to the values from the UI
 */
function CreateCalculator() {
    var firstNumber = +document.getElementById("inputNumberOne").value;
    var secondNumber = +document.getElementById("inputNumberTwo").value;
    var operator = getOperator();

    return new Calculator(firstNumber, secondNumber, operator);
}


  //Main Entry Point for Operate Click
 function calculate(){
    // update the global vars with inputs from the UI
    var calculator = CreateCalculator();
    calculator.operate();
    if(!calculator.attemptedDivideByZero){
        updateResultText(
            `The result of ${calculator.getAction()} ${calculator.firstNumber} and ${calculator.secondNumber} is ${calculator.value}`
        );
    }else{
        updateResultText(`Don't divide by zero please.`);
    }

 }

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    document.getElementById("result").innerText = value;
}

// main entry point for clear click
function clearValues() {
    document.getElementById("inputNumberOne").value = "";
    document.getElementById("inputNumberTwo").value = "";
    updateResultText("");
    document.getElementById("inputNumberOne").focus();
}


/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    var selectedValue;
    var radioButtons = document.getElementsByName("operator");
    radioButtons.forEach((item) => {
        if (item.checked) {
            selectedValue = item.value;
        }
    });
    return selectedValue;
}

