let card = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = ""

let player = {
     name: "Per",
     chips: 145
}


document.getElementById("player-el").textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = randomncard()
    let secondCard = randomncard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function randomncard(){
    let randomnum = Math.floor(Math.random()*13) + 1
    if (randomnum > 10){
        return 10
    } else if (randomnum === 1){
        return 11
    } else {
        return randomnum
    }
}

function renderGame() {

    // document.querySelector("#cards-el").textContent = "Cards: " + card[0] + " " + card[1] 
    // document.getElementById("sum-el").textContent += sum
    document.getElementById("cards-el").textContent = "Cards: "
    for(let i = 0; i < card.length; i++) {
        document.getElementById("cards-el").textContent += card[i] + " "
    }
    document.querySelector("#sum-el").textContent = "Sum: " + sum

    if (sum <= 20) {
        msg = " Do you want to draw a new card?"
    } else if (sum === 21) {
        msg = " Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        msg = " You're out of the game!"
        isAlive = false
    }
    document.getElementById("msg-el").textContent = msg
    
}

function newCard(){
    
    if (isAlive === true && hasBlackJack === false){
        let newcard = randomncard()
        sum += newcard
        card.push(newcard)
        renderGame()
    }
    
}
