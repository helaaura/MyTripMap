/**
 * palette album Comtroller
 */
app.controller("paletteAlbumController", ['openModalService', 'getAlbums', function(openModalService, getAlbums) {
	console.log("paletteAlbumController init");

	scope = this;
	this.isFolded = false;
	this.selectedAlbum = {"id": -1};
	getAlbums.async().then(function(albums) {
    scope.albums = albums.data;
  });
  
//  this.selectAlbum = function(album) {
//  	this.selectedAlbum = album;
//  };
  	
	this.changeFolding = function() {
		this.isFolded = !this.isFolded;
	};
	
	this.add = function() {
		// rename methode + type action => add, update + read
		var successAdd = function(newAlbum) {
			console.log("adding album success");
		};
		
		var errorAdd = function(newAlbum) {
			console.log("adding album error");
		};
		
		openModalService("add", 'assets/template/album/updateAlbum.html', 'albumCtrl', successAdd, errorAdd);
	};
	
}]);
