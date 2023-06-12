let canvas = document.querySelector('#main-canvas')
let game = document.querySelector('#canvas-wrapper')
let player = document.querySelector('#player')
let speed = 10

let bottomBound = document.querySelector('#main-canvas').clientHeight
let rightBound = document.querySelector('#main-canvas').clientWidth
let leftBound = 10
let topBound = 10

let fsButton = document.querySelector('#full-screen')
fsButton.addEventListener('click', () => {
  game.requestFullscreen()
})

const checkBounds = (currentPos, downKey) => {
  if (currentPos.top <= topBound) {
    player.style.top = topBound + 'px'
    if (downKey == 'w') {
      return 0
    } else return speed
  } else if (currentPos.left <= leftBound) {
    player.style.left = leftBound + 'px'
    if (downKey == 'a') {
      return 0
    } else return speed
  } else if (currentPos.top > bottomBound) {
    player.style.top = bottomBound + 'px'
    if (downKey == 's') {
      return 0
    } else return speed
  } else if (currentPos.left > rightBound) {
    player.style.left = rightBound + 'px'
    if (downKey == 'd') {
      return 0
    } else return speed
  } else return speed
}

const handleMove = (e) => {
  currentPos = {top: parseInt(player.style.top), left: parseInt(player.style.left)}
  // WASD
  switch (e.key) {
    case 'w':
      player.style.top = currentPos.top - checkBounds(currentPos, e.key) + 'px'
      break;
    case 'a':
      player.style.left = currentPos.left - checkBounds(currentPos, e.key) + 'px'
      break;
    case 's':
      player.style.top = currentPos.top + checkBounds(currentPos, e.key) + 'px'
      break;
    case 'd':
      player.style.left = currentPos.left + checkBounds(currentPos, e.key) + 'px'
      break;
    // MISC
    case 'Shift':

      break;
    default:
      console.log(e.key)
      break;
  }
}

window.addEventListener('keydown', e => handleMove(e))