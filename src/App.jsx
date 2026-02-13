import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Company from './pages/Company'
import AboutDetail from "./pages/AboutDetail"
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Todolist from './pages/Todolist'
import TodolistDetail from './pages/TodolistDetail'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (

    <div>
      <TodoProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<AboutDetail />} />
          <Route path='/todo' element={<Todolist />} />
          <Route path='/todo/:id' element={<TodolistDetail />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:id' element={<BoardDetail />} />
          <Route path='/company' element={<Company />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </TodoProvider>
    </div>
  )
}

export default App
