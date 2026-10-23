import './App.css'
import CountReducer from './components/CountReducer'
import InputFocus from './components/InputFocus'
import UseRefEx from './components/UseRefEx'

function App() {

  return (
    <>
    <section className="app">
          {/* <h2>성능 최적화 및 전역 관리</h2> */}
      {/* <UseRefEx /> */}
      {/* <InputFocus /> */}
      <CountReducer />
      </section>

    </>
  )
}

export default App
