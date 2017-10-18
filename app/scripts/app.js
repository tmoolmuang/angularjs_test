(function() {
	function initFunct($rootScope) {
		$rootScope.hometown = "Springfield";
		$rootScope.tax = 25;
	}

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
			})
			.state("page2", {
				url: "/page2",
				templateUrl: "templates/page2.html"
			})
			.state("page3", {
				url: "/page3",
				templateUrl: "templates/page3.html",
				controller: "Page3Ctrl"
			})
			.state("directive1", {
				url: "/directive1",
				templateUrl: "templates/directive1.html"
			})
			.state("watcher1", {
				url: "/watcher1",
				templateUrl: "templates/watcher1.html",
				controller: "Watcher1Ctrl"
			})
			.state("digest", {
				url: "/digest",
				templateUrl: "templates/digest.html",
				controller: "DigestCtrl"
			})
			.state("sharedscope", {
				url: "/sharedscope",
				templateUrl: "templates/sharedscope.html",
				controller: "SharedScopeCtrl"
			})
			.state("readjson", {
				url: "/readjson",
				templateUrl: "templates/readjson.html",
				controller: "ReadJsonCtrl"
			});
	}

	angular
  	.module("app", ["ui.router"]).run(["$rootScope", initFunct])
    .config(configFunct);
})();
