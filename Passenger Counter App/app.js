// document.getElementById("count-el").innerText = 5


// let lap1 = 34
// let lap2 = 34
// let lap3 = 36

// function totallap() {
//     console.log(lap1+lap2+lap3)
// }

// totallap()

// let lapscompleted = 0

// function incrementlap()
// {
//     lapscompleted += 1
// }

// incrementlap()
// incrementlap()
// incrementlap()



let count = 0
let saveEl = document.getElementById("save-el")

function increment() {

    count += 1
    document.getElementById("count-el").textContent = count

}

function save() {
    let rando = count + " - "
    // saveEl.innerText += rando 
    // saveEl.textContent += rando

    document.getElementById("save-el").textContent += rando
    count = 0
    document.getElementById("count-el").textContent = count
}