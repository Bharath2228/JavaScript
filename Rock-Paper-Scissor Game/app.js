const choices = ["Rock", "Paper", "Scissors"]

const playerdisplay = document.getElementById("playerdisplay")
const computerdisplay = document.getElementById("computerdisplay")
const resultdisplay = document.getElementById("resultdisplay")

const playerscoredisplay = document.getElementById("playerscoredisplay")
const computerscoredisplay = document.getElementById("computerscoredisplay")

let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if(playerchoice === computerchoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerchoice){
            case "Rock":
                result = (computerchoice === "Scissors") ? "YOU WIN!" : "YOU LOSE"  
                break;
            
            case "Paper":
                result = (computerchoice === "Rock") ? "YOU WIN!" : "YOU LOSE"  
                break;

            case "Scissors":
                result = (computerchoice === "Paper") ? "YOU WIN!" : "YOU LOSE"  
                break;
        }
    }

    playerdisplay.textContent = `PLAYER: ${playerchoice}`;
    computerdisplay.textContent = `COMPUTER: ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("green", "red")
    switch(result){
        case "YOU WIN!": 
            resultdisplay.classList.add("green")
            playerscore++
            playerscoredisplay.textContent = playerscore;
            break
    
        case "YOU LOSE":
            resultdisplay.classList.add("red")
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break
    }
}