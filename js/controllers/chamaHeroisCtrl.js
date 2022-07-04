angular.module("SuperSafra").controller("chamaHeroisCtrl", function($scope, marvelAPI, herois, $routeParams){
	
	console.log(herois.data);
	$scope.herois = herois.data.data.results;
	
					

});