import { useState} from "react";
export const State =() => {
    const [count, setCount ] = useState(0);
    const handleButtonClick = () => {
        setCount ( () => count+1);
    };
    return (
        <>
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        </section>
        </>
    );
};