import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Collections from './pages/Collections'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Error from './pages/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App