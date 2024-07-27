import createDice, { resetTotal } from "./createDice"

export default function rerollDice() {
    const diceDiv = document.querySelector("#dice")!

    if (diceDiv) {

        resetTotal()

        if (diceDiv.children.length > 0) {
            const numOfDices = diceDiv.children.length
            for (var i = 0; i < numOfDices; i++) {
                var filho = diceDiv?.firstChild

                if (filho && filho instanceof HTMLElement) {

                    const idFilho = Number(filho.id)
                    createDice(idFilho)
                    diceDiv.removeChild(diceDiv.firstChild!)
                }
            }
        }
    }
}