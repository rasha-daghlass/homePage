import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './views/home'
import Layout from './Component/Layout'
import ProductList from "./views/ProductList"
export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='ProductList' element={<ProductList/>}/>
        </Route>
        <Route path='*' element={<h1>not found</h1>} />
    </Routes>
    </BrowserRouter>


  )
}
