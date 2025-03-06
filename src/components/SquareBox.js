import React from "react";

function SquareBox({ onPress, isAiMove, symbol }) {
    return (
        <button className="border-1 px-[64px] py-[64px]" disabled={isAiMove || (symbol !== null)} onClick={onPress} >
                <p>{symbol}</p>
        </button>
    )
}

export default SquareBox