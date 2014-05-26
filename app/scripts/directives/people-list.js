angular.module('myApp').directive('peopleList', function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../scripts/directives/templates/people-list.html',
        scope: {
            people: '='
        },
        link: function (scope, element) {
            element.on('mousedown', function(){
               console.log('Ouch!');
            });

        }
    }

});