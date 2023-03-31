import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import React, { useEffect, useState } from 'react'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
   
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id) => {
     deleteProduct(id).then(() => setProducts(products.filter((item) => item.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProducts(products.map((item) => item.id == product.id ? product : item))) // cập nhật lại sản phẩm
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Route>
        <Route path='/admin'>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
        {/* /admin */}
        {/* 
          / - HomePage
          /products - ProductsPage
          /products/:id - ProductDetailPage
        */}
      </Routes>
    </div >
  )
}

export default App
