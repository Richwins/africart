<template>
    <!-- ======= Header ======= -->
    <header id="header">
      <div class="container">

        <h1><a href="">Richard W. SESSOU</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <h2>Je suis développeur <span>web et mobile</span> passionné</h2>
        
        <NavBar/>

      </div>
  </header><!-- End Header -->
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'HerderComponent',
  components:{
    NavBar
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>