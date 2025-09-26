

 <!-- header -->
  <header class="shadow-lg" id="header"> 

<!-- preloader -->
    <div class="preloaderBg" id="preloader">
        <div class="preloader-wrap">
        <div class="preloader-logo">

        </div>
        <div class="preloader-circle"></div>
        </div>
    </div>
    <!-- script of preloader -->
     <script>
    $(window).on('load', function() { // makes sure the whole site is loaded
        $('#preloader').delay(350).fadeOut('fast'); // will fade out the white DIV that covers the website.
        $('html').css({
            'overflow-y': 'auto'
        });
        // animateThings();
    });
     </script>
     <!-- end of loader -->
    <div class="container-fluid m-0 p-0">
      <!--  -->
      <nav class="navbar navbar-expand-lg p-0 m-0">
        <div class="container-fluid px-lg-0 d-flex justify-content-lg-end ">
          <!-- 1 -->
          <a class="navbar-brand ps-3" href="index.php">
            <img src="assets/a-images/dimension-Digital-Logo.webp" class="d-flex justify-content-start " width="auto"
              height="70px" class="d-inline-block align-top" alt="Dimension_Digital">
          </a>
          <!-- 2 -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation" id="menu-toggle">
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
          </button>

          <!-- 3 -->
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav d-flex justify-content-lg-end justify-content-sm-center m-auto" id="navbar-auto">
              <li class="nav-item partly">
                <a class="nav-link active" aria-current="page" href="choose_us.php">Why Choose Us</a>
              </li>
              <li class="nav-item partly">
                <a class="nav-link" href="case-studies.php">Case Studies</a>
              </li>
              <div class="ulist d-sm-flex justify-content-sm-center align-items-sm-center">
                <li class="nav-item dropdown" id="toborder-right">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false"  id="services-link">
                    Services
                  </a>
                  <!-- <ul class="dropdown-menu"> -->

                  <ul class="dropdown-menu" id="formobile-version" aria-labelledby="navbarDropdown"
                  
                    data-bs-popper="static" id="services-toggle">
                    <!--  d-sm-block -->
                    <li><a class="dropdown-item" href="videography.php">Vediography</a></li>
                    <li><a class="dropdown-item" href="photography.php">Photography</a></li>
                    <li><a class="dropdown-item" href="design.php">Design</a></li>
                    <li><a class="dropdown-item" href="web-design.php">Web Design</a></li>
                    <li><a class="dropdown-item" href="social-media.php">Social Media Management</a></li>

                  </ul>
                  <!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->
                  <p class="for-ninty" id="forNintyMenu">
                       <a class="dropdown-item1" href="videography.php">Vediography</a><br>
                       <a class="dropdown-item1" href="photography.php">Photography</a><br>
                      <a class="dropdown-item1" href="design.php">Design</a><br>
                       <a class="dropdown-item1" href="web-design.php">Web Design</a><br>
                      <a class="dropdown-item1" href="social-media.php">Social Media Management</a><br>
                    </p>
                  
                </li>
              </div>
            </ul> 

            <!-- buton in ulist -->
            <div
              class="d-md-flex justify-content-lg-end flex-direction-sm-column justify-content-sm-center justify-content-center">
             <a href="contact.php" style="text-decoration: none;"><button class="nav-contact">Contact</button></a> 

            </div>
          </div>
        </div>
      </nav>
      <!--  -->
    </div>
  </header>
  <!-- header end  -->