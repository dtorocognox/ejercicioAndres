var app = angular.module('miTienda', []);

app.controller('TiendaController', function ($scope, $http) {
	$http.get('package.json')
		.success( function (data) {
		$scope.articulo = data;
	});
});