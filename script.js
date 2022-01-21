"use strict"
const numHorse = 11
const fLine = 90
let horseDiv = []
let HorsesX = []
let colours = "blue,red,green,yellow,purple,orange,black,brown,pink,white,grey".split(",")
let bet = ""

function setUp(){
    let i=0
    while(i<numHorse){
        // create a horse
        horseDiv[i] = document.createElement("div")
        document.body.appendChild(horseDiv[i])
        horseDiv[i].classList.add("horses")
        horseDiv[i].style.top=i * 8 +"%"
        horseDiv[i].style.backgroundColor=colours[i]
        HorsesX[i]=0
        i++
    }
}


function placeBet(){
    bet = prompt(`Choose a coloured horse ${colours}`)
    alert("you bet on: "+bet)
}

function resetRace(){
    let i = 0
    while(i<numHorse){
    HorsesX[i]=0
    i ++
    }
}

requestAnimationFrame(moveHorses)

function moveHorses(){
    let i=0

    while(i<numHorse){

        horseDiv[i].style.left = HorsesX[i]+"%"
        HorsesX[i] += Math.random()


        if (HorsesX[i]> 90){
            displayBet(bet)
            console.log(colours[j])
            alert(`${colours[j]} won the race`)
            resetRace()
            placeBet()
let j=0
while(j<numHorse){

    horseDiv[j] = document.createElement("div")
    document.body.appendChild(horseDiv[j])
    horseDiv[j].classList.add("horses")
    horseDiv[j].style.top=j * 8 +"%"
    horseDiv[j].style.backgroundColor=colours[j]
    HorsesX[j]=0
    j++
}
placeBet()
function placeBet(){
    bet = prompt(`Choose a coloured horse ${colours}`)
    alert("you bet on: "+bet)
}
function resetRace(){
    let i = 0
    while(i<numHorse){
    HorsesX[i]=0
    i ++
    }
}

requestAnimationFrame(moveHorses)

function moveHorses(){
    let i=0

    while(i<numHorse){

        horseDiv[i].style.left = HorsesX[i]+"%"
        HorsesX[i] += Math.random()


        if (HorsesX[i]> 90){
            displayBet(i)
            alert(`${colours[i]} won the race`)
            resetRace()
        
        }
        i++
    }
    requestAnimationFrame(moveHorses)
}
        }
        i++
    }
    requestAnimationFrame(moveHorses)
}

function displayBet(i){
    if (bet != colours[i]){
        alert("you lost the bet")
    }
    else{
        alert("you won the bet")
    }
}

placeBet()
setUp()