function germinate() {
    water += 0.01*germinateMultiplier;
    water.toFixed(2);
    document.getElementById("water").innerHTML = water.toFixed(2) + " ml";
    printMousePos();
    var audio = new Audio('snd/snd_germinate_click.wav');
    if(audioPlay == true)
        audio.play();
    times_germinated += 1;
    document.getElementById("resources_container").hidden = false;
}

function photosynthesize() {
    light += 0.01*lightMultiplier;
    light.toFixed(2);
    document.getElementById("light").innerHTML = light.toFixed(2) + " lm";
    printMousePosAux();
    var audio = new Audio('snd/snd_germinate_click.wav');
    if(audioPlay == true)
        audio.play();
    times_germinated += 1;
    document.getElementById("resources_container").hidden = false;
}

function printMousePos() {
    var x = event.clientX;
    var y = event.clientY; 
    var btn = document.createElement("p");   // Create a <button> element
    btn.innerHTML = "+"+0.01*germinateMultiplier+" ml";
    btn.style = "display: absolute; margin-left: x; float: none; position: absolute; z-index: 1;";
    btn.classList = "fade-out-top";
    btn.id = "floating_text"
    document.getElementById("germinate_button").appendChild(btn); 
    btn.addEventListener("animationend", myEndFunction); 
}

function printMousePosAux() {
    var x = event.clientX;
    var y = event.clientY; 
    var btn = document.createElement("p");   // Create a <button> element
    var amount = 0.01*lightMultiplier;
    amount = amount.toFixed(2)
    btn.innerHTML = "+"+amount+" lm";
    btn.style = "display: absolute; margin-left: x; float: none; position: absolute; z-index: 1;";
    btn.classList = "fade-out-top";
    btn.id = "floating_text"
    document.getElementById("photosynthesis_button").appendChild(btn); 
    btn.addEventListener("animationend", myEndFunction); 
}

function myEndFunction() {
    document.getElementById("floating_text").remove();
}

function audioSettingToggle() {
    var audio = new Audio('snd/snd_button_click.wav');
    if(audioPlay == true)
        audio.play();

    if(audioPlay == true)
        audioPlay = false;
    else if(audioPlay == false)
        audioPlay = true;
}

function openGift() {
}