/**
 * Maps Comtroller
 */
app.controller("tripMapController", ["Logger".ns(), "GoogleMapApi".ns(), "$scope", function(log, GoogleMapApi, $scope) {
	console.log("tripMapController init");
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
				scope.clickCoordinates.latitude = arguments[0].latLng.lat();
				scope.clickCoordinates.longitude = arguments[0].latLng.lng();
				console.log("in Maps: ");
				console.log(scope.clickCoordinates);
			},
		},
		options : {
			maxZoom : 20,
			minZoom : 3
		}
	};
}]);
