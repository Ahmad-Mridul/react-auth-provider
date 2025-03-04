import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </>
  )
}

export default App
