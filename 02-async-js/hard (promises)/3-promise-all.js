/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

let SECONDS = 1000
function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve,  SECONDS))
}

function waitTwoSecond() {
    return new Promise(resolve => setTimeout(resolve, 2 * SECONDS))
}

function waitThreeSecond() {
    return new Promise(resolve => setTimeout(resolve, 3 * SECONDS))
}

function calculateTime() {

    let start_time = new Date()
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(function(){
        let end_time = new Date()
        console.clear()
        console.log("Total time for execution: ")
        console.log((end_time - start_time)/1000)
    })

}

calculateTime()