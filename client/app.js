'use strict';

angular.module('fyle', [
  'ngRoute',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
