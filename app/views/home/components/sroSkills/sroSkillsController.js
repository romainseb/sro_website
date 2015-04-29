angular.module('website').controller('SroSkillsController',
    function (SroSkillsService) {
        this.skillCategories = SroSkillsService.getSkills();
    }
)
;