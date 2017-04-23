// This functions takes an array and suffles it
// *Note: The array should be global
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// Use this function when you want to run the timer
// *Note: when you want to reset the timer, you must use the clearInterval functions
// like this: clearInterval(interval);
// This function requires the updateTimer function so don't erase it
function runTimer() {
    interval = setInterval(updateTimer, 1000);
}

// Function that updates the timer.  Note: #time and #time-label are MY IDs,
// you must change those to match yours.  Also, clock is a global var that I used, change that accorning to your code.
// Don't call this function directly, the function runTimer() calls it
function updateTimer() {
    clock--;
    if (clock == 0) {
        // update timer
        $( "#time" ).html(clock);
        clearInterval(interval);

        // you need to do some stuff here to control the game

    } else {
        // timer changes to red when under 5 seconds
        if (clock < 5) {
            $( "#time" ).css("color", "red");
            $( "#time-label" ).css("color", "red");
        }
        // update timer
        $( "#time" ).html(clock);
    }
}


function start()
{
    var game = {}
    var displayCircles = []

    function populate()
    {
        populateCircles();
    }

    function populateCircles()
    {
        $( ".display-circles" ).each(function( index ) {
            displayCircles.push()
        });
    }
}