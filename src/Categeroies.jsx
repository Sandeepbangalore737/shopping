import React, { useState } from 'react';
import axios from "axios"

function Categeroies(){
    let [category,setCategory]=useState([])
    //   let [button,setButton]=useState({})
        let Jewellory=()=>{
            axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then((responce)=>{
                console.log(responce.data);
                setCategory(responce.data);          
            })
            .catch((error)=>{
                console.log(error);
            })
        }
       
            return (
                <div>
                    <h1>Home Page</h1>
                    <button onClick={Jewellory}>Jewellory</button>
                    {category.map((categeroies)=>( 
                    <div key={categeroies.id} className="card">
                        <div><img src={categeroies.image} alt="" width="80px" height="160px"/></div>
                        <div>
                            <h6>{categeroies.title}</h6>
                            <h6>{categeroies.price}</h6>
                            <h6>{categeroies.description}</h6>
                        </div>
    
                    </div>))}
    
                </div>
              );
    }


export default Categeroies;