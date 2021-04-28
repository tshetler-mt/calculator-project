class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;
    attemptedDivideByZero = false;

    constructor(firstNumber, secondNumber, operator){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }
    

    //*********************************ADD CODE HERE *************************************/
    /**** Add a method named getAction() that returns a verb describing this.operator
     * 
     * "add" = "adding"
     * "subtract" = "subtracting"
     * "multiply" = "multiplying"
     * "divide" = "dividing"
     * 
     *  ****/


    //*********************************ADD CODE HERE *************************************/
    /**** Add a method named operate() That determines which math method (add, subtract divide, multiply) to call based on the operator ****/

    //*********************************ADD CODE HERE *************************************/
    /****Add a method named add() that sets the value to the addition of the two numbers ****/

    //*********************************ADD CODE HERE *************************************/
    /****Add a method named subtract() that sets the value to the difference of the two numbers****/
    

    //*********************************ADD CODE HERE *************************************/
    /****Add a method named multiply() that sets the value to the product of the two numbers****/

    //*********************************ADD CODE HERE *************************************/
    /****Add a method named divide that checks if we are attempting to divide by zero. 
        If so, set the attemptedDivideByZero flag = true, otherwise  set the value of the division of  the two numbers****/
}


let unit_test = Calculator;