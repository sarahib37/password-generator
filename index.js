const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const no_symbols =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const no_numbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")
let passwordCopyOne = document.getElementById("password-copy1")
let passwordCopyTwo = document.getElementById("password-copy2")
let valueBox = document.getElementById("value-box")
let passwordRange = document.getElementById("passwordRange")
let first = ""
let second = ""
let firstPassword = ""
let secondPassword = ""
let value = 0

valueBox.innerHTML = passwordRange.value

passwordRange.oninput = function() {
    valueBox.innerHTML = this.value
    value = Number(this.value)
}

function renderPassword(){
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""

    for (let i = 0; i < value; i++) {
        let random = Math.floor(Math.random() * characters.length)
        first = characters[random]
        firstPassword += first
    }
    
    for (let i = 0; i < value; i++) {
        let random = Math.floor(Math.random() * characters.length)
        second = characters[random]
        secondPassword += second
    }

    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
    passwordCopyOne.textContent = "Click me to copy."
    passwordCopyTwo.textContent = "Click me to copy."
}

function generatePassword(){
    renderPassword()
    firstPassword = ""
    secondPassword = ""
}

function copyContent1(){
    let storage = document.createElement("textarea");
    storage.value = firstPasswordEl.innerHTML;
    firstPasswordEl.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    firstPasswordEl.removeChild(storage)
}

function copyContent2(){
    let storage = document.createElement("textarea");
    storage.value = secondPasswordEl.innerHTML;
    secondPasswordEl.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    secondPasswordEl.removeChild(storage)
}