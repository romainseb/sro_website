angular.module('website').directive('about', function () {
    return {
        restrict: 'E',
        bindToController: {},
        controller: "AboutController",
        controllerAs: "about",
        templateUrl: 'app/views/home/components/about/about.html',
        scope: true
    };
});