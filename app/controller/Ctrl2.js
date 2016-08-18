(function () {
    'use strict';
    mainapp.controller('Ctrl2', ['$scope', 'ajaxservice', myFunc]);

    function myFunc($scope, ajaxservice) {
        //$scope.name = "ananth";
        $scope.name = "Volvo";
        $scope.Mahesh = {};
        $scope.Mahesh.name = "Mahesh Parashar";
        $scope.Mahesh.rollno = 1;
        
        $scope.Piyush = {};
        $scope.Piyush.name = "Piyush Parashar";
        $scope.Piyush.rollno = 2;
        
        $scope.product1 = {
            name: 'Phone',
            price: '100',
            stock: true
        };
        $scope.product2 = {
            name: 'TV',
            price: '1000',
            stock: false
        };
        $scope.product3 = {
            name: 'Laptop',
            price: '800',
            stock: false
        };
        $scope.ShowData = function () {
            alert("Display Data");
        }
        $scope.teams = {};
        var promise = ajaxservice.employeeObject();
        promise.then(function (data) {
            $scope.teams = data;
           // console.log($scope.teams);
        })
        promise.catch(function (data) {
            //console.log('catch block executed', data);
            return data;
        });
    }
})()
