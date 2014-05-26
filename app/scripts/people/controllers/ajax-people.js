'use strict';

angular.module('people').controller('AjaxPeopleCtrl', ['$scope', 'Peopleservice', function ($scope, peopleService) {
        $scope.getPeople = function(){
            peopleService.getPeople().then(function(response){
                $scope.people = response.data;
            });
        }
  }]);
