const repl = require('repl')

const local = repl.start("$")

local.on('exit', () =>{
    console.log('exiting from REPL');
    process.exit()
})