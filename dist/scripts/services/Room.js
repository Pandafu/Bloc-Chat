(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var makeNewRoom = function(newRoom){
            rooms.$add(newRoom)
        };
        
        return {
            all: rooms,
            create: makeNewRoom
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ["$firebaseArray", Room]);
})();