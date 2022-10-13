import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.rtl.min.css"

// import { Link } from 'react-router-dom';

function Navbar() {

  const[product,setProduct]=useState([])
  const[products,setProducts]=useState([])
  const[cart,setCart]=useState([])
  const[value,setValue]=useState("")
  
    
  

  
 const onChange=(e)=>{
   setValue(e.target.value)
 }

const onSearch=(searchTerm)=>{
  setValue(searchTerm)
  console.log('search',searchTerm);
}


  // const[searchTerm,setSearchTerm]=useState("")
  let {id}=useParams()

  let Cart=()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((responce)=>{
        setCart(responce.data)
        console.log(responce.data);
    })
    .catch((error)=>{
        console.log(error);
    });
  }


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



useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products`)
  .then((responce)=>{
      setProducts(responce.data)
      console.log(responce.data);
  })
  .catch((error)=>{
      console.log(error);
  });
},[]);
 

let navigate=useNavigate();


    return (

      

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid ms-4">
<img className='' src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" width="30px" height="30px"/>   
    
    <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent">
      <ul class="navbar-nav  m-auto">
        <li class="nav-item">
          <NavLink class="nav-link active me-5" id='home' aria-current="page" to="/shopping">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active ms-2" to="/products" id='products'>Products</NavLink>
        </li>
       
    
      </ul>
      <form class="d-flex" role="search">
        <div className='templateContainer'>
          <div className="searchInputContainer d-flex">
          <input class="form-control" id='searchinput' type="text" value={value} placeholder="Search" aria-label="Search" onChange={onChange}/>
        <button class="btn btn-outline-success ms-2" type="submit" onClick={()=>onSearch(value)}>Search</button>
          </div>
            <div className='templateContainer'>
              {
                products.filter(val=>{
                  const searchTerm=value.toLowerCase();
                  const title=val.title.toLowerCase();
                  return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
                })
                .map((val)=>{
                  return(
                    <div className='template' key={val.id} onClick={()=>onSearch(val.title)}>
                      
                      <h6>{val.title}</h6>

                    </div>
                  )
                }) 
              } 
            </div>

        </div>
        
        
        
        
         <button class="btn btn-outline-success ms-3 d-flex" type="submit">
        <img src="https://as1.ftcdn.net/v2/jpg/03/13/36/92/1000_F_313369233_w50qr2zvY2wGOsV9suFcoifB1JRfZK5M.jpg" width="25px" height="25px"/><span id='cart' onClick={Cart} >Cart</span></button>
     
       <img className='ms-3 me-2' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width="35px" height="35px" onClick={()=>{navigate("Login")}}/>
      </form>
    </div>  
  </div>

  {/* <div className='d-flex' id='cartp'>
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

        <button className='ms-5 btn btn-warning'>Placeorder</button> */}


  
</nav>
    
    );
}

export default Navbar;
