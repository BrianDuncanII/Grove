var followers = 0;

function gainFollower() {
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