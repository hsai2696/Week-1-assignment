/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let curr_time = new Date().getTime()
    let wait_till_time = new Date(curr_time + 1000 * seconds)

    while(new Date() <= wait_till_time){

    }

}

sleep(3)
console.log("After Synchronous sleep ")