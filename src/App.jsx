import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

{/* 
import Header from './Components/Header'
import Footer from './Components/Footer'
 */}

import Home from './Pages/Home'
import About from './Pages/About'
import Posts from './Pages/Posts'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import Error from './Pages/Error'

import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './Pages/MainLayout'


function App() {

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          {/*<Header/>*/}
          <Routes>

            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:productId' element={<SingleProduct />} />
              <Route path='posts' element={<Posts />} />
              <Route path='*' element={<Error />} />
            </Route>

          </Routes>

          {/*<Footer/>*/}
        </BrowserRouter>

      </div >

    </>
  )
}

export default App
