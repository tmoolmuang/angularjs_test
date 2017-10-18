(function() {
	function sharedScopeCtrlFunct($scope) {
		$scope.a = 100;
		$scope.b = 200;
		$scope.changeB = function() {
			$scope.b = 777;
		};
		//this will be overriden by directive with shared scope anyway
	}

	angular
		.module("app")
		.controller("SharedScopeCtrl", ["$scope", sharedScopeCtrlFunct]);
})();
/*
	Inherited scope will inherit members from parent.
	Until a scope member is re-bound inside the child,
	then a brand new scope is created.

	Otherwise, if no binding happens, we will continue to use parent scopes.

	Directive created with ng-iclude, and ng-repeate also work as inherited scope,
	not shared scope.
*/
