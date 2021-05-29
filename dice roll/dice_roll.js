//Arrow function to generate a random number between two values
const randBetween = (min,max) => Math.floor(Math.random()*(max-min + 1)+min)

//Function to roll the dices
function rollDice(times, dice){
    var chosenNums = []
    for(let c = 0 ; c < times ; c++)
     chosenNums[c] = randBetween(1, dice)

    return chosenNums
}

console.log(rollDice(2,6))