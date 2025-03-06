import SquareBox from "@/components/SquareBox";
import React from "react";

function GameScreen() {

    const squareSymbols = Array(9).fill(null)

    return (
            <main className="flex flex-col w-full min-h-screen items-center justify-center ">
                <div className="grid grid-cols-3 gap-0" >
                    {squareSymbols.map((symbol, index) => (
                        <SquareBox key={index} symbol={symbol} />
                    ))}
                </div>
                <button type='button'  className="border-[1px] border-[#00ff33] rounded-[8px] my-[16px] px-[16px] py-[4px] bg-green-400 " onClick='' >
                        <p>Play</p>
                </button>
            </main>
    )
}

export default GameScreen

