import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-gray-800 w-full flex flex-row justify-center items-center">

      <h1 className="absolute top-[5%] text-[5rem]">Escolha sua aventura</h1>

      <div className="w-[80%] h-[20%] flex justify-center items-center gap-[100px]">

        <a href="/dice"><div className="bg-gray-900 aspect-[3/4] w-[350px] rounded-lg flex flex-col gap-[20px] items-center justify-center border-white border-double border-8 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <img src="/dices.png" className="w-[300px]"></img>
          <h1 className="text-[3rem]">Rolar dados</h1>
        </div></a>

        <a href="/dice"><div className="bg-gray-900 aspect-[3/4] w-[350px] rounded-lg flex flex-col gap-[20px] items-center justify-center border-white border-double border-8 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <img src="/dices.png" className="w-[300px]"></img>
          <h1 className="text-[3rem]">Rolar dados</h1>
        </div></a>

        <a href="/dice"><div className="bg-gray-900 aspect-[3/4] w-[350px] rounded-lg flex flex-col gap-[20px] items-center justify-center border-white border-double border-8 hover:scale-110 transition-transform duration-200 cursor-pointer">
          <img src="/dices.png" className="w-[300px]"></img>
          <h1 className="text-[3rem]">Rolar dados</h1>
        </div></a>

      </div>

    </main>
  );
}
