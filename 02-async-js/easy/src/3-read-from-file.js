const fs = require('fs')


function fileIsRead(err, contents){
    console.log(contents)
}

fs.readFile('../3-read-from-file.md', 'utf-8', fileIsRead)
console.log('reading from a file..')

function iterateOver(n){
    let num = 1
    for(let i = 1; i <= n; i++){
        num += 1
    }
}

iterateOver(10 * 7) // <-- less complex sync ops
//iterateOver(10 ** 9) // <-- more complex sync ops
//iterateOver(10 ** 10) // <-- most complex sync ops