function playEvent() {
    document.getElementById("log_div").hidden = false;
    var eventType = Math.floor(Math.random() * (10 - 1) + 1);

    if (eventType == 1 & height < 0.50) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> Some kids came by and stepped on you! How rude.";
        document.getElementById("log_container").appendChild(eventLog);
        height -= height * 0.35;
        document.getElementById("height").innerHTML = height.toFixed(2);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else if (eventType == 2) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> For some unknown reason, you feel great!";
        document.getElementById("log_container").appendChild(eventLog);
        height += height * 0.5;
        document.getElementById("height").innerHTML = height.toFixed(2);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else if (eventType == 3 & height < 0.75) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> A curious dog came by and sniffed you.";
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else if (eventType == 4 & season != "Winter" & season != "Autumn") {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> Wow, that sun is bright!";
        light += light * 0.75;
        document.getElementById("light").innerHTML = light.toFixed(2) + " lm"
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else if (eventType == 5 & height < 0.75) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> Somebody poured out their water bottle on you, you're no longer thirsty!";
        water += water * 0.75;
        document.getElementById("water").innerHTML = water.toFixed(2) + " ml"
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else if (eventType == 6) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> A worm came to join you!";
        worms += 1;
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
    } else if (eventType == 7 & height > 3.00) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='fas fa-gift'></i> Aww, somebody left a gift!";
        document.getElementById("log_container").appendChild(eventLog);
        document.getElementById("gifts_button").hidden = false;
        eventLog.style = "color: #f5a097;";
        eventLog.class = "flip-in-hor-bottom";
        var audio = new Audio('snd/snd_gift_earn.wav');
        if (audioPlay == true)
            audio.play();

        if(sharingIsCaring == false) {
            sharingIsCaring = true;
            document.getElementById("achievements_button").hidden = false;
            var audio = new Audio('snd/snd_achievement.wav');
            if (audioPlay == true)
                audio.play();
            var achievementLog = document.createElement("p");
            achievementLog.innerHTML = "<i class='far fa-envelope-open'></i> You earned the Sharing is Caring achievement!";
            achievementLog.style = "color: #fee761;";
            achievementLog.class = "flip-in-hor-bottom";
            document.getElementById("log_div").hidden = false;
            document.getElementById("log_container").appendChild(achievementLog);
            document.getElementById("sharing_is_caring_achievement").hidden = false;
            lightMultiplier += 0.15;
        }
    } else if (eventType == 8 & height > 7.00 && raining == true) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='fas fa-poo-storm'></i> The storm broke one of your branches. :(";
        document.getElementById("log_container").appendChild(eventLog);
        document.getElementById("gifts_button").hidden = false;
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
        height -= height*0.05;
    } else if (eventType == 9 & height > 5.00 && raining == false) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='fas fa-cat'></i> A cat has decided to join you!";
        document.getElementById("log_container").appendChild(eventLog);
        document.getElementById("cat_container").hidden = false;
        eventLog.style = "color: #ffffff;";
        eventLog.class = "flip-in-hor-bottom";
        cats++;
        document.getElementById("cat_counter").innerHTML = "<i class='fas fa-cat'></i> Cats: " + cats;
    }  else {

    }
}