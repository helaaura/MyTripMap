
app.directive("palette", function() {
	return {
		restrict: "E",
		templateUrl: "assets/template/palette.html",
		
		controller: function($scope) {
			this.isFolded = false;
			this.changeFolding = function() {
				console.log($scope.type);
				console.log($scope.type === 'album');
				console.log($scope.type === 'image');
				this.isFolded = !this.isFolded;
			};
			this.isForAlbum = $scope.type == 'album';
			this.isForImage = $scope.type == 'image';
			
		},
		controllerAs: "paletteCtrl",
		transclude: true,
		scope: {
			type: '@'
		}
	};
});

