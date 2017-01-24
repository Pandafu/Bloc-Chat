(function(){
    function HomeCtrl(Room, $uibModal){
        //passsing Room to the HomeCtrl
        this.rooms = Room.all;

        var newModal = this;
        newModal.modal = function(){
        $uibModal.open({
            templateUrl: "/templates/addroom.html", 
            controller: function($scope, $uibModalInstance){
                 $scope.newRoom = "";
                 $scope.addRoom = function(name) {
                     newModal.rooms.$add(this.newRoom).then(function() {
                         this.newRoom = '';
                         $uibModalInstance.close();
                     });
                 };
            }, 
        })
        
        };
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", "$uibModal", HomeCtrl]);
})();