'use client'

import randomNum from "@/components/randomNum"

var total: number = 0;

export default function createDice(max: number) {
    const diceDiv = document.querySelector("#dice")!
    const totalDiv = document.querySelector("#total")!
    const inputBox: HTMLInputElement = document.querySelector("#inputBox") as HTMLInputElement

    //rolling dice
    var roll: number = randomNum(max)

    //creating a new div
    const dice = document.createElement("div")

    dice.innerHTML = `${roll}`

    //remove dice when clicked
    dice.addEventListener('click', function () {
        const diceValue = this.innerHTML
        total = total - Number(diceValue);
        this.remove()
        totalDiv.innerHTML = `${total}`
    })

    dice.classList.add("diceStyle")

    dice.id = `${max}`

    diceDiv.append(dice)

    //calculating total of dices
    total = total + roll;

    var modificador = Number(inputBox.value)

    totalDiv.innerHTML = `${total + modificador}`
}

export function resetTotal() {
    const inputBox: HTMLInputElement = document.querySelector("#inputBox") as HTMLInputElement
    const totalDiv = document.querySelector("#total")!

    total = 0;
    var modificador = Number(inputBox.value)
    totalDiv.innerHTML = `${total + modificador}`
}

//update total with the current modfier
export function updateTotalMod() {
    const inputBox: HTMLInputElement = document.querySelector("#inputBox") as HTMLInputElement
    const totalDiv = document.querySelector("#total")!

    totalDiv.innerHTML = `${total + Number(inputBox.value)}`
}