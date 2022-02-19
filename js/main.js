$( document).ready(function(){
  $(".button-collapse").sideNav();

  var copyright = `&copy; ${new Date().getFullYear()} Web Dev Junkie`;

  $("footer .footer-copyright .container").html(copyright);
});
