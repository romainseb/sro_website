// Declare app level module which depends on filters, and services
angular.module('website', [
    //Angular modules
    'ngRoute', 'ngTouch', 'duScroll', 'ui.bootstrap.collapse', "ngAnimate"
]);

angular.module('website').config(function ($animateProvider) {
    $animateProvider.classNameFilter(/angular-animate/);
});