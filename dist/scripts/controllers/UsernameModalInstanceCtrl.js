(function() {
    function UsernameInstanceCtrl($uibModalInstance, $scope) {
        this.ok = function(){
            //this.UserName = { };
            $uibModalInstance.close($scope.username); 
            if('undefined'){
                alert ('Please create a username');
            }
        };
    }
    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl',[ "$uibModalInstance", "$scope", UsernameInstanceCtrl]);
})();