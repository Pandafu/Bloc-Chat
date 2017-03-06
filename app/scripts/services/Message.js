(function(){
    function Message($cookies, $firebaseArray){
        
        var ref= firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId){
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
                },
            
            send: function(newMessage,room){
                
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: Date(),
                    roomId: room
                });
                console.log(roomId);
                this.message = "";
            }
            };
        } 


    angular
        .module('blocChat')
        .factory('Message', ["$cookies", "$firebaseArray",Message]);
})();