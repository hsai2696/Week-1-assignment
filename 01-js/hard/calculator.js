/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
    constructor() {
        this.result = 0
    }

    add(number){
        this.result += number
    }

    subtract(number){
        this.result -= number
    }

    multiply(number){
        this.result *= number
    }

    divide(number){
        //this.result = parseInt(''+(this.result / number)) // just integer division
        this.result /= number
    }

    clear(){
        this.result = 0
    }

    getResult(){
        return this.result
    }

    calculate(expression){
        //remove extra spaces
        expression = expression.replace(/\s/g, "")
        let res = 0
        try{
            //utilise javascript's internal eval() method to get result
            res = eval(expression)
        }catch (e) {
            // in case of invalid expression
            return "Invalid Expression"
        }
        return res
    }


}

let calc_instance = new Calculator()

calc_instance.add(1)
calc_instance.multiply(4)
calc_instance.clear()
calc_instance.subtract(2)
calc_instance.divide(3)
console.log(calc_instance.getResult())
console.log(calc_instance.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7"))
console.log(calc_instance.calculate("10 +   2 *    (   6 - (abc + 1) / 2) + 7"))

module.exports = Calculator;
