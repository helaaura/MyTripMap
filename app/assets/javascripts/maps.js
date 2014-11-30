/**
 * Trip Map App
 */
var app = angular.module("my-trip-maps", ["google-maps".ns(), "ngAnimate", "ui.bootstrap"]).config(['GoogleMapApiProvider'.ns(),
function(GoogleMapApi) {
	GoogleMapApi.configure({
		key : 'AIzaSyB8RMXnE6nvNAklrNaxlBWBqQoD3LZtJ9I',
		v : '3.17',
		libraries : 'weather,geometry,visualization'
	});
}]);

//TOSEE
// log.info(map);
// log.debug(uuid);
// log.error(mapInstanceNumber);