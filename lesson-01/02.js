// code
let number1 = Math.floor(Math.random() * 100)

function randomNumbers (number) {
    if(number % 2 === 0) {
        console.log(`${number} :Это четное число`);
    } else {
        console.log(`${number} :это не четное число`)
    }
}

randomNumbers(number1)

