angular.module('games', ['angular-meteor', 'ui.router']);

angular.module('games').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('gameview', {
            templateUrl: 'client/templates/gameview.ng.html',
            controller: 'GameViewController'
        })
        .state('gameview.lobby', {
            url: '^/',
            templateUrl: 'client/templates/lobby.ng.html',
            controller: 'LobbyController'
        })

    $urlRouterProvider.otherwise("/");

}]);