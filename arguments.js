// console.log(process.argv.slice(2)[0]); 

const minimist = require("minimist");

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// })

const argNew = minimist(process.argv.slice(2))
console.log(argNew.name);