// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import './index.css'
// import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import ProductPage from './pages/Product'
// import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
// import ProductDetailPage from './pages/ProductDetail'
// import { IProduct } from './types/product'
// import AddProductPage from './pages/admin/AddProduct'
// import Dashboard from './pages/admin/Dashboard'
// import UpdateProductPage from './pages/admin/UpdateProduct'
// import ProductManagementPage from './pages/admin/ProductManagement'
// import Register from './pages/admin/Register'
// import Login from './pages/admin/Login'
// import { getAllCate } from './api/category'



// function App() {
//   const [products, setProduct] = useState<IProduct[]>([])
//   useEffect(() => {
//     getAllProduct().then(({ data }) => setProduct(data))
//   }, [])
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await getAllCate();

//         setCategories(data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);
  
//   const onHandleRemove = (id: number) => {
//     deleteProduct(id).then(() => setProduct(products.filter((item) => item.id !==id)))
//   }
//   const onHandleAdd = (product) => {
//     addProduct(product).then(() => setProduct([...products, product]))
//   }
//   const onHandleUpdate = (product) => {
//     updateProduct(product).then(() => setProduct(products.map((item) => item.id == product.id ? product : item)))
//   }
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/'>
//           <Route index element={<HomePage />} />
//           <Route path='products' >
//             <Route index element={<ProductPage categories={categories} products={products} onRemove={onHandleRemove} />} />
//             <Route path=':id' element={<ProductDetailPage />} />
//           </Route>
//         </Route>
//         <Route path='admin'>
//           <Route index element={<Login />}/>
//           <Route path='register' element={<Register />}/>
//             <Route path='products'>
//               <Route index element={<ProductManagementPage categories={categories} products={products} onRemove={onHandleRemove}/>}/>
//               <Route path='add' element={<AddProductPage categories={categories} onAdd={onHandleAdd}/>}/>
//               <Route path=':id/update' element={<UpdateProductPage categories={categories} onUpdate={onHandleUpdate} products={products}/>}/>
//             </Route>
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import AddProductPage from './pages/admin/AddProduct'
import Dashboard from './pages/admin/Dashboard'
import UpdateProductPage from './pages/admin/UpdateProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import Register from './pages/admin/Register'
import Login from './pages/admin/Login'
import { getAllCate } from './api/category'

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, []);

  useEffect(() => {
    getAllCate().then(({ data }) => setCategories(data))
  }, []);

  const handleRemoveProduct = (id: number) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((item) => item.id !== id));
    });
  };

  const handleAddProduct = (product: IProduct) => {
    addProduct(product).then(({ data }) => {
      setProducts([...products, data]);
    });
  };

  const handleUpdateProduct = (product: IProduct) => {
    updateProduct(product).then(() => {
      setProducts(products.map((item) => item.id === product.id ? product : item));
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage categories={categories} products={products} onRemove={handleRemoveProduct} />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Route>
        <Route path="admin">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products">
            <Route index element={<ProductManagementPage categories={categories} products={products} onRemove={handleRemoveProduct} />} />
            <Route path="add" element={<AddProductPage categories={categories} onAdd={handleAddProduct} />} />
            <Route path=":id/update" element={<UpdateProductPage categories={categories} onUpdate={handleUpdateProduct} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
