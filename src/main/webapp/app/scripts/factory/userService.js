angular.module('activitiApp').factory('UserService', function ($resource) {
    var data = $resource('/ee/rest/users/:user', {user: "@user"});
    return data;
});
