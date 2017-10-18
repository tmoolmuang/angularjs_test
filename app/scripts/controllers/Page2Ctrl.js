(function() {
	function parentFunct($scope) {
		$scope.name = "Homer";
		$scope.lastname = "Simpson";
		$scope.obj = {
			"a": 100
		};
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

/*
	$scope.food is rebound at the child scope. So it will create a brand new scope
	independent to parent's $scope.food

	But it will not work for object member, obj.a
*/
