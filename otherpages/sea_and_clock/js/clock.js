function num2two(n) {
    if (n < 10) {
        n = '0' + n;
    }
    return n;
}

function digiClock() {
    var time = new Date();
    var week = time.getDay();
        if (week==0) {
            week = 7;
        }
    var year = time.getFullYear();
    var mon  = time.getMonth() + 1;
        mon  = num2two(mon)
    var date = time.getDate();
        date = num2two(date)
    var hh   = time.getHours();
        hh   = num2two(hh)
    var mm   = time.getMinutes();
        mm   = num2two(mm)
    var ss   = time.getSeconds();
        ss   = num2two(ss)

    document.getElementById("myclock").innerHTML="<p>"+hh+":"+mm+"<p>";	
    document.getElementById("myclockDate").innerHTML="<p>&nbsp;&nbsp;year: "+year+"&nbsp;&nbsp;&nbsp;month: "+mon+"&nbsp;&nbsp;&nbsp;date: "+date+"<p>";
    


    if (hh < 6 || hh >= 18) {
        document.body.style.backgroundImage = "url(img/sea_02_204.jpg)";
    } else {
        document.body.style.backgroundImage = "url(img/sea_02_101.jpg)";
    }

    //document.body.style.backgroundImage = "url(img/sea_02_204.jpg)";
    //document.body.style.backgroundImage = "url(img/sea_02_101.jpg)";
}
