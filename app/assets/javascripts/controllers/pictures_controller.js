// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/**
 * template/picture/updatePicture.html Controller
 */
app.controller("pictureCtrl", ["$scope", "$modalInstance", "savePicture", function($scope, $modalInstance, savePicture) {
		console.log("pictureCtrl init");
	$scope.save = function() {
		$modalInstance.close(this.newPicture);
		savePicture(this.newPicture);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}]);
