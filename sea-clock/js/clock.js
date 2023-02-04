function num2two(n) {
  if (n < 10) {
    n = '0' + n;
  }
  return n;
}

var clockCached = '';
var clockDateCached = '';

function digiClock(time = new Date()) {
  var week = time.getDay();
  if (week == 0) {
    week = 7;
  }
  var year = time.getFullYear();
  var mon = time.getMonth() + 1;
  // mon = num2two(mon);
  var date = time.getDate();
  // date = num2two(date);
  var hh = time.getHours();
  hh = num2two(hh);
  var mm = time.getMinutes();
  mm = num2two(mm);
  var ss = time.getSeconds();
  ss = num2two(ss);

  var newClock = '<div>' + hh + ':' + mm + '</div>';
  if (newClock !== clockCached) {
    document.getElementById('myclock').innerHTML = newClock;
    clockCached = newClock;
  }

  var newClockDate =
    '<span>' + year + '. ' + mon + '. ' + date + '</span>';

  if (newClockDate !== clockDateCached) {
    document.getElementById('myclockDate').innerHTML = newClockDate;
    clockDateCached = newClockDate;
  }

  if (hh < 6 || hh >= 18) {
    document.body.style.backgroundImage = 'url(img/sea_02_204.jpg)';
  } else {
    document.body.style.backgroundImage = 'url(img/sea_02_101.jpg)';
  }
}
