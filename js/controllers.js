var nameSpace = angular.module("GuitarApp", []);

nameSpace.controller("GuitarFunction", ['$scope','$http',function($scope,$http)
		{    
			$http.get(/*'http://localhost:8732/service1/guitars/0'*/'js/data.json').success(function(data){
				$scope.guitarVariable = data;
		});

		}]
);

nameSpace.controller("GuitarCombo",['$scope','$http',function($scope,$http)
		{    
			$http.get(/*'http://localhost:8732/service1/guitars/0'*/'js/data.json').success(function(data){
				$scope.guitarVariable = data;
		});

		}]
);