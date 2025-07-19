document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const hamburgerLines = toggleBtn?.querySelector('.hamburger-lines');
  const navbarCollapse = document.getElementById('navbarSupportedContent');

  if (toggleBtn && hamburgerLines) {
    toggleBtn.addEventListener('click', () => {
      hamburgerLines.classList.toggle('open');
    });
  }

  if (navbarCollapse) {
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      hamburgerLines?.classList.remove('open');
    });
  }

  // Mobile dropdown behavior
  const servicesLink = document.querySelector('#toborder-right > a');
  const dropdownMenu = document.querySelector('#formobile-version');
  const servicesToggle = document.getElementById('services-toggle'); // ensure this exists or replace logic

  if (servicesLink && dropdownMenu) {
    servicesLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdownMenu.classList.toggle('expand');
        dropdownMenu.classList.toggle('visible');
      }
    });

    document.addEventListener('click', function (event) {
      const target = event.target;

      if (
        window.innerWidth <= 991 &&
        !servicesLink.contains(target) &&
        !dropdownMenu.contains(target)
      ) {
        dropdownMenu.classList.remove('expand');
        dropdownMenu.classList.remove('visible');
      }
    });
  }
});
// [[[[[[[[[[[[[[[]]]]]]]]]]]]]]]



// form validation

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('Contact_Form');
    // Get the .todisplay element, which is the container for your popup
    const todisplayContainer = document.querySelector('.todisplay');

    // --- Helper Function: hidePopup ---
    // This function hides the entire popup container by setting its display to 'none'.
    // It's called from the HTML onclick event and from setTimeout.
    function hidePopup() {
        if (todisplayContainer) {
            todisplayContainer.style.display = 'none';
        }
    }

    // --- Helper Function: validateField ---
    // Validates an individual input/select field, applies appropriate classes,
    // and controls the display of its associated invalid-feedback message.
    function validateField(inputElement, validationCondition, errorMessage = "") {
        const feedbackElement = inputElement.nextElementSibling;

        // Remove all potential invalid AND valid classes to ensure a clean state
        inputElement.classList.remove('invalid', 'is-invalid', 'invalid-plus', 'control-valid', 'control-valid1', 'control-valid2');

        let invalidClass = 'invalid';
        let validClass = '';

        if (inputElement.id === 'bestday' || inputElement.id === 'besttime') {
            invalidClass = 'is-invalid';
            validClass = 'control-valid1';
        } else if (inputElement.id === 'comments-form') {
            invalidClass = 'invalid-plus';
            validClass = 'control-valid2';
        } else if (inputElement.id === 'fname' || inputElement.id === 'email-here' || inputElement.id === 'contact-no') {
            validClass = 'control-valid';
        }

        if (validationCondition) {
            inputElement.classList.add(invalidClass);
            if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
                feedbackElement.style.display = 'block';
                if (errorMessage) {
                    feedbackElement.textContent = errorMessage;
                }
            }
            return false;
        } else {
            if (validClass) {
                inputElement.classList.add(validClass);
            }
            if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
                feedbackElement.style.display = 'none';
            }
            return true;
        }
    }

    // --- Field References ---
    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email-here');
    const contactNoInput = document.getElementById('contact-no');
    const bestDaySelect = document.getElementById('bestday');
    const bestTimeSelect = document.getElementById('besttime');
    const commentsInput = document.getElementById('comments-form');
    const serviceTypeCheckboxes = document.querySelectorAll('input[name="servicetype[]"]');
    const checkboxesValidationDiv = document.getElementById('checkboxes-validation');

    // --- Validation Patterns ---
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const phonePattern = /^[0-9]{11}$/;

    // --- Real-time Field Validation ---
    [fnameInput, emailInput, contactNoInput, commentsInput].forEach(input => {
        input.addEventListener('input', () => {
            if (input === fnameInput) {
                validateField(fnameInput, fnameInput.value.trim() === '', 'Please write Your Name.');
            } else if (input === emailInput) {
                validateField(emailInput, emailInput.value.trim() === '' || !emailPattern.test(input.value.trim()), 'Please enter a valid Email.');
            } else if (input === contactNoInput) {
                validateField(contactNoInput, contactNoInput.value.trim() === '' || !phonePattern.test(input.value.trim()), 'Please enter a valid contact no. (11 digits).');
            } else if (input === commentsInput) {
                validateField(commentsInput, commentsInput.value.trim() === '', 'Please enter valid comments.');
            }
        });

        input.addEventListener('blur', () => {
            if (input === fnameInput) {
                validateField(fnameInput, fnameInput.value.trim() === '', 'Please write Your Name.');
            } else if (input === emailInput) {
                validateField(emailInput, emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim()), 'Please enter a valid Email.');
            } else if (input === contactNoInput) {
                validateField(contactNoInput, contactNoInput.value.trim() === '' || !phonePattern.test(contactNoInput.value.trim()), 'Please enter a valid contact no. (11 digits).');
            } else if (input === commentsInput) {
                validateField(commentsInput, commentsInput.value.trim() === '', 'Please enter valid comments.');
            }
        });
    });

    // --- Selects Validation ---
    [bestDaySelect, bestTimeSelect].forEach(select => {
        select.addEventListener('change', () => {
            if (select === bestDaySelect) {
                validateField(bestDaySelect, select.value === '' || select.options[select.selectedIndex].disabled, 'Please choose a Day.');
            } else if (select === bestTimeSelect) {
                validateField(bestTimeSelect, select.value === '' || select.options[select.selectedIndex].disabled, 'Please choose a Time.');
            }
        });
    });

    // --- Checkbox Validation ---
    serviceTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedBoxes = document.querySelectorAll('input[name="servicetype[]"]:checked');
            if (checkedBoxes.length === 0) {
                checkboxesValidationDiv.classList.remove('d-none');
            } else {
                checkboxesValidationDiv.classList.add('d-none');
            }
        });
    });

    // --- Final Form Submission ---
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        let formIsValid = true;

        // Re-check all fields to ensure valid/invalid classes are applied
        if (!validateField(fnameInput, fnameInput.value.trim() === '', 'Please write Your Name.')) formIsValid = false;
        if (!validateField(emailInput, emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim()), 'Please enter a valid Email.')) formIsValid = false;
        if (!validateField(contactNoInput, contactNoInput.value.trim() === '' || !phonePattern.test(contactNoInput.value.trim()), 'Please enter a valid contact no. (11 digits).')) formIsValid = false;
        if (!validateField(bestDaySelect, bestDaySelect.value === '' || bestDaySelect.options[bestDaySelect.selectedIndex].disabled, 'Please choose a Day.')) formIsValid = false;
        if (!validateField(bestTimeSelect, bestTimeSelect.value === '' || bestTimeSelect.options[bestTimeSelect.selectedIndex].disabled, 'Please choose a Time.')) formIsValid = false;
        if (!validateField(commentsInput, commentsInput.value.trim() === '', 'Please enter valid comments.')) formIsValid = false;

        // Re-check checkboxes
        const checkedBoxesOnSubmit = document.querySelectorAll('input[name="servicetype[]"]:checked');
        if (checkedBoxesOnSubmit.length === 0) {
            checkboxesValidationDiv.classList.remove('d-none');
            formIsValid = false;
        } else {
            checkboxesValidationDiv.classList.add('d-none');
        }

        // Re-check reCAPTCHA
        // const recaptchaResponse = typeof grecaptcha !== 'undefined' ? grecaptcha.getResponse() : '';
        // if (recaptchaResponse.length === 0) {
        //     console.log("Please complete the reCAPTCHA.");
        //     formIsValid = false;
        // }

        // --- Final Submission Logic: Show Popup or Focus Error ---
        if (formIsValid) {
            // Show the 'todisplay' container, which contains your popup
            if (todisplayContainer) {
                todisplayContainer.style.display = 'block';

                // Optional: Automatically hide the popup after a few seconds
                // setTimeout(() => {
                //     hidePopup(); // Call the hide function
                // }, 3000); // Popup visible for 3 seconds
            }

            // Optionally, clear the form after successful submission
            contactForm.reset();
        } else {
            // Focus on the first invalid element for better UX
            const firstInvalid = document.querySelector('.invalid, .is-invalid, .invalid-plus');
            if (firstInvalid) {
                firstInvalid.focus();
            }
        }
    });
});
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
 
    document.addEventListener('DOMContentLoaded', () => {
    const videoLinks = document.querySelectorAll('.popup-youtube');
    const body = document.body;

    videoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const videoUrl = event.currentTarget.getAttribute('href');

            const mfpBg = document.createElement('div');
            mfpBg.className = 'mfp-bg mfp-ready';

            const mfpWrap = document.createElement('div');
            mfpWrap.className = 'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready';
            mfpWrap.setAttribute('tabindex', '-1');
            mfpWrap.style.overflow = 'hidden auto';

            const mfpContainer = document.createElement('div');
            mfpContainer.className = 'mfp-container mfp-s-ready mfp-iframe-holder';

            const mfpContent = document.createElement('div');
            mfpContent.className = 'mfp-content';

            const mfpIframeScaler = document.createElement('div');
            mfpIframeScaler.className = 'mfp-iframe-scaler';

            const closeButton = document.createElement('button');
            closeButton.className = 'mfp-close';
            closeButton.setAttribute('title', 'Close (Esc)');
            closeButton.setAttribute('type', 'button');
            closeButton.innerHTML = '×';

            const iframe = document.createElement('iframe');
            iframe.className = 'mfp-iframe';
            iframe.setAttribute('src', videoUrl);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');

            const preloader = document.createElement('div');
            preloader.className = 'mfp-preloader';
            preloader.textContent = 'Loading...';

            mfpIframeScaler.appendChild(closeButton);
            mfpIframeScaler.appendChild(iframe);
            mfpContent.appendChild(mfpIframeScaler);
            mfpContainer.appendChild(mfpContent);
            mfpContainer.appendChild(preloader);
            mfpWrap.appendChild(mfpContainer);

            body.appendChild(mfpBg);
            body.appendChild(mfpWrap);
            body.classList.add('mfp-zoom-out-cur');

            const closeOverlay = () => {
                if (mfpBg && mfpWrap) {
                    mfpBg.remove();
                    mfpWrap.remove();
                    body.classList.remove('mfp-zoom-out-cur');
                }
            };
mfpWrap.addEventListener('click', closeOverlay); // Attach to mfpWrap instead of mfpBg
            closeButton.addEventListener('click', closeOverlay);

            mfpBg.addEventListener('click', closeOverlay);

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeOverlay();
                }
            }, { once: true });

            iframe.onload = () => {
                preloader.style.display = 'none';
                mfpContainer.classList.add('mfp-s-ready');
            };
        });
    });
});

// for services
  document.addEventListener('DOMContentLoaded', function () {
    const servicesLink = document.getElementById('services-link');
    const forNintyMenu = document.getElementById('forNintyMenu');

    // Make sure it is hidden on load
    forNintyMenu.style.display = "none";

    servicesLink.addEventListener('click', function (event) {
      if (window.innerWidth <= 991) {
        event.preventDefault();

        // Toggle show/hide on click
        if (forNintyMenu.style.display === "none" || forNintyMenu.style.display === "") {
          forNintyMenu.style.display = "block";
        } else {
          forNintyMenu.style.display = "none";
        }
      } else {
        // On larger screens, keep it hidden
        forNintyMenu.style.display = "none";
      }
    });

    // Optional: auto-hide on window resize above 991px
    window.addEventListener('resize', function () {
      if (window.innerWidth > 991) {
        forNintyMenu.style.display = "none";
      }
    });
  });

