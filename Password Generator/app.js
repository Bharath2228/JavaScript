const inptpassword = document.getElementById("inptpassword")
let selectupper = document.getElementById("selectupper")
let selectlower = document.getElementById("selectlower")
let selectnumber = document.getElementById("selectnumber")
let selectchars = document.getElementById("selectchars")
const passwordLength = 12;

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberChars = "0123456789"
const symbolChars = "!@#$%^&*"

function generatePassword(){
    
    const includeLowercase = selectlower.checked
    const includeUppercase = selectupper.checked
    const includeNumbers = selectnumber.checked
    const includeSymbols = selectchars.checked
    console.log(selectupper.checked)
    let allowedChars = ""
    let passwod = ""

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""
    
    if (passwordLength <= 0){
        return `(password maust be atleast 1)`
    }

    if(allowedChars.length === 0){
        return `(At least one set of characters needs to be selected)`
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length) 
        passwod += allowedChars[randomIndex]
    }

    inptpassword.textContent = `Password: ${passwod}`
}



                          