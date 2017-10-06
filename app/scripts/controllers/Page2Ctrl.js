(function() {
	function parentFunct($scope) {
		$scope.name = "Homer";
		$scope.lastname = "Simpson";
	}

	function childFunct($scope, $rootScope) {
		$scope.name = "Bart";
		$scope.childFullName = function() {
			return $scope.name + " " + $scope.lastname + " lives in " + $rootScope.hometown;
		};
		$scope.parentname = $scope.$parent.name;
	}

	angular
		.module("app")
		.controller("parent", ["$scope", parentFunct])
		.controller("child", ["$scope", "$rootScope", childFunct]);
})();
