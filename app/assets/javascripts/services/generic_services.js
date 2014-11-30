/**
 * service to get Data from server
 */
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

/**
 * open a modal window service
 */
app.factory("openModalService", ['$modal', function($modal) {
	return function(operation, urlTemplate, controller, successFunction, errorFunction) {
		var modalInstance = $modal.open({
			templateUrl : urlTemplate,
			controller : controller,
			backdrop : 'static',
		});
		modalInstance.result.then(successFunction, errorFunction);
	};
}]);