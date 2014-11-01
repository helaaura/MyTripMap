var app = angular.module("my-trip-maps", ["google-maps".ns()]).config(['GoogleMapApiProvider'.ns(),
function(GoogleMapApi) {
	GoogleMapApi.configure({
		key : 'AIzaSyB8RMXnE6nvNAklrNaxlBWBqQoD3LZtJ9I',
		v : '3.17',
		libraries : 'weather,geometry,visualization'
	});
}]);

app.controller("tripMapController", ["Logger".ns(), "GoogleMapApi".ns(),
function(log, GoogleMapApi) {
	log.doLog = true;
	var tripMapControllerScope = this;
	GoogleMapApi.then(function(maps) {
		log.info("google map sdk loaded");
		//TOSEE i don't knwo what this do 
		// tripMapControllerScope.map.control.refresh({
			// latitude : 32.779680,
			// longitude : -79.935493
		// });
		//TOSEE i don't knwo what this do
		// var theMap = tripMapControllerScope.map.control.getGMap();
		// maps.visualRefresh = true;
		//TOSEE i don't knwo what this do
		// tripMapControllerScope.map.rectangle.bounds = new maps.LatLngBounds(new maps.LatLng(55, -100), new maps.LatLng(49, -78));
	});

	this.map = {
		center : {
			latitude : 36,
			longitude : 10
		},
		zoom : 3,
		width : '500',
		height : '500',
		events : {
			click : function(maps, eventName, arguments) {
				log.info("map clicked in:" + arguments[0].latLng.lat() + ", " + arguments[0].latLng.lng());
			},
		},	//TOSEE i don't knwo what this do
		control : {
			refresh : function() {
				log.debug("user control refresh");
			},
			getGMap : function() {
				log.debug("user control getGMap");
				return tripMapControllerScope.map;
			}
		},
		options: {
	        // streetViewControl: false,
	        // panControl: false,
	        maxZoom: 20,
	        minZoom: 3
      	}
	};
}]);

//TOSEE
// log.info(map);
// log.debug(uuid);
// log.error(mapInstanceNumber);