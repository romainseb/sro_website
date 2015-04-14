angular.module('website').directive('sroResume',
	function (){
		return {
			restrict:"E",
			bindToController : {},
			controller:"SroResumeController",
			controllerAs :"sroResume",
			templateUrl : "app/views/home/components/sroResume/sroResume.html",
			scope : true
		};
	}
);