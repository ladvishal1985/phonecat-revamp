phoneCatApp.config(['LoggerProvider', function(LoggerProvider) {
	   			LoggerProvider.enabled(false);
}]);
phoneCatApp.controller('PhoneListCtrl', ['$scope','PhoneProvider','Logger', function ($scope, $PhoneProvider, $Logger) {
    
    var logger = $Logger.getInstance('phonecatRevampApp');
    logger.log('This is a log');
    logger.warn('warn', 'This is a warn');
    logger.error('This is a {0} error! {1}', [ 'big', 'just kidding' ]);
    logger.debug('debug', 'This is a debug for line {0}', [ 8 ]);
    $scope.selectedItem = {};
    function getPhones(){
        $PhoneProvider.getPhones().then(function(data){
                $scope.phones = data;
            },
            function(errorMessage){
              $scope.error=errorMessage;
            });
        
    };
    getPhones();
    $scope.$on('ItemSelectedEvent', function(event, selectedItem){
        console.log(selectedItem.title);
      }); 
   
}]);