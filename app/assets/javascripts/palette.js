app.controller("paletteAlbumController", ['openModalService', function(openModalService) {
		console.log("paletteAlbumController init");
	this.isFolded = false;
	this.showClickCoordinates = false;
	var scopePaletteCtrl = this;
	this.changeFolding = function() {
		this.isFolded = !this.isFolded;
	};
	
	this.add = function() {
		// rename methode + type action => add, update + read
		var successAlbum = function(newAlbum) {
			console.log("adding album");
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
			scopePaletteCtrl.showClickCoordinates = true;
//			openModalService("add", 'assets/template/createLocationCoordinates.html', 'locationCoordinatesCtrl', successLocationCoordinates, errorLocationCoordinates);
		};
		
		var errorAlbum = function(newAlbum) {
			console.log('Modal dismissed close: ' + newAlbum);
		};
		
		openModalService("add", 'assets/template/updateAlbum.html', 'albumCtrl', successAlbum, errorAlbum);
	};
}]);

app.factory("getData", [function() {
	return function() {
		console.log("factory => getData");
		postResult.success(function(data, status, headers, config) {
			console.log(" success");
		});
		postResult.error(function(data, status, headers, config) {
			console.log(" error");
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