'use client'

import randomNum from "@/components/randomNum";

export default function Dices() {
    return(
        <main className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center gap-[50px]">
            <div className="w-[300px] h-[300px] bg-red-500" id="dice">A</div>
            <div className="w-[60%] h-fit flex gap-[50px] justify-center items-center">
                <div><button onClick={() => randomNum(4)}><img src="/d4.png" className="w-[90px]"></img></button></div>
                <div><button onClick={() => randomNum(6)}><img src="/d6.png" className="w-[85px]"></img></button></div>
                <div><button onClick={() => randomNum(8)}><img src="/d8.png" className="w-[90px]"></img></button></div>
                <div><button onClick={() => randomNum(10)}><img src="/d10.png" className="w-[95px]"></img></button></div>
                <div><button onClick={() => randomNum(12)}><img src="/d12.png" className="w-[90px]"></img></button></div>
                <div><button onClick={() => randomNum(20)}><img src="/d20.png" className="w-[90px]"></img></button></div>
            </div>
        </main>
    )
}