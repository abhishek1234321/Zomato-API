'use strict';

angular.module('fyle')
  .factory('Zomato', function ($resource) {
    return $resource('/api/zomatos');
  });
