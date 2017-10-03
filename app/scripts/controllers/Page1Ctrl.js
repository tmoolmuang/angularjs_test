(function() {
	function p1CtrlFunct($scope) {
		$scope.hello = "Hello World";
	}

	angular
		.module("app")
		.controller("Page1Ctrl",  ["$scope", p1CtrlFunct]);
})();