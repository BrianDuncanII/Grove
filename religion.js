var followers = 0;
var belief = 0;
var max_belief = 100;

function gainFollower() {
    if(height > 3) {
    var eventLog = document.createElement("p");
        followers++;
        if(followers == 1)
            eventLog.innerHTML = "<i class='fas fa-praying-hands'></i> A tree worshiper came by and found you. You now have " + followers + " follower.";
        else
            eventLog.innerHTML = "<i class='fas fa-praying-hands'></i> A tree worshiper came by and found you. You now have " + followers + " followers.";
        document.getElementById("log_container").appendChild(eventLog);
        document.getElementById("height").innerHTML = height.toFixed(2);
        document.getElementById("log_div").hidden = false;
        eventLog.style = "color: #fee761;";
        eventLog.class = "flip-in-hor-bottom";
    }
}

function giftApple() {
    if(apples > 0) {
        apples--;

        var eventLog = document.createElement("p");
        if(followers == 1)
            eventLog.innerHTML = "<i class='fas fa-praying-hands'></i> An apple falls off of your leaves. The worshiper picks it up. He will remember that! <i style='color:pink;' class='fas fa-heart'></i>";
        else if(followers > 1) {
            eventLog.innerHTML = "<i class='fas fa-praying-hands'></i> An apple falls off of your leaves. A worshiper picks it up. They will remember that! <i style='color:pink;' class='fas fa-heart'></i>";
        }
        document.getElementById("log_container").appendChild(eventLog);
        document.getElementById("height").innerHTML = height.toFixed(2);
        document.getElementById("log_div").hidden = false;
        eventLog.style = "color: #fee761;";
        eventLog.class = "flip-in-hor-bottom";
    }
}