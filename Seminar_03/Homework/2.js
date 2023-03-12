const userInput = prompt("Введите имя: ");
greeting(userInput);

function greeting(name) {
    console.log(`Приветствую, о ${name}!`);
}