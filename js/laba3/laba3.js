
const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Ділення на нуль неможливе";
            }
        default:
            return "Некоректна операція";
    }
};


const number1 = parseFloat(prompt("Введіть перше число:"));
const number2 = parseFloat(prompt("Введіть друге число:"));


const operation = prompt("Введіть математичну операцію (+, -, *, /):");

console.log("Введена операції: ",  number1, operation, number2);


if (!isNaN(number1) && !isNaN(number2)) {
    console.log(`Результат операції: ${calculate(number1, number2, operation)}`);
} else {
    console.log("Помилка: Один із введених символів не є числом.");
}
