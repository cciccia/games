Games = new Mongo.Collection("games");

Games.allow({
    insert: function(userId, game) {
        return false;
    },
    update: function(userId, game) {
        return false;
    },
    remove: function(userId, game) {
        return false;
    }
})