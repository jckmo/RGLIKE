let canvas = document.querySelector('#main-canvas')
let game = document.querySelector('#canvas-wrapper')

let fsButton = document.querySelector('#full-screen')
fsButton.addEventListener('click', () => {
  game.requestFullscreen()
})


let player = document.querySelector('#player')
let speed = 10

const checkBounds = (currentPos, downKey) => {
  // switch to query canvas size
  let bottomBound = document.querySelector('#main-canvas').clientHeight
  let rightBound = document.querySelector('#main-canvas').clientWidth
  let leftBound = 10
  let topBound = 10

  if (currentPos.top <= topBound) {
    player.style.top = topBound
    if (downKey == 'w') {
      return 0
    } else return speed
  } else if (currentPos.left <= leftBound) {
    player.style.left = leftBound
    if (downKey == 'a') {
      return 0
    } else return speed
  } else if (currentPos.top >= bottomBound) {
    player.style.top = bottomBound
    if (downKey == 's') {
      return 0
    } else return speed
  } else if (currentPos.left >= rightBound) {
    player.style.left = rightBound
    if (downKey == 'd') {
      return 0
    } else return speed
  } else return speed
}

const handleDown = (e) => {
  currentPos = { top: parseInt(player.style.top), left: parseInt(player.style.left) }
  // return to frame 1 on key up

  switch (e.key) {
    case 'w':
      player.className = 'moving animate animate--infinite '
      player.style.top = currentPos.top - checkBounds(currentPos, e.key) + 'px'
      break;
    case 'a':
      player.className = 'moving animate animate--infinite '
      player.className = player.className + 'left-face'
      player.style.left = currentPos.left - checkBounds(currentPos, e.key) + 'px'
      break;
    case 's':
      player.className = 'moving animate animate--infinite '
      player.style.top = currentPos.top + checkBounds(currentPos, e.key) + 'px'
      break;
    case 'd':
      player.className = 'moving animate animate--infinite '
      player.className = player.className + 'right-face'
      player.style.left = currentPos.left + checkBounds(currentPos, e.key) + 'px'
      break;
    case 'Shift':
      console.log(player.className)
      player.className = 'animate jump'
      setTimeout(() => player.className = '', 450);
    default:
      break;
  }
}

const handleUp = (e) => {

  switch (e.key) {
    case 'w':
      setTimeout(() => {
        (player.className = '')
      }, 2700);
      break;
    case 'a':
      setTimeout(() => {
        (player.className = 'left-face')
      }, 2700);
      break;
      case 's':
      setTimeout(() => {
        (player.className = '')
      }, 2700);
      break;
    case 'd':
      setTimeout(() => {
        (player.className = '')
      }, 2700);
      break;
    default:
      break;
  }
}

window.addEventListener('keydown', e => handleDown(e))
window.addEventListener('keyup', e => handleUp(e))