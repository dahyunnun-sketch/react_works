import Main from './pages/Main'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './layouts/Header'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'

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
              <Route path='/board' element={<Board />}/>
              {/* :id - 경로 변수 */}
              <Route path='/board/:id' element={<BoardDetail/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
