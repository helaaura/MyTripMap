// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/**
 * template/album/album-row.html
 */
app.directive('album', [function(){
	return{
		restrict: 'E',
		templateUrl: 'assets/template/album/album-row.html',
		controller: function($scope) {
			console.log("albumRowCtrl init");
			this.isSelected = false;
			
			this.updateIsSelected = function() {
				this.isSelected = $scope.paletteAlbumCtrl.selectedAlbum.id === $scope.album.id;
				console.log("updateIsSelected");
			};

			this.selectRow = function() {
				this.isSelected = true;
				$scope.paletteAlbumCtrl.selectedAlbum = $scope.album;
				console.log("selectRow");
			};
			
			$scope.$watch('isSelected', function (newVal, oldVal) {
				console.log("selectedId");
        if (!newVal) return;
        
				console.log($scope.paletteAlbumCtrl.selectedAlbum.id + " ?=== " + $scope.album.id);
        updateIsSelected();
    	});

		},
	controllerAs: 'albumRowCtrl'
	};
}]);
