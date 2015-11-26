var map;

function initialize() {
  var myLatlng = new google.maps.LatLng(37.340625, -120.5773507);
  var mapOptions = {
    zoom: 12,
	scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
	  animation: google.maps.Animation.DROP,
      title: 'Sophcon'
  });

  var contentString = '<div>' +
            '<div><img style="max-height:50px" src="/images/sophcon-logo.png" alt="Sophcon" /></div>' +
					  '<p>Let us help you grow your business.</p>' +
            '<div>Address: 1931 Faxon Dr., California</div>' +
            '<div>Email: <a href="mailto:info@sophcon.com?Subject=Please%20Contact%20Me"><i class="fa fa-envelope-o"></i> info@sophcon.com</a></div>' +
            '<div>Phone: (209) 259-0792</div></div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$('a[data-type="gmap"]').on('shown.bs.tab', function (e) {
  initialize();
})
