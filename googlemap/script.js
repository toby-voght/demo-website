function initMap() {

	var QU8641 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Community Center - Computer Rm</strong>', Lat: 40.755727, Long: -73.944583};
	var QU8642 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Queens Public Library</strong>', Lat: 40.755333, Long: -73.944131};
	var QU8643 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Management Office</strong>', Lat: 40.755751, Long: -73.945166};
	var QU8644 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Management Office</strong>', Lat: 40.755751, Long: -73.945166};
	var QU8645 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Maintenance Area</strong>', Lat: 40.755751, Long: -73.945166};

	var locations = [
    [QU8641.info, QU8641.lat, QU8641.long, 0],
	[QU8642.info, QU8642.lat, QU8642.long, 1],
	[QU8643.info, QU8643.lat, QU8643.long, 2],
	[QU8644.info, QU8644.lat, QU8644.long, 3],
	[QU8645.info, QU8645.lat, QU8645.long, 4],
    	];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(40.755333, -73.945166),
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