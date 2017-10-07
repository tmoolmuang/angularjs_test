(function() {
	function watcher1CtrlFunct($scope) {
		$scope.a = "aaa";
		$scope.b = "bbb";
		$scope.resultA = "-- none --";
		console.log($scope.b);

		$scope.changeA = function() {
			$scope.resultA = "a has changed!";
		};

		$scope.changeB = function() {
			$scope.b = "new bee";
			console.log($scope.b);
		};

		$scope.$watch("b", function(newVal, oldVal) {
			if (newVal != oldVal) {
				$scope.resultB = "b has changed!";
			}
		});

		///////////////////////////
		$scope.x = "xxx";
		$scope.y = "yyy";
		$scope.z = "zzz";
		console.log($scope.y);

		$scope.changeY = function() {
			$scope.y = "new why";
			console.log($scope.y);
		};

		$scope.$watchGroup(["x", "y", "z"], function(newVal, oldVal) {
			if (newVal != oldVal) {
				$scope.resultXYZ = "either x, y, or z has changed!";
			}
		});


	}

	angular
		.module("app")
		.controller("Watcher1Ctrl", ["$scope", watcher1CtrlFunct]);
})();
