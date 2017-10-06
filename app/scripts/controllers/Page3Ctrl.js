(function() {
	function page3CtrlFunct($scope) {
		$scope.name = "George";
		$scope.hr = 20;
		$scope.doubleHr = function() {
			 $scope.hr *= 2;
		};

		$scope.ot = 2;
		$scope.doubleOt = function() {
			 $scope.ot *= 2;
		};
	}

	angular
		.module("app")
		.controller("Page3Ctrl", ["$scope", page3CtrlFunct]);
})();
// ng-bind, and {{}} = one-way
// ng-model =  two-way
// {{::}} = one-time
