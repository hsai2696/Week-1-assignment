const fs = require('fs')


function fileIsWritten(err){
    if(!(err)){
        console.log('contents written succesfully')
    }
}

function fileIsRead(err, contents){
    contents = contents.replace(/\s{2,}/g, ' ')
    fs.writeFile('temp.txt', contents, 'utf-8', fileIsWritten)
}
fs.readFile('temp.txt', 'utf-8', fileIsRead)