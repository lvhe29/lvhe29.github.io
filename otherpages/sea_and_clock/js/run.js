function runAll(){
    digiClock();
    moves();
    t = setTimeout("runAll()",500);
}

window.onload = runAll

/*
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.hide_clock_) {
            if (properties.hide_clock_.value == true) {
                document.getElementById("myclock").style.display = "none";
            } else {
                document.getElementById("myclock").style.display = "inline";
            }
        }

        if (properties.hide_island_) {
            if (properties.hide_island_.value == true) {
                document.getElementById("clockIsland").style.display = "none";
            } else {
                document.getElementById("clockIsland").style.display = "inline";
            }
        }
    }

}
*/
