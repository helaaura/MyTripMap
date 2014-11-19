app.controller("paletteAlbumController", ['openModalService', function(openModalService) {
	this.isFolded = false;
	this.showClickCoordinates = false;
	var paletteCtrl = this;
	this.changeFolding = function() {
		this.isFolded = !this.isFolded;
	};
	
	this.add = function() {
		// rename methode + type action => add, update + read
		var successAlbum = function(newAlbum) {
			//TODO inform user to click on the map to select a location
			var successLocationCoordinates = function(newLocationCoordinates) {
				var successLocation = function(newLocation) {
						newLocation.longitude = newLocationCoordinates.longitude;
						newLocation.latitude = newLocationCoordinates.latitude;
						console.log(newAlbum);
						console.log(newLocation);
//TODO			saveLocation(newLocation, newAlbum);
					};
					var errorLocation = function(newLocation) {
						console.log('Modal dismissed close: ' + newLocation);
					};
				openModalService("add", 'assets/template/createLocation.html', 'locationCtrl', successLocation, errorLocation);
			};
			
			var errorLocationCoordinates = function(newLocationCoordinates) {
				console.log('Modal dismissed close: ' + newLocationCoordinates);
			};
			paletteCtrl.showClickCoordinates = true;
//			openModalService("add", 'assets/template/createLocationCoordinates.html', 'locationCoordinatesCtrl', successLocationCoordinates, errorLocationCoordinates);
		};
		
		var errorAlbum = function(newAlbum) {
			console.log('Modal dismissed close: ' + newAlbum);
		};
		
		openModalService("add", 'assets/template/updateAlbum.html', 'albumCtrl', successAlbum, errorAlbum);
	};
}]);

app.controller("albumCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
	$scope.save = function() {
		$modalInstance.close(this.newAlbum);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);

app.controller("locationCtrl", ["$scope", "$modalInstance", function($scope, $modalInstance) {
	$scope.save = function() {
		$modalInstance.close(this.newLocation);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);

app.controller("locationCoordinatesController", ["$scope", function($scope) {
	this.hasCoordinates = false;
	this.coordinates = {};
	var scopeLocationCoordinatesCtrl = this;
			// console.log($scope.tripMapCtlr.clickCoordinates);
// 	
	// $scope.$watch('tripMapCtlr.clickCoordinates',	function(newValue) {
			// scopeLocationCoordinatesCtrl.hasCoordinates = true;
			// scopeLocationCoordinatesCtrl.coordinates = newValue;
			// console.log(newValue);
		// });
//	.tripMapCtlr.
	
	this.save = function() {
		paletteAlbumCtrl.showClickCoordinates = false;
//		$modalInstance.close(this.newLocationCoordinates);
	};
	this.cancel = function() {
//		$modalInstance.dismiss('cancel');
	};
}]);

app.factory("getData", [function() {
	return function() {
		console.log("aa");
		postResult.success(function(data, status, headers, config) {
			console.log(" success");
		});
		postResult.error(function(data, status, headers, config) {
			console.log(" error");
		});
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

app.factory("openModalService", ['$modal', function($modal) {
	return function(newAlbum, urlTemplate, controller, successFunction, errorFunction) {
		var modalInstance = $modal.open({
			templateUrl : urlTemplate,
			controller : controller,
			backdrop : 'static',
		});
		modalInstance.result.then(successFunction, errorFunction);
	};
}]);


app.controller("paletteImageController", [function($modal) {
	this.isFolded = false;
	this.changeFolding = function() {
		this.isFolded = !this.isFolded;
	};
	this.add = function() {
		console.log($scope.type);
	};
}]);