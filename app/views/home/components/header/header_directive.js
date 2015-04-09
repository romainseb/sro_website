angular.module('website').directive('swHeader', function () {
    return {
        restrict: 'E',
        bindToController: {},
        controller: "HeaderController",
        controllerAs: "header",
        templateUrl: 'app/views/home/components/header/header.html',
        scope: true
    };
});