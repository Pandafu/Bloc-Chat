(function(){
    function MessageCtrl(){
        var channelsCtrl = this;
        channelsCtrl.channels = channels;
        
 
    };
    angular
        .module('blocChat')
        .controller('MessageCtrl',['Message', MessageCtrl])
})();