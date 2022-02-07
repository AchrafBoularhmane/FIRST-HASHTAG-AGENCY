// MOBILE NAVBAR START //
$(document).ready(function () {
  $(".Toggle").click(function () {
    $(".Nav").toggleClass("Active");
    $(".Toggle").toggleClass("ShowHamburgerIcon");
    $("Body").toggleClass("StopScrolling");
    $("#Cookie").toggleClass("CloseCookies");
  });
});
function ToggleOff() {
  $(".Nav").removeClass("Active");
  $("Body").removeClass("StopScrolling");
  $(".Toggle").removeClass("ShowHamburgerIcon");
}
// MOBILE NAVBAR END //
// COOKIES START //
var cookies = document.getElementById("Cookie");
function Close() {
  cookies.classList.add("CloseCookies");
}
document.getElementById("ok").addEventListener("click", function (event) {
  cookies.classList.add("CloseCookies");
});
document.getElementById("EnSavoirPlus").addEventListener("click", function (event) {
  cookies.classList.add("CloseCookies");
});
// COOKIES END //

// TESTIMONIALS SLIDER START //
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayspeed: 1000,
    smartSpeed: 1500,
    autoPlayHoverPause: true,
  });
});
// TESTIMONIALS SLIDER END //

// BRANDS SLIDER START //

var owl = $(".owl-carousel1");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    768: {
      dots: false,
      items: 2,
    },
    1000: {
      dots: false,
      items: 3,
    },
  },
});

// BRANDS SLIDER END //
// BLOG SLIDER START //
var owl = $(".owl-carousel2");
owl.owlCarousel({
  items: 3,
  margin: 30,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayspeed: 1000,
  smartSpeed: 1500,
  autoPlayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    768: {
      dots: false,
      items: 2,
    },
    1000: {
      dots: false,
      items: 3,
    },
  },
});
// BLOG SLIDER END //

// CONTACT DOUBLE CHECK AND SUBMIT START //
// doublie check if input is empty //
function checkIfEmpty(input) {
  if (input == "") {
    return false;
  } else return true;
}
// doublie check email adress //
function checkEmail(input) {
  var atpos = input.indexOf("@"),
    dotpos = input.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    return false;
  } else return true;
}
/* user input contactform double-check*/
document.querySelector("#FormContact").addEventListener("submit", function (e) {
  e.preventDefault();
  return SubmitContactForm();
});
function SubmitContactForm() {
  /* User input*/
  let contact_form = {
    NomEntreprise: $("#NomEntreprise").val(),
    NomComplet: $("#NomComplet").val(),
    Prenom: $("#Prenom").val(),
    Email: $("#Email").val(),
    Message: $("#Message").val(),
  };
  /*Double_check user input*/
  var regname = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

  $(".NomCompletVide, .NomCompletNonValide,.NomEntrepriseVide, .Email, .Message").removeClass("Show");
  if (checkIfEmpty(contact_form.NomComplet) == false) {
    $(".NomCompletVide").addClass("Show");
  } else if (checkIfEmpty(contact_form.NomComplet) == true && regname.test(contact_form.NomComplet.trim()) == false) {
    $(".NomCompletNonValide").addClass("Show");
  } else if (checkIfEmpty(contact_form.NomEntreprise) == false) {
    $(".NomEntrepriseVide").addClass("Show");
  } else if (checkEmail(contact_form.Email) == false) {
    $(".Email").addClass("Show");
  } else if (checkIfEmpty(contact_form.Message) == false) {
    $(".Message").addClass("Show");
  } else {
    $("#ModalContainer").addClass("Show");
    $("body,html").addClass("StopScrolling");
    $("#Close").click(function () {
      $("#ModalContainer").removeClass("Show");
      $("body,html").removeClass("StopScrolling");
      $("#FormContact").submit();
      return true;
    });
  }
}

// CONTACT DOUBLE CHECK AND SUBMIT END //
// NEWSLETTER DOUBLE CHECK AND SUBMIT START //
document.querySelector("#NewsletterSubmit").addEventListener("submit", function (e) {
  e.preventDefault();
  return newsletter();
});

function newsletter() {
  var newsletterinput = $("#user-email").val();
  if (checkEmail(newsletterinput) == false) {
    $(".NewsletterErreur").addClass("Show");
  } else {
    $("#ModalContainerNL").addClass("Show");
    $("body,html").addClass("StopScrolling");
    $("#CloseNL").click(function () {
      $("#ModalContainerNL").removeClass("Show");
      $("body,html").removeClass("StopScrolling");
      $("#NewsletterSubmit").submit();
      return true;
    });
  }
}
// NEWSLETTER DOUBLE CHECK AND SUBMIT END //

// FIXING NAV BAR  AND BACK TO TOP BUTTON ON SCROLL START//
var height = $("#About").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $(".BackToTop").addClass("Top");
    $("header").addClass("FixNavbar");
  } else {
    $(".BackToTop").removeClass("Top");
    $("header").removeClass("FixNavbar");
  }
});
// FIXING NAV BAR ON SCROLL AND BACK TO TOP BUTTON  END//

// BACK TO TOP START //
$(document).ready(function () {
  $("#BackTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// BACK TO TOP END //
// OPTIMAZITION ADDING ARIAL LABEL TO BUTTON //
$(document).ready(function () {
  $(".owl-dot").attr("aria-label", "slider");
});
