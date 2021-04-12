var plantName = "none";
var happiness = 75;
var happiness_max = 100;
var mood = "Content";
var trait01;
var trait02;
var trait03;
var trait04;
var trait05;

function personalityLearn() {
    document.getElementById("personality_button").hidden = false;
    let personalityTraits = ['Curious','Flexible','Aggressive','Difficult','Shy','Weak','Willful','Charming','Dedicated','Focused','Hardworking'];
    var item = personalityTraits[Math.floor(Math.random() * personalityTraits.length)];

    var eventLog = document.createElement("p");
        eventLog.innerHTML = "<i class='far fa-envelope-open'></i> You learned that your plant is "+item+"!";
        document.getElementById("log_container").appendChild(eventLog);
        eventLog.style = "color: #f6757a;";
        eventLog.class = "flip-in-hor-bottom";
        document.getElementById("log_div").hidden = false;
}