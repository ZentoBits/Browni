app.controller('ProfileCtrl', function ($scope, $location, $route, $http) {
  $http.get('/api/user')
  .then( user => {
    console.log(user)
    $scope.user = user.data
    document.getElementById('userGreeting').innerHTML = $scope.user.household
  })

  let plusButton = document.getElementById('plusButton')

  plusButton.addEventListener('click', () => {
    console.log('pressed')
  })

  $scope.registerChild = () => {
    const child = {
      name: $scope.name,
      email: $scope.email,
      password: $scope.password,
      household: $scope.user.household
    }

    $http
    .post('/api/registerChild', child)
    .then( child => {
      $route.reload()
      console.log('child', child)
    })
  }
})
