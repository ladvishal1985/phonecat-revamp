var myDirectives = angular.module('phonecat-directives', []);

myDirectives.directive('customList', function() {
  return {
      restrict: 'E',
      replace: 'false',
      scope:{
        phones: '=phoneslist'
      },
      templateUrl: 'shared/directives/custom-list/custom-list.html',
      compile: function(scope, element, attrs){
            //console.log(scope.toString());
      }
  };
});

myDirectives.directive('customCarousel', function($rootScope, $compile) {
    
    return {
      restrict: 'E',
      replace: 'false',
      scope:{
        phones: '=phoneslist'
      },
      /* template:'<ul>'+
                    '<li ng-repeat="phone in phones" >'+
                    '<img ng-src="{{phone.imageUrl}}" ng-click="selection(phone)">'+
                    '</li>'+
                '</ul>',*/
      templateUrl: 'shared/directives/custom-list/custom-carousel.html',
      compile: function(scope, element, attrs){
            var contents = scope.contents().remove();
            var compiledContents;
            return function (scope, iElement, iAttr) {
                if (!compiledContents) {
                    compiledContents = $compile(contents);
                }
                compiledContents(scope, function (clone, scope) {
                    iElement.append(clone);
                });
                scope.selection = function (selectedItem) {
                     $rootScope.$broadcast('ItemSelectedEvent', selectedItem);
                };
            };
      }
  };
});