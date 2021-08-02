var numToGrade = (num=101) =>{
    num = Number(num)

    if(num>=90 && num<=100)
        return 'A'
    else if (num>=80 && num < 90)
        return 'B'
    else if (num>=70 && num < 80)
        return 'C'
    else if (num>=60 && num < 70)
        return 'D'
    else if (num<60 && num>=0)
        return 'F'
    else
        throw "Digite uma nota válida!"
}

try{
    console.log(numToGrade(100))
} catch(e){
    console.log(e)
}