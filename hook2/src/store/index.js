import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

// store 생성
export const store = configureStore({
    reducer: {
        // default가 없으니 중괄호
        // counterSlice에서 내보내기 한 reducer를 등록
        counter: counterReducer,
    }
});