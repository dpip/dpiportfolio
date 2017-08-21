"use strict";


var dpip = angular.module('dpip', ['ngRoute'])

dpip.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

    .when ('/land', {
      templateUrl: 'land.html',
      controller: 'LandController'
    })
    .when ('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController'
    })
    .when ('/work', {
      templateUrl: 'work.html',
      controller: 'WorkController'
    })
    .otherwise ({
      redirectTo: '/about'
    });



}]);
