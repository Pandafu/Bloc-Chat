(function(){
    function Message($cookies, $firebaseArray){
        
        var ref= firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId){
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId)); 
            },
            send: function() {
                
            }
        }; 

    }

    angular
        .module('blocChat')
        .factory('Message', ["$cookies", "$firebaseArray", Message]);
})();