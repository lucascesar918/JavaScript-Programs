const ps = require('./exports').ps

const count =()=> {
    console.log(x--)
    ps('./sounds/tick.mp3')
}

var x = 5

const interval = setInterval(()=>count(),1000)

setTimeout(()=>{clearInterval(interval);console.log("\nBOOM");ps('./sounds/final.mp3')},6000)
