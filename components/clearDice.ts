import { resetTotal } from "./createDice"

export default function clearDice(){
    const diceDiv = document.querySelector("#dice")

    if(diceDiv === null){
        throw new Error("diceDiv is null");
    }

    while(diceDiv.firstChild){
        diceDiv.removeChild(diceDiv.firstChild)
    }

    resetTotal()
}