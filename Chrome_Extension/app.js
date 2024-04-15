// function saveTab(){
//     console.log("Button Clicked")
// }

myTabs = []
const inptbtn = document.getElementById("save-el")
const inputel = document.getElementById("input-el")
const ulel = document.getElementById("list-el")

inptbtn.addEventListener("click", function(){
    myTabs.push(inputel.value)
    inputel.value = ""
    rendermyTabs()
    console.log(myTabs)
})

function rendermyTabs(){
    let listitems = ""
    for(let i = 0; i < myTabs.length; i++) {
        listitems += `
            <li>
                <a target='_blank' href='${myTabs[i]}'>
                ${myTabs[i]}
                </a>
            </li>
        `
        // listitems += "<li> <a  target ='_blank' href='" +  myTabs[i] + "'>" + myTabs[i] + "</a?</li>"
        // let li = document.createElement("li")
        // li.textContent = myTabs[i]
        // ulel.append(li)
    }
ulel.innerHTML = listitems
}
