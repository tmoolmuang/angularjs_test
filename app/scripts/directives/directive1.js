(function(){
	function dirFunct() {
		return {
			template: "<span>This is my in-line directive <strong>template:</strong></span>"
		};
	}

	function dir1Funct() {
		return {
			templateUrl: "dir1.html"
		};
	}

	function dir2Funct() {
		return {
			templateUrl: "/templates/directives/dir2.html"
		};
	}

  angular
		.module("app")
		.directive("dir", dirFunct)
    .directive("dir1", dir1Funct)
    .directive("dir2", dir2Funct);
})();
