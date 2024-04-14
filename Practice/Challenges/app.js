// let firstName = "Bharath"
// let lastname = " P"
// let fullName = firstName + lastname
// console.log(fullName)


// let name = "Linda"
// let greeting = "Hi there"
// function mygreeting(){
//     console.log(greeting + " " + name)
// }
// mygreeting()


// let mypoints = 3
// function add3points(){
//     mypoints += 3
// }
// function remove1point(){
//     mypoints -= 1
// }
// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()
// console.log(mypoints)


// console.log("Points: " + 5 + 9)

// // From the Blackjack game proj

// let age = 100

// if (age < 21){
//     console.log("You can not enter the club")
// } else {
//     console.log("welcome")
// }

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your Birthday card")
// } else {
//     console.log("Not Eligible, you have already gotten one")
// }

// for (let i =1; i<8; i+=2){
//     console.log(i)
// }

// for(let i = 10; i<=100; i+=10){
//     console.log(i)
// }

// let arr = [1, 3, 4]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

let sen = ["Hello,", "This", "is", "Bharath"]

for(let i = 0; i < sen.length; i++){
    document.getElementById("greet-el").textContent += sen[i] + " "
}