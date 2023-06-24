<template>    
      <NavBar/>
      <HeaderComponent/>
        <!-- ======= Hero Section ======= -->
</template>

<script>
import HeaderComponent from '../components/HeaderComponent';
import NavBar from '../components/NavBar';
export default {
  name: 'HomePage',
  components : {HeaderComponent,
    NavBar
}   
}

</script>
<style>
</style>