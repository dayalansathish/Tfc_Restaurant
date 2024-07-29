import React from 'react'
import './CSS/NavBar.css'

function NavBar() {
  return (
    <div className='container-fluid p-0'>
        <nav class="navbar navbar-expand-lg navbarDark">
  <div class="container-fluid justify-content-around d-flex">
  <a class="navbar-brand d-flex justify-content-between" href="#1234">
      <img src="/Images/logo.png" alt="Logo" width="70" height="60" class="d-inline-block align-text-top image-fluid"/>
    </a>
    <div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
      <div class="navbar-nav text-light">
        <a class="nav-link mx-3" aria-current="page" href="#123">Home</a>
        <a class="nav-link mx-3" href="#123">About Us</a>
        <a class="nav-link mx-3" href="#123">Menu</a>
        <a class="nav-link mx-3" href="#123">Gallery</a> 
        <a class="nav-link mx-3" href="#123">Contact Us</a>
      </div>
      <div className='mx-3'>
        <button className='btn btn-sm btn-warning'>Order Now</button>
      </div>
      <div className='mx-3'>
        <button className='btn bg-transparent' href='#123456'><i class="fa fa-shopping-cart h3 text-warning m-0 " aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar