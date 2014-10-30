angular.module("angular-google-maps-sol", ["google-maps".ns()])

.config(['GoogleMapApiProvider'.ns(), function(GoogleMapApi) {
	GoogleMapApi.configure({
		//    key: 'AIzaSyB8RMXnE6nvNAklrNaxlBWBqQoD3LZtJ9I,
		v : '3.17',
		libraries : 'weather,geometry,visualization'
	});
}])

.controller("MyMapController", ['$scope', 'Logger'.ns(), 'GoogleMapApi'.ns(), function($scope, $log, GoogleMapApi) {
	GoogleMapApi.then(function(maps) {
		this.googleVersion = maps.version;
		maps.visualRefresh = true;
		console.log('this.map.rectangle.bounds set');
	});

	angular.extend($scope, {
		map : {
			show : true,
			control : {},
			version : "uknown",
			heatLayerCallback : function(layer) {
				//set the heat layers backend data
				var mockHeatLayer = new MockHeatLayer(layer);
			},
			showTraffic : true,
			showBicycling : false,
			showWeather : false,
			showHeat : false,
			center : {
				latitude : 45,
				longitude : 10
			},
			options : {
				streetViewControl : false,
				panControl : false,
				maxZoom : 20,
				minZoom : 3
			},
			zoom : 3,

			events : {
				tilesloaded : function(map, eventName, originalEventArgs) {
				},
				click : function(mapModel, eventName, originalEventArgs) {
					// 'this' is the directive's
					$log.info("user defined event: " + eventName, mapModel, originalEventArgs);

					var e = originalEventArgs[0];
					var lat = e.latLng.lat(), lon = e.latLng.lng();
					console.log("lat:" + lat + ", long:" + lon);
				}
			},
		}
	});
}]);

