angular.module("SuperSafra").factory("marvelAPI", function($http, configuracoes) {

	const ts = configuracoes.timeStamp;
	const apiKey = configuracoes.apiKey;
	const hash = configuracoes.hash;

	var _getHeroisStartWith = function (busca){
		return $http({
			method:'GET',
			url: configuracoes.baseUrl + `?nameStartsWith=${busca}&limit=100&ts=${ts}&apikey=${apiKey}&hash=${hash} `
		});
	};

	var _getHeroisById = function (id) {
		return $http({
			method:'GET',
			url: configuracoes.baseUrl + `/${id}&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		})
	}

	return {
		getHeroisStartWith: _getHeroisStartWith,
		getHeroisById: _getHeroisById
	};
});