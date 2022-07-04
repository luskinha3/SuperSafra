angular.module("SuperSafra").controller("buscaHeroisCtrl", function($scope, $routeParams, herois){

    $scope.herois = herois.data.data.results;
    
});