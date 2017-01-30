(function(){
    function HomeCtrl(Room){
        //passsing Room to the HomeCtrl
        this.rooms = Room.all;

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();