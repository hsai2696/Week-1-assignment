let counter = 1
let SECONDS = 1000
function displayCounter(){
    console.clear() // to clear out prior displayed contents onto console
    console.log(counter)
    counter += 1
}

setInterval(displayCounter, SECONDS)