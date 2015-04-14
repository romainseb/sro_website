angular.module('website').directive('sroHeader', function () {
    return {
        restrict: 'E',
        bindToController: {},
        controller: "SroHeaderController",
        controllerAs: "sroHeader",
        templateUrl: 'app/views/home/components/sroHeader/sroHeader.html',
        scope: true
    };
});