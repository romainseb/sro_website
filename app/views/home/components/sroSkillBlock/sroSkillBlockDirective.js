angular.module('website').directive('sroSkillBlock',
    function () {
        return {
            restrict: "E",
            bindToController: {
                block: "="
            },
            controller: "SroSkillBlockController",
            controllerAs: "sroSkillBlock",
            templateUrl: "app/views/home/components/sroSkillBlock/sroSkillBlock.html",
            scope: true,
            link: function (scope, elem) {
                var onScroll = function onScroll() {
                    scope.offset = elem[0].offsetTop - window.innerHeight;

                    scope.positionY = window.scrollY;
                    if (scope.positionY > scope.offset) {
                        scope.sroSkillBlock.showRange = true;
                        scope.$digest();
                        window.removeEventListener("scroll", onScroll);
                    }
                };
                window.addEventListener("scroll", onScroll);
            }
        };
    }
);