import React from "react";
import Counter from "./Counter";

function App(){
    return(
        <main className="container">
            <Counter start ={10}/>
            <Counter/>
            <Counter start = "50"/>
        </main>
    );
}

export default App;