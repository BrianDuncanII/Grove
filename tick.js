var rainChance;
var timeOutSet = false;

setInterval(tick, 1000)

function tick() {
    if(season == "Spring")
        rainChance = Math.floor(Math.random() * (75 - 1) + 1);
    else
        rainChance = Math.floor(Math.random() * (125 - 1) + 1);

    eventChance = Math.floor(Math.random() * (150 - 1) + 1);
    height += water*0.0005 + heightAddition;
    light += height*0.005 + lightAddition;

    if(eventChance == 50) {
        playEvent();
    }

    if(height >= 7) {
        if(seedProgress < 100) {
            seedProgress += 1;
        } else {
            seeds += 1;
            seedProgress = 0;
            document.getElementById("seed_total").innerHTML = "Seeds: " + seeds;
        }
    }

    document.getElementById("height").innerHTML = height.toFixed(2);
    document.getElementById("light").innerHTML = light.toFixed(2) + " lm";

    var seedProgressBar = document.getElementById("seed_progressbar");
    seedProgressBar.style = "width: " + seedProgress + "%;";
    seedProgressBar.setAttribute("aria-valuenow",seedProgress);
    seedProgressBar.innerHTML = seedProgress + "%";

    descriptionUpdate();

    if(water >= 1 && thickerRoots == false) {
        document.getElementById("thickerRootsButton").classList.remove("disabled");
    } else {
        if(!document.getElementById("thickerRootsButton").classList.contains("disabled"))
            document.getElementById("thickerRootsButton").classList.add("disabled");
    }

    if(water >= 3 && determinationI == false) {
        document.getElementById("determinationIButton").classList.remove("disabled");
    } else {
        if(!document.getElementById("determinationIButton").classList.contains("disabled"))
            document.getElementById("determinationIButton").classList.add("disabled");
    }

    if(water >= 6 && cellHealthI == false) {
        document.getElementById("cellHealthIButton").classList.remove("disabled");
    } else {
        if(!document.getElementById("cellHealthIButton").classList.contains("disabled"))
            document.getElementById("cellHealthIButton").classList.add("disabled");
    }

    if(light >= 0.10 && absorptionI == false) {
        document.getElementById("absorptionIButton").classList.remove("disabled");
    } else {
        if(!document.getElementById("absorptionIButton").classList.contains("disabled"))
            document.getElementById("absorptionIButton").classList.add("disabled");
    }

    if(light >= 0.10 && internalClock == false) {
        document.getElementById("internalClockButton").classList.remove("disabled");
    } else {
        if(!document.getElementById("internalClockButton").classList.contains("disabled"))
            document.getElementById("internalClockButton").classList.add("disabled");
    }

    if(rainChance == 25 && raining == false) {
        raining = true;
        document.getElementById("rainingNotifier").hidden = false;

        // Post raining notification to the Log
        var rainLog = document.createElement("p");
        rainLog.innerHTML = "<i class='far fa-envelope-open'></i> It started raining!";
        rainLog.style = "color: #20d6c7;";
        document.getElementById("log_container").appendChild(rainLog);
    }

    if(raining == true) {
        if(bountifulShowers == false) {
            bountifulShowers = true;
            document.getElementById("achievements_button").hidden = false;
            var audio = new Audio('snd/snd_achievement.wav');
            audio.play();
            var achievementLog = document.createElement("p");
            achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the Bountiful Showers achievement!";
            achievementLog.style = "color: #ffd541;";
            document.getElementById("log_container").appendChild(achievementLog);
            document.getElementById("bountiful_showers_achievement").hidden = false;
        }
        water += 0.04;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";
        if(timeOutSet == false) {
            timeOutSet = true;
            stopRainingCounter = setTimeout(stopRaining, 50000);
        }
    }

    // Progression
    if(water >= 1.00) {
        document.getElementById("upgrades_button").hidden = false;
    }

    if(light >= 0.10) {
        document.getElementById("research_button").hidden = false;
    }

    // World Time Update
    if(day < 30) {
        day += 1;
    } else {
        day = 1;

        if(month < 12)
            month += 1;
        else {
            month = 1;
            year += 1;
        }
    }

    if(month == 6) {
        season = "Summer";
    } else if(month == 9) {
        season = "Autumn";
    } else if(month == 12) {
        season = "Winter";
    } else if(month == 3) {
        season = "Spring";
    }

    document.getElementById("current_date").innerHTML = "Year " + year + " | " + season + " <i class='fas fa-rainbow'></i>";
}

function stopRaining() {
    timeOutSet = false;
    raining = false;
    document.getElementById("rainingNotifier").hidden = true;

    // Post raining notification to the Log
    var rainLog = document.createElement("p");
    rainLog.innerHTML = "<i class='far fa-envelope-open'></i> It stopped raining!";
    document.getElementById("log_container").appendChild(rainLog);
}