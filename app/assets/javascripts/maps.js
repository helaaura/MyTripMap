var app = angular.module("my-trip-maps", ["google-maps".ns(), "ngAnimate", "ui.bootstrap"]).config(['GoogleMapApiProvider'.ns(),
function(GoogleMapApi) {
	GoogleMapApi.configure({
		key : 'AIzaSyB8RMXnE6nvNAklrNaxlBWBqQoD3LZtJ9I',
		v : '3.17',
		libraries : 'weather,geometry,visualization'
	});
}]);

app.controller("tripMapController", ["Logger".ns(), "GoogleMapApi".ns(), "$scope", function(log, GoogleMapApi, $scope) {
	log.doLog = true;
	this.loading = true;
	this.clickCoordinates = {};
	var scope = this;
	GoogleMapApi.then(function(maps) {
		scope.loading = false;
		log.info("google map sdk loaded");
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
				//log.info("map clicked in:" + arguments[0].latLng.lat() + ", " + arguments[0].latLng.lng());
				scope.clickCoordinates.latitude = arguments[0].latLng.lat();
				scope.clickCoordinates.longitude = arguments[0].latLng.lng();
//				$scope.$apply();
				console.log(scope.clickCoordinates);
			},
		},
		options : {
			maxZoom : 20,
			minZoom : 3
		}
	};
}]);

//TOSEE
// log.info(map);
// log.debug(uuid);
// log.error(mapInstanceNumber);