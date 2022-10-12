import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//  import axios from "axios";
// import { useEffect } from 'react';
import Products from './products';

function Home() {


   
        return (

            <div>

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img src="https://s3.amazonaws.com/mobileappdaily/mad/uploads/img_best_shopping_apps.jpg" class="d-block w-100" alt="..." width="95%" height="380px"/>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src="https://s3.amazonaws.com/mobileappdaily/mad/uploads/img_women_shopping_apps.png" class="d-block w-100" alt="..." width="95%" height="380px"/>
              </div>
              <div class="carousel-item">
                <img src="https://miro.medium.com/max/810/0*AvJTWjFkOFFMtBVW.jpg" class="d-block w-100" alt="..." width="95%" height="380px" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>         









            <div>
                {/* <h1>Home Page</h1> */}
              
                <Products/>                               

            </div>
          
    
            <div class="card  bg-color-primary w-100 ">
  
  <div class="card-body bgcolor-primary ms-3">
    <div className='d-flex ms-3'>
      <div className='ms-3'>
        <h5 class="card-title" id='keep'>Keep in touch</h5>
        <img id='logos' src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" width="20px" height="20px"/>
        <img id='logos' src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" width="20px" height="20px"/>
        <img id='logos' src="https://as2.ftcdn.net/v2/jpg/01/15/63/37/1000_F_115633770_eW4YFq7wORcielto9JPDsqAKys7Y54HZ.jpg" alt="" width="20px" height="20px" />
        <img id='logos' src="https://cdn-icons-png.flaticon.com/512/2111/2111450.png" alt="" width="20px" height="20px" />
        <img id='logos' src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" width="20px" height="20px" />
      
      </div >

          <div className='ms-5 align-items-right'>
            <h5 class="card-text ms-5 align-items-right" id="secure">100% Secure and Trusted Payment</h5>
             <img className='ms-5 align-items-right' id='payment' src="https://images.shopclues.com/images/ui/pgateway_dkt@2x.png" alt="" height="30px" />
             
          </div>
    </div>
    <NavLink to="/Gotocart" class="btn btn-primary align-items-center justify-content-center m-3 ml-5" id='go'>Go cart</NavLink>
  </div>
</div>




         </div>
          );
    
    
}

export default Home;