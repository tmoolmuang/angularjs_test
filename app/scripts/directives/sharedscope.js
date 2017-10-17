(function(){
	function sharedscopeFunct() {
		return {
			templateUrl: "/templates/directives/sharedscope.html",
			controller: function($scope, $element, $attrs) {
				$scope.changeB = function() {
					$scope.b = 999;
				};
				//this will be override parent's $scope.changeB
			}
		};
	}

  angular
		.module("app")
		.directive("sharedscope", sharedscopeFunct);
})();
