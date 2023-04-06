var mario = document.querySelector('.mario');
var pipe = document.querySelector('.pipe')
var num = document.querySelector('.num')
var coin = document.querySelector('.coin-flip')

var auxiliar = 0

var jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    },  500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <= 145 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.aniamtion = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "imagens/game-over.png"
        mario.style.width = `80px`
        mario.style.marginLeft = "70px"
        document.querySelector('.contador').style.display = 'none'
    } else {
        num.innerHTML = auxiliar += 1
    }
}, 10)
document.addEventListener('keydown', jump);
