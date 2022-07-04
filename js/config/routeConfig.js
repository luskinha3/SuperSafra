angular.module("SuperSafra").config( function($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "view/herois.html",
        controller: "chamaHeroisCtrl",
        resolve: {
           herois : function (marvelAPI){
            return marvelAPI.getHerois();
           } 
        }
    });
    $routeProvider.when('/buscar/:busca',{
        templateUrl: "view/herois.html",
        controller: "buscaHeroisCtrl",
        resolve: {
            herois : function (marvelAPI,$route){
             return marvelAPI.getHeroisStartWith($route.current.params.busca);
            } 
         }
    });
    $routeProvider.when('/detalhes/:id',{
        templateUrl: "view/detalhes.html",
        controller: "detalhesCtrl",
        resolve: {
            heroi: function (marvelAPI,$route){
                return marvelAPI.getHeroisById($route.current.params.id);
            }
        }
    });
    $routeProvider.otherwise({redirectTo: "/"}); 

 });