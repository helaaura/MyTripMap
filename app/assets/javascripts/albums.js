
app.controller("albumCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
		console.log("albumCtrl init");
	$scope.save = function() {
		$modalInstance.close(this.newAlbum);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);


app.factory("saveAlbum", ["$http", function($http) {
	return function(newAlbum) {
		console.log(newAlbum);
		var postResult = $http.post("/locations", newAlbum);
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
