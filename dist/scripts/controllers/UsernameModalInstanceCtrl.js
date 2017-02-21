(function() {
    function UsernameModalInstanceCtrl($uibModalInstance, $scope) {
        this.ok = function(){
                        //this.UserName = { };
            $uibModalInstance.close($scope.username); 
        };

    }
    angular
        .module('blocChat')
        .controller("UsernameModalInstanceCtrl",[ "$uibModalInstance", "$scope", UsernameModalInstanceCtrl]);
})();