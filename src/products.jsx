import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Products() {
    let [product,setProduct]=useState([])
//   let [button,setButton]=useState({})
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((responce)=>{
            console.log(responce.data);
            setProduct(responce.data)     
        })
        .catch((error)=>{
            console.log(error);
              })
            },[])
        
    let All=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((responce)=>{
            setProduct(responce.data)
        })
    }

    let MensClothing=()=>{
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((responce)=>{
            setProduct(responce.data)
        })
    }

    let WomensClothing=()=>{
        axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
        .then((responce)=>{
            setProduct(responce.data)
        })
    }

    let Jewelery=()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((responce)=>{
            setProduct(responce.data)
        })
    }
     
    let Electronics=()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
        .then((responce)=>{
            setProduct(responce.data)
        })
    }

    return (
        <div>
           <div className='container mt-5 mb-3'> 
            <div className='ml-5'>
            <button className='mx-5 btn btn-dark' onClick={All}>All</button>
            <button className='mx-5 btn btn-dark' onClick={MensClothing}>Men's Clothing</button>
            <button className='mx-5 btn btn-dark' onClick={WomensClothing}>Women's Clothing</button>
            <button className='mx-5 btn btn-dark' onClick={Jewelery}>Jewellary</button>
            <button className='mx-5 btn btn-dark' onClick={Electronics}>Electronics</button><br /><br />
            </div>
         </div>

            {product.map((products)=>( 
               <div key={products.id} className='col-md-3 d-inline-block mb-3' >
                 <div  className="card align-items-center p-2 m-4">
                  <NavLink to={`/productdetail/${products.id}`}><img src={products.image} alt="" width="180px" height="210px"/></NavLink>
                    <div>
                        <h6>{products.title.substring(0,12)}...</h6>
                        <h6>Rs.{products.price}</h6>
                        {/* <h6>{products.description}</h6> */}
                       <NavLink to={`/productdetail/${products.id}`}> <button className='btn btn-warning'>Buy Now</button></NavLink>
                    </div>

                </div>
               </div>))}
            
        </div>
    );
}

export default Products;