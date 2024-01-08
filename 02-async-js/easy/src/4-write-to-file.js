const fs = require('fs')

let content = 'I am writing to a file hehehe...'

function fileIsWritten(err){
    if(!err){
        console.log("contents written successfully")
    }

}
fs.writeFile("write-to-file.txt", content,"utf-8", fileIsWritten)

console.log('writing to a file...')