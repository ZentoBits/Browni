'use strict'

const app = angular.module('brownii', ['ngRoute', 'ngAnimate'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'LoginCtrl',
        templateUrl: 'partials/main.html'
      })
      .when('/register', {
        controller: 'RegisterCtrl',
        templateUrl: 'partials/register.html'
      })
      .when('/profile', {
        controller: 'ProfileCtrl',
        templateUrl: 'partials/profile.html'
      })
      .when('/tasks', {
        controller: 'TasksCtrl',
        templateUrl: 'partials/tasks.html'
      })
      .when('/rewards', {
        controller: 'RewardsCtrl',
        templateUrl: 'partials/rewards.html'
      })
  })
