import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home';
import Categeroies from './Categeroies';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from './products';
import ProductDetail from './productDetail';
import GotoCart from './Gotocart';
import Login from './Login';
import LoginForm from './LoginForm';
import NewLogin from './newlogin';




function App() {
  return (
    <div>
      
      
        <Navbar/>
        {/* <BrowserRouter> */}

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/Categeroies' element={<Categeroies/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/Gotocart/:id" element={<GotoCart/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/LoginForm" element={<LoginForm/>}/>
          <Route path="/newlogin" element={<NewLogin/>}/>


        </Routes>
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;