import {useState} from "react";

 function Counter({start=0, step=1,danger = false}) {
    let [Counter, setCounter] = useState(+start);

    const handlClick = (type) => {
        if(type === "minus"){
        setCounter(Counter - step);
        return;
    }
        setCounter(Counter + step);
    };

    return (
        <div className=" flex items-center gap-5 border-4 p-3">
            <button 
            className={`btn ${danger && "red"}`}
            onClick={() => handlClick("minus")}>-</button>
            <p className="text-4xl font-bold">{Counter}</p>
            <button className={`btn ${danger && "red"}`} onClick={() => handlClick()}>+</button>
        </div>
    );
    
 }
 export default Counter;