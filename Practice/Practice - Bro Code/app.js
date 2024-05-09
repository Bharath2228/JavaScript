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