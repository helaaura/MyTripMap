// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/**
 * template/picture/picture-row.html
 */
app.directive('picture', function(){
	return{
		restrict: 'E',
		templateUrl: 'assets/template/picture/picture-row.html',
		controller: function() {
			console.log("pictureRowCtrl init");
//			this.name="my name";
//			this.comment="my comment";
		},
	controllerAs: 'pictureRowCtrl'
	};
});
