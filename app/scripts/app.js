'use strict';

var app = angular.module('myApp', ['ngRoute', 'hljs', 'people']);


 app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main'
      })
      .when('/bootstrap', {
        templateUrl: 'partials/bootstrap'
      })
      .when('/modules', {
        templateUrl: 'partials/modules'
      })
      .when('/controllers', {
        templateUrl: 'partials/controllers'
      })
        .when('/controllers/more', {
            templateUrl: 'partials/controllers-more'
        })
        .when('/services', {
            templateUrl: 'partials/services'
        })
        .when('/directives', {
            templateUrl: 'partials/directives'
        })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });