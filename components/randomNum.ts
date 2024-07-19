export default function randomNum(end: number){
    const dice = document.querySelector("#dice")

    if(dice === null){
        throw new Error("Could not find dice element.")
    }

    dice.innerHTML = `${Math.floor(Math.random() * end + 1)}`
}