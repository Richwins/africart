<template>
    <a class="text-white " href="#">
        <div class="border-sm text-white mt-0 p-2 px-4 adresse-livraison text-center">
            <i class="bi bi-caret-up-fill mx-1"></i><small>Retour en haut </small>
        </div>
    </a>

    <div id="mon-footer" class=" row px-5">
        <div class="col-lg-2 text-center">
            <a class="logo px-2">
                <h4>AFRIC<span>ART</span></h4>
            </a>
        </div>

        <div class="row col-lg-10">
            <div class="col-lg-3 col-sm-6 footer-links">
                <h4>Pour mieux nous connaître</h4>
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">A propos d'AfricArt</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Contact</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Centre d'aide et contact</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-sm-6 footer-links">
                <h4>Êtes vous artisan ?</h4>
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Vendez sur Africart</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Faite la promotion de vos produits</a>
                    </li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Valoriser votre tradition</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Créer un compte vendeur</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-sm-6 footer-links">
                <h4>Visiter</h4>
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Acceuil</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Rechercher un produit</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">AfricArt boutique</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Découvrir les meilleur talents</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-sm-6 footer-links">
                <h4>Besoin d'aide?</h4>
                <ul>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Voir ou suivre vos commandes</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Moyens de paiement</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Options de livraison</a></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="#">Service Client</a></li>
                </ul>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'FooterComponent',

}
</script>
  
<style>
/*--------------------------------------------------------------
  # Footer
--------------------------------------------------------------*/

#mon-footer {
    font-size: 14px;
    background-color: #033248;
}

#mon-footer {
    padding: 60px 0 30px 0;
}

#mon-footer h4 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    position: relative;
    padding-bottom: 12px;
}

#mon-footer .footer-links {
    margin-bottom: 30px;
}

#mon-footer .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#mon-footer .footer-links ul i {
    padding-right: 2px;
    color: #fe3f40;
    font-size: 18px;
    line-height: 1;
}

#mon-footer .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

#mon-footer .footer-links ul li:first-child {
    padding-top: 0;
}

#mon-footer .footer-links ul a {
    color: #ffffffca;
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
}

#mon-footer .footer-links ul a:hover {
    text-decoration: none;
    color: #fe3f40;
}

#mon-footer .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #fe3f40;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

#mon-footer .social-links a:hover {
    background: #fe3f40;
    color: #fff;
    text-decoration: none;
}
</style>