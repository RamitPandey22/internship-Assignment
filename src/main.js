const form = document.querySelector('#verifyForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('message').style.display = 'block';
  setTimeout(function() {
      location.reload();
  }, 3000);
});

$(document).ready(function() {
  $('#menuIcon').click(function() {
      $('#navLinks').toggleClass('nav-active');
  });

  $('#navLinks li a').click(function() {
      $('#navLinks').removeClass('nav-active');
  });

  $(window).resize(function() {
      if ($(window).width() > 768) {
          $('#navLinks').removeClass('nav-active');
      }
  });
});