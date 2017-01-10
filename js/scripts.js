$(document).ready(function() {
  $(".dark").click(function() {
    $("body").addClass("dark-theme");
    $("body").removeClass("light-theme");
  });

  $("button.light").click(function() {
    $("body").addClass("light-theme");
    $("body").removeClass("dark-theme");
  });

});
