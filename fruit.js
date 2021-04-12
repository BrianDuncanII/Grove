var producingApples = false;
var appleProgress = 0;
var producingLemons = false;
var lemonProgress = 0;
var producingCherries = false;
var cherryProgress = 0;

setInterval(fruitTick, 1000)

function fruitTick() {
    if(producingApples == true) {
        appleProgress++;
        document.getElementById("apple_progress_bar").innerHTML = appleProgress + "%";
        document.getElementById("apple_progress_bar").style = "width: " + appleProgress + "; color: white;";
    }

    if(appleProgress >= 100) {
        appleProgress = 0;
        apples++;
        document.getElementById("apple_count").innerHTML = apples + " Apples";
    }
}

function produceApples() {
    document.getElementById("produceApplesButton").className = "btn btn-warning";
    producingApples = true;
}