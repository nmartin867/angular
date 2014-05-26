angular.module('people').controller('PeopleCtrl', function ($scope) {
    $scope.people = [
        {'name': 'Matt', 'detail': 'Trains to kick people in the dome piece.', isHippie: false},
        {'name': 'Ben', 'detail': 'Can speak some English but is fluent in Bengenese', isHippie: false},
        {'name': 'Greg', 'detail': 'Rarely has opinions on trivial topics such as bracket placement.', isHippie: true}
    ];

    $scope.removePerson = function (person) {
        var people = angular.copy($scope.people, []);
        angular.forEach($scope.people, function (value, index) {
            if (value.name === person.name) {
                people.splice(index, 1);
                $scope.people = people;
            }
        });
    };
});