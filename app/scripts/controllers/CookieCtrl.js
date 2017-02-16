(function(){
     function CookieCtrl($scope, $cookies, $uibModalInstance){
         $scope.UserName = '';
         $scope.setUserName = function(){
                      $cookies.put('blocChatCurrentUser', $scope.UserName);

            $uibModalInstance.close();
         };
         
         }
        
   angular
        .module('blocChat')
        .controller("CookieCtrl",["$scope", "$cookies", "$uibModalInstance", CookieCtrl]);
})();