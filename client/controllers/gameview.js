angular.module('games')
.controller('GameViewController', 
    ['$meteor',
    function($meteor) {
        var vm = this;
        vm.games = $meteor.collection(Games).subscribe('games');
        vm.users = $meteor.collection(function() {
            return Meteor.users.find({"status.online": true});
        }, false).subscribe('users');
        console.log(vm.users)
        console.log(Meteor.users)
    }
]);