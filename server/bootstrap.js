Meteor.startup(function () {
    
    Games.remove({});

    var games = [
        {
            'name': 'Hearts 1',
            'type': 'Hearts'
        },{
            'name': 'Hearts 2',
            'type': 'Hearts'
        },
        {
            'name': 'Hearts 3',
            'type': 'Hearts'
        },{
            'name': 'Hearts 4',
            'type': 'Hearts'
        },
        {
            'name': 'Hearts 5',
            'type': 'Hearts'
        },{
            'name': 'Hearts 6',
            'type': 'Hearts'
        }
    ];

    for (var i = 0; i < games.length; i++)
        Games.insert({name: games[i].name, type: games[i].type});
});