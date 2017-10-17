(function() {
	function sharedScopeCtrlFunct($scope) {
		$scope.a = 100;
		$scope.b = 200;
		$scope.changeB = function() {
			$scope.b = 300;
		};
		//this will be overriden by directive $scope.changeB anyway
	}

	angular
		.module("app")
		.controller("SharedScopeCtrl", ["$scope", sharedScopeCtrlFunct]);
})();
