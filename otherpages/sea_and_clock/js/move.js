function moves(){

    var ratio = document.body.clientHeight / document.body.clientWidth;

    /// time
    var time1 = new Date();
    var yy1   = time1.getFullYear();
    var hh1   = time1.getHours();
    var mm1   = time1.getMinutes();
    var ss1   = time1.getSeconds();
    var ms1   = time1.getMilliseconds()

    /// sun & moon
    var sun  = document.getElementById("clockSun"); 
    var moon = document.getElementById("clockMoon"); 

    var t = 0;
    //var t0 = (ss1 + ms1 / 1000) / 60;
    var t0 = ( -6 + hh1 + (mm1 + ss1 / 60) / 60) / 24;
    if (t0 < 0) {
        t0 = t0 + 1;
    }

    if (t0 < 0.5) {
        t = 2 * t0;
    } else {
        t = 2 * (t0 - 0.5);
    }

    var sYMin = 4;
    var sYMax = 50 - 6 - 14;
    var sXMin = 4;
    var sXMax = 100 - 4 - 14 * ratio;

    var mYMin = 6;
    var mYMax = 50 - 6 - 8;
    var mXMin = 4;
    var mXMax = 100 - 4 - 8;

    var sunY  = sYMax - (1 - 4 * (t - 0.5) * (t - 0.5)) * (sYMax - sYMin);
    //var sunY  = sYMax - t * (sYMax - sYMin);
    var sunX  = sXMax - t * (sXMax - sXMin);
    var moonY = mYMax - (1 - 4 * (t - 0.5) * (t - 0.5)) * (mYMax - mYMin);
    //var moonY = mYMax - t * (mYMax - mYMin);
    var moonX = mXMax - t * (mXMax - mXMin);

    //if (1==0) {
    if (t0 < 0.5) {
        moonY = -100;
    } else {
        sunY  = -100;
    }

    sun.style.top   = sunY + 'vh';
    sun.style.left  = sunX + 'vw';
    moon.style.top  = moonY + 'vh';
    moon.style.left = moonX + 'vw';

    /// island
    var island = document.getElementById("clockIsland");

    var firstDay = new Date(yy1,0,1);
    var timeDiff = time1 - firstDay;
    var msPerDay = 1000 * 60 * 60 * 24;
    var lYear = 365;
    if ((yy1 % 4 == 0 && yy1 % 100 != 0)||(yy1 % 400 == 0)) {
        lYear = 366;
    }
    var tIsland  = timeDiff / (msPerDay * lYear);
    var islandXMin = 0;
    var islandXMax = 100 - islandXMin - 4 * ratio;
    var islandX    = islandXMax - tIsland * (islandXMax - islandXMin);

    island.style.left = islandX + 'vw';
    //island.style.left = islandXMin + 'vw';
    //island.style.left = islandXMax + 'vw';

    document.getElementById("myclockDateP").innerHTML="<p><b>&nbsp;&nbsp;"+(tIsland*100).toFixed(6)+"% of this year has passed.</b><p>";
    
}

