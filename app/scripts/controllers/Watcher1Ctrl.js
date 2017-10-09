(function() {
	function watcher1CtrlFunct($scope) {
		$scope.a = "aaa";
		$scope.resultA = "-- none --";

		$scope.changeA = function() {
			$scope.resultA = "a has changed!";
		};

		////////////////////////////////
		$scope.b = "bbb";
		console.log($scope.b);

		$scope.changeB = function() {
			$scope.b = "new bee";
			console.log($scope.b);
		};
		$scope.resultB = "-- none --";

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
		$scope.resultXYZ = "-- none --";

		$scope.$watchGroup(["x", "y", "z"], function(newVal, oldVal) {
			if (newVal != oldVal) {
				$scope.resultXYZ = "either x, y, or z has changed!";
			}
		});

		///////////////////////////
		$scope.aa = { a1: "my aa1",
								  a2: "my aa2",
								  a3: "my aa3" };
		console.log($scope.aa);

		$scope.changeAAref = function() {
			$scope.aa.a2 = "new a2";
			console.log($scope.aa);
		};
		$scope.resultAA = "-- none --";

		$scope.$watch("aa", function(newVal, oldVal) {
			if (newVal != oldVal) {
				$scope.resultAA = "aa has changed!";
			}
		}, true); // true for equality watch

	}

	angular
		.module("app")
		.controller("Watcher1Ctrl", ["$scope", watcher1CtrlFunct]);
})();
