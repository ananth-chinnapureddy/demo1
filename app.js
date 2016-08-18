var mainapp = angular.module('myapp', ['ui.router', 'ngMessages', 'pascalprecht.translate']);
(function () {
    'use strict';
    mainapp.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', 'mainappConstant', myConfigFun]);

    function myConfigFun($stateProvider, $urlRouterProvider, $translateProvider, mainappConstant) {
        $translateProvider.useStaticFilesLoader({
            prefix: mainappConstant.localFilePath + 'locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('fr');
        $urlRouterProvider.otherwise('/state1');
        $stateProvider.state(mainappConstant.state1filepath, {
                url: '/state1',
                templateUrl: mainappConstant.filesPath + 'state1.html',
                controller: 'Ctrl1'
            })
            .state(mainappConstant.state2filepath, {
                url: '/state2',
                templateUrl: mainappConstant.filesPath + 'state2.html',
                controller: 'Ctrl2'
            })
            .state(mainappConstant.state3filepath, {
                url: '/state3',
                templateUrl: mainappConstant.filesPath + 'state3.html',
                controller: 'Ctrl3'
            })
            .state(mainappConstant.landing, {
                url: '/landingpage',
                templateUrl: mainappConstant.filesPath + 'landingpage.html',
            })
    }
    mainapp.run(['$rootScope', '$log', myRunFn]);

    function myRunFn($rootScope, $log) {
        $log.debug('app started.');
    }
})();
