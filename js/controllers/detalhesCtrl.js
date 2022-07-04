angular.module("SuperSafra").controller("detalhesCtrl", function($scope, heroi){
    

    $scope.nome = heroi.data.data.results[0].name;
    $scope.img = heroi.data.data.results[0].thumbnail.path + '.' +
        heroi.data.data.results[0].thumbnail.extension;
    $scope.quadrinhos = heroi.data.data.results[0].comics;

    console.log(heroi.data.data.results);
    console.log(heroi.data.data.results[0].comics.items)
    
    
    
})