(function(){
    function HomeCtrl($scope, Message, Room){
        //passsing Room to the HomeCtrl
        $scope.rooms = Room.all; 
        $scope.activeRoom = {};
        $scope.activeRoomMessages= [];
        
        $scope.selectingRoom = function(room){
            $scope.activeRoom = room;
            $scope.activeRoomMessages = Message.getByRoomId(this.activeRoom.$id);
        };
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ["$scope", "Message", "Room", HomeCtrl]);
})();