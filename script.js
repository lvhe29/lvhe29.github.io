
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
    const randomY = rangeY * (random(seed && (seed + 0.1)) * 2 - 1);
    move(e, randomX.toFixed(3), randomY.toFixed(3));
  });
}

function randomMoveTitle(title) {
  title.forEach((e, i) => {
    var moveY = random();
    var top = 'calc(' + moveY.toFixed(2) + ' * (100% - ' + e.clientHeight + 'px))';
    e.style.paddingTop = top;
  });
}

function onload() {
  // const cards = document.querySelectorAll('.card');
  // randomMoveCards(cards);
  var title = document.querySelectorAll("#card-title > div")
  randomMoveTitle(title)
}

var resizeTimer = null;
function onResize() {
  if (resizeTimer !== null) return;
  var title = document.querySelectorAll("#card-title > div")
  randomMoveTitle(title)
  resizeTimer = setTimeout(function () {
    clearTimeout(resizeTimer);
    resizeTimer = null;
  }, 300);
}

document.addEventListener('DOMContentLoaded', onload);
window.onresize = onResize;
