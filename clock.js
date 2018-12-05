// // create a timer that only goes up to 30 seconds

// var counter = 0; // set the timer counter to zero

// var interval = null; // create a variable to put the interval into

// //set the interval
// interval = setInterval( function(){

//     counter++; // increment the counter

//     console.log( "counter: "+counter); // output the current counter "time"

//     // if 30 seconds have passed, stop the counter
//     if( counter === 30 ){
//       clearInterval( counter );
//     }

// }, 1000);

    var seconds = 0;
    var minutes = 0;
    var hours = 0;
setInterval(function(){
    seconds = seconds + 1;
    if (seconds == 60) {
        seconds = 0;
        minutes += 1;
        }
    if (minutes == 60) {
        minutes = 0;
        hours += 1;
        }
    if (hours == 12) {
        hours = 0;
        }
    function display(quantity) {
        var newDisplay;
        if (quantity < 10) {
        newDisplay = "0"+ quantity;
        }
        else {
            newDisplay = quantity;
        } return newDisplay;
    }
    secondsDisplay = display(seconds);
    minutesDisplay = display(minutes);
    hoursDisplay = display(hours);
    document.querySelector("#display").textContent = ( hoursDisplay + ":" + minutesDisplay + ":" + secondsDisplay );
    document.querySelector("#second").style.transform =  "rotate("+(secondsDisplay*6)+"deg)";
    document.querySelector("#minute").style.transform =  "rotate("+(minutesDisplay*6)+"deg)";
    document.querySelector("#hour").style.transform =  "rotate("+(hoursDisplay*30)+"deg)";
},5);


