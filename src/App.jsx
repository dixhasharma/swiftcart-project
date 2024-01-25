import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import Page404 from './pages/Page404'
import Footer from './components/Footer'
import Navigationbar from './components/Navigationbar'
import { useState, useEffect } from 'react'
import DSpecificCategoryProducts from './pages/DSpecificCategoryProducts'
import DProductOne from './pages/DProductOne'
import Profile from './pages/Profile'


export default function App() {

  const [user, setuser] = useState(true);

  return (
    <>

      <Navigationbar />

      {
        user ?
          (<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/products/category/:hollow" element={<DSpecificCategoryProducts />} />
            <Route path="/products/:hollow2" element={<DProductOne />} />

            {/* koi aisa link ho jo /product/yahan jo bhi ho-- araha ho to dproductone pe kholna usko */}


            <Route path="*" element={<Page404 />} />
          </Routes>)
          :
          (<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Navigate to="/login" replace={true} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>)
      }
      <Footer/>








    </>
  )
}
