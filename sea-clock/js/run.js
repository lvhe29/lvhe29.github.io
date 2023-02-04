var fadeOutTime = 10 * 1000 + 50;

function main() {
  var time = new Date();
  digiClock(time);
  moves(time);
  setTimeout(main, 500);
}

function onBodyClick(e) {
  var clock = document.getElementById('myclock');
  if (e.target !== document.body || clock.hidden === false) return;
  clock.hidden = false;
  setTimeout(function () {
    clock.hidden = true;
  }, fadeOutTime);
}

function onIslandClick(e) {
  var dateDialog = document.getElementById('islandDate');
  if (dateDialog.hidden === false) return;
  dateDialog.hidden = false;
  setTimeout(() => {
    dateDialog.hidden = true;
  }, fadeOutTime);
}

function onIslandCloseBtnClick(e) {
  var dateDialog = document.getElementById('islandDate');
  dateDialog.hidden = true;
}

function closeMask() {
  var mask = document.getElementById('loading-mask');
  mask.classList.add('fade-out');
  setTimeout(function () {
    mask.hidden = true;
  }, 1000 + 50);
}

window.onload = function () {
  document.body.onclick = onBodyClick;
  var island = document.getElementById('clockIsland');
  island.onclick = onIslandClick;
  // var islandDateCloseBtn = document.getElementById('islandDateCloseBtn');
  // islandDateCloseBtn.onclick = onIslandCloseBtnClick;
  main();
  // var rain = new RainyDay({
  //   image: document.body,
  // });
  closeMask();
};
