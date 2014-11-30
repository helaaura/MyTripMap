/**
 * Service that saves picture
 */
app.factory("savePicture", ["$http", function($http) {
	return function(newPicture) {
		console.log(newPicture);
		var postResult = $http.post("api/albums/1/pictures.json", newPicture);
		postResult.success(function(data, status, headers, config) {
			console.log("add picture success");
			//TODO notif add/update success
		});
		postResult.error(function(data, status, headers, config) {
			console.log("add picture error");
			//TODO notif add/update error
		});
	};
}]);


/**
 * Service get pictures
 */
app.factory("getPictures", ["$http", function($http) {
	var getPictures = {
    async: function() {
			var promiseResult = $http.get("/api/albums/1/pictures.json").then(function(data, status, headers, config) {
				console.log("get pictures success");
				console.log(data);
				return data;
			});
			return promiseResult;
		}
	};
	return getPictures;
}]);
