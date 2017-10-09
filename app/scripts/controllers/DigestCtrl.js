(function() {
	function digestCtrlFunct($scope) {
		myScope = $scope;
		$scope.a = "old value";
	}

	angular
		.module("app")
		.controller("DigestCtrl", ["$scope", digestCtrlFunct]);
})();

var myScope;
var changeA = function() {
	// myScope.$apply(function() {
  //   myScope.a = "new value";
	// });

	myScope.a = "new value";
	myScope.$digest();
};

/* 	$apply will digest all scopes starting with rootscope
		and you can specify custom function
		$digest will digest only current scope (and child scopes, if exist).
		But better efficiency.
*/
