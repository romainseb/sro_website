angular.module('website').controller('SroContactController',
    function ($scope, SroContactService) {

        var that = this;

        // states :
        // 0 -> form showned
        // 1 -> form hiddenSuccess
        // 2 -> form hiddenFail
        this.currentState = 0;

        this.submit = function submit() {
            SroContactService.sendMail(this.contact)
                .then(function onSuccess() {
                    that.currentState = 1;
                    $scope.$digest();
                }, function onFail() {
                    that.currentState = 2;
                    $scope.$digest();
                });
        };

    }
);