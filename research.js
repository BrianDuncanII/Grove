var internalClock = false;

function buy_internalClock() {
    if(light >= 0.10 && internalClock == false) {
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
        if(audioPlay == true)
            audio.play();
    }
}