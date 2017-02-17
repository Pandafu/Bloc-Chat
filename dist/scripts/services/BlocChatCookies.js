(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser ===''){
            $uibModal.open({ 
                //store entered username in CookieCtrl
                templateUrl: "/templates/cookies.html",
                controller: "UsernameModalInstanceCtrl",
                controllerAs: "usernamectrl"  
                });
            }
        }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();