import Main from './pages/Main'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './layouts/Header'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Main />}/>
              <Route path='/signup' element={<SignUp />}/>
              <Route path='/signin' element={<SignIn />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
