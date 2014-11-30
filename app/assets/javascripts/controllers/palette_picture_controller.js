/**
 * palette picture Comtroller
 */
app.controller("palettePictureController", ['openModalService', 'getPictures', function(openModalService, getPictures) {
	console.log("palettePictureController init");
	this.isFolded = false;
	scopePicture = this;
	getPictures.async().then(function(pictures) {
    scopePicture.pictures = pictures.data;
  });	
  
	this.changeFolding = function() {
		this.isFolded = !this.isFolded;
	};

	this.add = function() {
		console.log("add img");
		// rename methode + type action => add, update + read
		var successAdd = function(newPicture) {
			console.log("adding picture success");
		};
		
		var errorAdd = function(newPicture) {
			console.log("adding picture error");
		};
		
		openModalService("add", 'assets/template/picture/updatePicture.html', 'pictureCtrl', successAdd, errorAdd);
	};
}]);