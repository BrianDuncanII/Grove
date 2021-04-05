var height = 0.10;
var water = 0;
var light = 0;
var seedProgress = 0;
var seeds = 0;
var germinateMultiplier = 1;
var lightAddition = 0;
var heightAddition = 0;
var raining = false;

// Achievements
var bountifulShowers = false;
var fromTheBottom = false;

// World Stats
var year = 1;
var day = 1;
var month = 3;
var season = "Spring";

function descriptionUpdate() {
    if(height >= 10)
        document.getElementById("heightDescription").innerHTML = "You are the size of a big tree :). " + "<i class='fas fa-tree'></i>";
    else if(height >= 7) {
        document.getElementById("heightDescription").innerHTML = "You are the size of an average tree :o. " + "<i class='fas fa-tree'></i>";
        document.getElementById("seed_container").hidden = false;
    } else if(height >= 4)
        document.getElementById("heightDescription").innerHTML = "You are the size of a small tree :(. " + "<i class='fab fa-pagelines'></i>";
    else if(height >= 2)
        document.getElementById("heightDescription").innerHTML = "You are the size of a bush.";
    else if(height >= 1.5)
        document.getElementById("heightDescription").innerHTML = "You are the size of a table.";
    else if(height >= 1)
        document.getElementById("heightDescription").innerHTML = "You are the size of a small rock.";
    else if(height >= 0.70)
        document.getElementById("heightDescription").innerHTML = "You are the size of a pencil. " + "<i class='fas fa-pencil-alt'></i>";
    else if(height >= 0.40)
        document.getElementById("heightDescription").innerHTML = "You are the size of a penny.";
    else if(height >= 0.30)
        document.getElementById("heightDescription").innerHTML = "You are the size of a paperclip. " + "<i class='fas fa-paperclip'></i>";
    else if(height >= 0.20)
        document.getElementById("heightDescription").innerHTML = "You are the size of a staple.";
}