'use strict';

angular.module('people')
  .factory('Peopleservice', function Peopleservice($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        function getPeople(){
            var deferred = $q.defer();
            var peopleUrl = '/api/people';
            $http.get(peopleUrl).then(function(response){
                deferred.resolve(response);
            });
            return deferred.promise;
        }

        return {
            getPeople: getPeople
        }
  });
