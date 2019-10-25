$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollpase = $(".toggle-collapse");

  $toggleCollpase.click(function() {
    $nav.toggleClass("collapse");
  });
});
