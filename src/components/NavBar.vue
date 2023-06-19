<template>
  <div class="container-fluid">
    <div class="row align-items-center py-3 px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">
        <a class="logo navbar-brand ">
          <h4>AFRIC<span>ART</span></h4>
      </a>      </div>
      <div class="col-lg-6 col-6 text-start">
        <form class="form-inline my-2 my-lg-0 ml-auto">
        <div class="input-group">
          <input class="form-control" type="search" placeholder="Rechercher un produit ou une histoire" aria-label="Rechercher">
          <div class="input-group-append">
            <button class="btn btn-outline-light" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      </div>
      <div class="col-lg-3 col-6 text-end">
        <a href="" class="btn border">
          <i class="fas fa-heart panier"></i>
          <span class="badge text-dark">0</span>
        </a>
        <a href="" class="btn border">
          <i class="fas fa-shopping-cart panier"></i>
          <span class="badge text-dark">0</span>
        </a>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-white border-sm">
    <div class="container">
      <a class="logo navbar-brand d-block d-lg-none">
              <h4>AFRIC<span>ART</span></h4>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Acceuil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Boutique</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Histoires</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Catégories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Catégorie 1</a></li>
              <li><a class="dropdown-item" href="#">Catégorie 2</a></li>
              <li><a class="dropdown-item" href="#">Catégorie 3</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link main-button-boutique mx-1 px-3 text-white my-2" href="#">Se connecter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-button-histoire text-white mx-1 px-3 my-2" href="#">S'inscrire</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>

<script>

export default {
  name: 'NavBar',  
}
</script>


<style>


/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.logo {
  line-height: 100px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  float: left;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.logo h4 {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: #03a4ed;
    line-height: 100px;
    float: left;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.logo h4 span {
  color: #fe3f40;
}

.logo h4 {
  line-height: 80px;
}

.panier{
  color:#fe3f3fe1;
}
.navbar {
  padding: 0;
  border-top: #EDF1FF solid 1px;
  border-bottom: #EDF1FF solid 1px;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.778);
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #fe3f40;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  color: #151515;
  font-weight: 400;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  background-color: #fe3f40;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #EDF1FF;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}


</style>
