app.factory("saveLocation", ["$http", function($http) {
	return function(newLocation, newAlbum) {
		console.log(newLocation);
		var postResult = $http.post("/locations", newLocation);
		postResult.success(function(data, status, headers, config) {
			console.log("add location success");
			saveAlbum(newAlbum);
		});
		postResult.error(function(data, status, headers, config) {
			console.log("add location error");
			//TODO notif add/update error
		});
	};
}]);

