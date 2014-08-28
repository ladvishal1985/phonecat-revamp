'use strict';

var phoneCatApp = angular.module('phonecatRevampApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'phonecat-animations',
    'phonecat-services',
    'phonecat-filters',
    'phonecat-directives',
    'shared-logger'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/phones', {
        templateUrl: 'views/detail-page.html',
        controller: 'PhoneListCtrl'
      })
      /*.when('/phones/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })*/
      .otherwise({
        redirectTo: '/phones'
      });
  });
