
function rollDice(){
    const numofdice = document.getElementById("numofDice").value
    const diceresult = document.getElementById("diceresult")
    const diceImages = document.getElementById("diceImages")
    const sum = document.getElementById("sum")
    const values = []
    const images = []
    let total = 0

    for(let i = 0; i < numofdice; i++)
        {
            const value = Math.floor(Math.random() * 6) + 1
            values.push(value)
            images.push(`<img src="Images/${value}.png" alt="Dice ${value}">`)
            
        }

    for(let i=0; i < values.length; i++){
        total = total + values[i]
    }

        sum.textContent = `Sum = ${total}`
        diceresult.textContent = `Dice: ${values.join(', ')}`
        diceImages.innerHTML = images.join('')
            
}