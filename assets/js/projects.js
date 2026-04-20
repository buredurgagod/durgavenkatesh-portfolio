$(document).ready(function() {
// start

$("a.modal-trigger").on('click', function(event) {
    event.preventDefault();
});

// slippry initiation

jQuery('#out-of-the-box-demo').slippry({
    speed: 150,
    auto: false
});

// MODAL
// Get the button that opens the modal
var $btn = $('.modal-trigger');

// Get the button that closes the modal
var $close = $('#modal-close-trigger');

// When the user clicks on the button, open the modal
$btn.click(function () {
    $('main').hide();
    $('#feature-modal').show();
})

// When the user clicks on <span> (x), close the modal
$close.click(function ($this) {
    $('#feature-modal').hide();
    $('main').show();
})

var $contact_btn = $('#contact-trigger');
var $contact_close = $('#contact-close-trigger');

$contact_btn.click(function () {
    $('main').hide();
    $('#contact-modal').show();
})

$contact_close.click(function ($this) {
    $('#contact-modal').hide();
    $('main').show();
})

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
      $('#contact-modal').hide();
      $('#feature-modal').hide();
      $('main').show();
    }
});

// end
});

/* =====================================================
   THEME TOGGLE (shared across all project pages)
   ===================================================== */

function updateThemeIcons(theme) {
  document.querySelectorAll('.theme-toggle').forEach(function(btn) {
    var sun = btn.querySelector('.icon-sun');
    var moon = btn.querySelector('.icon-moon');
    if(theme === 'dark') {
      if(sun) sun.style.display = 'block';
      if(moon) moon.style.display = 'none';
    } else {
      if(sun) sun.style.display = 'none';
      if(moon) moon.style.display = 'block';
    }
  });
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'light';
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcons(next);
}

document.querySelectorAll('.theme-toggle').forEach(function(btn) {
  btn.addEventListener('click', toggleTheme);
});

// Run once on load to set correct icons
(function() {
  var saved = localStorage.getItem('portfolio-theme') || 'light';
  updateThemeIcons(saved);
})();
