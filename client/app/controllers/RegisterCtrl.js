app.controller('RegisterCtrl', function ($scope, $location, $route, $http) {

$scope.registerUser = () => {
  const user = {
    household: $scope.household,
    email: $scope.email,
    password: $scope.password
  }

    $http
    .post('/api/register', user)
    .then($location.path('/'))
    console.log('user' ,user);
}


  // post('/register', (req, res) => {
  //   console.log( req.body );
  //   Users
  //     .create( req.body )
  //     .then( msg =>  {
  //       res.redirect('/')
  //     })
  // })
})
