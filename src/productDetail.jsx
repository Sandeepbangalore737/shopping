import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import { addcart } from './Redux/action';



function ProductDetail() {

    const[product,setProduct]=useState([])
    const[count,setCount]=useState(0)
    let {id}=useParams()

    // const dispatch=useDispatch();
    // const addProduct=(product)=>{
        // dispatch(addcart)
    // }


useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((responce)=>{
        setProduct(responce.data)
        console.log(responce.data);
    })
    .catch((error)=>{
        console.log(error);
    });
},[]);



    const AddCart=()=>{
        setCount(count+1)
        let myCart=document.getElementById("cart")
        myCart.innerText=`Cart(${count+1})`;
        myCart.style.color="brown";
        myCart.style.textDecoration="none"
        alert("Sucessfully added to the cart")

    }

    let GoCart=()=>{
        setCount({cart:count+1})
    }


    return (
        <>
        <div className='d-flex m-3'>
                <div className='m-5' id='pimg'>
                <img id='primg' src={product.image} alt="" width="380px" height="310px"/>
                </div>
               <div className='m-5 mt--4 bg-color-secondary' id='product'>
                <h3 id='title'>{product.title}</h3><br/>
                <h5 id='price'>Rate:Rs.{product.price}/-</h5><br />
                <p id='desc'><h5 id='details'> Product Details:</h5 >{product.description}</p><br />
                {/* <h5>Rating:{product.rating.rate}</h5> */}

               </div>
                
        </div>
      <div className='ms-6 align-items-center'>
        <button className='btn btn-dark ms-5' id='addcart'   onClick={AddCart}>Add to Cart</button>
        <NavLink to={`/Gotocart/${product.id}`}>  <button className='btn btn-light' id='gocart' onClick={GoCart}>Go to Cart</button></NavLink>
      </div>
        </>
        
    );
}

export default ProductDetail;