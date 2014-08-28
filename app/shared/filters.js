'use strict';

/* Filters */

var phoneCatFilters = angular.module('phonecat-filters', []);
phoneCatFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});