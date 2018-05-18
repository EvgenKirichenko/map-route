;(function(){
	'use strict';
	function initMap() {
	  var markerArray = [];

	  // Instantiate a directions service.
	  var directionsService = new google.maps.DirectionsService;

	  // Create a map and center it on Poltava.
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: {lat: 43.080, lng: 25.605},
	    styles:[
	    {
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#1d2c4d"
	    	}
	    	]
	    },
	    {
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#8ec3b9"
	    	}
	    	]
	    },
	    {
	    	"elementType": "labels.text.stroke",
	    	"stylers": [
	    	{
	    		"color": "#1a3646"
	    	}
	    	]
	    },
	    {
	    	"featureType": "administrative.country",
	    	"elementType": "geometry.stroke",
	    	"stylers": [
	    	{
	    		"color": "#4b6878"
	    	}
	    	]
	    },
	    {
	    	"featureType": "administrative.land_parcel",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#64779e"
	    	}
	    	]
	    },
	    {
	    	"featureType": "administrative.province",
	    	"elementType": "geometry.stroke",
	    	"stylers": [
	    	{
	    		"color": "#4b6878"
	    	}
	    	]
	    },
	    {
	    	"featureType": "landscape.man_made",
	    	"elementType": "geometry.stroke",
	    	"stylers": [
	    	{
	    		"color": "#334e87"
	    	}
	    	]
	    },
	    {
	    	"featureType": "landscape.natural",
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#023e58"
	    	}
	    	]
	    },
	    {
	    	"featureType": "poi",
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#283d6a"
	    	}
	    	]
	    },
	    {
	    	"featureType": "poi",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#6f9ba5"
	    	}
	    	]
	    },
	    {
	    	"featureType": "poi",
	    	"elementType": "labels.text.stroke",
	    	"stylers": [
	    	{
	    		"color": "#1d2c4d"
	    	}
	    	]
	    },
	    {
	    	"featureType": "poi.park",
	    	"elementType": "geometry.fill",
	    	"stylers": [
	    	{
	    		"color": "#023e58"
	    	}
	    	]
	    },
	    {
	    	"featureType": "poi.park",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#3C7680"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road",
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#304a7d"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#98a5be"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road",
	    	"elementType": "labels.text.stroke",
	    	"stylers": [
	    	{
	    		"color": "#1d2c4d"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road.highway",
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#2c6675"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road.highway",
	    	"elementType": "geometry.stroke",
	    	"stylers": [
	    	{
	    		"color": "#255763"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road.highway",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#b0d5ce"
	    	}
	    	]
	    },
	    {
	    	"featureType": "road.highway",
	    	"elementType": "labels.text.stroke",
	    	"stylers": [
	    	{
	    		"color": "#023e58"
	    	}
	    	]
	    },
	    {
	    	"featureType": "transit",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#98a5be"
	    	}
	    	]
	    },
	    {
	    	"featureType": "transit",
	    	"elementType": "labels.text.stroke",
	    	"stylers": [
	    	{
	    		"color": "#1d2c4d"
	    	}
	    	]
	    },
	    {
	    	"featureType": "transit.line",
	    	"elementType": "geometry.fill",
	    	"stylers": [
	    	{
	    		"color": "#283d6a"
	    	}
	    	]
	    },
	    {
	    	"featureType": "transit.station",
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#3a4762"
	    	}
	    	]
	    },
	    {
	    	"featureType": "water",
	    	"elementType": "geometry",
	    	"stylers": [
	    	{
	    		"color": "#0e1626"
	    	}
	    	]
	    },
	    {
	    	"featureType": "water",
	    	"elementType": "labels.text.fill",
	    	"stylers": [
	    	{
	    		"color": "#4e6d70"
	    	}
	    	]
	    }
	    ]



	  });

	  // Create a renderer for directions and bind it to the map.
	  var directionsDisplay = new google.maps.DirectionsRenderer({map: map,
	  	polylineOptions: {
	  	           strokeColor: "fuchsia"
	  	         }}
	  	);

	  // Instantiate an info window to hold step text.
	  var stepDisplay = new google.maps.InfoWindow;

	  // // Display the route between the initial start and end selections.
	  calculateAndDisplayRoute(
	      directionsDisplay, directionsService, markerArray, stepDisplay, map);
	  // Listen to change events from the start and end lists.
	  var onChangeHandler = function() {
	    calculateAndDisplayRoute(
	        directionsDisplay, directionsService, markerArray, stepDisplay, map);
	  };

	  var makeRoute = document.querySelector('.ba-button');
	  makeRoute.addEventListener('click', onChangeHandler);
	 //   document.getElementById('start').addEventListener('change', onChangeHandler);
	 // document.getElementById('end').addEventListener('change', onChangeHandler);
	}

	function calculateAndDisplayRoute(directionsDisplay, directionsService,
	    markerArray, stepDisplay, map) {
	  // First, remove any existing markers from the map.
	  for (var i = 0; i < markerArray.length; i++) {
	    markerArray[i].setMap(null);
	  }

	  // Retrieve the start and end locations and create a DirectionsRequest using
	  // WALKING directions.
	  directionsService.route({
	    origin: document.getElementById('start').value,
	    destination: document.getElementById('end').value,
	    travelMode: 'WALKING'
	  }, function(response, status) {
	    // Route the directions and pass the response to a function to create
	    // markers for each step.
	    if (status === 'OK') {
	      document.getElementById('warnings-panel').innerHTML =
	          '<b>' + response.routes[0].warnings + '</b>';
	      directionsDisplay.setDirections(response);
	      showSteps(response, markerArray, stepDisplay, map);
	    } else {
	      window.alert('Directions request failed due to ' + status);
	    }
	  });
	}

	function showSteps(directionResult, markerArray, stepDisplay, map) {
	  // For each step, place a marker, and add the text to the marker's infowindow.
	  // Also attach the marker to an array so we can keep track of it and remove it
	  // when calculating new routes.
	  var myRoute = directionResult.routes[0].legs[0];
	  for (var i = 0; i < myRoute.steps.length; i++) {
	    var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
	    marker.setMap(map);
	    marker.setPosition(myRoute.steps[i].start_location);
	    attachInstructionText(
	        stepDisplay, marker, myRoute.steps[i].instructions, map);
	  }
	}

	function attachInstructionText(stepDisplay, marker, text, map) {
	  google.maps.event.addListener(marker, 'click', function() {
	    // Open an info window when the marker is clicked on, containing the text
	    // of the step.
	    stepDisplay.setContent(text);
	    stepDisplay.open(map, marker);
	  });
	}
	window.addEventListener('load', initMap);
})();
