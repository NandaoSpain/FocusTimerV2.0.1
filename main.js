import state from "./state.js"

const controls = document.querySelector('.controls')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

start(1, 6)

function registerControls() {
    controls.addEventListener('click', (e) => {
    if(e.target.classList.contains('play')){
        countdown()
    }
})
}

function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds
    updateDisplay()
    registerControls()
}

function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    min.textContent = String(minutes).padStart(2, '0')
    sec.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
    clearTimeout(state.countdownId)
    
    let minutes = Number(min.textContent)
    let seconds = Number(sec.textContent)
    
    seconds-- 
    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes <0) {
        return
    }
    state.countdownId = setTimeout(() => {countdown()},1000)
    updateDisplay(minutes, seconds)
}