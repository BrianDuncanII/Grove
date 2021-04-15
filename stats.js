var height = 0.10;
var water = 0;
var waterPerSec = 0.05;
var light = 0;
var seedProgress = 0;
var seeds = 0;
var cats = 0;
var worms = 0;
var wormPoop = 0;
var germinateMultiplier = 1;
var lightAddition = 0;
var lightMultiplier = 1;
var heightAddition = 0;
var raining = false;

var plant_health = 75;
var plant_health_max = 100;

// Fruit
var apples = 0;
var lemons = 0;
var cherries = 0;

// Achievements
var bountifulShowers = false;
var fromTheBottom = false;
var carpalTunnelI = false;
var carpalTunnelII = false;
var carpalTunnelIII = false;
var smallBoi = false;
var bigBoi = false;
var aFriendInNeed = false;
var cultFollowing = false;
var sharingIsCaring = false;

// World Stats
var year = 1;
var day = 1;
var month = 3;
var season = "Spring";

// Player Stats
var hours_played = 0;
var minutes_played = 0;
var seconds_played = 0;
var times_germinated = 0;
var water_used = 0;

// Player Settings
var audioPlay = true;

function descriptionUpdate() {
    if (height >= 180)
        document.getElementById("heightDescription").innerHTML = "You are the size of The Space Needle. " + "<i class='fas fa-tree'></i>";
    else if (height >= 150)
        document.getElementById("heightDescription").innerHTML = "You are the size of The Washington Monument. " + "<i class='fas fa-tree'></i>";
    else if (height >= 110)
        document.getElementById("heightDescription").innerHTML = "You are the size of a Football Field. " + "<i class='fas fa-tree'></i>";
    else if (height >= 90)
        document.getElementById("heightDescription").innerHTML = "You are the size of The Statue of Liberty " + "<i class='fas fa-tree'></i>";
    else if (height >= 70)
        document.getElementById("heightDescription").innerHTML = "You are the size of a Giant Sequoia tree. " + "<i class='fas fa-tree'></i>";
    else if (height >= 55)
        document.getElementById("heightDescription").innerHTML = "You are the size of The Leaning Tower of Pisa. " + "<i class='fas fa-tree'></i>";
    else if (height >= 45)
        document.getElementById("heightDescription").innerHTML = "You are the size of The Chicago Water Tower " + "<i class='fas fa-tree'></i>";
    else if (height >= 20)
        document.getElementById("heightDescription").innerHTML = "You are the size of a Bowling Lane. " + "<i class='fas fa-tree'></i>";
    else if (height >= 15)
        document.getElementById("heightDescription").innerHTML = "You are the size of The Hollywood Sign " + "<i class='fas fa-tree'></i>";
    else if (height >= 10)
        document.getElementById("heightDescription").innerHTML = "You are the size of a big tree :). " + "<i class='fas fa-tree'></i>";
    else if (height >= 7) {
        document.getElementById("heightDescription").innerHTML = "You are the size of an average tree :o. " + "<i class='fas fa-tree'></i>";
        document.getElementById("seed_container").hidden = false;
    } else if (height >= 4)
        document.getElementById("heightDescription").innerHTML = "You are the size of a small tree :(. " + "<i class='fab fa-pagelines'></i>";
    else if (height >= 2)
        document.getElementById("heightDescription").innerHTML = "You are the size of a bush.";
    else if (height >= 1.5)
        document.getElementById("heightDescription").innerHTML = "You are the size of a table.";
    else if (height >= 1)
        document.getElementById("heightDescription").innerHTML = "You are the size of a small rock.";
    else if (height >= 0.70)
        document.getElementById("heightDescription").innerHTML = "You are the size of a pencil. " + "<i class='fas fa-pencil-alt'></i>";
    else if (height >= 0.40)
        document.getElementById("heightDescription").innerHTML = "You are the size of a penny.";
    else if (height >= 0.30)
        document.getElementById("heightDescription").innerHTML = "You are the size of a paperclip. " + "<i class='fas fa-paperclip'></i>";
    else if (height >= 0.20)
        document.getElementById("heightDescription").innerHTML = "You are the size of a staple.";
    else
        document.getElementById("heightDescription").innerHTML = "You are the size of a seed. " + "<i style='color: #804b38; display:inline;' class='fas fa-seedling'></i>";
}