var calculateExpenses = (obj) => {
    var sumArray = (array) => {
        var sum = 0
    
        for (const num of array)
            sum += num
        
        return sum
    }

    var ins = sumArray(obj.ins)
    var out = sumArray(obj.outs)
    var res = ins - out

    return res < 0 ? `Você está em débito!\nSeu débito é de ${(res*-1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}` : `Você não está em débito!\nSeu saldo é de ${res.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`
}

var expenses = {
    ins:  [11000],
    outs: [10000]
}

console.log(calculateExpenses(expenses))