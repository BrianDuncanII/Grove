var internalClock = false;
var produceFruit = false;
var smartRoots = false;
var photosynthesis = false;
var whoAmI = false;
var lemonTree = false;

function buy_internalClock() {
    if (light >= 0.10 && internalClock == false) {
        internalClock = true;
        document.getElementById("internalClockButton").classList.remove("btn", "btn-primary");
        document.getElementById("internalClockButton").classList.add("btn", "btn-outline-success", "disabled");
        light -= 0.10;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";

        document.getElementById("current_date").hidden = false;

        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> The seasons come and go...";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if (audioPlay == true)
            audio.play();
        document.getElementById("who_am_i_container").hidden = false;
    }
}

function buy_produceFruit() {
    if (light >= 10.00 && produceFruit == false) {
        produceFruit = true;
        document.getElementById("produceFruitButton").classList.remove("btn", "btn-primary");
        document.getElementById("produceFruitButton").classList.add("btn", "btn-outline-success", "disabled");
        light -= 10.00;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";
        document.getElementById("fruits_button").hidden = false;
        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> The fruits of your labor <3";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if (audioPlay == true)
            audio.play();
        document.getElementById("photosynthesis_container").hidden = false;
        document.getElementById("lemon_tree_container").hidden = false;
    }
}

function buy_whoAmI() {
    if (light >= 10.00 && whoAmI == false) {
        whoAmI = true;
        document.getElementById("whoAmIButton").classList.remove("btn", "btn-primary");
        document.getElementById("whoAmIButton").classList.add("btn", "btn-outline-success", "disabled");
        light -= 10.00;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";
        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Give yourself a good name!";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if (audioPlay == true)
            audio.play();
    }
}

function buy_smartRoots() {
    if (light >= 0.25 && smartRoots == false) {
        smartRoots = true;
        document.getElementById("smartRootsButton").classList.remove("btn", "btn-primary");
        document.getElementById("smartRootsButton").classList.add("btn", "btn-outline-success", "disabled");
        light -= 0.25;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";
        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> Your roots will now automatically collect water.";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if (audioPlay == true)
            audio.play();
        document.getElementById("water_sec_counter").hidden = false;
        waterPerSec = 0.05;
        document.getElementById("produce_fruit_container").hidden = false;
    }
}

function buy_photosynthesis() {
    if (light >= 25.00 && photosynthesis == false) {
        photosynthesis = true;
        document.getElementById("photosynthesisButton").classList.remove("btn", "btn-primary");
        document.getElementById("photosynthesisButton").classList.add("btn", "btn-outline-success", "disabled");
        light -= 25.00;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";
        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You can now manually photosynthesize. Get clicking!";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if (audioPlay == true)
            audio.play();
        document.getElementById("photosynthesis_button_container").hidden = false;
    }
}

function buy_lemonTree() {
    if (light >= 5.00 && lemonTree == false) {
        lemonTree = true;
        document.getElementById("lemonTreeButton").classList.remove("btn", "btn-primary");
        document.getElementById("lemonTreeButton").classList.add("btn", "btn-outline-success", "disabled");
        light -= 5.00;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm";
        // Post upgrade notification to log
        var upgradeLog = document.createElement("p");
        upgradeLog.innerHTML = "<i class='far fa-envelope-open'></i> You can now grow lemons!";
        upgradeLog.style = "color: #bc4a9b;";
        document.getElementById("log_container").appendChild(upgradeLog);

        var audio = new Audio('snd/snd_button_buy.wav');
        if (audioPlay == true)
            audio.play();
        document.getElementById("lemon_container").hidden = false;
    }
}