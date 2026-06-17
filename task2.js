let firstNumber = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let secondNumber = Number(prompt("Enter second number:"));

let result;

switch (operator) {
    case "+":
        result = firstNumber + secondNumber;
        break;

    case "-":
        result = firstNumber - secondNumber;
        break;

    case "*":
        result = firstNumber * secondNumber;
        break;

    case "/":
        result = firstNumber / secondNumber;
        break;

    default:
        result = "Invalid Operator";
}
console.log(firstNumber + " " + operator + " " + secondNumber + " = " + result);