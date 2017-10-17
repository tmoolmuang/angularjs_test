(function(){
	function dirFunct() {
		return {
			template: "<div>This content is from in-line directive <strong>template:</strong></div>"
		};
	}

	function dir1Funct() {
		return {
			templateUrl: "dir.html"
		};
	}

	function dir2Funct() {
		return {
			templateUrl: "/templates/directives/directive.html"
		};
	}

  angular
		.module("app")
		.directive("dir", dirFunct)
    .directive("dir1", dir1Funct)
    .directive("dir2", dir2Funct);
})();
