jQuery("#layerslider").layerSlider({
  pauseOnHover: true,
  autoPlayVideos: false,
  skinsPath: '{{base}}/assets/layerslider/skins/',
  responsive: false,
  responsiveUnder: 1280,
  layersContainer: 1280,
  skin: 'borderlessdark3d',
  hoverPrevNext: true,
});

$(document).ready(function() {
  function bindNavbar() {
    if ($(window).width() > 768) {
      var handlerIn = function(event) {
        $('.dropdown-toggle', this).next('.dropdown-menu').show();
      }
      var handlerOut = function(event) {
        $('.dropdown-toggle', this).next('.dropdown-menu').hide();
      }
      var click = function() {
        if ($(this).next('.dropdown-menu').is(':visible')) {
          window.location = $(this).attr('href');
        }
      };
      $('.navbar-default .dropdown').hover(handlerIn, handlerOut);
      $('.dropdown-toggle').click(click);
    } else {
      $('.navbar-default .dropdown').off('mouseover').off('mouseout').off('click');
    }
  }

  $(window).resize(function() {
    bindNavbar();
  });

  bindNavbar();
});
