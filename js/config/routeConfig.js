angular.module("SuperSafra").config( function($routeProvider) {
    $routeProvider.when("/herois", {
        templateUrl: "view/herois.html",
        controller: "SuperSafraCtrl",
        resolve: {
            herois: function (marvelAPI){
                return marvelAPI.getHeroisStartWith(busca);              
            }
        }
    });
 });