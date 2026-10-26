import './App.css'
import CounterReducer from './apps/CounterReducer'
import Counter from './components/Counter'
import InputFocus from './components/InputFocus'
import UseRefEx from './components/UseRefEx'
import BankReducer from './hooks/BankReducer'
import CountReducer from './hooks/CountReducer'
import UserParent from './use_context/UserParent'

// 내보내기 할 때 default가 없는 경우 - 중괄호로 묶는다 ??

function App() {

  return (
    <>
    <section className="app">
          {/* <h2>성능 최적화 및 전역 관리</h2> */}
      {/* <UseRefEx /> */}
      {/* <InputFocus /> */}
      {/* <Counter /> */}
      {/* <CountReducer /> */}
      {/* <BankReducer /> */}
      {/* <UserParent /> */}
      <CounterReducer />
      </section>

    </>
  )
}

export default App
