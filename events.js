var eventType = Math.floor(Math.random() * (7 - 1) + 1);

function playEvent() {
    if(eventType == 1 & height < 0.50) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> Some kids came by and stepped on you! How rude.";
        document.getElementById("log_container").appendChild(eventLog);
        height -= height*0.35;
        document.getElementById("height").innerHTML = height.toFixed(2);
        eventLog.style = "color: #262b44 ;";
        eventLog.class = "flip-in-hor-bottom";
    } else if(eventType == 2) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> For some unknown reason, you feel great!";
        document.getElementById("log_container").appendChild(eventLog);
        height += height*0.5;
        document.getElementById("height").innerHTML = height.toFixed(2);
        eventLog.style = "color: #262b44 ;";
        eventLog.class = "flip-in-hor-bottom";
    } else if(eventType == 3) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> A curious dog came by and sniffed you.";
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #262b44 ;";
        eventLog.class = "flip-in-hor-bottom";
    } else if(eventType == 4 & season != "Winter" & season != "Autumn") {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "Wow, that sun is bright!";
        light += light*0.75;
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #262b44 ;";
        eventLog.class = "flip-in-hor-bottom";
    } else if(eventType == 5 & height < 0.75) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> Somebody poured out their water bottle on you, you're no longer thirsty!";
        water += water*0.75;
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #262b44 ;";
        eventLog.class = "flip-in-hor-bottom";
    } else if(eventType == 6) {
        var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> A worm came to join you!";
        worms += 1;
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #262b44 ;";
        eventLog.class = "flip-in-hor-bottom";
    } else {
        break;
    }
}