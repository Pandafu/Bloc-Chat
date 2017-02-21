(function () {
    
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state("home", {
                url: "/",
                controller: "HomeCtrl as home",
                templateUrl: "/templates/home.html"
        })
            .state("story", {
                url: "/",
                controller: "StoryCtrl as story",
                templateUrl: "/templates/story.html"
        });    
  
    }
    
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser ===''){
            var modalInstance = $uibModal.open({ 
                //store entered username in CookieCtrl
                templateUrl: "/templates/cookies.html",
                controller: "UsernameModalInstanceCtrl",
                controllerAs: "usernamectrl"  
                });
    
            modalInstance.result.then(function(username) {
                this.username = username;
                $cookies.put('blocChatCurrentUser', this.username);
                var currentUser = $cookies.get('blocChatCurrentUser');
                console.log(currentUser);
                });
            }
        }    
    
   angular
        .module('blocChat', ["ui.router", "firebase", "ui.bootstrap", "ngCookies"])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})(); 