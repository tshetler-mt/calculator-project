
// Enum of Operators
Operators = {
    ADD: "add",
    SUBTRACT: "subtract",
    MULTIPLY: "multiply",
    DIVIDE: "divide",
}

class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }
    


    getAction(){
        switch(this.operator){
            case Operators.ADD:
                return "adding"
                break;
            case Operators.SUBTRACT:
                return "subtracting"
                break;
            case Operators.MULTIPLY:
                return "multiplying"
                break;
            case Operators.DIVIDE:
                return "dividing"
                break;
            default:
                break;
        }
    }



    operate(){
        // take action based on the operator selected
        switch (this.operator) {
            case Operators.ADD:
                this.add();
                break;
            case Operators.SUBTRACT:
                this.subtract();
                break;
            case Operators.MULTIPLY:
                this.multiply();
                break;
            case Operators.DIVIDE:
                this.divide();
                break;
            default:
                break;
        }


    }


    attemptedDivideByZero = false;

    //Performs Addition Operation
    add(){
        this.value = this.firstNumber + this.secondNumber;
    }


    //Performs Subtraction Operation
    subtract(){
        this.value = this.firstNumber - this.secondNumber;
    }

    //Performs Multiplication Operation
    multiply(){
        this.value = this.firstNumber * this.secondNumber;
    }


    //Performs Divide Operation
    divide(){
        if(this.secondNumber == 0){
            this.attemptedDivideByZero = true;
        }
        else{
            this.value = this.firstNumber / this.secondNumber;
        }
    }
}



//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;