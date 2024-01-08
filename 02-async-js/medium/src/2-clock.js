let SECONDS = 1000

function getFormattedDate(hours, minutes, seconds){
    let meridiem_indicator = "AM"
    if(hours >  11 ){
        if(hours === 24){
            hours -= 24
        }
        else if(hours > 12) {
            hours -= 12
            meridiem_indicator = "PM"
        }
    }
    if(minutes < 10){
        minutes = '0'+minutes
    }
    if(seconds < 10){
        seconds = '0'+seconds
    }
    return hours +" : "+minutes+" : "+seconds+" "+meridiem_indicator
}
function printClock(){
    let curr_time = new Date()
    console.clear()
    console.log(getFormattedDate(curr_time.getHours(), curr_time.getMinutes(), curr_time.getSeconds()))
}

setInterval(printClock, SECONDS)