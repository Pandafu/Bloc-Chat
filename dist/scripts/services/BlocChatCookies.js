(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser ===''){
            $uibModal.open({ 
                //store entered username in CookieCtrl
                templateUrl: "/templates/cookies.html",
                controller: "CookieCtrl",
                controllerAs: "cookiectrl"  
                });
            }
        }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();