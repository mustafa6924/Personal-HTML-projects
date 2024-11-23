let player1 = "Player1"
let player2 = "Player2"

const diceRollSound =  new Audio('./Audio/dice-142528.mp3')

function editNames() {
    player1 = prompt("Change Player 1 name: ")
    player2 = prompt("Change Player 2 name: ")

    if (player1.length < 1 || player2.length < 1) {
        alert("Please enter a valid name")
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1
    document.querySelector("p.Player2")
        .innerHTML = player2    
}

function rollTheDice() {
    let diceNum1 = document.querySelector(".img1")
    let diceNum2 = document.querySelector(".img2")
    diceRollSound.play()
    diceNum1.setAttribute("src","./Dice_Faces/diceroll.gif")
    diceNum2.setAttribute("src","./Dice_Faces/diceroll.gif")


    let result = document.querySelector('h1')
    result.innerHTML = ""
    setTimeout(() => {
        let randomnumber1 = Math.floor(Math.random()*6)+1
        let randomnumber2 = Math.floor(Math.random()*6)+1
   
    
        diceNum1.setAttribute('src', './Dice_Faces/dice'+randomnumber1+'.png')
        diceNum2.setAttribute('src', './Dice_Faces/dice'+randomnumber2+'.png')
            
       
        
        if (randomnumber1 === randomnumber2) {
            result.innerHTML = 'Draw!'
        } else if (randomnumber1 > randomnumber2) {
            result.innerHTML = (player1 + ' Wins!')       
        } else {
            result.innerHTML = (player2 + ' Wins!')
        }
    },1000)  
   

}