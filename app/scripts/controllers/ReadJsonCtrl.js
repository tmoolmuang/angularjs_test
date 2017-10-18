(function() {
	function readJsonCtrlFunct($scope) {
		$scope.array = GETJSON();
	}

	angular
		.module("app")
		.controller("ReadJsonCtrl", ["$scope", readJsonCtrlFunct]);
})();
