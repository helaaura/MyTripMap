
app.directive("palette", function() {
	return {
		restrict: "E",
		templateUrl: "assets/template/palette.html",
		
		controller: function() {
			this.isFolded = false;
			this.changeFolding = function() {
				this.isFolded = !this.isFolded;
			};
		},
		controllerAs: "foldingCtrl"
	};
});

