setInterval(autoSave,300000);

function autoSave() {
    /*
    var audio = new Audio('snd/snd_achievement.wav');
    if (audioPlay == true)
        audio.play();
    */
    var autoSavingMessage = document.createElement("p");
    autoSavingMessage.innerHTML = "<i class='fas fa-save'></i> The game has been saved.";
    autoSavingMessage.style = "color: #fee761;";
    autoSavingMessage.class = "flip-in-hor-bottom";
    document.getElementById("log_div").hidden = false;
    document.getElementById("log_container").appendChild(autoSavingMessage);
    
    // Saving
    localStorage.setItem("height", height);
}

function loadSaveFile() {
    height = localStorage.getItem("height");
    document.getElementById("height").innerHTML = numberWithCommas(heightToFixed);
}