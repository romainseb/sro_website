angular.module('website').controller('SroStudiesController',
    function (SroStudiesService) {

        this.studies = SroStudiesService.getStudies();

    }
);