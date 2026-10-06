import './App.css'
import Counter from './components/Counter'
import InputValue from './components/inputValue'
import Drinks from './components/Drinks'


function App() {
  
  return (
    <>
      <div className='app'>
        <h2>리엑트 상태관리</h2>
        {/* <Counter/> */}
        {/* <InputValue/> */}
        <Drinks/>
      </div>
    </>
  )
}

export default App