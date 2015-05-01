angular.module('website').directive('sroFooter',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SroFooterController",
			controllerAs :"sroFooter",
			templateUrl : "app/views/home/components/sroFooter/sroFooter.html",
			scope : true
		};
	}
);