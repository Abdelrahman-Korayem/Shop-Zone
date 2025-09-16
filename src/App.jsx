import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import Products from './Products'
import Categories from './Categories'
import CategoryProducts from './CategoryProducts'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Cart from './Cart'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Register from './Register'
import Login from './Login'
import { useEffect, useState } from 'react'


function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("isAuth")
  return isAuth ? children : <Navigate to="/login" replace />
}

function App() {
  const [isAuth, setIsAuth] = useState(false)


  useEffect(() => {
    const auth = localStorage.getItem("isAuth")
    if (auth) setIsAuth(true)
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
     
        {isAuth && <NavBar />}

        <Routes>
        
          <Route path="/" element={<Navigate to={isAuth ? "/" : "/login"} />} />

         
          <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

   
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="/productDetails/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
          <Route path="/categories" element={<PrivateRoute><Categories /></PrivateRoute>} />
          <Route path="/categories/:categoryName" element={<PrivateRoute><CategoryProducts /></PrivateRoute>} />
          <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
          <Route path="/blog/:id" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />

        
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={2000} />

        {isAuth && <Footer />}
      </BrowserRouter>
    </Provider>
  )
}

export default App
