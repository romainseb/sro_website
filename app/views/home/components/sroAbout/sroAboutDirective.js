angular.module('website').directive('sroAbout',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SroAboutController",
			controllerAs :"sroAbout",
			templateUrl : "app/views/home/components/sroAbout/sroAbout.html",
			scope : true
		};
	}
);