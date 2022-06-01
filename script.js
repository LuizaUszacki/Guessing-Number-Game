let displayAnswer = document.getElementById("display__answer")
let inputGuess = document.getElementById("submit__input")
const randomNumber = newRandomNumber()
let guesses = 0
let tooltip = document.querySelector(".tooltiptext")
let startTooltip = 0
let endTooltip = 100

function verifyNumber() {
    if (displayAnswer.innerHTML !== "="){
        guess = getGuess()
        verifyEmptyNumber(guess)
    }
}

function getGuess() {
    let guess = document.getElementById("submit__input").value
    return guess
}




// Verificação de valor vazio e string

function verifyEmptyNumber(guess) {
    if (!Boolean(guess)) {
        alert("Enter a value")
        inputGuess.focus()
    } else {
        guess = guess.trim()
        if (!Boolean(guess)) {
            alert("Enter a value")
            inputGuess.focus()
            inputGuess.value = ""
        } else {
            verifyIfIsNumber(guess)
        }
    }
}

function verifyIfIsNumber(guess) {
    guess = Number(guess)

    if (isNaN(guess)) {
        alert("Enter a NUMBER")
        inputGuess.focus()
        inputGuess.value = ""
    } else {
        checkRandomAndGuess(guess)
    }
}




// Verificação do numero aleatório

function checkRandomAndGuess(guess) {
    guesses += 1
    document.getElementById("text__guesses").innerHTML = "Guesses: " + guesses
    switch(true) {
        case randomNumber > guess:
            displayAnswer.innerHTML = ">"
            changeStartRange(guess)
        break
        case randomNumber < guess:
            displayAnswer.innerHTML = "<"
            changeEndRange(guess)
        break
        case randomNumber === guess:
            displayAnswer.innerHTML = "="
            document.getElementById("submit__button").style.opacity = "0.5"
            document.getElementById("submit__button").classList.remove("hover__effect")
        break
    }
    inputGuess.focus()
    inputGuess.value = ""
}

function newRandomNumber() {
    let number = Math.floor(Math.random() * 100) + 1
    return number
}




// Mudança da barra dos valores e do tooltip

function changeStartRange(start) {
    let startRange = document.querySelector(".totalRange")
    startRange.style.setProperty("--insetValueLeft", "0")
    if (start >= startTooltip) {
        startTooltip = start + 1
        if(endTooltip - startTooltip >= 5) {
            startRange.style.setProperty("--startRange", start + 1)
        } else {
            startRange.style.setProperty("--startRange", endTooltip - 4)
        }
    } 
    changeTooltip(startTooltip, endTooltip)
}

function changeEndRange(end) {
    let endRange = document.querySelector(".totalRange")
    endRange.style.setProperty("--insetValueRight", "0")
    if (end <= endTooltip) {
        endTooltip = end - 1
        if(endTooltip - startTooltip >= 5) {
            endRange.style.setProperty("--endRange", end - 1)
        } else {
            endRange.style.setProperty("--endRange", startTooltip + 4)
        }
    } 
    changeTooltip(startTooltip, endTooltip)
}


function changeTooltip(startTooltip, endTooltip) {
    tooltip.innerHTML = startTooltip + " to " + endTooltip
}