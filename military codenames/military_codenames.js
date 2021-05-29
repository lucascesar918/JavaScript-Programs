//Object with the codenames
var codenames = {
    "a" : "alpha",
    "b" : "bravo",
    "c" : "charlie",
    "d" : "delta",
    "e" : "echo",
    "f" : "foxtrot",
    "g" : "golf",
    "h" : "hotel",
    "i" : "india",
    "j" : "juliett",
    "k" : "kilo",
    "l" : "lima",
    "m" : "mike",
    "n" : "november",
    "o" : "oscar",
    "p" : "papa",
    "q" : "quebec",
    "r" : "romeo",
    "s" : "sierra",
    "t" : "tango",
    "u" : "uniform",
    "v" : "victor",
    "w" : "whiskey",
    "x" : "x-ray",
    "y" : "yankee",
    "z" : "zulu",
}

//Function which checks if a property exists inside an object, if exists, returns that value
function checkProp(obj, prop){
    if(obj.hasOwnProperty(prop))
        return obj[prop]
    
    else
        return undefined
}

console.log(checkProp(codenames, "c"))