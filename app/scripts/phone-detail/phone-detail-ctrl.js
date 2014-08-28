phoneCatApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'PhoneProvider', function ($scope, $routeParams, $PhoneProvider) {
    
      function getPhoneDetail(phoneId){
            $PhoneProvider. getPhonesDetails(phoneId).then(function(data){
                $scope.phone = data;
                $scope.mainImageUrl = data.images[0];
            },
            function(errorMessage){
              $scope.error=errorMessage;
            });
      };
      getPhoneDetail($routeParams.phoneId);
  }]);