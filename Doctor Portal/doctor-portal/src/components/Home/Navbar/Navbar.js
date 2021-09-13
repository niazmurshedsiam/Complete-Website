import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" style={{marginLeft:'180px'}}>Doctor Portal</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto" style={{marginRight:'80px'}}>
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">About</a>
     </li>
        <li class="nav-item">
          <a class="nav-link mr-5" href="#">Doctor Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" href="#">Contact us</a>
        </li>
  
    </ul>
    
  </div>
</nav>
    );
};

export default Navbar;