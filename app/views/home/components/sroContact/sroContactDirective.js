angular.module('website').directive('sroContact',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SroContactController",
			controllerAs :"sroContact",
			templateUrl : "app/views/home/components/sroContact/sroContact.html",
			scope : true
		};
	}
);