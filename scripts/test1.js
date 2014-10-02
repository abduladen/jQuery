$(document).ready(function() {

$("img").click(function() {
  $(this).fadeOut("slow");
});

$("h3").click(function() {
  $("img").fadeIn("slow");
});
});
