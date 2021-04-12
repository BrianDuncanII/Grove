var thickerRoots = false;
var determinationI = false;
var determinationII = false;
var determinationIII = false;
var cellHealthI = false;
var absorptionI = false;
var unboughtUpgrades = 0;
var smarterRoots = false;
var geniusRoots = false;

function buy_thickerRoots() {
    if(water >= 1 && thickerRoots == false) {
        if(fromTheBottom == false) {
            fromTheBottom = true;
            document.getElementById("achievements_button").hidden = false;
            var audio = new Audio('snd/snd_achievement.wav');
            audio.play();
            var achievementLog = document.createElement("p");
            achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the From the Bottom achievement!";
            achievementLog.style = "color: #fee761;";
            achievementLog.class = ".flip-in-hor-bottom";
            document.getElementById("log_container").appendChild(achievementLog);
            document.getElementById("from_the_bottom_achievement").hidden = false;
            document.getElementById("log_div").hidden = false;
            lightMultiplier += 0.15;
        }

        thickerRoots = true;
        germinateMultiplier += 1;
        document.getElementById("thickerRootsButton").classList.remove("btn", "btn-primary");
        document.getElementById("thickerRootsButton").classList.add("btn", "btn-outline-success", "disabled");
        water -= 1;
        water_used += 1;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You now have beautiful thick roots! x2 to Germination.";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = ".flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
    }
}

function buy_determinationI() {
    if(water >= 3 && determinationI == false) {
        determinationI = true;
        germinateMultiplier *= 2;
        document.getElementById("determinationIButton").classList.remove("btn", "btn-primary");
        document.getElementById("determinationIButton").classList.add("btn", "btn-outline-success", "disabled");
        document.getElementById("determinationIIContainer").hidden = false;
        water -= 3;
        document.getElementById("log_div").hidden = false;
        water_used += 3;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You feel more determined... x2 to Germination.";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
    }
}

function buy_determinationII() {
    if(water >= 10 && determinationII == false) {
        determinationII = true;
        germinateMultiplier *= 2;
        document.getElementById("determinationIIButton").classList.remove("btn", "btn-primary");
        document.getElementById("determinationIIButton").classList.add("btn", "btn-outline-success", "disabled");
        document.getElementById("determinationIIIContainer").hidden = false;
        water -= 10;
        document.getElementById("log_div").hidden = false;
        water_used += 10;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You feel very determined! x2 to Germination.";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
    }
}

function buy_determinationIII() {
    if(water >= 35 && determinationIII == false) {
        determinationIII = true;
        germinateMultiplier *= 2;
        document.getElementById("determinationIIIButton").classList.remove("btn", "btn-primary");
        document.getElementById("determinationIIIButton").classList.add("btn", "btn-outline-success", "disabled");
        water -= 35;
        document.getElementById("log_div").hidden = false;
        water_used += 35;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You feel TOO determined! x2 to Germination.";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
    }
}

function buy_cellHealthI() {
    if(water >= 6 && cellHealthI == false) {
        cellHealthI = true;
        document.getElementById("cellHealthIButton").classList.remove("btn", "btn-primary");
        document.getElementById("cellHealthIButton").classList.add("btn", "btn-outline-success", "disabled");
        heightAddition += 0.0005
        water -= 6;
        water_used += 6;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Your cells work in unison. Increased growth.";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
    }
}

function buy_absorptionI() {
    if(light >= 0.10 && absorptionI == false) {
        absorptionI = true;
        document.getElementById("absorptionIButton").classList.remove("btn", "btn-primary");
        document.getElementById("absorptionIButton").classList.add("btn", "btn-outline-success", "disabled");
        lightAddition += 0.005
        light -= 0.10;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Praise the sun! Increased light absorption.";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
        document.getElementById("smarterRootsContainer").hidden = false;
    }
}

function buy_smarterRoots() {
    if(light >= 1.50 && smarterRoots == false) {
        smarterRoots = true;
        document.getElementById("smarterRootsButton").classList.remove("btn", "btn-primary");
        document.getElementById("smarterRootsButton").classList.add("btn", "btn-outline-success", "disabled");
        waterPerSec *= 2;
        light -= 1.50;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Your roots are even smarter! Wow!";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
        document.getElementById("geniusRootsContainer").hidden = false;
    }
}

function buy_geniusRoots() {
    if(light >= 7.50 && geniusRoots == false) {
        geniusRoots = true;
        document.getElementById("geniusRootsButton").classList.remove("btn", "btn-primary");
        document.getElementById("geniusRootsButton").classList.add("btn", "btn-outline-success", "disabled");
        waterPerSec *= 5;
        light -= 7.50;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Your roots are geniuses! :OO";
        upgradeLog.style = "color: #2ce8f5;";
        upgradeLog.class = "flip-in-hor-bottom";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if(audioPlay == true)
            audio.play();
        document.getElementById("geniusRootsContainer").hidden = false;
    }
}