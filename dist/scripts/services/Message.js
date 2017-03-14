(function(){
    function Message($cookies, $firebaseArray, $scope){
        
        var ref= firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId){
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
                },
            
            send: function(newMessage,roomObject){
                var roomId = roomObject.$id;
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: Date(),
                    roomId: roomId
                });
            },
            
        };
    }
        
    angular
        .module('blocChat')
        .factory('Message', ["$cookies", "$firebaseArray",Message]);
})();