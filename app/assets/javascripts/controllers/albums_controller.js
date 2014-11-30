// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/**
 * template/album/updateAlbum.html Controller
 */
app.controller("albumCtrl", ["$scope", "$modalInstance", "saveAlbum", function($scope, $modalInstance, saveAlbum) {
	console.log("albumCtrl init");
	
	$scope.save = function() {
		$modalInstance.close(this.newAlbum);
		saveAlbum(this.newAlbum);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
}]);

