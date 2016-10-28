'use strict'

angular.module('brownii', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'LoginCtrl',
        templateUrl: 'partials/main.html'
      })
  })
