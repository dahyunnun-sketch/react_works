import { useReducer, useState } from "react";

const initialState = {balance: 0};

const reducer = (state, action) => {
    console.log(state, action);
    
    // 예금: DEPOSIT, 출금: WITHDRAW, action.payload - AMOUNT(액수)
    switch(action.type){
        case "DEPOSIT": // 예금
            return{ ...state, balance: state.balance + action.payload}
        case "WITHDRAW": // 출금
            return{ ...state, balance: state.balance + action.payload}
        default:
            return state; // 현재 잔액
    }
}

const BankReducer = () => {
    const [state, dispatch] = useReducer(useReducer, initialState)
    const [amount, setAmount] = useState(0); //금액(입,출금)

    return(
        <div>
            <h2>예금 및 출금</h2>
            <h3>현재 잔액: {state.balance}원</h3>
            <input 
                type="number"
                value={amount}
                // e.target.value는 문자열이므로 숫자형으로 변환
                onChange={(e) => setAmount(Number(e.target.value))}
                step={1000}    
            />
            <button onClick={() => 
                dispatch({type: "DEPOSIT", payload: amount})}>예금</button>
            <button onClick={() => 
                dispatch({type: "WITHDRAW", payload: amount})}>출금</button>
        </div>
    )
}

export default BankReducer;