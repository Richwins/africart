<template>    
      <NavBar>
      </NavBar>
      <HeaderComponent>
    </HeaderComponent>

      <CategoriesComponent>
      </CategoriesComponent>

      <FooterComponent>
      </FooterComponent>

        <!-- ======= Hero Section ======= -->
</template>

<script>
import CategoriesComponent from '../components/session_acceuil/CategoriesComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import NavBar from '../components/NavBar';
export default {
  name: 'HomePage',
  components : {HeaderComponent,
    NavBar,CategoriesComponent,FooterComponent
}   
}

</script>
<style>
</style>