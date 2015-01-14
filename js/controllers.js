var GuitarControllers = angular.module("GuitarControllers", ['ngAnimate']);

GuitarControllers.controller("ListController", ['$scope','$http',function($scope,$http)
		{    
			$http.get('http://localhost:8732/service1/guitars/0'/*'js/data.json'*/).success(function(data){
				$scope.guitarVariable = data;
				$scope.orderGuitar = 'Name';
		});

		}]
);

GuitarControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	function($scope,$http,$routeParams){
			$http.get('http://localhost:8732/service1/guitars/0'/*'js/data.json'*/).success(function(data){
				$scope.guitarVariable = data;
				$scope.whichGuitar = $routeParams.guitarID;

				/* Guitar details page navigation logic */
                                /* previous button */
				if($routeParams.guitarID > 0)
					$scope.prevGuitar = Number($routeParams.guitarID)-1;
				else
					$scope.prevGuitar = $scope.guitarVariable.length-1;
                                
                                /* next button */
				if($routeParams.guitarID < $scope.guitarVariable.length-1)
					$scope.nextGuitar = Number($routeParams.guitarID)+1;
				else
					$scope.nextGuitar = 0;
 
		});
	}]

);
