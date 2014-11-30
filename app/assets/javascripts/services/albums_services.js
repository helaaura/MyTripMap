
/**
 * Service that saves album
 */
app.factory("saveAlbum", ["$http", function($http) {
	return function(newAlbum) {
		console.log(newAlbum);
		var postResult = $http.post("/api/albums.json", newAlbum);
		postResult.success(function(data, status, headers, config) {
			console.log("add album success");
			//TODO notif add/update success
		});
		postResult.error(function(data, status, headers, config) {
			console.log("add album error");
			//TODO notif add/update error
		});
	};
}]);

/**
 * Service get albums
 */
app.factory("getAlbums", ["$http", function($http) {
	var getAlbums = {
    async: function() {
			var promiseResult = $http.get("/api/albums.json").then(function(data, status, headers, config) {
				console.log("get albums success");
				console.log(data);
				return data;
			});
			return promiseResult;
		}
	};
	return getAlbums;
}]);
