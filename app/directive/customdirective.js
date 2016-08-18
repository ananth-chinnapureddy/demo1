(function () {
    mainapp.directive("ananth", ['mainappConstant', '$location', headerFunction]);

    function headerFunction(mainappConstant, $location) {
        return {
            restrict: "EA",
            replace: true,
            scope: {
                parentdata: '=',
                test: '@',
                myfunc: '&'
            },
            //template: "<div> <p> ravinkdsdshdshdjsh </p> i am  anath </div>",
            templateUrl: mainappConstant.directivesHtmlPath + '/ananth.html',
            link: function (scope, element, attrs) {
                scope.emailStr = "Ravindra";
                scope.myfunc();
                console.log(scope.test, scope.parentdata);
            }
        };
    }
})()
/*function headerFunction(mainappConstant, $location) {
        return {
            restrict: "E",
            template: "{{name}} costs {{price}} $Change name ",
            scope: {
                name: '@',
                price: '@'
            },
            /*      replace: false,
                  template: "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>",
                  //templateUrl: mainappConstant.directivesHtmlPath + '/customdirective.html',
                  //scope:true,
                  scope: { student: "=name" },
                  link: function (scope, element, attrs) {
                      element.html("Student: <b>" + $scope.student.name + "</b> , Roll No: <b>" + $scope.student.rollno + "</b><br/>");
                      element.css("background-color", "#ff00ff");
                  },
                  /* controller: function ($scope, $element, $attrs) {
                       var vm = $scope;
                       vm.signFormData = {};
                       vm.signFormData.userNameStr = 'ananth';
                       vm.signFormData.passwordStr = "reddy";
                       vm.signFormData.emailStr = "ananthreddy@gmail.com";
                       vm.authentitionAction = function (form) {
                           if(form.$valid) {
                               $location.url('/state3');
                           }
                       }
                   } //
                  controller: function ($scope, $element, $attrs) {}  */
/* controller: function ($scope) {
                console.log($scope);
            }
        };*/
