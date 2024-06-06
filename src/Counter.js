import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increement = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const decreement = () => {
        setCount((prevCount) => prevCount - 1);
    }
    return (
        <div>
            <h1>Counter App</h1>
            <p>Count : {count} </p>
            <button onClick={increement}>Increement</button>
            <button onClick={decreement}>Decreement</button>
        </div>
    )
}

export default Counter