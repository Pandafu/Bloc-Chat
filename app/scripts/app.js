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
    
   angular
        .module('blocChat', ["ui.router", "firebase", "ui.bootstrap", 'ngCookies'])
        .config(config);
})(); 