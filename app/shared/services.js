var services = angular.module('phonecat-services', []);


services.factory("PhoneProvider", function($q, $http){
    return {
        /*----------------Get all the Phones from the JSON START------------------*/
        getPhones: function(){
             var deferred = $q.defer();
             $http.get('data/phones.json').success(function(data, status) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject(data);
            });

            return deferred.promise;
        },
        /*----------------Get all the Phones from the JSON END------------------*/
        
        /*----------------Get Phones Details from the JSON START------------------*/
        getPhonesDetails: function(phoneId){
                var deferred = $q.defer();
                $http.get('data/'+phoneId+'.json').success(function(data, status) {
                    deferred.resolve(data);
                }).error(function(data, status) {
                    deferred.reject(data);
                });
    
                return deferred.promise;
               
        }
        /*----------------Get Phones Details from the JSON End------------------*/
    }
});
