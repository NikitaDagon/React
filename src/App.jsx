import { Route, Routes } from 'react-router-dom'
import './App.css'
import '../src/components/Body/Body.css'
import MainPage from './pages/MainPage'
import BodyPage from './pages/BodyPage'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import SignPage from './pages/SignPage'
import links from './data'

function App() {

  

  return (
    <>
        <Routes>
          <Route path={links[0].link} element={<MainPage/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path ='/sign' element = {<SignPage/>}/>
        </Routes>
    </>
    
  )
  
}

export default App
