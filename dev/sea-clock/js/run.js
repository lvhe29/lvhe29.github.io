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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js', { scope: '.' })
    .then(function (registration) {
      console.log(
        '[SW] registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function (err) {
      console.error('[SW] registration failed: ', err);
    });
}

// if ('serviceWorker' in navigator) {
//   // Register a service worker hosted at the root of the
//   // site using the default scope.
//   navigator.serviceWorker.register('./sw.js', {
//     scope: '.',
//   }).then((registration) => {
//     console.log('Service worker registration succeeded:', registration);
//   }, /*catch*/ (error) => {
//     console.error(`Service worker registration failed: ${error}`);
//   });
// } else {
//   console.error('Service workers are not supported.');
// }
