<template>

     <!-- ======= Portfolio Details Section ======= -->
     <!-- ======= Header ======= -->
  <header id="header" class=" fixed-top mb-3">
    <section id="topbar" class="topbar d-lg-none d-block p-1">
      <center>
        <a href="acceuil.html" class=" text-brand">PRESTA<span class="color-b">Bénin</span></a>

      </center>
    </section><!-- End Top Bar -->

    <div class="d-flex header align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <a href="acceuil.html" class="logo d-flex align-items-center">
          <a href="acceuil.html" class="d-none d-lg-block text-brand">PRESTA<span class="color-b">Bénin</span></a>

        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div><!-- End Logo -->

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-danger badge-number">4</span>
            </a><!-- End Notification Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
              <li class="dropdown-header">
                Vous avez 4 nouveaux messages
                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Nouvelle demande de prestation</h4>
                  <p>Vous pouvez fournir une prestation dans les 30 minutes qui suivent ??</p>
                  <p>Il y a 30 min</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-x-circle text-danger"></i>
                <div>
                  <h4>Commentaires sur vos services</h4>
                  <p>Trois nouveaux commentaires sur vs services</p>
                  <p>1 hr. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-check-circle text-success"></i>
                <div>
                  <h4>Nouveau ami</h4>
                  <p>Vous avez une sugestion d'amis</p>
                  <p>Il y a 2h</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-info-circle text-primary"></i>
                <div>
                  <h4>Alerte de sécurité</h4>
                  <p>Veuillez changer votre mot de passe svp</p>
                  <p>Il y a 30 minutes</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>
              <li class="dropdown-footer">
                <a href="#">Voir toutes les notifications</a>
              </li>

            </ul><!-- End Notification Dropdown Items -->

          </li><!-- End Notification Nav -->

          <li class="nav-item dropdown">

            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-chat-left-text"></i>
              <span class="badge bg-success badge-number">3</span>
            </a><!-- End Messages Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li class="dropdown-header">
                Vous avez 3 nouveau messages
                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="img/messages-1.jpg" alt="" class="rounded-circle">
                  <div>
                    <h4>BONI Fousséni </h4>
                    <p>L'écran de mon PC est bousillé bro</p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="img/messages-2.jpg" alt="" class="rounded-circle">
                  <div>
                    <h4>AVOSSE Simon</h4>
                    <p>J'ai perdu le chargeur de mon PC. Je peux l'avoir chez toi...</p>
                    <p>6 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="img/messages-3.jpg" alt="" class="rounded-circle">
                  <div>
                    <h4>SOULE Soumaila</h4>
                    <p>Mon PC a un souci de batterie. Pouvez-vous m'aidez??</p>
                    <p>8 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="dropdown-footer">
                <a href="#">Voir tous les messages</a>
              </li>

            </ul><!-- End Messages Dropdown Items -->

          </li><!-- End Messages Nav -->

          <li class="nav-item dropdown pe-3">

            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src="img/profile-img.jpg" alt="Profile" class="rounded-circle">
              <span class="d-none d-md-block dropdown-toggle ps-2"></span>
            </a><!-- End Profile Iamge Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li class="dropdown-header">
                <h6>SESSOU Richard</h6>
                <span>Maintenancier</span>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.php">
                  <i class="bi bi-person"></i>
                  <span>Mon profil</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.php">
                  <i class="bi bi-gear"></i>
                  <span>Paramètres du compte</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                  <i class="bi bi-question-circle"></i>
                  <span>A propos de moi</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Se déconnecter</span>
                </a>
              </li>

            </ul><!-- End Profile Dropdown Items -->
          </li><!-- End Profile Nav -->

        </ul>
      </nav><!-- End Icons Navigation -->

    </div>


  </header><!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar mt-4">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item active">
        <a class="nav-link  " href="dashboard.html">
          <i class="bi bi-bank2"></i>
          <span>Tableau de Bord</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="gestion-metiers.html">
          <i class="bi bi-grid"></i>
          <span>Gestion des Métiers</span>
        </a>
      </li><!-- End Profile Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="gestion-prestataire.html">
          <i class="bi bi-person-check-fill"></i>
          <span>Gestions des Prestataires</span>
        </a>
      </li><!-- End Profile Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="gestion-clients.html">
          <i class="bi bi-people-fill"></i>
          <span>Gestions des Clients</span>
        </a>
      </li><!-- End Profile Page Nav -->


      <li class="nav-item" onclick="logOut()">
        <a class="nav-link collapsed" href="login-admin.html">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Déconnexion</span>
        </a>
      </li><!-- End Login Page Nav -->
    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">
    <div class="d-sm-flex align-items-center justify-content-between mt-3 mb-4 ">
      <h1 class="h3 mb-0 text-gray-800">Tableau de bord</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-rapport shadow-sm p-2 align-middle"
      data-bs-toggle="modal" data-bs-target="#notification"><i class="bi bi-telegram h5 p-2"></i>Envoyer une Notification</a>

  <div class="modal fade border-danger" id="notification" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Envoyer une notification aux utilisateurs</h5>
                  <span data-bs-dismiss="modal" class="right-boxed bi bi-x ml-5 croix h3"></span>

              </div>
              <div class="modal-body">
                  <form action="" class="mt-4">
                      <div class="row mb-3 mt-2">
                          <label for="objet" class="col-sm-2 col-form-label">Objet</label>
                          <div class="col-sm-10">
                              <input type="text" name="objet" class="form-control" required
                                  placeholder="Objet" id="objet">
                          </div>
                      </div>
                      <div class="row mb-3">
                          <label for="message" class="col-sm-2 col-form-label"><strong></strong>
                              Message</label>
                          <div class="col-sm-10">
                              <textarea name="message" id="message" required
                                   class="form-control" style="height: 200px"
                                  placeholder="Rédiger votre message"></textarea>
                          </div>
                      </div>

                      <div class="text-end">
                          <a data-bs-dismiss="modal" href="" class="btn btn-secondary">
                              Annuler</a>
                          <button type="submit" class="btn btn-rapport mx-2">Envoyer</button>

                      </div>
                  </form>


              </div>
          </div>
      </div>
  </div>
  <div>

  </div>
    </div>
    <div class="row mt-3">
      <div class="col-xl-3 col-md-6 ">
        <div class="card top-card card-attente shadow pt-3">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col ">
                <div class="text-xs text-uppercase ">
                  <span> Inscriptions <br> en attente</span>
                </div>
                <div class="h5 font-weight-bold text-gray-800">
                  <strong>130</strong>
                </div>
              </div>
              <div class="col-auto">
                <i class="bi bi-person-x-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-6 ">
        <div class="card top-card card-prestataires shadow pt-3">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col ">
                <div class="text-xs text-uppercase ">
                  <span>Nombre de <br> Prestataires</span>
                </div>
                <div class="h5 font-weight-bold text-gray-800">
                  <strong>500</strong>
                </div>
              </div>
              <div class="col-auto">
                <i class="bi bi-person-check-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 ">
        <div class="card top-card card-prestataires shadow pt-3">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col ">
                <div class="text-xs text-uppercase ">
                  <span>Nombre de <br> Clients</span>
                </div>
                <div class="h5 font-weight-bold text-gray-800">
                  <strong>430</strong>
                </div>
              </div>
              <div class="col-auto">
                <i class="bi bi-people-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 ">
        <div class="card top-card card-attente shadow pt-3">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col ">
                <div class="text-xs text-uppercase ">
                  <span> Nombre de <br> réalisations</span>
                </div>
                <div class="h5 font-weight-bold text-gray-800">
                  <strong>130</strong>
                </div>
              </div>
              <div class="col-auto">
                <i class="bi bi-calendar2-plus-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Utilisateurs</h5>

            <!-- Line Chart -->
            <div id="lineChart"></div>

            <!-- End Line Chart -->
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Les interactions</h5>

            <!-- Column Chart -->
            <div id="columnChart"></div>

            <script>
              document.addEventListener("DOMContentLoaded", () => {
                new ApexCharts(document.querySelector("#columnChart"), {
                  series: [{
                    name: 'Commentaires',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 98, 53, 98]
                  }, {
                    name: 'Avis',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 91, 300, 209]
                  }, {
                    name: 'Réalisations',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 52, 53, 41]
                  }],
                  chart: {
                    type: 'bar',
                    height: 350
                  },
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '55%',
                      endingShape: 'rounded'
                    },
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
                  xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec'],
                  },
                  yaxis: {
                    title: {
                      text: 'Interactions'
                    }
                  },
                  fill: {
                    opacity: 1
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        return val + " interactions"
                      }
                    }
                  }
                }).render();
              });
            </script>
            <!-- End Column Chart -->

          </div>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h5 class="card-title">Inscriptions en attente</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped" id="dataTable" width="100%" cellspacing="0">
              <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Départ..</th>
                      <th>Commune</th>
                      <th>Arrondis..</th>
                      <th>Métier</th>
                      <th>Date d'ins</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tfoot>
                  <tr>
                      <th>Nom</th>
                      <th>Départ..</th>
                      <th>Commune</th>
                      <th>Arrondis..</th>
                      <th>Métier</th>
                      <th>Date d'ins</th>
                      <th>Status</th>
                  </tr>
              </tfoot>
              <tbody>
                  <tr>
                      <td><a href="validInscription.html">SESSOU Richard </a></td>
                      <td><a href="validInscription.html"> OUEME</a></td>
                      <td><a href="validInscription.html"> Adjohoun </a></td>
                      <td><a href="validInscription.html"> Adjohoun </a></td>
                      <td><a href="validInscription.html"> Programmeur </a></td>
                      <td><a href="validInscription.html"> 2023/04/25</a></td>
                      <td><a href="validInscription.html"> <span class="badge bg-warning">En attente</span></a></td>

                  </tr>
                  <tr>
                      <td><a href="validInscription.html">AVOCE Simon </a></td>
                      <td><a href="validInscription.html"> ZOU</a> </td>
                      <td><a href="validInscription.html"> Zogbodome </a></td>
                      <td><a href="validInscription.html"> Zogbodome </a></td>
                      <td><a href="validInscription.html"> Programmeur </a></td>
                      <td><a href="validInscription.html"> 2023/04/25</a></td>
                      <td><a href="validInscription.html"> <span class="badge bg-danger">Rejétée</span></a></td>
                  </tr>
                  <tr>
                      <td><a href="validInscription.html">SOULE Soum </a></td>
                      <td><a href="validInscription.html"> ZOU</a> </td>
                      <td><a href="validInscription.html"> Zogbodome </a></td>
                      <td><a href="validInscription.html"> Zogbodome </a></td>
                      <td><a href="validInscription.html"> Informaticien </a></td>
                      <td><a href="validInscription.html"> 2023/04/25</a></td>
                      <td><a href="validInscription.html"> <span class="badge bg-warning">En attente</span></a></td>

                  </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'PortofolioDetailPage',
  components : {
  },
  mounted(){

  }
}

</script>
<style>
</style>