angular.module('games')
.controller('GameViewController', 
    ['$scope', '$meteor',
    function($scope, $meteor) {
        $scope.games = $meteor.collection(Games).subscribe('games');
    }
]);