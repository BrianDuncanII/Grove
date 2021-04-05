var thickerRoots = false;
var determinationI = false;
var cellHealthI = false;
var absorptionI = false;

function buy_thickerRoots() {
    if(water >= 1 && thickerRoots == false) {
        if(fromTheBottom == false) {
            fromTheBottom = true;
            document.getElementById("achievements_button").hidden = false;
            var audio = new Audio('snd/snd_achievement.wav');
            audio.play();
            var achievementLog = document.createElement("p");
            achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the From the Bottom achievement!";
            achievementLog.style = "color: #ffd541;";
            document.getElementById("log_container").appendChild(achievementLog);
            document.getElementById("from_the_bottom_achievement").hidden = false;
        }

        thickerRoots = true;
        germinateMultiplier += 1;
        document.getElementById("thickerRootsButton").classList.remove("btn", "btn-primary");
        document.getElementById("thickerRootsButton").classList.add("btn", "btn-outline-success", "disabled");
        water -= 1;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You now have beautiful thick roots! x2 to Germination.";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        audio.play();
    }
}

function buy_determinationI() {
    if(water >= 3 && determinationI == false) {
        determinationI = true;
        germinateMultiplier += 1;
        document.getElementById("determinationIButton").classList.remove("btn", "btn-primary");
        document.getElementById("determinationIButton").classList.add("btn", "btn-outline-success", "disabled");
        water -= 3;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You feel more determined... x2 to Germination.";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
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
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml";

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Your cells work in unison. Increased growth.";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
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
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        audio.play();
    }
}