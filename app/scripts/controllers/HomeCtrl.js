(function(){
    function HomeCtrl(Room){
        //passsing Room to the HomeCtrl
        var rooms = Room.all;
        
        this.rooms = rooms;
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", HomeCtrl]);
})();