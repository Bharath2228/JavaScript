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

////////////////////// spread operator //////////////

let number = [1, 2, 3, 4, 5]
let max = Math.max(...number)
console.log(max)

let fname = "Br0 CODE"

let letters = [...fname]

console.log(letters)

///////////// rest operators //////////////////////

function fooditems(...foods){
    console.log(foods)
}

const food1 = "pizza"
const food2 = "ham"
const food3 = "hotdog"

fooditems(food1, food2, food3)


//////////////////// Callback //////////////
// callback = a function that is passed as an argument to another function.

hello(bye)

function hello(callback){
    console.log("Hello")
    callback()
}

function bye(){
    console.log("Bye")
}


////////////// FOR EACH ///////////////////

/// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

// array.forEach(callback)
// element, index, array
let numbers = [1, 2, 3, 4, 5];

number.forEach(double)
number.forEach(square)
number.forEach(display)

function double(element, index, array){
    array[index] = element * 2
}

function square(element, index, array){
    array[index] = Math.pow(element, 2)
}

function display(element){
    console.log(element)
}

let fruits = ['apple', 'banana', 'coconut', 'orange']

fruits.forEach(uppercase)
fruits.forEach(display)


function uppercase(element, index, array){  
    array[index] = element.toUpperCase()
}

function display(element){
    console.log(element)
}

////////////// .map() = accepts a callback and applies that function to each element of an array, then return a new array

const num = [1, 2, 3, 4, 5]

const squares = num.map(square)
const cubes = num.map(cube)

console.log(squares)
console.log(cubes)

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

////////////// .filter() = creates a new array by filtering out elements

let num1 = [1, 2, 3, 4, 5, 6]
let evennums = num1.filter(isEven)
let oddnums = num1.filter(isOdd)
console.log(evennums)
console.log(oddnums)

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 != 0
}


const ages = [16, 17, 18, 19, 20, 60]
const adult = ages.filter(isadult)
const child = ages.filter(ischild)
console.log(adult)
console.log(child)

function isadult(element){
    return element>=18
}

function ischild(element){
    return element<18
}


////////// .reduce() = reduce the eements of an array to a single value

const prices = [5, 90, 64, 76, 43]

const total = prices.reduce(sum)

console.log(total)

function sum(accumulator, element){
    return accumulator + element
}

const grades = [75, 50 ,90, 80, 65, 95]

const maxi = grades.reduce(getMax)
const mini = grades.reduce(getmin)
console.log(maxi)
console.log(mini)

function getMax(accumulator, element){
    return Math.max(accumulator, element)
}

function getmin(accumulator, element){
    return Math.min(accumulator, element)
}


///// function declaration = define a reusable block of code that performs a specific task

//// function expressions = a way to define function as values or variables

const helloo = function(){
    console.log("Hello")
}

helloo()

// setTimeout(function(){
//     console.log("timeour")
// }, 3000)

const num2 = [1, 2, 3, 4, 5, 6]

const squuares = numbers.map(function(element){
    return Math.pow(element, 2)
})

const cuubes = num2.map(function(element){
    return Math.pow(element, 3)
})
console.log(squuares)
console.log(cuubes)

const filtered = num2.filter(function(element){
    return element % 2 === 0
})

console.log(filtered)


///// arrow functions = a conxise way to write function expressions good for simple functions that you use only once (parameters) => some code

// const hello = function(){
//     console.log("Hello")
// }

// function hello(){
//     console.log("Hello")
// }

let nameee = 'Nhatay'
const hellooo = (nameee) => console.log(`Hellooo ${nameee}`)

hellooo(nameee);

// setTimeout(() => console.log("Hello"), 3000)

 const squaresss = numbers.map((element) => Math.pow(element, 2))

 console.log(squaresss)

 let cubesss = num.map((element) => Math.pow(element, 3))

 console.log(cubesss)


 ////// object = A collection of related properties and/or methods can represent real world objects (people, products, places)    object = {key:value, function()}

 const person = {
    firstname: "Bharath",
    lastname: "P",
    age: 30,
    isEmployeed: false,
    sayHello: function(){console.log("Hi! I am Bharath")}
 }

 const person2 ={
    firstname: "Harshitha",
    lastname: "S L",
    age: 42,
    isEmployeed: true,
    sayHello: function(){console.log("Hey this is Harshitha")},
    eat: () => console.log("I'm eating chicken Biryani")
 }
 console.log(person.firstname)
 console.log(person2.firstname)
 person.sayHello()
 person2.sayHello()
 person2.eat()


 ///// this = refernce to the object where THIS is used  (the object depends on the immediate context) person.name = this.name

 const person1 = {
    name: "Bharth",
    sayHello: function(){console.log(`Hey this is ${this.name}`)}
 }

 person1.sayHello()
 

 ///// constructor = special method for defining the properties and methods of objects

 function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`Yor drive the ${this.model}`)}
 }

 const car1 = new Car("Ford", "Mustang", 2024, "Red")
 const car2 = new Car("Suzuki", "Swift", 2019, "Blue")


 console.log(car1.make)
 console.log(car2.make)

 car1.drive()


 ///// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance


class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }

    calculateTotal(salestax){
        return this.price + (this.price * salestax)
    }

}

const product1 = new Product("Shirt", 500)
const product2 = new Product("Pants", 255)
const product3 = new Product("Belt", 300)

const salestax = 0.05
const total1 = product1.calculateTotal(salestax)

product1.displayProduct()
product2.displayProduct()
product3.displayProduct()

console.log(total1)

///// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159

    static getDiameter(radius){
        return radius * 2
    }

    static getCircumference(radius){
        return 2 * this.PI * radius
    }
}

console.log(MathUtil.getDiameter(10))
console.log(MathUtil.PI)
console.log(MathUtil.getCircumference(10))

class User{
    static userCount = 0

    constructor(username2){
        this.username2 = username2
        User.userCount++
    }
}

const user1 = new User("Bharath")

console.log(user1.username2)
console.log(User.userCount)


///////// inhertinance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusability

class Animal{
    isAlive = true

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}

class rabbit extends Animal{
    name = "rabbit"
    run(){
        console.log(`This ${this.name} is running`)
    }
}

class fish extends Animal{
    name = "Fish"
    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class hawk extends Animal{
    name = "hawk"
}

const Rabbit = new rabbit();
const Fish = new fish();
const Hawk = new hawk()

console.log(Rabbit.isAlive)
Rabbit.eat()
Rabbit.sleep()

///// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass) this = this object, super = the parent

class Animal1{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}km`)
    }
}

class Rabbit1 extends Animal1{
    constructor(name, age, runspeed){
        super(name, age)
        this.runspeed = runspeed
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runspeed)
    }
}

class Fish1 extends Animal1{
    constructor(name, age, swimspeed){
        super(name,age)
        this.swimspeed = swimspeed
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimspeed)
    }
}

const rabbit1 = new Rabbit1("Rabbit", 12, 10)
const fish1 = new Fish1("Fish", 3, 12)
console.log(rabbit1.name)
rabbit1.move(20)
fish1.move(12)

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class rectangle{

    constructor(width, height){
        this.width = width
        this.height = height
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth
        }
        else{
            console.error("Width must be a positive number")
        }            
    }

    set height(newheight){
        if(newheight > 0 ){
            this._height = newheight
        }
        else{
            console.error("Height must be positive number")
        }
    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }

    get area(){
        return this._height * this._width
    }
}

const Rectangle = new rectangle(20, 5)

Rectangle.width = 200
Rectangle.height = 300

console.log(Rectangle.width)
console.log(Rectangle.height)

class Person{

    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    set firstname(newfirstname){
        if(typeof newfirstname === "string" && newfirstname.length > 0){
            this._firstname = newfirstname
        }
        else{
            console.error("give proper firstname")
        }
    }   

    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname.length > 0){
            this._lastname = newlastname
        }
        else{
            console.error("Give Proper Last name")
        }
    }

    set age(newage){
        if(newage > 0){
            this._age = newage
        }   
        else{
            console.error("Give proper age")
        }
    }

    get firstname(){
        return this._firstname
    }

    get lastname(){
        return this._lastname
    }

    get age(){
        return this._age
    }

    get fullname(){
        return this._firstname + " " + this._lastname
    }
}

const person3 = new Person("Bharath", "P", 24)

console.log(person3.firstname)
console.log(person3.lastname)
console.log(person3.age)
console.log(person3.fullname)


// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convinent  way 
// [] = to perform array destructuring
// {} = to perform object destructuring


/// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a);
console.log(b);

// swap the two elements in an array

const colors = ["Red", "Green", "Blue", "Black", "White"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//// Assign array elements to variable

// rest parameter ... 
const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors

console.log(firstcolor)
console.log(secondcolor)
console.log(thirdcolor)
console.log(extracolors)

///// extract values from objects

//and

// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstname1, lastname, age2, job="unemployed"}){
    console.log(firstname1)
    console.log(lastname)
    console.log(age2)
}

const person4 = {
    firstname1: "Bharath",
    lastname: "P",
    age2: 30,
    job: "Developer"
}

const person5 = {
    firstname1: "harshitha",
    lastname: "S L",
    age2: 29,
    job: "Designer"
}

const {firstname1, lastname, age2, job} = person4


console.log(firstname1)
console.log(lastname)
console.log(age2)

displayPerson(person5)

///// nested objects = Objects inside of other objects. Allow you to represent more complex data structures child object is enclosed by a parent object

/// person{Adress{}, contactinfo{}}

const person6 = {
    fullname: "Harshitha S L",
    age: 30,
    isstudent: true,

    address: {
        street: "No 18",
        city: "bengaluru"
    }
}

console.log(person6.fullname)
console.log(person6.address)
console.log(person6.address.street)

for(const prop in person6.address){
    console.log(person6.address[prop])
}

class Address{

    constructor(street, city, country){
        this.street = street
        this.city = city
        this.country = country
    }
}

//// Array of objects

const fruit = [{name: "apple", color: "Red", calories: 95}, 
               {name: "Orange", color: "orange", calories: 45}, 
               {name: "banana", color: "yellow", calories: 105}, 
               {name: "coconut", color: "brown", calories: 45}, 
               {name: "pineapple", color: "yellow", calories: 45}]

console.log(fruit[0].calories)

fruit.push({name: "grapes", color: "purple", calories: 62})
fruit.pop()
fruit.splice(1, 2)
console.log(fruit)

fruit.forEach(fruit1 => console.log(fruit1.calories))

///////// map()///////////

const fruitnames = fruit.map(fruit1 => fruit1.name)
const fruitcolors = fruit.map(fruit1 => fruit1.color)

console.log(fruitnames)
console.log(fruitcolors)

// ----- filter()------

const yellowfruits = fruit.filter(fruit1 => fruit1.color === "yellow")

console.log(yellowfruits)

// --- reduce()-----

const maxfruit = fruit.reduce((max, fruit1) =>
                               fruit1.calories > max.calories ?
                               fruit1 : max)

const minfruit = fruit.reduce((min, fruit1) => fruit1.calories < min.calories ? fruit1 : min)

console.log(maxfruit)
console.log(minfruit)

/////// ---- sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical lexicorgraphic = (alphabet + numbers + symbols) as strings

let strings = ["Bhar", "hars", "ebkjdb", "dikbd"]
let numss = [1, 9 , 0 ,67 , 5 , 5 ]

console.log(numss.sort((a, b) => a - b))

// for reverse order

console.log(numss.sort((a, b) => b - a))
console.log(strings.sort())

///// Shuffle an array

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

// cards.sort(() => Math.random() - 0.5) inefficent method

///// Fisher-yates algorithm
shuffle(cards)

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]

    }
}

console.log(cards)

////////// Date Objects = Objects that contain values that represent dates and times. These date objects can be changes and formatted

// Date(year, month, day, hour, ninute, second, ms)
const date = new Date();
const date1 = new Date(2024, 3, 2, 1, 2, 1)

const year = date.getFullYear()
const month = date.getMonth()
const day1 = date.getDate()
const hour = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()


console.log(date)
console.log(date1)
console.log(year)
console.log(month)
console.log(day1)
console.log(hour)
console.log(minutes)
console.log(seconds)

date.setFullYear(2024);
date.setMonth(0)
date.setDate(1)
date.setHours(2)
date.setMinutes(4)
date.setSeconds(3)

console.log(date)

// clousre = a function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// allow for private variables and state maintenance
//Used frequently in JS frameworks: react, Vue, Angular


function outer(){

    let msg = "hello"

    function inner(){
        console.log(msg)
    }
    inner()
}

outer()

function createcounter(){
    let count = 0

    function increment(){
        count++
        console.log(`count increment to ${count}`)
    
    }

    function getcountfunction(){
        return count;

    }

    return {increment, getcountfunction}
}

const counter = createcounter()

counter.increment()
counter.increment()

console.log(counter.getcountfunction())

///////////////////////////

function creategame(){
    let score  = 0

    function increaseScore(points){
        score += points
        console.log(`points +${points}`)
    }

    function decreaseScore(points){
        score -= points
        console.log(`points -${points}`)
    }

    function getScore(){
        return score
    }

    return{increaseScore, decreaseScore, getScore}
}

const scoring = creategame()

scoring.increaseScore(5)
scoring.increaseScore(5)
console.log(scoring.getScore())
scoring.decreaseScore(4)
console.log(scoring.getScore())

// console.log(`get score ${getScore()}`)

//// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the javascript runtime env.)

// setTimeout(callback, delay);
// clearTimeout(timeoutID) = can cancel a timeout before it triggers


// function sayhello(){
//     window.alert("hello")
// }

// setTimeout(sayhello, 3000)

// setTimeout(function(){window.alert("Hello")}, 3000)

// const timeoutId = setTimeout(() => window.alert("hello"), 3000)

// clearTimeout(timeoutId);

let timeoutId

function startTimer(){
    timeoutId = setTimeout(() => window.alert("hello"), 3000)
    console.log("Started")
}

function clearTimer(){
    clearTimeout(timeoutId)
    console.log("Cleared")
}

// synchronous = Executes line by line consecuteively in a sequential manner code that waits for an operation to complete

// asynchronous = Allows multiple opeartions to be performed concurrently without waiting 
// Doesn't block the execution flow and allows the program to continue
// (I/O opearions, network requests, fetching data) handled with: callbacks, promises, Async/Await


function func1(callback){
    setTimeout(() => {
        console.log('Task 1');
        callback();
    }, 3000);
}

function func2(){
    console.log('task 2')
    console.log('task 3')
}

func1(func2)

//// Error = An object is created to represnt a problem that occurs. Occur often with user input or establishing a connection

// try{
//     console.log(x111)
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     console.log("This always execute")
// }

// try{
//     // const dividend = Number(window.prompt("Enter a dividend: "))
//     // const divisor = Number(window.prompt("Enter a divisor: "))

//     if (divisor == 0){
//         throw new Error("You cant divide by 0")
//     }

//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values are not a number")
//     }

//     const result2 = dividend / divisor
//     console.log(result2)
// }
// catch(error){
//     console.error(error)
// }

// element selectors = Methods used to target and manipulate HTML elements They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// document.getElementById()         // ELEMENT OR NULL
// document.getElementsByClassName() // HTML COLLECTION
// document.getElementsByTagName()   // HTML COLLECTION
// document.querySelector()          // ELEMENT OR NULL
// document.querySelectorAll()       // NODELIST

// const heading = document.getElementById("heading")
// heading.style.backgroundColor = "yellow"
// heading.style.textAlign = "center"

// const fruits1 =  document.getElementsByClassName("fruits")

// for (let fruit of fruits1){
//     fruit.style.backgroundColor = "yellow"
// }

// // fruits1[1].style.backgroundColor = "yellow"

// console.log(fruits)

// Array.from(fruits1).forEach(fruit => {
//     fruit.style.backgroundColor = "Red"
// })

// const h4elements = document.getElementsByTagName("h4")
// const lielements = document.getElementsByTagName("li")

// for(let h4element of h4elements){
//     h4element.style.backgroundColor = "yellow"
// }

// for (let lielement of lielements){
//     lielement.style.backgroundColor = "yellow"
// }

// Array.from(h4elements).forEach(h4element => {
//     h4element.style.backgroundColor = "red"
// })

// Array.from(lielements).forEach(lielements => {
//     lielements.style.backgroundColor = "red"
// })
// // h4elements[0].style.backgroundColor = "yellow"

// const element = document.querySelector("li")
// const allelement = document.querySelectorAll("h4")

// element.style.backgroundColor = "yellow"
// allelement[0].style.backgroundColor = "yellow"

// Array.from(allelement).forEach(element => {
//     element.style.backgroundColor = "violet"
// })


/// DOM Navigation = The process of navigating the structure of an HTML document using JavaScript

// .firstElementChild
//.lastElementChild
// .nextElementSibling
// ,previousElementSibling
// .parentElement
// .children

/// ------------ .firstElementChild ----------------

// const element1 = document.getElementById("fruits")
// const firstchild = element1.firstElementChild;

// firstchild.style.backgroundColor = "yellow"

// const ulelements = document.querySelectorAll("ul")

// ulelements.forEach(ulelement => {
//     const firstchild = ulelement.firstElementChild;
//     firstchild.style.backgroundColor = "red"
// })

/// Example 1 <h1> 

// STEP 1 CRETAE THE ELEMENT

const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "I love Chicken"
newH1.id = "myH1"
newH1.style.color = "red"
newH1.style.textAlign = "center";
//STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1)
// document.body.prepend(newH1)

// document.getElementById("box1").append(newH1)
// document.getElementById("box1").prepend(newH1)

const box2 = document.getElementById("box2")

document.body.insertBefore(newH1, box2)

// REMOVE HTML ELEMENT

document.body.removeChild(newH1);


/// Example ///

// STEP 1 CREATE THE ELEMENT

const newListItem = document.createElement("li")

// step 2 set attributes / properties

newListItem.textContent = "coconut"
newListItem.id = "coconut"
newListItem.style.fontSize = "35px"

// step 3 append element to DOM

// document.body.append(newListItem)

// document.getElementById("fruits").append(newListItem)


//// --------- Mouse Events --------------------------

// eventListner = Listen for specific events to create interactive web pages 
//  events: click, mouseover, mouseout
// .addEventListner(event, callback)

const mybox = document.getElementById("box6");
const myButton = document.getElementById("mybutton")
// box.addEventListener(event, callback)

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "Ouch! 🥲"
// }


// mybox.addEventListener("click", changeColor);

// mybox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "Ouch! 🥲"
    
// })

// myButton.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "Ouch! 🥲"
// })

// myButton.addEventListener("mouseover", event =>{
//     event.target.style.backgroundColor = "Yellow";
//     event.target.textContent = "Don't do it";
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😎"
// })


///// ----------- events: keydown, keyup--------------------

// const mybox1 = document.getElementById("mybox")
// const moveamount = 10
// let x5 = 0;
// let y5 = 0

// document.addEventListener("keydown", event => {

//     if(event.key.startsWith("Arrow")){

//         event.preventDefault();

//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveamount;
//                 break;
//             case "ArrowDown":
//                 y += moveamount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveamount;
//                 break;
//             case "ArrowRight":
//                 x += moveamount;
//                 break;
//         }

//         mybox1.style.top = `${y}px`;
//         mybox1.style.left = `${x}px`;

//     }
// })

// document.addEventListener("keydown", event => {
//     mybox1.textContent = "🥲"
//     mybox1.style.backgroundColor = "tomato"
// })

// document.addEventListener("keyup", event => {
//     mybox1.textContent = "😎"
//     mybox1.style.backgroundColor = "lightblue"
// })


// //// ------- hide / show HTMl --------------------

// const mybtn12 = document.getElementById("mybutnn")
// const myimg = document.getElementById("myimg")

// mybtn12.addEventListener("click", event => {

//     if(myimg.style.visibility === "hidden"){
//         myimg.style.visibility = "visible";
//         mybtn12.textContent = "Hide";
//     }

//     else{
//         myimg.style.visibility = "hidden";
//         mybtn12.textContent = "Show";
//     }
// });


////NodeList = Static collection of HTML Elements by (id, class, element) 
// van be created by using querySelectorAll()
// similar to an array, but no (map, filter, reduce)
// NodeList wont update to automatically reflect changes

let buttons = document.querySelectorAll(".mybuttons")

// add html / css properties

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😎"
})

// click event listner

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato"
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%"
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green"
    })
})

// Add an element

// const newButton = document.createElement("button")

// newButton.textContent = "Button 5"
// newButton.classList = "mybuttons"

// document.body.appendChild(newButton)

// buttons = document.querySelectorAll(".mybuttons")


/// ClassList = element property in javaScript used to interact with an element's list of classes (CSS Classes)
/// Allows you to make reusable classes for many elements across your webpage

// add()
// remove()
// toggle(Remove if present, Addd if not)
// replace(oldClass, newclass)
// contains()

const mH1 = document.getElementById("mH1")
const mbutton = document.getElementById("mbutton")

// mbutton.classList.add("enabled")
// mbutton.classList.remove("enabled")

// mbutton.classList.add("hover")

// mbutton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover")
// })

// mbutton.addEventListener("mouseout", event => {
//     event.target.classList.toogle("hover")
// })

mbutton.classList.add("enabled")
mH1.classList.add("enabled")

mbutton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😎"
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }
})

