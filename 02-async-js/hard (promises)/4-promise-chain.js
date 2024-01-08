/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

let SECONDS = 1000
function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve, SECONDS))
}

function waitTwoSecond() {
    return new Promise(resolve => setTimeout(resolve, 2 * SECONDS))
}

function waitThreeSecond() {
    return new Promise(resolve => setTimeout(resolve, 3 * SECONDS))
}

function calculateTime() {
    let start_time = new Date()
    waitOneSecond().then(function(){
        waitTwoSecond().then(function(){
            waitThreeSecond().then(function (){
                let end_time = new Date()
                console.clear()
                console.log("Total time for execution: ")
                console.log((end_time - start_time)/1000)
            })
        })
    })
}

calculateTime()