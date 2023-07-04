<template>
    <section class="h-100 gradient-form">
        <div class="container py-2 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-4 col-lg-5 col-md-7">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="">
                                <div class="card-body p-md-4 mx-md-4">

                                    <div class="text-center">
                                        <router-link to="/">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                style="width: 100px;" alt="logo"></router-link>
                                        <h4 class="mt-1 mb-5 pb-1">S'identifier</h4>
                                    </div>

                                    <form>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example11">Adresse e-mail ou numéro de
                                                téléphone</label>
                                            <input type="email" id="form2Example11" class="form-control" placeholder="" />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="form2Example22">Mot de passe</label>
                                            </div>
                                            <input type="password" id="form2Example22" class="form-control" />
                                        </div>

                                        <div class="text-center pt-1 row mb-1 pb-1">
                                            <button class="btn main-button-boutique mb-3 " type="button">Se
                                                connecter</button>
                                        </div>


                                        <hr>

                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <p class="mb-3 me-2">Nouveau chez Africart ?</p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center">
                                            <router-link to="/inscription"> <button type="button"
                                                    class="btn  main-button-plus">Créer votre compte
                                                    Africart</button></router-link>
                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>

export default {
    name: 'loginPage',

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media (min-width: 768px) {
    .gradient-form {
        height: 100vh !important;
    }
}

@media (min-width: 769px) {
    .gradient-custom-2 {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }
}

label {
    font-size: 14px;
}

.text-muted {
    font-size: 14px;
}

input {
    font-size: 14px;
}</style>