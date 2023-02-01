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
};
