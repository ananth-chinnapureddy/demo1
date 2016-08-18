(function () {
    'use strict';
    mainapp.controller('Ctrl1', ['$scope', '$location', mainCtrl]);

    function mainCtrl($scope, $location) {
        $scope.loginFormAuthencation = function (form) {
            $location.url('/landingpage');
        }
    }
})();
