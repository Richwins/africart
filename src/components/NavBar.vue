<template>
      <nav id="navbar" class="navbar">
          <ul>            
            <li><a class="nav-link active">Acceuil</a></li>
            <li><router-link to="/A propos" ><a class="nav-link" href="#about">A propos</a></router-link></li>
            <li><router-link to="/Résumé" ><a class="nav-link" href="#resume">Résumé</a></router-link></li>
            <li><router-link to="/Services" ><a class="nav-link" href="#services">Services</a></router-link></li>
            <li><router-link to="/Portofolio" ><a class="nav-link"  href="#portfolio">Portfolio</a></router-link></li>
            <li><router-link to="/Contact" ><a class="nav-link"  href="#contact">Contact</a></router-link></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
</template>

<script>
export default {
  name: 'HeaderComponent',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>