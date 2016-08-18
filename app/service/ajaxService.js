(function () {
    'use strict';
    mainapp.service('ajaxservice', ['$http', '$q', myFunc]);

    function myFunc($http, $q) {
        var deferred = $q.defer();
        $http.get('app/data/employee.json')
            .then(function (data) {
                /*optional stuff to do after success */
                deferred.resolve(data);
            });
        this.employeeObject = function () {
            return deferred.promise;
        }
    }
})()
