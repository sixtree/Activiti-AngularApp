angular.module('activitiApp').controller('LoginCtrl', function ($scope, $http, AuthService, $rootScope, $location) {
    $rootScope.loggedUser = {

    };
    $scope.username = "admin@app.activiti.com";
    $scope.password = "admin";
    $rootScope.loggedin = false;

    $scope.login = function () {

        AuthService.authenticate($scope.username, $scope.password).success(function(data) {
          $rootScope.loggedin = true;
          $rootScope.username = $scope.username;
          $rootScope.password = $scope.password;
          $location.path('/dashboard');
        }).error(function(data){
          console.log('Invalid login', data);
        });

    };
});
