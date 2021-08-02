var str = require('./exports').str
var quests = require('./exports').quests

const ask =(i=0)=>{
    process.stdout.write("\n"+quests[i]+"\n\n")
}

const ans = []
process.stdin.on("data", data =>{
    ans.push(data.toString().trim())
    if (ans.length < quests.length)
        ask(ans.length)
    else{
        for(let j=0; j<=10; j++)
            process.stdout.write("\n")
        for(let j=0; j<quests.length; j++){
            process.stdout.write("? "+quests[j]+"\n\n")
            process.stdout.write("\t! "+ans[j]+"\n\n")
        }
        process.exit()
    }
})

ask()