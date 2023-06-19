<template>
  <div class="container-fluid topBar text-white py-0 ">
    <div class="row align-items-center py-0 px-xl-5 my-0">
      <div class="col-lg-2 d-none d-lg-block row d-flex align-items-center">
        <a class="logo navbar-brand col-6">
          <h4>AFRIC<span>ART</span></h4>
        </a>
      </div>
      <div class="col-lg-1 d-none d-lg-block row d-flex align-items-center">
        <a class="text-white col-6 small mt-3">
            <i class="bi bi-geo-alt h4"></i><small>Livraison</small> <strong> {{User.adresse_livraison}}</strong>
          </a>
      </div>
      
      <div class="col-lg-6 col-6 text-start">
        <form class="form-inline my-lg-0 ml-auto">
          <div class="input-group search">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Toutes nos catégories</button>
            <ul class="dropdown-menu mb-0">
              <li v-for="categorie in categories" :key="categorie.id"><a class="dropdown-item" href="#">{{ categorie.name }}</a><hr class="dropdown-divider"></li>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Rechercher un produit ou une histoire">
            <div class="input-group-append">
              <button class="btn btn-search" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-2 col-6 text-center">
        <a class="text-white col-6 small mt-3">
            <i class="bi bi-person-fill h4"></i><small>Bonjour,</small> <strong> Identifiez-vous</strong>
          </a>
      </div>
      <div class="col-lg-1 col-6 text-end">
        <a href="" class="btn">
          <i class="bi bi-cart3 panier h1"></i>
          <span class="badge h2">0</span>

        </a>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light border-sm menu-navbar text-white">
    <div class="container">
      <a class="logo navbar-brand d-block d-lg-none">
        <h4>AFRIC<span>ART</span></h4>
      </a>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-white" id="navbarNav">
        <ul class="navbar-nav mr-auto text-white">
          <li class="nav-item">
            <a class="nav-link" href="#"><span class="navbar-toggler-icon mx-1"></span>Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Meilleurs ventes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Africart Boutique</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services Clients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Dernières nouveautés</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ventes Flash</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Histoires</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link mx-1 px-3 text-white my-2 display-2 main-button-boutique" href="#">Commandes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>
</template>

<script>

export default {
  name: 'NavBar',
  data(){
    return{
      User:{
        adresse_livraison:'Bénin'
      },
      categories: [
        { id: 1, name: 'Sculpture' },
        { id: 2, name: 'Tissage et Broderie' },
        { id: 3, name: 'Bijouterie' },
        { id: 4, name: 'Stylisme' },
        { id: 5, name: 'Dessin et Portrait ' },
        { id: 6, name: 'Poterie et céramique' },
      ]
    }
  }

}
</script>


<style>
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/

.topBar {
  background-color: #04557a;
}
.search{
  font-size:12px;
}
.search .dropdown-toggle, .search .dropdown-toggle:hover ,.search .dropdown-toggle:focus{
  background-color:#fff;
  font-size:12px;
}
.search .form-control{
  font-size:14px;
}
.search .dropdown-item{
  font-size:12px;
}
.search .btn-search{
  background-color: #fe3f40;
  color:#fff;
}

.logo {
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
  color: #fff;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.logo .livraison {
  font-size: 12px;
  font-weight:none;
  text-transform: none;
  color: #fff;
}


.logo h4 span {
  color: #fe3f40;
 
}

.logo h4 {
  line-height: 80px;
}

.panier {
  color: #fff;
  position: relative;

}
.badge{
  color: #fe3f40;
  font-weight:700;
  font-size:18px;
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 1px 2px;
}

.navbar {
  padding: 0;
  background-color: #044f72;
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

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
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
  font-size: 12px;
  text-transform: none;
  color: #fff;
  font-weight: 400;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  background-color: #fe3f40;
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}
</style>
