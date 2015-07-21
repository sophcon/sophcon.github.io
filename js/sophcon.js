$(document).ready(function() {
  $('.navigate-on-click').click(function() {
    window.location.href = $(this).attr('href');
  });
});
