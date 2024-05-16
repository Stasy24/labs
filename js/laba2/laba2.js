const userInput = parseInt(prompt("Введіть число: "));

if (!isNaN(userInput)) {
    const multiples = [];
    for (let i = 0; i <= userInput; i++) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }
    if (multiples.length > 0) {
        console.log("Числа, кратні 5");
        console.log(multiples);
    } else {
        console.log("Sorry, no numbers");
    }
} else {
    console.log("Ошибка: Введено не число.");
}