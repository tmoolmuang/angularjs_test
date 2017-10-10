(function() {
	function sharedScopeCtrlFunct($scope) {
		$scope.a = 100;
	}

	angular
		.module("app")
		.controller("SharedScopeCtrl", ["$scope", sharedScopeCtrlFunct]);
})();
