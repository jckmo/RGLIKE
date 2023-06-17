let player = document.querySelector('#player')
// let speed = 10

// const checkBounds = (currentPos, downKey) => {
//   // switch to query canvas size
//   let bottomBound = document.querySelector('#main-canvas').clientHeight
//   let rightBound = document.querySelector('#main-canvas').clientWidth
//   let leftBound = 10
//   let topBound = 10

//   if (currentPos.top <= topBound) {
//     player.style.top = topBound
//     if (downKey == 'w') {
//       return 0
//     } else return speed
//   } else if (currentPos.left <= leftBound) {
//     player.style.left = leftBound
//     if (downKey == 'a') {
//       return 0
//     } else return speed
//   } else if (currentPos.top >= bottomBound) {
//     player.style.top = bottomBound
//     if (downKey == 's') {
//       return 0
//     } else return speed
//   } else if (currentPos.left >= rightBound) {
//     player.style.left = rightBound
//     if (downKey == 'd') {
//       return 0
//     } else return speed
//   } else return speed
// }

const handleDown = (e) => {
  switch (e.key) {
    case 'w':
        vyu = -2
      break;
    case 'a':
        vxr = -2
      break;
    case 's':
        vyd = 2
      break;
    case 'd':
      vxr = 2
      break;
    case 'Shift':
    default:
      break;
  }
}
const handleUp = (e) => {
  switch (e.key) {
    case 'w':
        vyu = 0
      break;
    case 'a':
        vxl = 0
      break;
    case 's':
        vyd = 0
      break;
    case 'd':
        vxr = 0
      break;
    case 'Shift':
    default:
      break;
  }
}

window.addEventListener('keydown', e => handleDown(e))
window.addEventListener('keyup', e => handleUp(e))