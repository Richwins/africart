<template>
  <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h6>Bienvenue sur africart</h6>
                <h2>Découvrez les <em>produits artisanaux</em> &amp; <span>uniques </span> </h2>
                <p>Découvrez une sélection de produits uniques créés par des <a rel="nofollow"
                    href="https://templatemo.com/page/1" target="_parent">artisans talentueux</a>, accompagnés d'histoires
                  captivantes sur les traditions culturelles qui les inspirent.</p>
                <div class="mt-4 ">
                  <button class="main-button-histoire btn mx-lg-3 mx-1 my-2">Devenir vendeur</button>
                  <button class="main-button-boutique btn mx-lg-3 mx-1 my-2">Parcourir</button>
                </div>

              </div>
            </div>
            <div class="col-lg-6 position-relative m-0 p-0 d-none d-lg-block">
              <div class=" text-white align-self-center position-absolute fixed-top h-100 w-100 top-0 start-0">
                <img src="../assets/images/bg-banner.png" class="d-block w-100 h-100" alt="...">
              </div>
                <div class="m-0 p-0 right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active" data-bs-interval="10000">
                        <img src="../assets/images/Sculpture.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src="../assets/images/Sculpture.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">

                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../assets/images/Sculpture.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">

                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                      data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                      data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>0
//import NavBar from './NavBar'
export default {
  name: 'HerderComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
div pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
figure,
header,
nav,
section,
article,
aside,
footer,
figcaption {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}



* {
  box-sizing: border-box;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: #ffffffbb;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0px;
  margin-bottom: 0px;
}

ul {
  margin-bottom: 0px;
}

p {
  font-size: 15px;
  line-height: 30px;
  color: #2a2a2a;
}

img {
  width: 100%;
  overflow: hidden;
}

/* 
---------------------------------------------
global styles
--------------------------------------------- 
*/
html,
body {
  background: #fff;
  font-family: 'Poppins', sans-serif;
}

::selection {
  background: #03a4ed;
  color: #fff;
}

::-moz-selection {
  background: #03a4ed;
  color: #fff;
}

@media (max-width: 991px) {

  html,
  body {
    overflow-x: hidden;
  }

  .mobile-top-fix {
    margin-top: 15px;
    margin-bottom: 0px;
  }

  .mobile-bottom-fix {
    margin-bottom: 30px;
  }

  .mobile-bottom-fix-big {
    margin-bottom: 60px;
  }
}

.page-section {
  margin-top: 20px;
}

.section-heading h2 {
  font-size: 26px;
  text-transform: capitalize;
  color: #2a2a2a;
  font-weight: 700;
  letter-spacing: 0.25px;
  position: relative;
  z-index: 2;
  line-height: 44px;
}

.section-heading h2 em {
  font-style: normal;
  color: #2a2a2a;
}

.section-heading h2 span {
  color: #044f72;
}

.main-blue-button a {
  display: inline-block;
  background-color: #03a4ed;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  text-transform: capitalize;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
}

.main-red-button a {
  display: inline-block;
  background-color: #fe3f40;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-transform: capitalize;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
}

.main-white-button a {
  display: inline-block;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
  color: #fe3f40;
  text-transform: capitalize;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
}

/* 
---------------------------------------------
Banner Style
--------------------------------------------- 
*/

.main-banner {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.main-banner:after {
  content: '';
  background-image: url(../assets/images/baner-dec-left.png);
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 100px;
  width: 193px;
  height: 467px;
}

.main-banner:before {
  content: '';
  background-image: url(../assets/images/baner-dec-right.png);
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 100px;
  width: 98px;
  height: 290px;
}

.main-banner .left-content {
  margin-right: 45px;
}

.main-banner .left-content h6 {
  text-transform: uppercase;
  font-size: 16px;
  color: #fe3f40;
  margin-bottom: 15px;
}

.main-banner .left-content h2 {
  font-size: 50px;
  font-weight: 700;
  color: #033248;
  line-height: 72px;
}



.main-banner .left-content h2 em {
  color: #033248;
  font-style: normal;
}

.main-banner .left-content h2 span {
  color: #fe3f40;
}

.main-banner .left-content p {
  margin: 10px 0px;
}

.main-button-boutique {
  background-color: #fe3f40;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
  outline: none;
  border: none;
}

.main-button-boutique:hover,
.main-button-boutique:focus {
  background-color: #fe3f3fdd;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
}

.main-button-histoire:hover,
.main-button-histoire:focus {
  background-color: #033248ce;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
}

.main-button-histoire {

  background-color: #033248;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 25px;
  border-radius: 23px;
  letter-spacing: 0.25px;
  outline: none;
  border: none;
}




/* 
---------------------------------------------
responsive
--------------------------------------------- 
*/

@media (max-width: 992px) {
  .main-banner {
    padding-top: 10px;
  }

  .main-banner .left-content {
    margin-right: 0px;
    text-align: center;
    margin-bottom: 15px;
    font-size: 30px;

  }

  .main-banner:after {
    top: 20px;
    z-index: -1;
  }

  .main-banner .left-content form,
  .main-banner .left-content form input {
    width: 100% !important;
  }
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}
</style>