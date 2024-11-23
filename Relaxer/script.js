const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5) * 2
const holdTime = totalTime/5

const audio1 = new Audio("Audio/mixkit-light-rain-loop-2393.mp3")
const audio2 = new Audio("Audio/mixkit-rain-and-thunder-storm-2390.mp3")

breatheAnimation()

function breatheAnimation () {
    text.innerHTML = 'Breathe in!'
    container.className = 'container grow'
    audio2.loop = true;
    audio2.play()
    audio1.pause()


    setTimeout(() => {
        text.innerText = 'Hold'
        audio1.loop = true;
        audio1.play()
        audio2.pause()
        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
            
        }, holdTime)
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime)