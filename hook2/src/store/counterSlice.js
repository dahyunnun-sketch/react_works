import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0}

// action과 reducer를 생성
const counterSlice = createSlice({
    // 필수 속성 : name, initialState, reducers
    name: 'counter',
    initialState,
    reducers:{
        // 1 증가
        increament: (state) => {state.count = state.count + 1},
        decreament: (state) => {state.count = state.count - 1},
        // 입력값만큼 증가하는 함수
        increamentByAmount: (state, action) => {
            // state.count = state.count + action.payload
            state.count += action.payload
        }
    }
})

// 액션 생성자와 리듀서를 export
export const { 
    increament, 
    decreament, 
    increamentByAmount
} = counterSlice.actions

export default counterSlice.reducer