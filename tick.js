var rainChance;
var timeOutSet = false;

setInterval(tick, 1000)

function tick() {
    document.getElementById("title").innerHTML = "Grove | " + height.toFixed(2) + " m";
    document.getElementById("achievement_multiplier_display").innerHTML = "Light Absorption Multiplier: " + lightMultiplier.toFixed(2) + "x lm/sec";

    if(seconds_played < 60) {
        seconds_played += 1;
    } else {
        seconds_played = 0;
        minutes_played += 1;
    }

    if(minutes_played == 60) {
        minutes_played = 0;
        hours_played += 1;
    }

    document.getElementById("time_played").innerHTML = "<i class='far fa-clock'></i> Time Played: " + hours_played + " Hours, " + minutes_played + " Minutes, " + seconds_played + " Seconds";
    document.getElementById("times_germinated").innerHTML = "<i class='fas fa-mouse-pointer'></i> Times Germinated: " + numberWithCommas(times_germinated);
    document.getElementById("water_used").innerHTML = "<i class='fas fa-water'></i> Water Used: " + water_used.toFixed(2) + " ml";

    if(season == "Spring")
        rainChance = Math.floor(Math.random() * (200 - 1) + 1);
    else
        rainChance = Math.floor(Math.random() * (450 - 1) + 1);

    eventChance = Math.floor(Math.random() * (500 - 1) + 1);
    height += water*0.0005 + heightAddition;

    if(eventChance == 250) {
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

    var heightToFixed = height.toFixed(2);
    document.getElementById("height").innerHTML = numberWithCommas(heightToFixed);
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
        rainLog.style = "color: #0099db;";
        rainLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(rainLog);
    }

    if(raining == true) {
        if(bountifulShowers == false) {
            bountifulShowers = true;
            document.getElementById("achievements_button").hidden = false;
            var audio = new Audio('snd/snd_achievement.wav');
            if(audioPlay == true)
                audio.play();
            var achievementLog = document.createElement("p");
            achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the Bountiful Showers achievement!";
            achievementLog.style = "color: #fee761;";
            achievementLog.class = "flip-in-hor-bottom";
            document.getElementById("log_container").appendChild(achievementLog);
            document.getElementById("bountiful_showers_achievement").hidden = false;
            lightMultiplier += 0.15;
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

    if(height >= 10 && document.getElementById("fruits_button").hidden == true) {
        document.getElementById("fruits_button").hidden = false;

        var achievementLog = document.createElement("p");
        achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You can now produce fruit! :D";
        achievementLog.style = "color: #63c74d;";
        achievementLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(achievementLog);
        document.getElementById("carpal_tunnel_I_achievement").hidden = false;
    }

    if(worms > 0)
        document.getElementById("worms_container").hidden = false;
    document.getElementById("worms_counter").innerHTML = "Worms: " + worms;

    // Achievement Checks
    if(times_germinated >= 500 & carpalTunnelI == false) {
        carpalTunnelI = true;
        document.getElementById("achievements_button").hidden = false;
        var audio = new Audio('snd/snd_achievement.wav');
        if(audioPlay == true)
            audio.play();
        var achievementLog = document.createElement("p");
        achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the Carpal Tunnel I achievement!";
        achievementLog.style = "color: #fee761;";
        achievementLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(achievementLog);
        document.getElementById("carpal_tunnel_I_achievement").hidden = false;
        lightMultiplier += 0.15;
    }

    if(times_germinated >= 1000 & carpalTunnelII == false) {
        carpalTunnelII = true;
        document.getElementById("achievements_button").hidden = false;
        var audio = new Audio('snd/snd_achievement.wav');
        if(audioPlay == true)
            audio.play();
        var achievementLog = document.createElement("p");
        achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the Carpal Tunnel II achievement!";
        achievementLog.style = "color: #fee761;";
        achievementLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(achievementLog);
        document.getElementById("carpal_tunnel_II_achievement").hidden = false;
        lightMultiplier += 0.15;
    }

    if(times_germinated >= 2500 & carpalTunnelIII == false) {
        carpalTunnelIII = true;
        document.getElementById("achievements_button").hidden = false;
        var audio = new Audio('snd/snd_achievement.wav');
        if(audioPlay == true)
            audio.play();
        var achievementLog = document.createElement("p");
        achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the Carpal Tunnel III achievement! (I'll pray for your hand <i class='fas fa-praying-hands'></i>)";
        achievementLog.style = "color: #fee761;";
        achievementLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(achievementLog);
        document.getElementById("carpal_tunnel_III_achievement").hidden = false;
        lightMultiplier += 0.15;
    }

    // World Time Update
    if(day < 30) {
        day += 1;
    } else { 
        day = 1;

        if(month < 13)
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

    if(season == "Summer")
        document.getElementById("current_date").innerHTML = "Year " + year + " | " + season + " <i class='far fa-sun'></i>";
    else if(season == "Autumn")
        document.getElementById("current_date").innerHTML = "Year " + year + " | " + season + " <i class='fas fa-wind'></i>";
    else if(season == "Winter")
        document.getElementById("current_date").innerHTML = "Year " + year + " | " + season + " <i class='fas fa-snowflake'></i>";
    else if(season == "Spring")
        document.getElementById("current_date").innerHTML = "Year " + year + " | " + season + " <i class='fas fa-rainbow'></i>";

    if(season == "Summer")
        light += (height*0.006 + lightAddition)*lightMultiplier;
    else if(season == "Autumn")
        light += (height*0.005 + lightAddition)*lightMultiplier;
    else if(season == "Winter")
        light += (height*0.004 + lightAddition)*lightMultiplier;
    else if(season == "Spring")
        light += (height*0.005 + lightAddition)*lightMultiplier;

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
        
}

function stopRaining() {
    timeOutSet = false;
    raining = false;
    document.getElementById("rainingNotifier").hidden = true;

    // Post raining notification to the Log
    var rainLog = document.createElement("p");
    rainLog.innerHTML = "<i class='far fa-envelope-open'></i> It stopped raining!";
    document.getElementById("log_container").appendChild(rainLog);
    rainLog.style = "color: #0099db;";
    rainLog.class = "flip-in-hor-bottom";
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}