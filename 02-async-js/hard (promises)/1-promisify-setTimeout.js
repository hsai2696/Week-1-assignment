/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    // As we cannot invoke resolve function of promise with wait's argument we need to write function here itself
    return new Promise(resolve => setTimeout(resolve, n * 1000))
}

wait(2).then(function(){
    console.log("printing after wait is resolved")
})