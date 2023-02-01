function main() {
  var time = new Date();
  digiClock(time);
  moves(time);
  setTimeout(main, 500);
}

function onBodyClick(e) {
  var clock = document.getElementById('myclock');
  if (e.target !== document.body) return;
  clock.hidden = !clock.hidden;
}

function onIslandClick(e) {
  var dateDialog = document.getElementById('islandDate');
  if (dateDialog.hidden === false) return;
  dateDialog.hidden = false;
  setTimeout(() => {
    dateDialog.hidden = true;
  }, 10 * 1000);
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
  }, 3 * 1000);
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
