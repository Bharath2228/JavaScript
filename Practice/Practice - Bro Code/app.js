// // console.log(`Hello`)

// // window.alert(`Hello this is a alert`)

// // document.getElementById("myH1").textContent = 'Hello'
// // document.getElementById("myP").textContent = `Paragraph`

// let x 
// x = 100
// console.log(typeof x)

// console.log(`Number ${x}`)

// let students = 2

// // agumented assignments
// students += 1
// students -= 1
// students *= 2
// students **= 2

// students++
// students--

// console.log(students)

// // 1. paranthesis(), 2. exponents, 3. multiplication. division, modulus 4. addition and subtraction

// let result = 1+2-3*4**2

// console.log(result)

// //  accept user prompt

// // 1. window prompt 
// // 2.Html textbox

// // let uname 

// // uname = window.prompt("What is ur Name? ")

// // console.log(uname)

// let username = "dd"
// document.getElementById("Mysubmit").onclick = function(){
//     username = document.getElementById("myText").value
//     document.getElementById("myH1").textContent = "Clicked!!!"
//     console.log(username)
// }


// // Type Conversion = change the dataype of a value to another (strings, numbers, booleans)

// // let age = window.prompt("Age ??")

// let age = 4
// age = Number(age)
// age = String(age)
// age = Boolean(age)
// age += 1

// console.log(age, typeof age)

// // CONST

// const pi = 3.14159


const decrease = document.getElementById("decreasebtn")
const reset = document.getElementById("resetbtn")
const increase = document.getElementById("increasebtn")

const countlabel = document.getElementById("countlabel")

let count = 0 

increase.onclick = function(){
    count++
    countlabel.textContent = count;
}

decrease.onclick = function(){
    count--
    countlabel.textContent = count;
}

reset.onclick = function(){
    count = 0
    countlabel.textContent = count;
}

let x = 3.21
let y = 2
let z

z = Math.round(x)
z = Math.floor(x)
z = Math.ceil(x)
z = Math.trunc(x)
z = Math.pow(x, y)
z = Math.sqrt(x)
z = Math.log(x)
console.log(z)

random = Math.floor(Math.random() * 6) + 1
console.log(random)