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
      $('.navbar-default .dropdown').on('mouseover', function() {
        $('.dropdown-toggle', this).next('.dropdown-menu').show();
      }).on('mouseout', function() {
        $('.dropdown-toggle', this).next('.dropdown-menu').hide();
      });
      $('.dropdown-toggle').click(function() {
        if ($(this).next('.dropdown-menu').is(':visible')) {
          window.location = $(this).attr('href');
        }
      });
    } else {
      $('.navbar-default .dropdown').off('mouseover').off('mouseout').off('click');
    }
  }

  $(window).resize(function() {
    bindNavbar();
  });

  bindNavbar();
});
