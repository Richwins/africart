<template>
    <section class="section section-bg-cat mx-lg-5">
        <div class="container-fluid " data-aos="fade-up">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8 categories row">
                    <div class="category col-md-6 p-2 " v-for="category in categories" :key="category.id">

                        <div class="row bg-white rounded p-3 mx-lg-1">
                            <h4> <b> {{ category.name }}</b></h4>
                            <div class="col-4 px-1">
                                <a href="" class="cta-btn align-middle ">
                                    <div class="icon text-center">
                                        <div>
                                            <img src="../../assets/images/categories/bijoux.jpg" :alt="category.name" />
                                        </div>
                                        <div class="mx-2 text-center text-dark pt-2" style="font-size:12px; ">
                                            Boucle d'oreille
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-4 px-1">
                                <a href="" class="cta-btn align-middle ">
                                    <div class="icon text-center">
                                        <div>
                                            <img src="../../assets/images/categories/bijoux.jpg" :alt="category.name" />
                                        </div>
                                        <div class="mx-2 text-center text-dark pt-2" style="font-size:12px; ">
                                            Bagues
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-4 px-1">
                                <a href="" class="cta-btn align-middle ">
                                    <div class="icon text-center">
                                        <div>
                                            <img src="../../assets/images/categories/bijoux.jpg" :alt="category.name" />
                                        </div>
                                        <div class="mx-2 text-center text-dark pt-2" style="font-size:12px; ">
                                            Bracelet
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="text-end">
                                <button class="btn main-button-plus p-1 px-2"><span class="mx-1">Plus</span> <i
                                        class="bi bi-arrow-right-circle plus"></i></button>
                            </div>
                        </div>

                    </div>
                    <div class="category col-md-6 p-2 " v-for="category in categories" :key="category.id">

                        <div class="row bg-white rounded p-3 mx-lg-1">
                            <h4> <b> {{ category.name }}</b></h4>
                            <div class="col-4 px-1">
                                <a href="" class="cta-btn align-middle ">
                                    <div class="icon text-center">
                                        <div>
                                            <img src="../../assets/images/categories/bijoux.jpg" :alt="category.name" />
                                        </div>
                                        <div class="mx-2 text-center text-dark pt-2" style="font-size:12px; ">
                                            Boucle d'oreille
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-4 px-1">
                                <a href="" class="cta-btn align-middle ">
                                    <div class="icon text-center">
                                        <div>
                                            <img src="../../assets/images/categories/bijoux.jpg" :alt="category.name" />
                                        </div>
                                        <div class="mx-2 text-center text-dark pt-2" style="font-size:12px; ">
                                            Bagues
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-4 px-1">
                                <a href="" class="cta-btn align-middle ">
                                    <div class="icon text-center">
                                        <div>
                                            <img src="../../assets/images/categories/bijoux.jpg" :alt="category.name" />
                                        </div>
                                        <div class="mx-2 text-center text-dark pt-2" style="font-size:12px; ">
                                            Bracelet
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="text-end">
                                <button class="btn main-button-plus p-1 px-2"><span class="mx-1">Plus</span> <i
                                        class="bi bi-arrow-right-circle plus"></i></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-4 pt-4">
                    <div
                        class="pb-5 devenir text-white p-3 rounded text-center d-flex justify-content-center align-items-center">
                        <div class="py-5">
                            <h3 class="mt-4"><b>Êtes-vous artisan ?</b> </h3>
                            <h5 class="mt-3"><b>Vendez facilement vos créations sur africart</b> </h5>
                            <div class="mt-3 mb-5">
                                <b class="voir-plus mb-5"><a href="" class="text-white "> Voir plus </a></b>
                            </div>
                        </div>

                    </div>
                    <div class="bg-white h-auto py-5 rounded text-center d-flex justify-content-center align-items-center">
                        <div class="py-5">
                            <h5 class="mt-3"><b>Inscrivez vous pour améliorer votre expérience utilisateur</b> </h5>
                            <div class="mt-5 text-center">
                               <router-link to="connexion" ><a href="" class="main-button-histoire"> Se connecter en toute sécurité </a></router-link> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section><!-- End services regoupé -->
</template>
  
<script>
//import axios from 'axios';

export default {
    name: 'CategoriesComponent',
    components: {
    },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: "Bijoux",
                    image: "../../assets/images/categories/bijoux.jpg"
                },
                {
                    id: 2,
                    name: "Scrupulture",
                    image: "../../assets/images/categories/bijoux.jpg"
                },
                {
                    id: 4,
                    name: "Vêtements",
                    image: "../../assets/images/categories/bijoux.jpg"
                },

            ]
        }
    },
    /*
        mounted() {
            axios.get('http://localhost/api/categories.php')
                .then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        }*/
}
</script>
  
<style>
h4 {
    font-size: 16px;
}

.main-button-plus {
    font-size: 12px;
    border: solid 1px #fe3f40;
    font-weight: 500;
    padding: 12px 25px;
    border-radius: 23px;
    color: #fe3f40;
    letter-spacing: 0.25px;
}

.main-button-plus:hover,
.main-button-plus:focus {
    color: #fff;
    background-color: #fe3f40;
}

.main-button-plus {
    border: solid 1px #fe3f40;
    border-radius: 15px;
    color: #fe3f40;
}

.plus {
    font-size: 16px;
}


.categories {
    padding-top: 15px;
}

.categories .icon {
    border-radius: 0.25rem;
    text-align: center;
    padding: 15px 0;
}

.devenir {
    background-image: url("../../assets/images/artisan.jpg");
    background-size: cover;
}

.voir-plus {
    text-decoration: underline;
}
</style>