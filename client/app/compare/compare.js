'use strict';

angular.module('noorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('compare', {
        url: '/compare',
        templateUrl: 'app/compare/compare.html',
        controller: 'CompareCtrl'
      });
  });