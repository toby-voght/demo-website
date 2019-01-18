//I really enjoyed doing this. It's a monster of a Java script and I am sure there are simpler ways to solve the same issue but this is the way I figured out how to make it work, and it works!
//This visualization took me aproximately 4 to 5 hours and it was worth every second. One more interesting aspect is that as big as it is, it runs smoothly so no impact to the user on my clumsiness.
//There is a lot of data processing to get it to do what it does and I had to do it concatenating strings in excell as I felt more comfortable with my skills in that app.

function initMap() {

var Malisheve = {info:'<strong>Kosovo-Malishevë,city with a population of 1901597212</strong>', lat: 42.4822 long: 20.7458};

var locations = [
[Malisheve.info, Malisheve.lat, Malisheve.long, 0],
    	];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(42.4822, 20.7458),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}