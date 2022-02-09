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
