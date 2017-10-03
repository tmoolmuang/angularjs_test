(function() {
	function configFunct($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$urlRouterProvider.when('*path', '/');
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "templates/home.html"
			})
			.state("page1", {
				url: "/page1",
				templateUrl: "templates/page1.html",
				controller: "Page1Ctrl"
			});
	}
	
	angular
  	.module("app", ["ui.router"])
    .config(configFunct);
})();