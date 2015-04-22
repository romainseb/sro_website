angular.module('website').directive('sroStudies',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SroStudiesController",
			controllerAs :"sroStudies",
			templateUrl : "app/views/home/components/sroStudies/sroStudies.html",
			scope : true
		};
	}
);