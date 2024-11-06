import React from "react";

function Counter() {
    const handleClick = () => {
        Counter += 1;
    };
  return (
    <div className="flex gap-4 text-5xl items-center justify-center border-4 p-3 ">
        <button className="btn"></button>
        <p>5</p>
        <button className="btn"></button>
    </div>
  )
}

export default Counter;