import state from "./state.js"

const controls = document.querySelector('.controls')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')
const cards = document.querySelector('.cards')

start(5, 0)

function registerControls() {
    controls.addEventListener('click', (e) => {
    if(e.target.classList.contains('play')){
        state.isRunning = true
        countdown()
    }

    if(e.target.classList.contains('stop')){
        updateDisplay(state.minutes, state.seconds)
        stop()
    }

    if(e.target.classList.contains('plus')) {
        plus()
    }

    if(e.target.classList.contains('minus')){
        minus()
    }
})
}

function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds
    updateDisplay()
    registerControls()
    registerCards()
}

function stop() {
    state.isRunning = false
    countdown()
}

function plus() {
    state.minutes = state.minutes + 5
    updateDisplay()
}

function minus() {
    if(state.minutes > 0){
        state.minutes = state.minutes - 5 
    } else {
        state.minutes = 5
    }
    updateDisplay()
}

function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    min.textContent = String(minutes).padStart(2, '0')
    sec.textContent = String(seconds).padStart(2, '0')
}


function countdown() {
    if(!state.isRunning){
        return
    }
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

function registerCards() {
    cards.addEventListener('click', (e) => {
        if(e.target.classList.contains('forest')) {
            let audio = document.querySelector('.forest-music')
            state.isMute = document.documentElement.classList.toggle('music-on')
            if(state.isMute == false) {
                audio.pause()
            }
            if(state.isMute == true) {
                audio.play()
                console.log(state)
            }
        }

        if(e.target.classList.contains('rain')) {
            let audio = document.querySelector('.rain-music')
            state.isMute = document.documentElement.classList.toggle('music-on')
            if(state.isMute == false) {
                audio.pause()
            }
            if(state.isMute == true) {
                audio.play()
                console.log(state)
            }
        }

        if(e.target.classList.contains('coffeshop')) {
            let audio = document.querySelector('.coffeshop-music')
            state.isMute = document.documentElement.classList.toggle('music-on')
            if(state.isMute == false) {
                audio.pause()
            }
            if(state.isMute == true) {
                audio.play()
                console.log(state)
            }
        }

        if(e.target.classList.contains('fire')) {
            let audio = document.querySelector('.fire-music')
            state.isMute = document.documentElement.classList.toggle('music-on')
            if(state.isMute == false) {
                audio.pause()
            }
            if(state.isMute == true) {
                audio.play()
                console.log(state)
            }
        }
    })
    
}

