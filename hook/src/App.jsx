import './App.css'
import Counter from './components/Counter'
import InputValue from './components/inputValue'
import Drinks from './components/Drinks'
import Clock from './components/Clock'
import User from './components/User'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'


function App() {
  
  return (
    <>
      <div className='app'>
        {/* <h2>리엑트 상태관리</h2> */}
        {/* <Counter/> */}
        {/* <InputValue/> */}
        {/* <Drinks/> */}
        {/* <Clock/> */}
        {/* <User/> */}
        {/* <SignUp/> */}
        <SignIn/>
      </div>
    </>
  )
}

export default App