// To implement the map, place the following in the HTML;
// <div id="mapCanvas"></div>

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>

<script>
	function initialize() {
	  var latLng = new google.maps.LatLng(-27.54388889,152.9627778);
	  var mapOptions = {
		zoom: 4,
		center: latLng
	  }
	  
	  var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

	  var marker = new google.maps.Marker({
		  position: latLng,
		  map: map,
		  title: 'Industrial Artefacts'
	  });
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);

</script>
