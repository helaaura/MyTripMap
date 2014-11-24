// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

app.controller("coordinatesController", ["$scope", function($scope) {
	console.log("locationCoordinatesController init");
	this.hasCoordinates = false;
	this.coordinates = {};
	// var scope = this;
			// console.log($scope.tripMapCtlr.clickCoordinates);
// 	
	// $scope.$watch('tripMapCtlr.clickCoordinates',	function(newValue) {
			// scope.hasCoordinates = true;
			// scope.coordinates = newValue;
			// console.log(newValue);
		// });
//	.tripMapCtlr.
	
	this.save = function() {
		console.log("save =>");
//		paletteAlbumCtrl.showClickCoordinates = false;
//		$modalInstance.close(this.newLocationCoordinates);
	};
	this.cancel = function() {
		console.log("cancel =>");
//		console.log($scope.tripMapCtl);
//		$modalInstance.dismiss('cancel');
	};
}]);

app.controller("locationCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
		console.log("locationCtrl init");
	$scope.save = function() {
		$modalInstance.close(this.newLocation);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);

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



