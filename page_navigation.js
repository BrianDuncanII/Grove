function openPlant() {
    document.getElementById("plant_page").hidden = false;
    document.getElementById("research_page").hidden = true;
    document.getElementById("achievements_page").hidden = true;
    document.getElementById("upgrades_page").hidden = true;
    var audio = new Audio('snd/snd_button_click.wav');
    audio.play();
}

function openResearch() {
    document.getElementById("plant_page").hidden = true;
    document.getElementById("upgrades_page").hidden = true;
    document.getElementById("achievements_page").hidden = true;
    document.getElementById("research_page").hidden = false;
    var audio = new Audio('snd/snd_button_click.wav');
    audio.play();
}

function openUpgrades() {
    document.getElementById("plant_page").hidden = true;
    document.getElementById("research_page").hidden = true;
    document.getElementById("achievements_page").hidden = true;
    document.getElementById("upgrades_page").hidden = false;
    var audio = new Audio('snd/snd_button_click.wav');
    audio.play();
}

function openAchievements() {
    document.getElementById("plant_page").hidden = true;
    document.getElementById("research_page").hidden = true;
    document.getElementById("upgrades_page").hidden = true;
    document.getElementById("achievements_page").hidden = false;
    var audio = new Audio('snd/snd_button_click.wav');
    audio.play();
}