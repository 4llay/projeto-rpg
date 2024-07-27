'use client'

import clearDice from "@/components/clearDice"
import createDice, { updateTotalMod } from "@/components/createDice"
import rerollDice from "@/components/rerollDice"

export default function Dices() {
    return (
        <main className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center gap-[15px] font-KalniaGlaze text-white">
            <h1 className="text-[4rem]">Rolador de dados</h1>

            <div className="flex flex-col justify-center items-center gap-[50px]">
                <div className="w-[65dvw] h-[50dvh] select-none flex justify-center content-around flex-wrap gap-10 p-10 overflow-x-hidden overflow-y-auto border-purple-300 border-4 border-double rounded-lg" id="dice" />

                <div className="w-[600px] h-[5%] flex justify-around items-center text-[2rem] font-sans">
                    <button className="border-white border-[3px] py-2 px-4 rounded-[15%]" onClick={clearDice}><h2>Limpar</h2></button>
                    <button className="border-white border-[3px] py-2 px-4 rounded-[15%]" onClick={rerollDice}><h2>Rerolar</h2></button>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-[70px] aspect-square border-white border-4 p-4 rounded-[100%] cursor-pointer" onClick={() => { document.querySelector("#inputDiv")?.classList.toggle("show") }}><i className="fa-solid fa-plus-minus text-white text-[2rem]"></i></div>
                        <div className="absolute translate-y-[-80px] w-fit z-20 flex flex-col justify-center items-center invisible bg-slate-900 gap-5 p-2 border-white border-4 rounded-md opacity-0" id="inputDiv">
                            <h2 className="">Modificador</h2>
                            <input className="bg-slate-800 border-white border-4 w-[180px] rounded-lg overflow-hidden" id="inputBox" type="number" onInput={updateTotalMod}></input>
                        </div>
                    </div>
                    <div className="flex gap-[5px]">
                        <h2>Total:</h2>
                        <h2 className="absolute z-10 translate-x-[5rem]" id="total"></h2>
                    </div>
                </div>

                <div className="w-[60%] h-fit flex gap-[50px] justify-center items-center">
                    <div><button onClick={() => createDice(4)}><img src="/d4.png" className="w-[90px]"></img></button></div>
                    <div><button onClick={() => createDice(6)}><img src="/d6.png" className="w-[85px]"></img></button></div>
                    <div><button onClick={() => createDice(8)}><img src="/d8.png" className="w-[90px]"></img></button></div>
                    <div><button onClick={() => createDice(10)}><img src="/d10.png" className="w-[95px]"></img></button></div>
                    <div><button onClick={() => createDice(12)}><img src="/d12.png" className="w-[90px]"></img></button></div>
                    <div><button onClick={() => createDice(20)}><img src="/d20.png" className="w-[90px]"></img></button></div>
                </div>
            </div>

            <div className="bg-red-300 w-10 h-10">

            </div>

        </main>
    )
}