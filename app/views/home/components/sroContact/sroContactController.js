angular.module('website').controller('SroContactController',
    function ($scope, SroContactService) {

        var that = this;

        // states :
        // 0 -> form showned
        // 1 -> form waiting
        // 2 -> form hiddenSuccess
        // 3 -> form hiddenFail
        this.currentState = 0;

        this.isDefined = function isDefined(prop) {
            return (prop !== undefined && prop !== null && prop !== "");
        };

        this.submit = function submit() {

            if (
                this.isDefined($scope.sroContact.contact.name) &&
                this.isDefined($scope.sroContact.contact.email) &&
                this.isDefined($scope.sroContact.contact.content)
            ) {
                that.currentState = 1;

                SroContactService.sendMail(this.contact)
                    .then(function onSuccess() {
                        that.currentState = 2;
                    }, function onFail() {
                        that.currentState = 3;
                    });
            }

        };
    }
);