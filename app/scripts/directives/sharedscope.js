(function(){
	function sharedscopeFunct() {
		return {
			templateUrl: "/templates/directives/ss.html"
		};
	}

  angular
		.module("app")
		.directive("sharedscope", sharedscopeFunct);
})();
