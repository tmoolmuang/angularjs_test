(function(){
	function sharedscopeFunct() {
		return {
			templateUrl: "/templates/directives/sharedscope.html",
			controller: function($scope, $element, $attrs) {
				$scope.changeB = function() {
					$scope.b = 999;
				};
			}
			//this will override parent's $scope.changeB
		};
	}

	function inheritedscopeFunct() {
		return {
			templateUrl: "/templates/directives/sharedscope.html",
			controller: function($scope, $element, $attrs) {
				$scope.changeB = function() {
					$scope.b = 888;
				};
			},
			scope: true
			//this will 'not' override parent's $scope.changeB
			//it will create a brand new scope and use it
		};
	}

  angular
		.module("app")
		.directive("sharedscope", sharedscopeFunct)
		.directive("inheritedscope", inheritedscopeFunct);
})();
