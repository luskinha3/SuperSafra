angular.module("SuperSafra").controller("SuperSafraCtrl", function($scope, marvelAPI, herois){
	console.log(herois);
	$scope.herois = herois.data.data.results;
	$scope.heroiById = '';


	$scope.chamaHeroiById = function(id){

		marvelAPI.getHeroisById(id).then(function sucessCallback(response){
			console.log(response.data);
			$scope.heroiById = response.data.data.results;
		}).catch(function errorCallback(response){
			console.log(`Error: `,response)
		});
	};
			

});