import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {

  return (
    <>
    
   <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      
      <Route path='/contact' element={<Contact/>} />

      
     </Routes>

<Footer/>
    </>
  )
}

export default App
