import {useState} from "react";

 function Counter({start=0}){
    let [Counter, setCounter] = useState(start);
    const handlClick = (type) => {
        if(type === "minus"){
        setCounter(Counter - 1);
        return}
        setCounter(Counter + 1)
    };

    return (
        <div className=" flex items-center gap-4 border p-1">
            <button className="btn" onClick={() => handlClick("minus")}>-</button>
            <p className="text-4xl font-bold">{Counter}</p>
            <button className="btn red" onClick={() => handlClick()}>+</button>
        </div>
    );
    
 }
 export default Counter;