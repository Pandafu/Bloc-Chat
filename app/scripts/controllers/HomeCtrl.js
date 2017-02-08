(function(){
    function HomeCtrl($scope, Message, Room){
        //passsing Room to the HomeCtrl
        //this.rooms = Room.all; 
        var rooms = Room.all;
        rooms.$loaded().then(function(rooms){
            //declare a key variable, set it equal to the roomId
            var activeroomId = "-Kbmjwa5OAYl1j7eXFbF";
            //create a room by querying rooms with the roomId
            var room = rooms.$getRecord(activeroomId);
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId(activeroomId);
        });
        //makes it a property on HomeCtrl
        //also makes it accessible to instances of the controller
        this.rooms = rooms;
        
        //this method changes between chat rooms
        this.selectroom = function(room){
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId($scope.activeRoom.$id);
        }
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ["$scope", "Message", "Room", HomeCtrl]);
})();

