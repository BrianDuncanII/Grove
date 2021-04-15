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
        document.getElementById("apple_count").innerHTML = apples;
    }

    if(apples > 0) {
        document.getElementById("drop_apple_container").hidden = false;
    } else {
        document.getElementById("drop_apple_container").hidden = true;
    }

    if(producingLemons == true) {
        lemonProgress++;
        document.getElementById("lemon_progress_bar").innerHTML = lemonProgress + "%";
        document.getElementById("lemon_progress_bar").style = "width: " + lemonProgress + "; color: white;";
    }

    if(lemonProgress >= 100) {
        lemonProgress = 0;
        lemons++;
        document.getElementById("lemon_count").innerHTML = lemons;
    }

    if(lemons > 0) {
        document.getElementById("drop_lemon_container").hidden = false;
    } else {
        document.getElementById("drop_lemon_container").hidden = true;
    }

    document.getElementById("total_apples").innerHTML = "Apples: " + apples;
    document.getElementById("apple_count").innerHTML = apples + " Apples";

    if (apples > 0) {
        document.getElementById("drop_apple_button").classList.remove("disabled");
    } else {
        if (!document.getElementById("drop_apple_button").classList.contains("disabled"))
            document.getElementById("drop_apple_button").classList.add("disabled");
    }
}

function produceApples() {
    document.getElementById("produceApplesButton").className = "btn btn-warning";
    producingApples = true;
}

function produceLemons() {
    document.getElementById("produceLemonsButton").className = "btn btn-warning";
    producingLemons = true;
}

function dropApple() {
    var wormSpawnChance = Math.floor(Math.random() * (5 - 1) + 1);
    if(wormSpawnChance == 3) {
        worms++;
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='fas fa-apple-alt'></i> You dropped an apple and got a worm! You now have " + worms + " worms.";
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='fas fa-apple-alt'></i> You dropped an apple and nothing happened.";
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    }

    apples--
    document.getElementById("total_apples").innerHTML = "Apples: " + apples;
    document.getElementById("apple_count").innerHTML = apples + " Apples";
}