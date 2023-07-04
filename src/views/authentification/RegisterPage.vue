<template>
    <section class="h-100 gradient-form">
        <div class="container py-3 h-100">
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
                                    </div>

                                    <form class="form1 d-block">
                                        <h4 class="mt-1 mb-3 pb-1 text-center">Créer un compte</h4>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example13">Votre nom</label>
                                            <input type="text" id="form2Example13" class="form-control"
                                                placeholder="Prénom et nom" />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example11">Adresse e-mail ou numéro de
                                                téléphone</label>
                                            <input type="email" id="form2Example11" class="form-control" placeholder="" />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="form2Example23">Mot de passe</label>
                                            </div>
                                            <input type="password" id="form2Example23" class="form-control"
                                                placeholder="Au moins 6 caractères" />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="form2Example24">Entrez le mot de passe à
                                                    nouveau</label>
                                            </div>
                                            <input type="password" id="form2Example24" class="form-control" />
                                        </div>

                                        <div class="text-center pt-1 row mb-2 pb-1">
                                            <button class="btn main-button-boutique mb-3 " @click="validateForm1"
                                                type="button">Continuer</button>
                                        </div>

                                        <div class="text-center pt-1 row mb-2 pb-1">
                                        </div>
                                        <hr>

                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <p class="mb-3 me-2">
                                                Vous possédez déjà un compte ?</p>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center pb-1">
                                            <router-link to="/connexion"><button type="button"
                                                    class="btn  main-button-plus"> Identifiez-vous</button></router-link>
                                        </div>

                                    </form>
                                    <form class="form2 d-none">
                                        <h4 class="mt-1 mb-3 pb-1 text-center">Vérifier l'adresse email </h4>

                                        <small>
                                            Pour vérifier votre adresse email, nous avons envoyer un code à <a href=""
                                                style="color: #0d78a9; font-weight: 600;"  @click="retour">(Modifier)</a>
                                        </small>
                                        <div class="form-outline mb-4 mt-3">
                                            <label class="form-label" for="form2Example33">Saisir un code</label>
                                            <input type="text" id="form2Example33" class="form-control" placeholder="" />
                                        </div>
                                        <div class="text-center pt-1 row mb-2 pb-1">
                                            <button class="btn main-button-boutique mb-3 " type="button">Créer votre compte
                                                AfricArt</button>
                                        </div>
                                        <small>
                                            En créant un compte, vous acceptez les <a href=""
                                                style="color: #0d78a9; font-weight: 600;">conditions générales de vente
                                                d’Amazon</a>.
                                            Veuillez consulter <a href="" style="color: #0d78a9; font-weight: 600;">notre
                                                notice Protection de vos Informations Personnelles</a>.
                                        </small>
                                        <div class="text-center mt-5">
                                            <a href="" style="color: #0d78a9; font-weight: 600;">Renvoyer le code</a>
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
    name: 'RegisterPage',

    methods: {
        validateForm1() {
            const form1 = document.querySelector('.form1');
            const form2 = document.querySelector('.form2');
            if (form1.checkValidity()) {
                form1.classList.add('d-none');
                form1.classList.remove('d-block');

                form2.classList.remove('d-none');
                form2.classList.add('d-block');
            }
        },
        retour() {
            const form1 = document.querySelector('.form1');
            const form2 = document.querySelector('.form2');

            form1.classList.add('d-block');
            form1.classList.remove('d-none');

            form2.classList.add('d-none');
            form2.classList.remove('d-block');
        }
    }

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
</style>