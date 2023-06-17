const notCanvas = document.querySelector('#player-canvas')
const ctx = document.querySelector('#player-canvas').getContext('2d')
let x = 0
let y = 0
let vxl = 0
let vxr = 0
let vyu = 0
let vyd = 0
const img = new Image()
img.src = './assets/duck-pc.png'



function update() {

  ctx.clearRect(0, 0, notCanvas.width, notCanvas.height)
  
  x += vxl
  x += vxr
  y += vyu
  y += vyd
  

  img.onload = () => {
    const pattern = ctx.createPattern(img, 'no-repeat') 
    ctx.fillStyle = pattern
  }
  ctx.fillRect(x, y, 25, 25)
  requestAnimationFrame(update)
}
update()

const game = document.querySelector('#canvas-wrapper')

const fsButton = document.querySelector('#full-screen')
fsButton.addEventListener('click', () => {
  game.requestFullscreen()
})








