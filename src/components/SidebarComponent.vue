<template>
    <div class="click-closed"></div>

    <div class="box-collapse-left">
        <div class="box-header py-3 row d-flex align-items-center justify-content-between px-2">
            <a class="text-white col mx-3">
                <i class="bi bi-person-fill h4"></i><span class=""><small>Bonjour,</small> <strong>
                        Identifiez-vous</strong></span>
            </a>
            <span class="close-box-collapse col-auto bi bi-x m-0" @click="closebox"> </span>
        </div>

        <div class="box-collapse-wrap">

            <ul class="sidebar-nav row" id="sidebar-nav">
                <li class="nav-heading">Tendances</li>
                <li class="nav-item " >
                    <a class="nav-link collapsed" href="">
                        <span>Meilleures ventes</span>
                    </a>
                </li>
                <li class="nav-item " >
                    <a class="nav-link collapsed" href="">
                        <span>Dernières Nouveautés</span>
                    </a>
                </li>
                <li class="nav-item " >
                    <a class="nav-link collapsed" href="">
                        <span>Meilleures Catégories</span>
                    </a>
                </li>
              <hr>
                <li class="nav-heading">Catégories de produits</li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#components-nav2" data-bs-toggle="collapse" href="#">
                        <span>Bijoux</span><i
                            class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav2" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="">
                                <i class="bi bi-circle"></i><span>Colliers</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="bi bi-circle"></i><span>Bagues</span>
                            </a>
                        </li>
                    </ul>
                </li><!-- End Components Nav -->
                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#components-nav1" data-bs-toggle="collapse" href="#">
                        <span>Vêtements,chaussures et accessoire</span><i
                            class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav1" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="">
                                <i class="bi bi-circle"></i><span>Colliers</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="bi bi-circle"></i><span>Bagues</span>
                            </a>
                        </li>
                    </ul>
                </li><!-- End Components Nav -->
                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <span>Décoration intérieure</span><i
                            class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="">
                                <i class="bi bi-circle"></i><span>Colliers</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="bi bi-circle"></i><span>Bagues</span>
                            </a>
                        </li>
                    </ul>
                </li><!-- End Components Nav -->
                <hr>

                <li class="nav-heading">Aide et Paramêtre</li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="">
                        <span>Votre compte</span>
                    </a>
                </li><!-- End Profile Page Nav -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="">
                        <span>Service Client</span>
                    </a>
                </li><!-- End Profile Page Nav -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="">
                        <span>Se Connecter</span>
                    </a>
                </li><!-- End Profile Page Nav -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="">
                        <span>Vendre sur africArt</span>
                    </a>
                </li><!-- End Profile Page Nav -->
            </ul>

        </div>
    </div>
</template>
  
<script>

export default {
    name: 'SidebarComponent',
    data() {
        return {
            User: {
                adresse_livraison: 'Bénin'
            },
        }
    },
    methods: {
        handleClick() {
            // Ajouter la classe "box-open" à body
            document.body.classList.add("box-collapse-open");

            // Supprimer la classe "close" de body
            document.body.classList.remove("box-collapse-closed");
        },
        closebox() {
            // Ajouter la classe "box-open" à body
            document.body.classList.add("box-collapse-closed");

            // Supprimer la classe "close" de body
            document.body.classList.remove("box-collapse-open");
        },
    }
}
</script>
  
<style>
.box-collapse-open .click-closed {
    visibility: visible;

}

.click-closed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    z-index: 1035;
    background-color: #000000;
    opacity: 0.4;
}

/*======================================
//--//-->   BOX COLAPSE
======================================*/
.box-collapse-left {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 90%;
    z-index: 1040;
    background-color: #ffffff;
    transform: translateX(-100%);
    transition: all 0.6s ease;
}

@media (max-width: 767px) {
    .box-collapse-left {
        width: 80%;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .box-collapse-left {
        width: 50%;
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .box-collapse-left {
        width: 40%;
    }
}

@media (min-width: 1200px) {
    .box-collapse-left {
        width: 25%;
    }
}

.box-collapse-left .title-box-d {
    top: 30px;
    left: 60px;
    opacity: 0;
    transition: all 1s ease;
    transition-delay: 0.3s;

}

.box-collapse-left .box-header {
    background-color: #033248;
}

@media (max-width: 575px) {
    .box-collapse-left .title-box-d {
        left: 35px;
    }
}

@media (max-width: 575px) {
    .title-d {
        font-size: 1.3rem;
    }
}

.box-collapse-wrap {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 6.5rem;
    bottom: 5rem;
    padding-left: 10%;
    padding-right: 10%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 80vh;
    margin: 0;
    transform: translateY(3rem);
    transition: transform 0.5s 0.5s ease, opacity 0.5s 0.5s ease;
}

.box-collapse-open .box-collapse-left {
    transform: translateX(0);
    box-shadow: 0 0 65px rgba(0, 0, 0, 0.07);
    opacity: 1;
}

.box-collapse-open .box-collapse-left .title-box-d {
    transform: translate(0);
    opacity: 1;
}

.box-collapse-open .box-collapse-wrap {
    transform: translate(0);
    opacity: 1;
}

.box-collapse-closed .box-collapse-left {
    opacity: 0.7;
    transition-delay: 0s;
}

.box-collapse-closed .box-collapse-left .title-box-d {
    opacity: 0;
    transition-delay: 0s;
}

.box-collapse-closed .box-collapse-left .form-a {
    opacity: 0;
    transition-delay: 0s;
}


.close-box-collapse {
    font-size: 3rem;
    line-height: 1;
    color: #fff;
    cursor: pointer;
}


/*--------------------------------------------------------------
# Sidebar
--------------------------------------------------------------*/


@media (max-width: 1199px) {
  .sidebar {
    left: -300px;
  }
}

.sidebar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #fff;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #aab7cf;
}

@media (min-width: 1200px) {

  #main,
  #footer {
    margin-left: 300px;
  }
}

@media (max-width: 1199px) {
  .toggle-sidebar .sidebar {
    left: 0;
  }
}

@media (min-width: 1200px) {

  .toggle-sidebar #main,
  .toggle-sidebar #footer {
    margin-left: 0;
  }

  .toggle-sidebar .sidebar {
    left: -300px;
  }
}

.sidebar-nav {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-item {
  margin-bottom: 2px;
}

.sidebar-nav .nav-heading {
  font-size: 11px;
  text-transform: uppercase;
  color: #899bbd;
  font-weight: 600;
  margin: 10px 0 5px 15px;
}

.sidebar-nav .nav-link {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  transition: 0.3;
  background: #f6f9ff;
  padding: 10px 15px;
  border-radius: 4px;
}

.sidebar-nav .nav-link i {
  font-size: 16px;
  margin-right: 10px;
  color: #000;
}

.sidebar-nav .nav-link.collapsed {
  color: #000;
  background: #fff;
}

.sidebar-nav .nav-link.collapsed i {
  color: #899bbd;
}

.sidebar-nav .nav-link:hover {
  color: #fe3f40;
  background: #f6f9ff;
}

.sidebar-nav .nav-link:hover i {
  color: #fe3f40;
}

.sidebar-nav .nav-link .bi-chevron-down {
  margin-right: 0;
  transition: transform 0.2s ease-in-out;
}

.sidebar-nav .nav-link:not(.collapsed) .bi-chevron-down {
  transform: rotate(180deg);
}

.sidebar-nav .nav-content {
  padding: 5px 0 0 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-content a {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  transition: 0.3;
  padding: 10px 0 10px 40px;
  transition: 0.3s;
}

.sidebar-nav .nav-content a i {
  font-size: 6px;
  margin-right: 8px;
  line-height: 0;
  border-radius: 50%;
}

.sidebar-nav .nav-content a:hover,
.sidebar-nav .nav-content a.active {
  color: #fe3f40;
}

.sidebar-nav .nav-content a.active i {
  background-color: #fe3f40;
}
</style>