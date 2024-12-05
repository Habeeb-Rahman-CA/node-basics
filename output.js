// const x = '1'
// const y = '2'

// console.log(x, y);

// console.log("My name is %s, and my age is %d", 'Habeeb', 22);
// console.count("Iam Habi");
// console.count("Iam Habi");
// console.count("Iam sonu")
// console.count("Iam Habi");


// const function1 = () => console.trace();
// const function2 = () => function1()

// function2()

// const sum = () => console.log(`The sum of 2 and 3 s ${2 + 3}`);
// const multiply = () => console.log(`The sum of 2 and 3 s ${2 * 3}`);

// const measureTime = () => {
//     console.time('sum()')
//     sum()
//     console.timeEnd('sum()')
//     console.time('multiply()')
//     multiply()
//     console.timeEnd('multiply()')
// }

// measureTime()


const chalk = require("chalk")
const ProgressBar = require("progress")

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
    total: 20
})

const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)

console.log(chalk.red("Habeeb Rahman"))