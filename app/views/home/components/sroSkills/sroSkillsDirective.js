angular.module('website').directive('sroSkills',
    function () {
        return {
            restrict: "E",
            bindToController: {},
            controller: "SroSkillsController",
            controllerAs: "sroSkills",
            templateUrl: "app/views/home/components/sroSkills/sroSkills.html",
            scope: true
        };
    }
);