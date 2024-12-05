const readline = require('readline')
requ

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`what is your name ?`, name =>{
    console.log(`Hi, ${name}`);
    rl.close()
})