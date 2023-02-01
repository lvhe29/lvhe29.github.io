function moves(time1 = new Date()) {
  var ratio = document.body.clientHeight / document.body.clientWidth;

  /// time
  var yy1 = time1.getFullYear();
  var hh1 = time1.getHours();
  var mm1 = time1.getMinutes();
  var ss1 = time1.getSeconds();
  var ms1 = time1.getMilliseconds();

  /// sun & moon
  var sun = document.getElementById('clockSun');
  var moon = document.getElementById('clockMoon');

  var t = 0;
  //var t0 = (ss1 + ms1 / 1000) / 60;
  var t0 = (-6 + hh1 + (mm1 + ss1 / 60) / 60) / 24;
  var isInDay = t0 < 0.5;
  if (t0 < 0) {
    t0 = t0 + 1;
  }

  if (isInDay) {
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

  var sunY = sYMax - (1 - 4 * (t - 0.5) * (t - 0.5)) * (sYMax - sYMin);
  //var sunY  = sYMax - t * (sYMax - sYMin);
  var sunX = sXMax - t * (sXMax - sXMin);
  var moonY = mYMax - (1 - 4 * (t - 0.5) * (t - 0.5)) * (mYMax - mYMin);
  //var moonY = mYMax - t * (mYMax - mYMin);
  var moonX = mXMax - t * (mXMax - mXMin);

  //if (1==0) {
  if (isInDay) {
    moonY = -100;
    moonX = -100;
  } else {
    sunY = -100;
    sunX = -100;
  }

  const positionDigits = 4;
  sun.style.top = sunY.toFixed(positionDigits) + '%';
  sun.style.left = sunX.toFixed(positionDigits) + '%';
  moon.style.top = moonY.toFixed(positionDigits) + '%';
  moon.style.left = moonX.toFixed(positionDigits) + '%';

  /// island
  var island = document.getElementById('clockIsland');

  var firstDay = new Date(yy1, 0, 1);
  var timeDiff = time1 - firstDay;
  var msPerDay = 1000 * 60 * 60 * 24;
  var lYear = 365;
  if ((yy1 % 4 == 0 && yy1 % 100 != 0) || yy1 % 400 == 0) {
    lYear = 366;
  }
  var gap = 1;
  var islandXMin = gap;
  var islandXMax = 100 - gap;
  var tIsland = timeDiff / (msPerDay * lYear);
  var islandWidth = 36;
  var getIslandXProp = (tIsland) => {
    var islandX = islandXMax - tIsland * (islandXMax - islandXMin);
    return `calc(${islandX}% - ${((1 - tIsland) * islandWidth).toFixed(4)}px)`;
  };

  island.style.left = getIslandXProp(tIsland);

  document.getElementById('myclockDateP').innerHTML =
    '<span><b>' +
    (tIsland * 100).toFixed(6) +
    '%</b> of this year has passed.</span>';
}
