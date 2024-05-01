// console.log(`Hello`)

// window.alert(`Hello this is a alert`)

// document.getElementById("myH1").textContent = 'Hello'
// document.getElementById("myP").textContent = `Paragraph`

let x 
x = 100
console.log(typeof x)

console.log(`Number ${x}`)

let students = 2

// agumented assignments
students += 1
students -= 1
students *= 2
students **= 2

students++
students--

console.log(students)

// 1. paranthesis(), 2. exponents, 3. multiplication. division, modulus 4. addition and subtraction

let result1 = 1+2-3*4**2

console.log(result1)

//  accept user prompt

// 1. window prompt 
// 2.Html textbox

// let uname 

// uname = window.prompt("What is ur Name? ")

// console.log(uname)

// let username = "dd"
// document.getElementById("Mysubmit").onclick = function(){
//     username = document.getElementById("myText").value
//     document.getElementById("myH1").textContent = "Clicked!!!"
//     console.log(username)
// }


// Type Conversion = change the dataype of a value to another (strings, numbers, booleans)

// let age = window.prompt("Age ??")

let age = 4
age = Number(age)
age = String(age)
age = Boolean(age)
age += 1

console.log(age, typeof age)

// CONST

const pi = 3.14159


const decrease = document.getElementById("decreasebtn")
const reset = document.getElementById("resetbtn")
const increase = document.getElementById("increasebtn")

const countlabel = document.getElementById("countlabel")

let count = 0 

// increase.onclick = function(){
//     count++
//     countlabel.textContent = count;
// }

// decrease.onclick = function(){
//     count--
//     countlabel.textContent = count;
// }

// reset.onclick = function(){
//     count = 0
//     countlabel.textContent = count;
// }

let x1 = 3.21
let y = 2
let z

z = Math.round(x1)
z = Math.floor(x1)
z = Math.ceil(x1)
z = Math.trunc(x1)
z = Math.pow(x1, y)
z = Math.sqrt(x1)
z = Math.log(x1)
console.log(z)

random = Math.floor(Math.random() * 6) + 1
console.log(random)

// .checked property ////////////////////////////////////////////


const checkbox = document.getElementById("checkbox")
const radiobtn = document.getElementById("radiobtn")
const submit = document.getElementById("submit")
const result = document.getElementById("result")

// submit.onclick = function(){

//     if(checkbox.checked){
//         result.textContent = `You are Subscribed`
//     }

//     else{
//         result.textContent = `You are not Subscribed`
//     }

//     if (radiobtn.checked){
//         result.textContent = `You are Subscribed` + ` you are paying with visa`

//     }
// }

//////////////////// ternary operator = a shortcut to if{} and else{} statments helps to assign a variable based on a condition 
//////// condition ? codeIfTrue : codeIfFalse

let age1 = 21

let message = age >= 18 ? "Your an adult" : "Your not an adult"

console.log(message)

let time = 16

let greet = time >=12 ? `good morning ` : `HGod evening`
console.log(greet)

let student = true
let msg = student ? `student` : `not a student`
console.log(msg)


///////////////// Switch ////////////////////////////

let day = 1

switch(day){
    case 1:
        console.log(`Day1`)
        break;
    
    case 2:
        console.log(`Day2`)
        break;

    case 3:
        console.log(`Day3`) 
        break;
    
    default:
        console.log(`${day} is not mwntioned in the switch case`)
}

let firstname = "Broseph Code"

const email = "bharath328@gmail.com"

let username = email.slice(0, email.indexOf('@'))
let exten = email.slice(email.indexOf('@'))

console.log(username)
console.log(exten)

let username1 = "   bhARAth"

username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase()

console.log(username1)
