(function(){
    function ModalCtrl($uibModal, Room){
       this.open = function (){
         var modalinstance = $uibModal.open({
             animation: this.animationsEnabled,
             templateUrl: "templates/addroom.html",
             controller: "ModalInstanceCtrl",
             controllerAs: "modalinstance"
         });
        modalinstance.result.then(function(name) {
            this.room = name;
            Room.create(this.room);
        })
       };
    }
    
    angular
        .module('blocChat')
        .controller("ModalCtrl",["$uibModal", "Room", ModalCtrl])
})();