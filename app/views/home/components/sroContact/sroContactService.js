angular.module('website').service('SroContactService',
    function ($http, $q) {

        this.sendMail = function sendMail(contact) {

            var deferred = $q.defer();

            $http.post('/contact', contact).
                success(function () {
                    deferred.resolve();
                }).
                error(function () {
                    deferred.reject();
                });

            return deferred.promise;
        };

    }
);