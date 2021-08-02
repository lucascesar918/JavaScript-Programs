/*
    * ### Temperature Input Examplees
    * - 18°C
    * - 49°F
    * - 1500K
 
    * ### Function modes
    * - C: Convert to Celsius to all others
    * - F: Convert to Fahrenheit to all others
    * - K: Convert to Kelvin to all others
*/

var convertTemperature = (temp) =>{
    if (temp=='')
        throw "Not a valid value"
        
    var type = (temp) => {
        if (temp.includes("K"))
            return "K"
        else
            return temp.includes("°C") ? "°C" : "°F"
    }

    var tempNum = (temp) => {
        var res = ""
    
        for (let i=0 ; i<temp.length ; i++) {
            if(!isNaN(temp[i]) || temp[i]=='-')
                res += temp[i]
        }
    
        return Number(res)
    }
    
    if(type(temp)=="°C")
        var resObj = {
            c : `${tempNum(temp)}°C`,
            f : `${tempNum(temp) * 9/5 + 32}°F`,
            k : `${tempNum(temp) + 273.15}K`
        }
    else if (type(temp)=="°F")
        var resObj = {
            c : `${(tempNum(temp) - 32) * 5/9}°C`,
            f : `${tempNum(temp)}°F`,
            k : `${(tempNum(temp)-32)* 5/9 + 273.15}K`
        }
    else
        var resObj = {
            c : `${tempNum(temp)-273.15}°C`,
            f : `${(tempNum(temp)-273.15) * 9/5 + 32}°F`,
            k : `${tempNum(temp)}K`
        }

    return resObj
}

console.log(convertTemperature("32"))