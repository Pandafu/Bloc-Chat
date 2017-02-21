(function(){
    function Message($cookies, $firebaseArray){
        
        var ref= firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId){
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId)); 
            },
            /*
            send: function(newMessage, activeRoom) {
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: Date.now(),
                    roomId: activeRoom
                });
            } */
        }; 

    }

    angular
        .module('blocChat')
        .factory('Message', ["$cookies", "$firebaseArray", Message]);
})();