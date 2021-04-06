function germinate() {
    water += 0.01*germinateMultiplier;
    water.toFixed(2);
    document.getElementById("water").innerHTML = water.toFixed(2) + " ml";
    printMousePos();
    var audio = new Audio('snd/snd_germinate_click.wav');
    audio.play();
    times_germinated += 1;
}

function printMousePos() {
    var x = event.clientX;
    var y = event.clientY; 
    var btn = document.createElement("p");   // Create a <button> element
    btn.innerHTML = "+1";
    btn.style = "display: absolute; margin-left: x; float: none; position: absolute; z-index: 1;";
    btn.classList = "fade-out-top";
    btn.id = "floating_text"
    document.getElementById("germinate_button").appendChild(btn); 
    btn.addEventListener("animationend", myEndFunction); 
}

function myEndFunction() {
    document.getElementById("floating_text").remove();
}