angular.module('website').controller('SroContactController',
    function ($scope, SroContactService) {

        var that = this;

        // states :
        // 0 -> form showned
        // 1 -> form waiting
        // 2 -> form hiddenSuccess
        // 3 -> form hiddenFail
        this.currentState = 0;

        this.submit = function submit() {

            that.currentState = 1;

            SroContactService.sendMail(this.contact)
                .then(function onSuccess() {
                    that.currentState = 2;
                }, function onFail() {
                    that.currentState = 3;
                });
        };
    }
);