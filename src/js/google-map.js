function initMap() {       
	var coordMapOfficeOne = {lat: 52.9702561, lng: 36.0821053},
		coordMapOfficeTwo = {lat: 52.9720386, lng: 36.0528446},
		zoomMapOfficeOne = 17,
		styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			styles: styleMapOfficeOne
		},
		optionsMapOfficeTwo = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeTwo.lat, coordMapOfficeTwo.lng),
			styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-dixion-msk'),
		idOfficeTwo = document.getElementById('map-dixion-turgenev'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
		mapOfficeTwo = new google.maps.Map(idOfficeTwo, optionsMapOfficeTwo),
		//iconOfficeOne = '/img/default/icon-map.png',
		iconOfficeOne = {        
	        path: "M395,601.9c99.8-99.8,99.8-262.2,0-362c-99.8-99.8-262.2-99.8-362,0s-99.8,262.2,0,362C132.8,701.7,295.2,701.7,395,601.9z M194.3,579.9L88.7,323.4c-3.3-8-1.4-17.2,4.6-23.2c0.6-0.6,1.2-1.1,1.8-1.6c7.5-5.9,17.9-6.2,25.7-0.6l93.2,66.6l93.2-66.6c7.8-5.5,18.2-5.3,25.7,0.6c7.5,5.9,10.1,16,6.5,24.8L233.7,579.9c-3.2,8-11.1,13.2-19.7,13.2C205.4,593.1,197.6,587.8,194.3,579.9z",
	        fillColor: '#0084ff',
	        fillOpacity: 1,
	        anchor: new google.maps.Point(200,350),
	        strokeWeight: 0,
	        scale: 0.125
	    },
	    iconCoordOfficeOne = {lat: 52.970534, lng: 36.082065},
	    iconCoordOfficeTwo = {lat: 52.971904, lng: 36.053154}, 
	    OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		}),
	    OfficeTwo = new google.maps.Marker({
			position: iconCoordOfficeTwo,
			map: mapOfficeTwo,
			icon: iconOfficeOne
		});

        /*$(window).on('resize', function() {
			google.maps.event.trigger(map, "resize");
			map.setCenter(coord);
        });*/
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});