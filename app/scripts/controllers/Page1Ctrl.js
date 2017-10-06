(function() {
	function p1CtrlFunct() {
		this.title = "Area of a rectangle";
		this.width = 2;
		this.height = 3;
		this.area = function() {
			return this.width * this.height;
		};
	}

	angular
		.module("app")
		.controller("Page1Ctrl", p1CtrlFunct);
})();
