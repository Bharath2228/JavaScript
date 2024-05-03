const textbox = document.getElementById("textbox")
const toFahre = document.getElementById("toFahr")
const tocelsius = document.getElementById("tocelsius")
const result = document.getElementById("result")
let temp

function convert(){
    if(toFahre.checked){
        temp = Number(textbox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(2) + " Fahrenheit"
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value)
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(2) + " Celsius"
    }
    else{
        result.textContent = "Select a Unit"
    }
}