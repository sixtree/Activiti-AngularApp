angular.module('activitiApp')
  .factory('AuthService', function($http, Base64) {
    return {
      authenticate: function(username, password) {
        return $http.post('/ee/authentication',
        {
          j_username: username,
          j_password: password,
          _spring_security_remember_me: true,
          submit: 'Login'
        },
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded' },
          transformRequest: function(obj) {
            var str = [];
            for (var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          }
        });
      }
    }
  });
