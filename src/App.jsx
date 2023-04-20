import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Caroussel from './components/Carousel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
