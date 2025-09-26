<?php
  $home = "active"; 
  $pageTitle = "Contact-us";
  include_once "head.php";   
?>
<!-- head end -->
<body>

  <!-- header -->
<section>
 <?php include_once "navbar.php" ?>
 </section>
  <!-- header end  -->

  <main>
   <!-- section-4 -->
  <div class="contact-form" id="r-form">
  <div class="container">
    <a class="back-link" href="index.php"><span><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></span> Back</a>
    <h1>Contact</h1>
    <p>Get In touch to see how we can help you or your business grow.</p>
    <!-- FORM -->
     <form action="contactForm" id="Contact_Form" class="row" novalidate> 

      <div class="col-lg-6 for">
         <input type="text" name="name" id="fname" placeholder="Name" class="form-control" required="">
         <div class="invalid-feedback">
                            Please write Your Name.
         </div>
      </div>
      <div class="col-lg-6 for">
        <input type="email" name="email" id="email-here" 
        pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" 
           placeholder="Email Address" class="form-control" required="">
          <div class="invalid-feedback">
                            Please enter a vaild Email.
          </div>
      </div>   
      <div class="col-lg-4 for">
        <input type="tel" name="phone" id="contact-no" pattern="[0-9]{11}"
         placeholder="Contact no." class="form-control" required="">
         <div class="invalid-feedback">
                            Please enter a valid contact no.
          </div>
      </div>
      <div class="col-lg-4 for">
        <select class="form-select form-select-lg mb-3" id="bestday" aria-label=".form-select-lg example" 
        name="bestday" required="">
                            <option selected="" disabled="" value="">Best Day to Call</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
          </select>
          <div class="invalid-feedback">
                            Please choose a Day.
           </div>
      </div>
      <div class="col-lg-4 for">
        <select class="form-select form-select-lg mb-3" id="besttime" name="besttime" 
        aria-label=".form-select-lg example" required="">
                            <option selected="" disabled="" value="">Time of day</option>
                            <option value="9">9:00 AM</option>
                            <option value="10">10:00 AM</option>
                            <option value="11">11:00 AM</option>
                            <option value="12">12:00 PM</option>
                            <option value="2">2:00 PM</option>
                            <option value="3">3:00 PM</option>
                            <option value="4">4:00 PM</option>
                            <option value="5">5:00 PM</option>
        </select>
        <div class="invalid-feedback">
                            Please choose a valid time.
                        </div>
      </div>
      <div class="col-lg-12 for">
        <p>I am interested in...(select multiple if needed)</p>
        <div class="mb-3 d-flex" id="chooose-intrest">
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" name="servicetype[]" value="Videography" id="Videography">
                                <label class="form-check-label" for="Videography">
                                    Videography
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" name="servicetype[]" value="Photography" id="Photography">
                                <label class="form-check-label" for="Photography">
                                    Photography
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" name="servicetype[]" value="Design &amp; Content Creation" id="design-content-creation">
                                <label class="form-check-label" for="design-content-creation">
                                    Design &amp; Content Creation
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" name="servicetype[]" value="Web-Design" id="Web-Design">
                                <label class="form-check-label" for="Web-Design">
                                    Web Design
                                </label>
                            </div>
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" name="servicetype[]" value="Social-Media-Management" id="Social-Media-Management">
                                <label class="form-check-label" for="Social-Media-Management">
                                    Social Media Management
                                </label>
                            </div>
        </div>
        <div class="checkboxes-validation d-none text-center" id="checkboxes-validation">
                            Please Choose at least one
        </div>
      </div>
      <div class="col-lg-12 text-center for">
        <!-- TEXTAREA -->
        <textarea rows="10" class="mb-3 form-control" id="comments-form" name="message" placeholder="Comments" required=""></textarea>
          <!-- ERROR -->
       <div class="invalid-feedback">
                            Please enter valid comments.
       </div>

       <!-- CAPTCHA -->
        <div class="r-main d-flex justify-content-center mb-2">
          <!-- <div class="g-recaptcha" data-sitekey="6Ld1LoErAAAAAEiI3bT4hRa1C7MAHyv4Klt_p6e8"></div> -->
           <div class="g-recaptcha" data-sitekey="6LeHpBknAAAAAHcyqeeMMoRFmlYzxn1kggQOK_ow"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-kg6kbiq62mp0" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeHpBknAAAAAHcyqeeMMoRFmlYzxn1kggQOK_ow&amp;co=aHR0cHM6Ly93d3cuZHJtZWVuYWwuY28udWs6NDQz&amp;hl=en&amp;v=2sJvksnKlEApLvJt2btz_q7n&amp;size=normal&amp;anchor-ms=20000&amp;execute-ms=15000&amp;cb=n7jtlwyhmqq9"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
           <br/>
        </div>
        <!-- SUBMIT BUTTON -->
         <div class="text-center">
                            <button type="submit" id="sumbit-btn">Submit</button>
         </div>
      </div>    

     </form>
  </div>
  </div>
  <!-- 2 -->
   
<section class="index-gallery" id="index-gallery">
    <div class="container">
      <div class="row g-lg-4 g-2">
        <div class="col-lg-4 py-lg-4 py-2">
          <img loading="lazy" src="assets/a-images/Rectangle-3.webp" alt="">
        </div>
        <div class="col-lg-4 py-lg-4 py-2">
          <img loading="lazy" src="assets/a-images/Rectangle-4.jpg" alt="">
        </div>
        <div class="col-lg-4 py-lg-4 py-2">
          <img loading="lazy" src="assets/a-images/Rectangle-5.webp" alt="">
        </div>
      </div>
    </div>
   </section>


  </main>

<section>
<?php include_once "footer.php" ?>
</section>
</body>
</html>