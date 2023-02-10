function random(seed) {
  if (!seed) return Math.random();
  const numStr = '0.' + Math.sin(seed).toString().slice(6);
  return Number(numStr);
}

function move(e, x = 0, y = 0) {
  e.style['transform'] = `translate(${x}px, ${y}px)`;
}

function randomMoveCards(cards) {
  cards.forEach((e, i) => {
    // const seed = i + 9;
    const seed = null;
    const rangeX = 4;
    const rangeY = 1;
    const randomX = rangeX * (random(seed) * 2 - 1);
    const randomY = rangeY * (random(seed && seed + 0.1) * 2 - 1);
    move(e, randomX.toFixed(3), randomY.toFixed(3));
  });
}

function randomMoveTitle(title) {
  title.forEach((e, i) => {
    var moveY = random();
    var top =
      'calc(' + moveY.toFixed(2) + ' * (100% - ' + e.clientHeight + 'px))';
    // e.style.paddingTop = top;
    e.style.marginTop = top;
  });
}

function onload() {
  // const cards = document.querySelectorAll('.card');
  // randomMoveCards(cards);
  var title = document.querySelectorAll('#card-title > div');
  randomMoveTitle(title);
  // randomTitleWidthTimer();
}

// var randomTitleTimer = null;
// var randomTitleLoopTimer = null;
// function randomTitleWidthTimer() {
//   if (randomTitleTimer !== null) return;
//   var title = document.querySelectorAll('#card-title > div');
//   randomTitleTimer = setTimeout(function () {
//     clearTimeout(randomTitleTimer);
//     randomTitleTimer = null;
//   }, 300);
//   randomMoveTitle(title);
//   clearTimeout(randomTitleLoopTimer);
//   randomTitleLoopTimer = setTimeout(function () {
//     randomTitleWidthTimer();
//   }, 5000);
// }

document.addEventListener('DOMContentLoaded', onload);
// window.onresize = randomTitleWidthTimer;
