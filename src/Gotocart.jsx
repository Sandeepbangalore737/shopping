import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Categeroies from './Categeroies';
// import ProductDetail from './productDetail';
import { useParams } from 'react-router-dom';

function GotoCart(){

    const[product,setProduct]=useState([])
    
    let {id}=useParams()


useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((responce)=>{
        setProduct(responce.data)
        console.log(responce.data);
    })
    .catch((error)=>{
        console.log(error);
    });
},[id]);



    return (
     <>
        <div className='d-flex' id='cartp'>
            <div className='m-5'>
                <img src={product.image} alt="" width="260px" height="210px"/>
            </div>
            <div >
                <h3>{product.title}</h3><br />
                <h5>Rate:Rs.{product.price}/-</h5><br />
                <select id="select" className='bg-color-light'>
                    <option>Qty:1</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>more</option>

                </select>
            </div>
           
            
        </div>

        <button className='ms-5 btn btn-warning'>Placeorder</button>

        
            {/* {
                Object.values(product).map((product)=>{
                    return(
                        <div>
                            <img src={product.image} alt="" width="100px" height="110px"/>
                            {console.log(product.name)}
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                            
                        </div>
                    )
                })
            } */}


     </>
    );
}

export default GotoCart;