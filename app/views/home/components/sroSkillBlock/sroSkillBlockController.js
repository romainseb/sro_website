angular.module('website').controller('SroSkillBlockController',
    function () {
        this.showRange = false;

        this.getBarColor = function getBarColor(category, technology) {

            var obj = {
                backgroundColor: category.color
            };

            if (this.showRange) {
                obj.width = technology.percent + "%";
            }
            else {
                obj.width = "0";
            }

            return obj;
        };

    }
);