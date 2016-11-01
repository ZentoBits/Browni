app.controller('LoginCtrl', function ($scope, $location, $route, $http) {

  $scope.loginUser = () => {
    const user = {
      email: $scope.email,
      password: $scope.password
    }

    $http
    .post('/api/', user)
    .then($location.path('/profile'))
  }
})
