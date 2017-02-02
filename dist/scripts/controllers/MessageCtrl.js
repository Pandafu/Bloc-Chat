(function(){
    function MessageCtrl(){
        var channelsCtrl = this;
        channelsCtrl.channels = channels;
        
        /*
        $scope.activeRoom = {};
        $scope.selectRoom = [];
        
        $scope.selectRoom = function(Message){
            ref.
        };
        
        $scope.activeRoom = function(){
           ref.orderByChild("roomId").on("messages", function(snapshot){
               return snapshot;
           })
        };
        */ 
    };
    angular
        .module('blocChat')
        .controller('MessageCtrl',['Message', MessageCtrl])
})();