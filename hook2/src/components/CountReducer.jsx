import { useState } from "react";

const CountReducer = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>useReducer() 실습</h2>
            <p>상태: {count}</p>
            <button onClick={() => setCount(count+1)}>증가</button>
            <button onClick={() => setCount(count-1)}>증가</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>
    )
}

export default CountReducer;