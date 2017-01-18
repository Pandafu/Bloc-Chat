(function () {
    
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enable: true,
                requiredBase: false
        });
        $stateProvider
            .state('ChatCtrl', {
                url: '/',
                controller: 'chatCtrl as chat',
                templateUrl: '/templates/home.html'
        });
    }
    
   angular
        .module('blocFirebase', ['ui.router', 'firebase']);
        .config(config);
})(); 