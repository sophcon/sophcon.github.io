jQuery("#layerslider").layerSlider({
  pauseOnHover: true,
  autoPlayVideos: false,
  skinsPath: '/assets/layerslider/skins/',
  responsive: false,
  responsiveUnder: 1280,
  layersContainer: 1280,
  skin: 'borderlessdark3d',
  hoverPrevNext: true,
});

$(document).ready(function() {
  $('#thankyouDiv').hide();
  $('#thankyouDiv').removeClass('hidden');
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
  $('#btnSendMessage').click(function() {
    var $name = $('#name'),
        $email = $('#email'),
        $phone = $('#phone'),
        $subject = $('#subject'),
        $message = $('#message'),
        isValid = true;

    if($name.val().trim() === '') {
      isValid = false;
      $name.parent('.form-group').addClass('has-error');
      $name.parent('.form-group').children('.help-block').removeClass('hidden');
    }
    if($phone.val().trim() === '' && $email.val().trim() === '') {
      isValid = false;
      $email.parent('.form-group').addClass('has-error');
      $email.parent('.form-group').children('.help-block').removeClass('hidden');

      $phone.parent('.form-group').addClass('has-error');
      $phone.parent('.form-group').children('.help-block').removeClass('hidden');
    }
    if($subject.val().trim() === '') {
      isValid = false;
      $subject.parent('.form-group').addClass('has-error');
      $subject.parent('.form-group').children('.help-block').removeClass('hidden');
    }
    if($message.val().trim() === '') {
      isValid = false;
      $message.parent('.form-group').addClass('has-error');
      $message.parent('.form-group').children('.help-block').removeClass('hidden');
    }

    if(isValid) {
      var data = {
        text: '<mailto:' + $email.val() + '|' + $name.val() + '> (' + $phone.val() + ')\n\n_USER AGENT:' + navigator.userAgent + '_\n_REFERRER:' + document.referrer + '_\n\n*'
           + $subject.val() + '*\n' + $message.val(),
        mrkdown: true
      }
      $.post('https://hooks.slack.com/services/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', JSON.stringify(data))
        .done(function(data) {
          $('#sendMsgFrm').hide();
          $('#thankyouDiv').show();
          $name.val('');
          $email.val('');
          $phone.val('');
          $subject.val('');
          $message.val('');
        });
    }
  });
  $('#btnReset').click(function() {
    $('#sendMsgFrm').show();
    $('#thankyouDiv').hide();
  })
  $(window).resize(function() {
    bindNavbar();
  });

  bindNavbar();
});
