$(function() {
  
  // Fixed Header
  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if ( scrollPos > introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });


  // Smooth Scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);
  });


  // Nav Toggle
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $("#navToggle").on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
  });
});