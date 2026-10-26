import { useDispatch, useSelector } from "react-redux";
import { 
    increament, 
    decreament, 
    increamentByAmount 
} from "../store/counterSlice";
import { useState } from "react";

const CounterReducer = () => {
    // store의 state에서 count 값을 가져옴
    const count = useSelector(state => state.counter.count);
    const [inputValue, setInputValue] = useState(0);

    // dispatch 함수 가져와서 action을 전달
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        // 숫자형으로 반환
        setInputValue(Number(e.target.value));
    }

    return(
        <div>
            <h2>Counter</h2>
            <h3>현재 숫자: {count}</h3>
            <button onClick={() =>
                dispatch(increament())}>증가</button>
            <button onClick={() =>
                dispatch(decreament())}>감소</button>

            <div>
                {/* 입력값 만큼 증가 */}
                <input 
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}    
                />
                <button onClick={() =>
                    dispatch(increamentByAmount(inputValue))}>입력값 만큼 증가</button>
            </div>
        </div>
    )
}

export default CounterReducer;